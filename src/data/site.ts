export const site = {
  name: "Janith Samarasinghe",
  email: "janithsamarasinghe1999@gmail.com",
  location: "Kandy, Sri Lanka",
  // Only set this to the verified public deployment URL (including any base path).
  url: import.meta.env.VITE_SITE_URL?.replace(/\/$/, "") as string | undefined,
};
