import { ButtonLink } from "@/components/ui";

export function NotFoundPage() {
  return (
    <section className="not-found container">
      <p className="eyebrow">404 / A SMALL DETOUR</p>
      <span className="not-found-number" aria-hidden="true">
        404<span>.</span>
      </span>
      <h1 tabIndex={-1}>This route ends here.</h1>
      <p>
        The page you’re looking for may have moved.
        <br />
        There’s still plenty to explore.
      </p>
      <ButtonLink href="/">Back to home</ButtonLink>
    </section>
  );
}
