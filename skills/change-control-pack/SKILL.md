---
name: change-control-pack
description: use this when producing a GxP change-control pack for a software PR — impact, CSA risk, Part 11, OQ outline, RTM deltas
---

# Change-control pack

One pack per PR that touches GxP-critical paths.

## Steps
1. Run mental/`csa-risk-classify` on the diff.
2. If e-records/e-sig → `part11-checklist`.
3. Draft OQ outline via `oq-scaffold` (full scripts if high).
4. Draft RTM deltas via `rtm-update`.
5. Assemble pack below.

## Pack template
```
# Change control — CC-####
Title:
System / component:
Requester / developer:
Date:

## 1. Description of change
## 2. Intended use impact
## 3. CSA classification
- high_process_risk | not_high — rationale
## 4. Part 11 controls touched
## 5. Risk / blast radius
- Patient / product / data integrity
## 6. Test / OQ plan
## 7. RTM updates
## 8. Environments
- Dev → Qual → Prod (no silent Prod hotfix)
## 9. Approvals needed
- Eng peer · CSV/CSA · QA (as required by local SOP)
## 10. Rollback
```

## Hard rule
Never recommend merging straight to validated **Prod** without Qual evidence and required approvals.
