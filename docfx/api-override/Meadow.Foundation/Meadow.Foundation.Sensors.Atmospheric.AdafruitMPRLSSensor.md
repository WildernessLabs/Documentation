---
uid: Meadow.Foundation.Sensors.Atmospheric.AdafruitMPRLSSensor
remarks: *content
---

| Yx5300           |             |
|------------------|-------------|
| Status           | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code      | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/WIP/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.AdafruitMPRLS)  |
| NuGet package    | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Atmospheric.AdafruitMPRLSSensor/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Atmospheric.AdafruitMPRLSSensor.svg?label=Meadow.Foundation.Sensors.Atmospheric.AdafruitMPRLSSensor" style="width: auto; height: -webkit-fill-available;" /></a> |

### Code Example

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    AdafruitMPRLSSensor PressureSensor;

    public MeadowApp()
    {
        Initialize();
    }

    void Initialize()
    {
        PressureSensor = new AdafruitMPRLSSensor(Device.CreateI2cBus());

        PressureSensor.StartUpdating();

        PressureSensor.Updated += PressureSensor_Updated;
    }

    void PressureSensor_Updated(object sender, Meadow.Peripherals.Sensors.Atmospheric.AtmosphericConditionChangeResult e)
    {
        Console.WriteLine($"new pressure PSI: {e.New.Pressure}, old pressure PSI: {e.Old.Pressure}");

        Console.WriteLine($"pressure in hPA: {PressureSensor.CalculatedhPAMeasurement}");

        Console.WriteLine($"raw sensor value: {PressureSensor.RawPSIMeasurement}");
    }
}
```

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/WIP/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.AdafruitMPRLS/Samples/AdafruitMPRLSSensor_Sample) 

### Wiring Example

To wire a Adafruit MPRLS Sensor to your Meadow board, connect the following:

| MPRLS  | Meadow Pin |
|--------|------------|
| GND    | GND        |
| VCC    | 3.3V       |
| SCL    | D08        |
| SDA    | D07        |