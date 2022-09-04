---
uid: Meadow.Foundation.Sensors.Atmospheric.Bh1900Nux
remarks: *content
---

| Bh1900Nux | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bh1900Nux) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bh1900Nux/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Atmospheric.Bh1900Nux/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Atmospheric.Bh1900Nux.svg?label=Meadow.Foundation.Sensors.Atmospheric.Bh1900Nux" alt="NuGet Gallery for Bh1900Nux" /></a> |

### Code Example

```csharp
public MeadowApp()
{
    Console.WriteLine("Initializing...");

    var PressureSensor = new AdafruitMPRLS(Device.CreateI2cBus());

    PressureSensor.StartUpdating(TimeSpan.FromSeconds(1));

    PressureSensor.Updated += PressureSensor_Updated;
}

void PressureSensor_Updated(object sender, IChangeResult<(Pressure? Pressure, Pressure? RawPsiMeasurement)> result)
{
    Console.WriteLine($"New pressure PSI: {result.New.Pressure?.Psi}, Old pressure PSI: {result.Old?.Pressure?.Psi}");

    Console.WriteLine($"Pressure in Pascal: {result.New.Pressure?.Pascal}");

    Console.WriteLine($"Raw sensor value: {result.New.RawPsiMeasurement?.Psi}");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bh1900Nux/Samples/Bh1900Nux_Sample)

### Wiring Example

To wire a Adafruit Bh1900Nux Sensor to your Meadow board, connect the following:

| Bh1900Nux  | Meadow Pin |
|--------|------------|
| GND    | GND        |
| VCC    | 3.3V       |
| SCL    | D08        |
| SDA    | D07        |




