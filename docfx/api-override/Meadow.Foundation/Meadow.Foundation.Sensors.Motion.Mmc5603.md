---
uid: Meadow.Foundation.Sensors.Motion.Mmc5603
remarks: *content
---

| Mmc5603 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Mmc5603) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Mmc5603/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Motion.Mmc5603/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Motion.Mmc5603.svg?label=Meadow.Foundation.Sensors.Motion.Mmc5603" alt="NuGet Gallery for Meadow.Foundation.Sensors.Motion.Mmc5603" /></a> |
### Code Example

```csharp
Mmc5603 sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    sensor = new Mmc5603(Device.CreateI2cBus());

    // classical .NET events can  be used
    sensor.Updated += (sender, result) => 
    {
        Resolver.Log.Info($"Magnetic Field: [X:{result.New.X.MicroTesla:N2}," +
            $"Y:{result.New.Y.MicroTesla:N2}," +
            $"Z:{result.New.Z.MicroTesla:N2} (MicroTeslas)]");
    };

    // Example that uses an IObservable subscription to only be notified when the filter is satisfied
    var consumer = Mmc5603.CreateObserver(
        handler: result => Resolver.Log.Info($"Observer: [x] changed by threshold; new [x]: X:{result.New.X.MicroTesla:N2}, old: X:{result.Old?.X.MicroTesla:N2}"),
        // only notify if there's a greater than 1 micro tesla on the Y axis
        filter: result => 
        {
            if (result.Old is { } old) 
            { //c# 8 pattern match syntax. checks for !null and assigns var
                return (result.New - old).Y > new MagneticField(1, MU.MicroTesla);
            }
            return false;
        });

    sensor.Subscribe(consumer);

    return Task.CompletedTask;
}

public async override Task Run()
{
    Resolver.Log.Loglevel = Meadow.Logging.LogLevel.Trace;

    //Read from sensor
    var result = await sensor.Read();

    //output initial readings text to console
    Resolver.Log.Info("Initial Readings:");
    Resolver.Log.Info(
        $"Mangetic field: [X:{result.X.MicroTesla:N2}," +
        $"Y:{result.Y.MicroTesla:N2}," +
        $"Z:{result.Z.MicroTesla:N2} (MicroTeslas)]");

    sensor.StartUpdating(TimeSpan.FromMilliseconds(1500));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Mmc5603/Samples/Mmc5603_Sample)

