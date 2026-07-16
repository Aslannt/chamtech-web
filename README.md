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
- Interactive Sync Playground using the real MuleSoft and Spring Boot contracts

## Routes

- `/`
- `/projects/cham-orders-api`
- `/projects/cham-orders-mule-integration`
- `/playground`
- `/robots.txt`
- `/sitemap.xml`
- `/es` and localized equivalents for the playground and both case studies

The site keeps English as the default language and exposes shareable Spanish URLs. The `EN / ES` control preserves the equivalent page while technical contracts, source identifiers and JSON payloads remain unchanged.

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
npm run test
npm run build
```

The project uses Server Components by default. Client Components are isolated to the responsive navigation and the interactive playground shell.

## Interactive Sync Playground

`/playground` is an educational browser simulation of the Cham Orders integration flow. It demonstrates:

- RAML request validation for `POST /api/v1/order-sync`.
- Correlation ID propagation or safe synthetic generation.
- Authentication and Bearer context without displaying credentials or tokens.
- Sequential confirmed-order pagination.
- Stable MuleSoft error contracts.
- TypeScript transformation into the real canonical JSON model.
- Browser-only JSON copying and download.

The playground uses synthetic data and simulated execution steps. It does not call Cham Orders API, run MuleSoft, connect to PostgreSQL, persist data, expose credentials or represent a production ERP integration.

Run it locally with `npm run dev`, open `http://localhost:3000/playground`, and validate changes with `npm run test`, `npm run lint` and `npm run build`.

## ChamTech Lab easter egg

The discreet egg in the footer opens a lazy-loaded terminal mini-game. Data Snake supports Arrow keys, WASD, touch controls, pause/resume, Escape to close and a browser-local high score. Its movement and collision engine is covered by Vitest.

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
