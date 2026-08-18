# ResourceHive Marketing

The public marketing website for ResourceHive, built with Next.js, React, Tailwind CSS, and TypeScript. This repository is independent from the ResourceHive SaaS application. Account creation and login happen in the separate application at [app.resourcehive.thisismalindu.com](https://app.resourcehive.thisismalindu.com).

## Requirements

- Node.js 20.9 or later
- pnpm

## Local development

Install the dependencies:

```bash
pnpm install
```

Copy the example environment file if `.env` is not already present:

```bash
Copy-Item .env.example .env
```

On macOS or Linux, use `cp .env.example .env` instead.

Start the development server:

```bash
pnpm dev
```

The marketing website is available at <http://localhost:5173>. Login and sign-up links use `NEXT_PUBLIC_APP_URL`, which points to the separately deployed ResourceHive application by default.

## Environment variables

| Variable | Purpose | Local default |
| --- | --- | --- |
| `NEXT_PUBLIC_APP_URL` | Base URL of the separate ResourceHive SaaS application. Login and sign-up links are built from this URL. | `https://app.resourcehive.thisismalindu.com` |
| `NEXT_PUBLIC_MARKETING_URL` | Canonical URL used for marketing-site metadata and social previews. | `http://localhost:5173` |
| `CONTACT_EMAIL` | Email address used by the contact-page enquiry link. | `team@example.com` |

URL values should not include a trailing slash. Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser and must not contain secrets. The contact email is also visible to visitors through the rendered `mailto:` link.

To connect the marketing site to a locally running copy of the SaaS application, override `NEXT_PUBLIC_APP_URL` in `.env` with that application's local origin.

## Validation and local production build

```bash
pnpm lint
pnpm build
pnpm start
```

`pnpm start` serves the production build at <http://localhost:5173>.

## Deploying to Vercel

Import this repository into Vercel. Vercel detects the Next.js project and uses the existing `pnpm-lock.yaml`; no custom build or output directory is required.

Configure these environment variables for Production and any Preview environments that need canonical metadata:

```dotenv
NEXT_PUBLIC_APP_URL=https://app.resourcehive.thisismalindu.com
NEXT_PUBLIC_MARKETING_URL=https://your-marketing-domain.example
CONTACT_EMAIL=team@your-domain.example
```

Set `NEXT_PUBLIC_MARKETING_URL` to the final public URL of this marketing website. Set `CONTACT_EMAIL` to the address that should receive contact-page enquiries. Update all three variables in each deployment environment, then redeploy for the changes to take effect.

The custom domain for the authenticated SaaS application is not assigned to this Vercel project; this website only sends login and sign-up traffic there.
