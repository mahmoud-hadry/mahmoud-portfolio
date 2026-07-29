# Security Policy

## Supported versions

Only the latest deployment of this portfolio site is supported:

- Live site: https://mahmoud-hadry.github.io/
- Source: https://github.com/mahmoud-hadry/mahmoud-hadry.github.io

## Reporting a vulnerability

If you discover a security issue in this repository or the deployed site:

1. Do **not** open a public issue with exploit details.
2. Email **mahmoudhadry@outlook.com** with a short description, impact, and steps to reproduce.
3. Allow reasonable time for investigation and remediation before public disclosure.

Please include whether the issue affects dependencies, the build/deploy pipeline, or site content.

## Dependency hygiene

- Production dependencies are audited in CI with `npm run audit:ci`.
- Dependabot config lives in `.github/dependabot.yml` (npm + GitHub Actions).
- Prefer `npm ci` for reproducible installs.
- Never commit secrets, tokens, or `.env` files with credentials.

## Recommended GitHub repository settings

Enable these under **Settings → Code security and analysis** (or Security):

1. Dependabot alerts
2. Dependabot security updates
3. Secret scanning
4. Push protection for secrets

This is a static public site with no backend; keep third-party scripts minimal and review Dependabot PRs before merging.
