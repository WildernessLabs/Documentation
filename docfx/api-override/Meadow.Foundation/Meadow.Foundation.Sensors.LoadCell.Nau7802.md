---
uid: Meadow.Foundation.Sensors.LoadCell.Nau7802
remarks: *content
---

| Nau7802 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.LoadCell.Nau7802) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.LoadCell.Nau7802/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.LoadCell.Nau7802/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.LoadCell.Nau7802.svg?label=Meadow.Foundation.Sensors.LoadCell.Nau7802" alt="NuGet Gallery for Meadow.Foundation.Sensors.LoadCell.Nau7802" /></a> |

### Code Example

```csharp
private Nau7802 loadSensor;

public int CalibrationFactor { get; set; } = 16526649; // TODO: change this based on your scale (using the method provided below)
public Mass CalibrationWeight { get; set; } = new Mass(1600, Mass.UnitType.Grams); // TODO: enter the known-weight you used in calibration

public override async Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    loadSensor = new Nau7802(Device.CreateI2cBus());

    if (CalibrationFactor == 0)
    {
        await GetAndDisplayCalibrationUnits(loadSensor);
    }
    else
    {   // wait for the ADC to settle
        await Task.Delay(500);

        // Set the current load to be zero
        loadSensor.SetCalibrationFactor(CalibrationFactor, CalibrationWeight);
        loadSensor.Tare();
    }

    loadSensor.MassUpdated += (sender, values) => Resolver.Log.Info($"Mass is now returned {values.New.Grams:N2}g");
}

public override Task Run()
{
    loadSensor.StartUpdating(TimeSpan.FromSeconds(2));

    return Task.CompletedTask;
}

public async Task GetAndDisplayCalibrationUnits(Nau7802 sensor)
{
    // first notify the user we're starting
    Resolver.Log.Info($"Beginning Calibration. First we'll tare (set a zero).");
    Resolver.Log.Info($"Make sure scale bed is clear. Next step in 5 seconds...");

    await Task.Delay(5000);
    sensor.Tare();
    Resolver.Log.Info($"Place a known weight on the scale. Next step in 5 seconds...");

    await Task.Delay(500);
    var factor = sensor.CalculateCalibrationFactor();

    Resolver.Log.Info($"Your scale's Calibration Factor is: {factor}. Enter this into the code for future use.");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.LoadCell.Nau7802/Samples/Nau7802_Sample)

