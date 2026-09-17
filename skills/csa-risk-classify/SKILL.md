---
name: csa-risk-classify
description: use this when classifying a life-science software change under FDA Computer Software Assurance (CSA) as high process risk vs not-high, and choosing test rigor
---

# CSA risk classify

Walk a proposed software change through **FDA Computer Software Assurance** thinking. Output a classification the engineer and CSV can put on a change ticket.

## Official anchors
- FDA CSA guidance: https://www.fda.gov/regulatory-information/search-fda-guidance-documents/computer-software-assurance-production-and-quality-management-system-software
- Does **not** erase 21 CFR Part 11 when predicate-rule e-records/e-signatures apply: https://www.fda.gov/regulatory-information/search-fda-guidance-documents/part-11-electronic-records-electronic-signatures-scope-and-application

## Ask (or infer from the PR / `gxp.yml`)
1. **Intended use** of the software feature (what decision or process it supports).
2. **Predicate records?** Does it create/maintain CGMP / device QMS / clinical records required by FDA predicate rules?
3. **Process impact:** Could a failure lead to wrong release, wrong therapy setting, missed hard-stop, wrong e-sig authority, or obscured audit trail?
4. Paths touched vs `examples/gxp.yml` (or repo `gxp.yml`).

## Classify
| Class | Meaning | Evidence rigor |
|---|---|---|
| **high_process_risk** | Maintains essential process/safety/release parameters; little human review before product/patient impact | Scripted OQ with expected results; RTM row; change control |
| **not_high** | Supporting / admin / non-decision UI (routing, logging, procedure text) | Lighter / exploratory testing OK; still document intended use |

## Output template
```
### CSA classification
- Change: …
- Intended use: …
- Predicate records touched: yes/no — which
- Class: high_process_risk | not_high
- Rationale: …
- Part 11 implicated: yes/no — which controls (see part11-checklist)
- Required artifacts: [change ticket] [OQ ids] [RTM rows] [agent audit note]
- Do NOT: silent hotfix to validated Prod
```

Banner if demo/synthetic: `Synthetic GxP coaching — not a validated CSV deliverable for a named customer.`
