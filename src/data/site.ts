export const site = {
  name: "Janith Samarasinghe",
  role: "Full Stack Software Engineer & Systems Builder",
  title: "Janith Samarasinghe — Full Stack Software Engineer & Systems Builder",
  email: "janithsamarasinghe1999@gmail.com",
  phone: "+94 70 126 7400",
  location: "Kandy, Sri Lanka",
  linkedin: "https://www.linkedin.com/in/janith-samarasinghe",
  github: "https://github.com/Janiya-99",
  cvUrl: "/Janith_CV.pdf",
  bio: "Full-stack software engineer and systems builder with 3+ years of experience crafting scalable web applications, robust Go & Laravel APIs, and containerized cloud setups. Passionate about bridging clean, intuitive user interfaces with high-performance backends and stress-free deployment workflows.",
  metrics: [
    { value: "3+", label: "Years Experience" },
    { value: "35%", label: "Query Speedup" },
    { value: "10K+", label: "SKUs Managed" },
    { value: "5K+", label: "Daily Transactions" },
    { value: "99.9%", label: "System Uptime" },
  ],
  // Only set this to the verified public deployment URL (including any base path).
  url: import.meta.env.VITE_SITE_URL?.replace(/\/$/, "") as string | undefined,
};
