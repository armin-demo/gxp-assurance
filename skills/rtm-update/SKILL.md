---
name: rtm-update
description: use this when updating a Requirements Traceability Matrix from URS markdown and tests annotated with @urs URS-###
---

# RTM update

Keep **URS ↔ design/code ↔ test** alive while engineers ship.

## Inputs
- URS list (markdown or table)
- Tests / OQ scripts with `@urs URS-###` (or equivalent tags)
- Optional `gxp.yml` path → URS map

## Output table
| URS ID | Requirement (short) | Risk | Code / path | Test / OQ | Status |
|---|---|---|---|---|---|
| URS-012 | Dual e-sig on release | high | `src/...` | OQ-017 / `@urs URS-012` | Draft |

## Rules
- Flag URS with **no test** as open gaps before Qual.
- Flag tests with **no URS** as orphan (fix or mark not-GxP).
- Do not invent URS text for a customer system — ask or mark `TBD`.
