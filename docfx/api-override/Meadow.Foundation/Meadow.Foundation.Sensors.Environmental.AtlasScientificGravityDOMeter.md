---
uid: Meadow.Foundation.Sensors.Environmental.AtlasScientificGravityDOMeter
remarks: *content
---

| AtlasScientificGravityDOMeter | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.AtlasScientificGravityDOMeter) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.AtlasScientificGravityDOMeter/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Environmental.AtlasScientificGravityDOMeter/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Environmental.AtlasScientificGravityDOMeter.svg?label=Meadow.Foundation.Sensors.Environmental.AtlasScientificGravityDOMeter" alt="NuGet Gallery for Meadow.Foundation.Sensors.Environmental.AtlasScientificGravityDOMeter" /></a> |
### Code Example

```csharp
AtlasScientificGravityDOMeter sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    sensor = new AtlasScientificGravityDOMeter(Device.Pins.A01);
    sensor.CalibrationInAir = new Voltage(0.04, Voltage.UnitType.Volts);

    // Example that uses an IObservable subscription to only be notified when the saturation changes
    var consumer = AtlasScientificGravityDOMeter.CreateObserver(
        handler: result =>
        {
            string oldValue = (result.Old is { } old) ? $"{old * 100:n1}" : "n/a";
            string newValue = $"{result.New * 100:n1}";
            Resolver.Log.Info($"New: {newValue}%, Old: {oldValue}%");
        },
        filter: null
    );
    sensor.Subscribe(consumer);

    // optional classical .NET events can also be used:
    sensor.SaturationUpdated += (sender, result) =>
    {
        //    string oldValue = (result.Old is { } old) ? $"{old * 100:n0}%" : "n/a";
        //    Resolver.Log.Info($"Updated - New: {result.New * 100:n0}%, Old: {oldValue}");
    };

    return Task.CompletedTask;
}

public override async Task Run()
{
    Resolver.Log.Info("Run...");

    await ReadSensor();

    //example calibration setting, ensure the sensor is set up for calibration 
    var calibrationVoltage = await sensor.GetCurrentVoltage();
    sensor.CalibrationInAir = calibrationVoltage;

    Resolver.Log.Info($"Calibration voltage: {calibrationVoltage.Volts}V");

    sensor.StartUpdating(TimeSpan.FromSeconds(2));
}

protected async Task ReadSensor()
{
    var saturation = await sensor.Read();
    Resolver.Log.Info($"Initial saturation: {saturation * 100:N1}%");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.AtlasScientificGravityDOMeter/Samples/AtlasScientificGravityDOMeter_Sample)


