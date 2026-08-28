# Fortinet GTM leave-behind

Passworded Next.js site for Fortinet x SpaceXAI.

## Run locally

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The local password is
`land2expand`. Set `SITE_PASSWORD` to override it.

## Verify

```bash
npm run lint
npm run build
```

The site is not indexed and all page content sits behind the server-side
password gate.
