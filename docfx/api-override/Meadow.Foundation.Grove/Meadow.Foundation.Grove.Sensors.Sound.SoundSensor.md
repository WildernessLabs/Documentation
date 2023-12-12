---
uid: Meadow.Foundation.Grove.Sensors.Sound.LoudnessSensor
remarks: *content
---

| SoundSensor | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/SoundSensor) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Grove.Sensors.Sound.SoundSensor/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Grove.Sensors.Sound.SoundSensor.svg?label=Meadow.Foundation.Grove.Sensors.Sound.SoundSensor" alt="NuGet Gallery for Meadow.Foundation.Grove.Sensors.Sound.SoundSensor" /></a> |

### Code Example

```csharp
SoundSensor sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    // configure our sensor
    sensor = new SoundSensor(Device.Pins.A01);

    var consumer = SoundSensor.CreateObserver(
        handler: result => Resolver.Log.Info($"Observer filter satisfied: {result.New.Millivolts:N2}mV, old: {result.Old?.Millivolts:N2}mV"),
        filter: result =>
        {
            if (result.Old is { } old)
            { //c# 8 pattern match syntax. checks for !null and assigns var.
                return (result.New - old).Abs().Millivolts > 500;
            }
            return false;
        });
    sensor.Subscribe(consumer);

    sensor.Updated += (sender, result) =>
    {
        Resolver.Log.Info($"Voltage Changed, new: {result.New.Millivolts:N2}mV, old: {result.Old?.Millivolts:N2}mV");
    };

    return Task.CompletedTask;
}

public override async Task Run()
{
    var result = await sensor.Read();
    Resolver.Log.Info($"Initial read: {result.Millivolts:N2}mV");

    sensor.StartUpdating(TimeSpan.FromMilliseconds(1000));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/SoundSensor/Sample/SoundSensor_Sample)

### Wiring Example

| LoudnessSensor | Meadow Pin |
|--------|------------|
| GND    | GND        |
| VCC    | 3.3V       |
| RX     | D01        |
| TX     | D00        |
