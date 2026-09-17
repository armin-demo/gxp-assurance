---
name: part11-checklist
description: use this when a software change touches electronic records or electronic signatures and you need a 21 CFR Part 11 control checklist
---

# Part 11 checklist

For UI/API changes that create, modify, or sign **predicate-rule electronic records**.

## Official anchors
- Part 11 Scope & Application: https://www.fda.gov/regulatory-information/search-fda-guidance-documents/part-11-electronic-records-electronic-signatures-scope-and-application
- eCFR Part 11: https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-11

## When it applies
Part 11 is in scope when records required by predicate rules (e.g. 21 CFR 210/211, 820/QMSR) are maintained or submitted **electronically**, or e-signatures are used as equivalents of handwritten signatures.

## Checklist (map each to the change)
| Control | Cite (concept) | Present in this change? | Evidence / test idea |
|---|---|---|---|
| Validate for intended performance; discern invalid/altered records | §11.10(a) | | |
| Accurate & complete copies | §11.10(b) | | |
| Protect/retrieve for retention | §11.10(c) | | |
| Limit access to authorized individuals | §11.10(d) | | |
| Secure, computer-generated, time-stamped audit trails; changes must not obscure prior data | §11.10(e) | | |
| Operational checks (step sequencing) | §11.10(f) | | |
| Authority checks | §11.10(g) | | |
| Training of developers/users | §11.10(i) | | |
| E-sig shows printed name, date/time, **meaning** | §11.50 | | |
| Signatures linked to records | §11.70 | | |
| Non-biometric e-sig: ≥2 identification components | §11.200 | | |

## Meaning values to support when adding e-sig
`Performed` · `Reviewed` · `Approved` (extend only with QA agreement)

## Output
Fill the table for the PR; list gaps as blockers for Qual/Prod promotion.
