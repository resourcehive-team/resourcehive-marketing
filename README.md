# ResourceHive marketing website

Public marketing website for ResourceHive. This Next.js application is deployed separately from the authenticated app in `apps/web`.

## Local development

From the repository root:

```bash
pnpm dev:marketing
```

The website runs at <http://localhost:3002>.

Copy `.env.example` to `.env.local` when the authenticated application uses a different URL. The default local application URL is <http://localhost:3000>.

## Validation

```bash
pnpm --filter marketing lint
pnpm --filter marketing build
```

The site uses Next.js, Tailwind CSS, shadcn/ui components already used by the main application, and selected Magic UI components installed through the shadcn registry.
