---
layout: Meadow
title: Meadow.Cloud Integration
subtitle: Meadow.Cloud Integration
---

As you start building Meadow applications on your development machine with Meadow.Desktop, you can use Meadow.Cloud's Logging to send telemetry data using actual or simulated sensors. There's only a couple things you need to do:

### Step 1: Provision your development machine

Make sure to <a href="../../Meadow.Cloud/Device_Provisioning/" target="_blank">provision your development  machine</a> to Meadow.Cloud with your Wilderness Labs Account.

### Step 2: Enable Meadow.Cloud on your app

In the `app.config.yaml` file, you need to enable Meadow.Cloud features:

```yaml
# Logging configuration.
Logging:

    # Adjust the level of logging detail.
    LogLevel:
    
        # Trace, Debug, Information, Warning, or Error
        Default: Trace

# Meadow.Cloud configuration.
MeadowCloud:
    
    # Enable Logging, Events, Command + Control
    Enabled: true
```

:::caution
Command + Control, Health Metrics and OTA Updates are currently not supported on Meadow.Desktop.
:::

Once enabled, you can now use Meadow.Cloud's <a href="../../Meadow.Cloud/Logs_Events/" target="_blank">Logs and Events</a> as you would on a Meadow F7 device.