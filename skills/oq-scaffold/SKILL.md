---
name: oq-scaffold
description: use this when you need Operational Qualification (OQ) scripts with Given/When/Then and expected results tied to URS IDs for a GxP software change
---

# OQ scaffold

Generate **lean** OQ scripts proportionate to CSA risk (scripted for `high_process_risk`).

## Rules
- Every scripted step cites `URS-###` (and optionally `CC-####` change ticket).
- Expected results are observable (UI state, API response, audit-trail row, signature meaning).
- Prefer few high-value scripts over binder theater.

## Template
```
# OQ-### — <short title>
Change ticket: CC-####
URS: URS-###
Risk: high_process_risk | not_high
Environment: Qual (not Prod)

## Preconditions
- …

## Script
| Step | Given | When | Then (expected result) | URS |
|---|---|---|---|---|
| 1 | … | … | … | URS-### |

## Data / roles
- Operator user, QA approver, …

## Attachments
- Screenshots / export of audit trail as needed
```

## Example seeds (connected-care / manufacturing style)
- Dual e-sig on release: missing QA signature → release blocked
- Out-of-range critical parameter → hard stop, deviation path
- Audit trail shows old and new value; prior not obscured
- Unauthorized role cannot approve

After drafting, offer to run `rtm-update` and `change-control-pack`.
