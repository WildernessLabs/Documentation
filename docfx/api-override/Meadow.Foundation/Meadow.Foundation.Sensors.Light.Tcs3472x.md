---
uid: Meadow.Foundation.Sensors.Light.Tcs3472x
remarks: *content
---

| Tcs3472x | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/InProgress-yellow" style="width: auto; height: -webkit-fill-available;" alt="Status badge: in-progress" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Tcs3472x/Driver) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Tcs3472x/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Light.Tcs3472x/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Light.Tcs3472x.svg?label=Meadow.Foundation.Sensors.Light.Tcs3472x" alt="NuGet Gallery for Meadow.Foundation.Sensors.Light.Tcs3472x" /></a> |

### Code Example

```csharp
Tcs3472x sensor;
RgbPwmLed rgbLed;

public override Task Initialize()
{
    Console.WriteLine("Initialize...");

    sensor = new Tcs3472x(Device.CreateI2cBus());

    // instantiate our onboard LED
    rgbLed = new RgbPwmLed(
        Device,
        Device.Pins.OnboardLedRed,
        Device.Pins.OnboardLedGreen,
        Device.Pins.OnboardLedBlue,
        commonType: CommonType.CommonAnode);

    // Example that uses an IObservable subscription to only be notified when the filter is satisfied
    var consumer = Tcs3472x.CreateObserver(
        handler: result => Console.WriteLine($"Observer: filter satisifed: {result.New.AmbientLight?.Lux:N2}Lux, old: {result.Old?.AmbientLight?.Lux:N2}Lux"),
        
        // only notify if the visible light changes by 100 lux (put your hand over the sensor to trigger)
        filter: result => {
            if (result.Old is { } old) { //c# 8 pattern match syntax. checks for !null and assigns var.
                // returns true if > 100lux change
                return ((result.New.AmbientLight.Value - old.AmbientLight.Value).Abs().Lux > 100);
            }
            return false;
        });
    sensor.Subscribe(consumer);

    // classical .NET events can also be used:
    sensor.Updated += (sender, result) => {
        Console.WriteLine($" Ambient Light: {result.New.AmbientLight?.Lux:N2}Lux");
        Console.WriteLine($" Color: {result.New.Color}");
        if (result.New.Color is { } color) { rgbLed.SetColor(color); }
    };

    return Task.CompletedTask;
}

public override async Task Run()
{
    var (AmbientLight, Color, Valid) = await sensor.Read();

    Console.WriteLine("Initial Readings:");
    Console.WriteLine($" Visible Light: {AmbientLight?.Lux:N2}Lux");
    Console.WriteLine($" Color: {Color}");
    if (Color is { } color) { rgbLed.SetColor(color); }

    sensor.StartUpdating(TimeSpan.FromSeconds(1));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Tcs3472x/Samples/Tcs3472x_Sample)

