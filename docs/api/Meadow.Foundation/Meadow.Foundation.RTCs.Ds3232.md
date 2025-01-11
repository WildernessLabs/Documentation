---
uid: Meadow.Foundation.RTCs.Ds3232
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.RTCs.Ds3232
---

| Ds3232 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/RTCs.Ds323x) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/RTCs.Ds323x/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.RTCs.Ds323x/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.RTCs.Ds323x.svg?label=Meadow.Foundation.RTCs.Ds323x" alt="NuGet Gallery for Meadow.Foundation.RTCs.Ds323x" /></a> |
### Code Example

```csharp
Ds3232 sensor;

readonly TimeSpan timezoneOffset = new TimeSpan(-7, 0, 0);

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    sensor = new Ds3232(Device.CreateI2cBus(), Device.Pins.D06);
    sensor.OnAlarm1Raised += Sensor_OnAlarm1Raised;

    return base.Initialize();
}

public override Task Run()
{
    sensor.CurrentDateTime = new DateTimeOffset(new DateTime(2024, 1, 1), timezoneOffset);

    Resolver.Log.Info($"Current time: {sensor.CurrentDateTime}");
    Resolver.Log.Info($"Temperature: {sensor.Temperature}");

    sensor.ClearInterrupt(Ds3232.Alarm.BothAlarmsRaised);

    sensor.SetAlarm(Ds3232.Alarm.Alarm1Raised,
        new DateTimeOffset(new DateTime(2024, 1, 1, 1, 0, 0), timezoneOffset),
        Ds3232.AlarmType.WhenSecondsMatch);

    sensor.DisplayRegisters();

    return base.Run();
}

private void Sensor_OnAlarm1Raised(object sender)
{
    var rtc = (Ds3232)sender;
    Resolver.Log.Info("Alarm 1 has been activated: " + rtc.CurrentDateTime.ToString("dd MMM yyyy HH:mm:ss"));
    rtc.ClearInterrupt(Ds323x.Alarm.Alarm1Raised);
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/RTCs.Ds323x/Samples/Ds3232_Sample)

