# Mahmoud Elhadry — Portfolio

Personal portfolio site for **Mahmoud Elhadry**, Software Engineer.

**Live site:** [https://mahmoud-hadry.github.io/](https://mahmoud-hadry.github.io/)

## Stack

- React 18
- Vite
- Sass
- GitHub Pages (GitHub Actions)

## Local development

```bash
npm ci
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm start` / `npm run dev` | Start Vite dev server |
| `npm run build` | Production build to `build/` |
| `npm run preview` | Preview production build |
| `npm run test:ci` | Run Vitest once |
| `npm run audit:ci` | Fail on high+ production advisories |
| `npm run format` | Format with Prettier |

## Content updates

Most portfolio content lives in [`src/portfolio.js`](src/portfolio.js):

- Greeting / résumé PDF link
- Skills and experience
- Selected projects
- Contact details

The CV PDF is stored at [`public/Mahmoud_Elhadry_Software_Engineer_CV.pdf`](public/Mahmoud_Elhadry_Software_Engineer_CV.pdf).

## Deploy

Pushes to `gh-pages` (or `master`) run [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):

1. `npm ci`
2. `npm run audit:ci`
3. `npm run test:ci`
4. `npm run build`
5. Publish `build/` to GitHub Pages

## Security

See [SECURITY.md](SECURITY.md). Report vulnerabilities privately when possible.
