# gxp-assurance

**Pure Cursor plugin** that encodes real GxP practices into skills, rules, and commands — not a demo web app.

It helps life-science engineers and CSV/CSA partners classify changes under **FDA Computer Software Assurance (CSA)**, run a **21 CFR Part 11** checklist, scaffold **OQ**, keep an **RTM** alive, and assemble a **change-control pack**.

> Synthetic coaching unless you point it at your validated SOPs / URS. Not legal advice.

## What GxP it encodes

| Topic | How it shows up |
|---|---|
| FDA CSA (2026) | `csa-risk-classify` skill · `/gxp-risk` |
| 21 CFR Part 11 | `part11-checklist` skill |
| OQ / expected results | `oq-scaffold` · `/gxp-oq` |
| Traceability | `rtm-update` · `/gxp-rtm` · `examples/gxp.yml` |
| Change control | `change-control-pack` · `/gxp-change` |
| ALCOA+ / no silent Prod | always-on rule `gxp-change-hygiene` |

Official anchors (also linked inside skills):
- [FDA CSA guidance](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/computer-software-assurance-production-and-quality-management-system-software)
- [Part 11 Scope & Application](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/part-11-electronic-records-electronic-signatures-scope-and-application)
- [eCFR Part 11](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-11)

## Install — Team Marketplace

1. Cursor Dashboard → **Plugins** → **Team Marketplaces** → **Add Marketplace**
2. **Import from Repo** → `https://github.com/armin-demo/gxp-assurance`
3. Add the plugin to the marketplace and install for your team

## Install — local development

```sh
git clone https://github.com/armin-demo/gxp-assurance.git
cd gxp-assurance
npm run validate
mkdir -p ~/.cursor/plugins/local
ln -s "$(pwd)" ~/.cursor/plugins/local/gxp-assurance
```

Reload Cursor → confirm skills/commands appear.

## Usage (engineer)

1. Copy `examples/gxp.yml` → repo-root `gxp.yml` and map your critical paths.
2. On a ticket/PR: `/gxp-risk` → implement → `/gxp-oq` → `/gxp-rtm` → `/gxp-change`.
3. Promote **Dev → Qual → Prod** only with the pack + approvals.

See `examples/scenarios/` for dual e-sig, hard-stop, and audit-trail patterns typical of manufacturing / connected-care style systems.

## Optional companion demo app

UI playground (not this plugin): https://github.com/armin-demo/gxp-ebmr-demo

## Validate

```sh
npm run validate
```
