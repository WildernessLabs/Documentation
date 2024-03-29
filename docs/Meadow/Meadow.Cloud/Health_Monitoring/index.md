---
layout: Meadow
title: Health Monitoring
subtitle:
---

## Overview

The ability to monitor the health of a device in the field is critical. With Meadow, this is a first class feature and simple to set up. Once enabled, you can see the status of your device at a glance. Additionally, you can drill down to see raw data as well as basic charts to view the data over time.

Setting up health monitoring requires the following update in `app.config.yaml`:

```yaml
MeadowCloud:
    Enabled: true
    EnableHealthMetrics: true
    HealthMetricsIntervalMinutes: 15
```

`MeadowCloud.HealthMetricsIntervalMinutes` is in minutes and optional. The default interval is 60 minutes.

Here are the metrics gathered per device:

* `processor_used`
* `processor_temp_celsius`
* `memory_used`
* `disk_space_used`
* `battery_percentage`

Check out our [Integrations](../Integrations/) to ingest this data into your own infrastructure via webhooks, Azure Event Hubs, Azure Event Grid, Datacake and more.

With your Meadow application logging health metrics to Meadow.Cloud, check out the other Meadow.Cloud features.

* [Provision more Devices](../Device_Provisioning/)
* [Over-the-Air (OtA) Updates](../OtA_Updates/)
* [Logs + Events](../Logs_Events/)
* [Command + Control](../Command_Control/)
* [Integrations](../Integrations/)
