---
uid: Meadow.Foundation.Sensors.Light.Tsl2591
remarks: *content
---

| Tsl2591 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Light.Tsl2591) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Light.Tsl2591/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Light.Tsl2591.svg?label=Meadow.Foundation.Sensors.Light.Tsl2591" /></a> |

### Code Example

```csharp
Tsl2591 sensor;

public MeadowApp()
{
    Console.WriteLine("Initializing...");

    // configure our sensor on the I2C Bus
    var i2c = Device.CreateI2cBus();
    sensor = new Tsl2591(i2c);

    // Example that uses an IObersvable subscription to only be notified when the filter is satisfied
    var consumer = Tsl2591.CreateObserver(
        handler: result => Console.WriteLine($"Observer: filter satisifed: {result.New.VisibleLight?.Lux:N2}Lux, old: {result.Old?.VisibleLight?.Lux:N2}Lux"),
        // only notify if the visible light changes by 100 lux (put your hand over the sensor to trigger)
        filter: result => {
            if (result.Old is { } old) { //c# 8 pattern match syntax. checks for !null and assigns var.
                // returns true if > 100lux change
                return ( (result.New.VisibleLight.Value - old.VisibleLight.Value).Abs().Lux > 100 ); 
            }
            return false;
        });
    sensor.Subscribe(consumer);

    // classical .NET events can also be used:
    sensor.Updated += (sender, result) => {
        Console.WriteLine($"  Full Spectrum Light: {result.New.FullSpectrum?.Lux:N2}Lux");
        Console.WriteLine($"  Infrared Light: {result.New.Infrared?.Lux:N2}Lux");
        Console.WriteLine($"  Visible Light: {result.New.VisibleLight?.Lux:N2}Lux");
        Console.WriteLine($"  Integrated Light: {result.New.Integrated?.Lux:N2}Lux");
    };

    //==== one-off read
    ReadConditions().Wait();

    // start updating continuously
    sensor.StartUpdating(TimeSpan.FromSeconds(1));
}

protected async Task ReadConditions()
{
    var result = await sensor.Read();
    Console.WriteLine("Initial Readings:");
    Console.WriteLine($"  Full Spectrum Light: {result.FullSpectrum?.Lux:N2}Lux");
    Console.WriteLine($"  Infrared Light: {result.Infrared?.Lux:N2}Lux");
    Console.WriteLine($"  Visible Light: {result.VisibleLight?.Lux:N2}Lux");
    Console.WriteLine($"  Integrated Light: {result.Integrated?.Lux:N2}Lux");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Light.Tsl2591/Samples/Sensors.Light.Tsl2591_Sample)
