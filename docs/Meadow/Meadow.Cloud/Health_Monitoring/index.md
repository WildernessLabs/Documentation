---
layout: Meadow
title: Health Monitoring
subtitle: 
---
[< Meadow.Cloud](../)  

Monitoring the health of a device in the field is mission critical. With Meadow, this is a first class feature and simple to setup. Once enabled, you can see the status of your device at a glance. Additionally, you can drill down to see raw data as well as basic charts to view the data over time.

Setting this up requires the following update in `app.config.yaml`:  

```yaml
HealthMetrics:
  Enabled: true
  Interval: 15
```

`HealthMetrics.Interval` is in minutes and optional. Default is 60.

Here are the metrics gathered per device:

* processor_used
* processor_temp_celsius
* memory_used
* disk_space_used
* battery_percentage

Lastly, check out our [Integrations](../Integrations/) to ingest this data into your own infrastructure via Wehbooks, Azure Event Hubs, and more.