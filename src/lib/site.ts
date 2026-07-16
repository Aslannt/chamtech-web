const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const fallbackUrl = vercelProductionUrl
  ? `https://${vercelProductionUrl}`
  : "http://localhost:3000";

export const siteConfig = {
  name: "ChamTech",
  title: "Deivid Vanegas | Backend & Integration Developer",
  description:
    "Portfolio of Deivid Vanegas, Backend and Integration Developer focused on Java, Spring Boot, MuleSoft, DataWeave, REST APIs and enterprise system integration.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? fallbackUrl).replace(/\/$/, ""),
  author: "Deivid Vanegas",
  email: "deivid.vengas@gmail.com",
  github: "https://github.com/Aslannt",
  linkedin: "https://www.linkedin.com/in/deivid-vanegas/",
};
