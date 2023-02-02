---
uid: Meadow.Foundation.Sensors.Atmospheric.AdafruitMPRLS
remarks: *content
---

| AdafruitMPRLS | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.AdafruitMPRLS) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.AdafruitMPRLS/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Atmospheric.AdafruitMPRLS/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Atmospheric.AdafruitMPRLS.svg?label=Meadow.Foundation.Sensors.Atmospheric.AdafruitMPRLS" alt="NuGet Gallery for Meadow.Foundation.Sensors.Atmospheric.AdafruitMPRLS" /></a> |

### Code Example

```csharp
AdafruitMPRLS sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    sensor = new AdafruitMPRLS(Device.CreateI2cBus());
    sensor.Updated += PressureSensor_Updated;

    return Task.CompletedTask;
}

public override Task Run()
{
    sensor.StartUpdating(TimeSpan.FromSeconds(1));

    return Task.CompletedTask;
}

void PressureSensor_Updated(object sender, IChangeResult<(Pressure? Pressure, Pressure? RawPsiMeasurement)> result)
{
    Resolver.Log.Info($"New pressure PSI: {result.New.Pressure?.Psi}, Old pressure PSI: {result.Old?.Pressure?.Psi}");

    Resolver.Log.Info($"Pressure in Pascal: {result.New.Pressure?.Pascal}");

    Resolver.Log.Info($"Raw sensor value: {result.New.RawPsiMeasurement?.Psi}");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.AdafruitMPRLS/Samples/AdafruitMPRLS_Sample)

### Wiring Example

To wire a Adafruit MPRLS Sensor to your Meadow board, connect the following:

| MPRLS  | Meadow Pin |
|--------|------------|
| GND    | GND        |
| VCC    | 3.3V       |
| SCL    | D08        |
| SDA    | D07        |




