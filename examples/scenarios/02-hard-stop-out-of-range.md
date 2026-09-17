# Scenario: Hard-stop when critical parameter out of range

**Ticket:** CC-1108 — Convert warning to hard-stop when therapy/process parameter exceeds limit.  
**Likely class:** `high_process_risk`.  
**ALCOA+:** Contemporaneous capture of failed attempt + attributable user.

**OQ idea:** Given value above limit, When user attempts continue, Then blocked + deviation/audit event created.
