---
layout: Meadow
title: Health Monitoring
subtitle: 
---

only need to make a change in `app.config.yaml`:  

```yaml
HealthMetrics:
  Enabled: true
  Interval: 15
```

Interval in minutes and optional. Default is 60.

values recorded

* cpu_temp_celsius
* memory_used
* disk_space_used
* battery_percentage