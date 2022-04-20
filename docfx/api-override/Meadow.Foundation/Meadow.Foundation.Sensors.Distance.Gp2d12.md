---
uid: Meadow.Foundation.Sensors.Distance.Gp2d12
remarks: *content
---

| Gp2d12 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/InProgress-yellow" style="width: auto; height: -webkit-fill-available;" alt="Status badge: in-progress" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Gp2d12) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Distance.Gp2d12/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Distance.Gp2d12.svg?label=Meadow.Foundation.Sensors.Distance.Gp2d12" alt="NuGet Gallery for Gp2d12" /></a> |

```csharp
Gp2d12 sensor;

public MeadowApp()
{
    Console.WriteLine("Initializing...");

    sensor = new Gp2d12(Device, Device.Pins.A03);

    //==== IObservable Pattern with an optional notification filter.
    var consumer = Gp2d12.CreateObserver(
        handler: result => {
            Console.WriteLine($"Observer filter satisfied: {result.New.Centimeters:N2}cm, old: {result.Old?.Centimeters:N2}cm");
        },
        // only notify if the change is greater than 5cm
        filter: result => {
            if (result.Old is { } old) { //c# 8 pattern match syntax. checks for !null and assigns var.
                return (result.New - old).Abs().Centimeters > 5; // returns true if > 5cm change.
            }
            return false;
        }
    );
    sensor.Subscribe(consumer);

    // classical .NET events can also be used
    sensor.DistanceUpdated += (sender, result) => {
        Console.WriteLine($"Temp Changed, temp: {result.New.Centimeters:N2}cm, old: {result.Old?.Centimeters:N2}cm");
    };

    //==== One-off reading use case/pattern
    ReadSensor().Wait();

    sensor.StartUpdating(TimeSpan.FromMilliseconds(1000));
}

protected async Task ReadSensor()
{
    var temperature = await sensor.Read();
    Console.WriteLine($"Initial temp: {temperature.Centimeters:N2}cm");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Gp2d12/Samples/Sensors.Distance.Gp2d12_Sample)

|### Code Example

```csharp
Gp2d12 sensor;

public MeadowApp()
{
    Console.WriteLine("Initializing...");

    sensor = new Gp2d12(Device, Device.Pins.A03);

    //==== IObservable Pattern with an optional notification filter.
    var consumer = Gp2d12.CreateObserver(
        handler: result => {
            Console.WriteLine($"Observer filter satisfied: {result.New.Centimeters:N2}cm, old: {result.Old?.Centimeters:N2}cm");
        },
        // only notify if the change is greater than 5cm
        filter: result => {
            if (result.Old is { } old) { //c# 8 pattern match syntax. checks for !null and assigns var.
                return (result.New - old).Abs().Centimeters > 5; // returns true if > 5cm change.
            }
            return false;
        }
    );
    sensor.Subscribe(consumer);

    // classical .NET events can also be used
    sensor.DistanceUpdated += (sender, result) => {
        Console.WriteLine($"Temp Changed, temp: {result.New.Centimeters:N2}cm, old: {result.Old?.Centimeters:N2}cm");
    };

    //==== One-off reading use case/pattern
    ReadSensor().Wait();

    sensor.StartUpdating(TimeSpan.FromMilliseconds(1000));
}

protected async Task ReadSensor()
{
    var temperature = await sensor.Read();
    Console.WriteLine($"Initial temp: {temperature.Centimeters:N2}cm");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Gp2d12/Samples/Gp2d12_Sample)

