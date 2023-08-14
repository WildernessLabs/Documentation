---
layout: Meadow
title: Logs and Events
subtitle: 
---

Sample App: https://github.com/WildernessLabs/Meadow.Logging/blob/main/Source/Meadow.Logging.LogProviders/Samples/CloudLogger_Sample/MeadowApp.cs

Recommendations:
* enable auto wifi connect and ntp clock setting
  * set in `meadow.config.yaml` https://github.com/WildernessLabs/Meadow.Logging/blob/main/Source/Meadow.Logging.LogProviders/Samples/CloudLogger_Sample/meadow.config.yaml
  * set wifi creds https://github.com/WildernessLabs/Meadow.Logging/blob/main/Source/Meadow.Logging.LogProviders/Samples/CloudLogger_Sample/wifi.config.yaml


View device logs in cloud:
https://staging.meadowcloud.dev/my/search

search filters:
* filter on log: `source:log`
* filter on events: `source:event`
* filter on device: `deviceId:32-00-46-00-11-51-36-30-33-33-37-33`
* filter on severity: `severity:Information`, `severity:Error`
* text will search device message