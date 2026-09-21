import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const routes = [
  "/",
  "/work/",
  "/about/",
  "/contact/",
  "/work/pharmaceutical-distribution-erp/",
  "/work/saas-microfinance-platform/",
  "/work/bicycle-rental-backend/",
  "/work/restaurant-ticketing-platform/",
];

test("all routes are pre-rendered, hydrate cleanly, and have unique metadata", async ({
  page,
  request,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  const titles = new Set<string>();
  for (const route of routes) {
    const response = await request.get(route);
    expect(response.status()).toBe(200);
    expect(await response.text()).toContain("<h1");
    await page.goto(route);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("h1")).toBeVisible();
    titles.add(await page.title());
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      "content",
      /.+/,
    );
  }
  expect(titles.size).toBe(routes.length);
  expect(errors).toEqual([]);
});

test("filters change results, reset, and persist across browser history", async ({
  page,
}) => {
  await page.goto("/work/");
  await expect(page.locator(".project-card")).toHaveCount(4);
  for (const category of [
    "ERP & Enterprise",
    "SaaS & Finance",
    "APIs & Platforms",
    "Web Applications",
  ]) {
    await page.getByRole("button", { name: category, exact: true }).click();
    await expect(page.locator(".project-card")).toHaveCount(1);
    await expect(page.getByRole("status")).toContainText("1 PROJECT");
  }
  await page.getByRole("button", { name: "All" }).click();
  await expect(page.locator(".project-card")).toHaveCount(4);
  await page.goBack();
  await expect(page.locator(".project-card")).toHaveCount(1);
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.reload();
  await expect(page.locator(".project-card")).toHaveCount(1);
  expect(errors).toEqual([]);
  await page.locator(".project-card-link").click();
  await expect(page.locator("h1")).toContainText("Good experiences");
  await expect(page.locator("h1")).toBeFocused();
  await page.goBack();
  await expect(page.locator(".project-card")).toHaveCount(1);
});

for (const width of [320, 390, 768, 1024, 1440]) {
  test(`no horizontal overflow at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    for (const route of routes) {
      await page.goto(route);
      await page.evaluate(() => document.fonts.ready);
      const dimensions = await page.evaluate(() => ({
        content: document.documentElement.scrollWidth,
        viewport: innerWidth,
      }));
      expect(dimensions.content, route).toBeLessThanOrEqual(
        dimensions.viewport + 1,
      );
    }
  });
}

test("mobile menu traps focus, closes on Escape and navigation, and restores scrolling", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "Open navigation" });
  await trigger.click();
  await expect(trigger).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(trigger).toBeFocused();
  await expect(trigger).toHaveAttribute("aria-expanded", "false");
  await trigger.click();
  await page.getByRole("dialog").getByRole("link", { name: /About/ }).click();
  await expect(page).toHaveURL(/\/about/);
  await expect(page.getByRole("dialog")).not.toBeVisible();
  expect(await page.evaluate(() => document.body.style.overflow)).toBe("");
});

test("smooth scrolling, anchors, keyboard scrolling, and reduced motion", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator("html")).toHaveClass(/lenis/);
  await page.locator(".scroll-cue").click();
  await expect
    .poll(() => page.evaluate(() => window.scrollY))
    .toBeGreaterThan(400);
  await page.getByRole("link", { name: "Back to top" }).click();
  await expect
    .poll(() => page.evaluate(() => window.scrollY))
    .toBeLessThan(100);
  await page.keyboard.press("PageDown");
  await expect
    .poll(() => page.evaluate(() => window.scrollY))
    .toBeGreaterThan(100);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(page.locator("html")).not.toHaveClass(/lenis/);
  await expect(page.locator(".sculpture-canvas")).toHaveCount(0);
});

test("contact copy and mailto work, résumé stays hidden, unknown routes return 404", async ({
  page,
  context,
}) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/contact/");
  await expect(page.locator(".contact-email")).toHaveAttribute(
    "href",
    "mailto:janithsamarasinghe1999@gmail.com",
  );
  await page.getByRole("button", { name: "Copy address" }).click();
  await expect(page.getByRole("status")).toHaveText(
    "Email copied to clipboard.",
  );
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(
    "janithsamarasinghe1999@gmail.com",
  );
  await expect(page.locator('a[href$=".pdf"]')).toHaveCount(0);
  const response = await page.goto("/work/not-a-project/");
  expect(response?.status()).toBe(404);
  await expect(page.locator("h1")).toHaveText("This route ends here.");
});

test("core pages pass automated WCAG accessibility checks", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const route of [
    "/",
    "/work/",
    "/about/",
    "/contact/",
    "/work/pharmaceutical-distribution-erp/",
  ]) {
    await page.goto(route);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(
      results.violations.map((v) => ({
        id: v.id,
        nodes: v.nodes.map((n) => n.target),
      })),
      route,
    ).toEqual([]);
  }
});

test("photo parallax follows scroll and is removed for reduced motion", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  const photo = page.locator(".hero-backdrop");
  await expect(photo).toHaveCSS("transform", /matrix/);
  const before = await photo.evaluate(
    (element) => getComputedStyle(element).transform,
  );
  await page.evaluate(() => window.scrollTo(0, 450));
  await expect
    .poll(() =>
      photo.evaluate((element) => getComputedStyle(element).transform),
    )
    .not.toBe(before);
  await expect(page.locator("[data-scroll-progress]")).toHaveCSS(
    "transform",
    /matrix/,
  );
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(photo).toHaveCSS("transform", "none");
  await expect(page.locator("[data-scroll-progress]")).not.toBeVisible();
});

test("cross-page anchors retain destination, active navigation, and hydration", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/work/");
  await page
    .getByRole("navigation", { name: "Main navigation" })
    .getByRole("link", { name: "Experience" })
    .click();
  await expect(page).toHaveURL(/#experience$/);
  await expect
    .poll(() =>
      page.evaluate(
        () =>
          document.querySelector("#experience")!.getBoundingClientRect().top,
      ),
    )
    .toBeLessThan(200);
  await expect(
    page.getByRole("link", { name: "Experience", exact: true }).first(),
  ).toHaveAttribute("aria-current", "page");
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.reload();
  await expect(page.locator("#experience")).toBeFocused();
  expect(errors).toEqual([]);
});
