---
layout: Meadow
title: Logs and Events
subtitle: Getting started with logs and events
---
[< Meadow.Cloud](../)  
## Enabling CloudLogger
Today, logging output through `Resolver.Log.Info("foo bar");` writes to the console. This is great if you are working locally, connected to the device, but not so much when the device is deployed out in the field. Fortunately, getting the same logs in Meadow.Cloud is really simple, all you need do is register a new `CloudLogger`:

```c#
 public override async Task Initialize()
{
    Resolver.Log.AddProvider(new CloudLogger());
    ...
}
```

Once `CloudLogger` is registered, any logging done through `Resolver.Log` automatically gets recorded in Meadow.Cloud. Any logging done while the device is disconnected get stored locally and sent to Meadow.Cloud once a network connected is established.

## Capturing Custom Events and Metrics

Measuring and capturing sensor data is a very common application for embedded devices. Meadow makes this a trivial operation for any number of measurements with `CloudLogger`. First, we need to create and register a `CloudLogger` instance:

```c#
public override async Task Initialize()
{
    var cloudLogger = new CloudLogger();
    Resolver.Log.AddProvider(cloudLogger);
    Resolver.Services.Add(cloudLogger);
}
```
Then, call `LogEvent(int eventId, string description, Dictionary<string, object> measurements)` when a measurement needs to be made.
```c#
var cloudLogger = Resolver.Services.Get<CloudLogger>();
cloudLogger.LogEvent(1000, "enviroment reading", new Dictionary<string, object>()
{
    { "temperature", temperatureValue },
    { "humidity", humidityValue },
    { "pressure", pressureValue }
});
```
`eventId` is a code used to distinguish events. Values under 100 are reserved for Meadow system events.

## Viewing Logs and Events

Log and event data is transmitted to Meadow.Cloud and indexed. To view and search data, visit [https://www.meadowcloud.co/[orgName]/search](https://www.meadowcloud.co/[orgName]/search). Freeform text entered in the search box will be used to filter the results. Additionally, the following filters can be applied:

* Severity: `severity:information`, `severity:warn`, `severity:error`  
* Source: `source:log` or `source:event`  
* Device: `device:[deviceId]`  
 
## Sample Application

For a reference on Logs and Events, view the [Sample Application](https://github.com/WildernessLabs/Meadow.Logging/blob/main/Source/Meadow.Logging.LogProviders/Samples/CloudLogger_Sample/MeadowApp.cs).

Recommendations
* Enable automatic wifi connect and clock setting
  * Add `meadow.config.yaml` and [configure](https://github.com/WildernessLabs/Meadow.Logging/blob/main/Source/Meadow.Logging.LogProviders/Samples/CloudLogger_Sample/meadow.config.yaml).
  * Add `wifi.config.yaml` and [configure](https://github.com/WildernessLabs/Meadow.Logging/blob/main/Source/Meadow.Logging.LogProviders/Samples/CloudLogger_Sample/wifi.config.yaml).

## Integrations

Check out our [Integrations](../Integrations/) to ingest log and event data into your own infrastructure via Wehbooks, Azure Event Hubs, and more.