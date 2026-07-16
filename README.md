# ChamTech Portfolio

Public portfolio of **Deivid Vanegas**, Backend and Integration Developer focused on Java, Spring Boot, MuleSoft, DataWeave, REST APIs and enterprise system integration.

ChamTech is a personal software laboratory and project ecosystem. It is not a company or commercial organization.

## Stack

- Next.js 16 with App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Vercel-ready metadata and routes

## Main content

- Professional profile, skills and experience
- ChamTech architecture flow
- Cham Orders API case study
- Cham Orders Mule Integration case study
- Verified testing and local execution metrics
- Direct email, GitHub, LinkedIn and Spanish CV links

## Routes

- `/`
- `/projects/cham-orders-api`
- `/projects/cham-orders-mule-integration`
- `/robots.txt`
- `/sitemap.xml`

## Local development

Requirements:

- Node.js 24 LTS
- npm 11 or compatible

Install and run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run build
```

The project uses Server Components by default. The responsive mobile navigation is the only client component currently required.

## CV

The downloadable Spanish CV must exist at:

```text
public/cv/deivid-vanegas-cv-es.pdf
```

## Site URL

The application derives its production metadata URL from `VERCEL_PROJECT_PRODUCTION_URL`. `NEXT_PUBLIC_SITE_URL` may be used to override it for a custom domain.

## Verified project scope

The portfolio reports 38 Java tests, 12 MUnit tests and two locally verified Release Candidates. It does not claim production deployment, CloudHub deployment, CI/CD execution, high availability or a real ERP integration.

## Author

**Deivid Vanegas**

- GitHub: https://github.com/Aslannt
- LinkedIn: https://www.linkedin.com/in/deivid-vanegas-7b2ab1283/
