---
uid: Meadow.Foundation.Sensors.Light.Tcs3472x
remarks: *content
---

| Tcs3472x | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/InProgress-yellow" style="width: auto; height: -webkit-fill-available;" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Light.Tcs3472x) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Light.Tcs3472x/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Light.Tcs3472x.svg?label=Meadow.Foundation.Sensors.Light.Tcs3472x" /></a> |

### Code Example

```csharp
Tcs3472x sensor;
RgbPwmLed rgbLed;

public MeadowApp()
{
    Console.WriteLine("Initializing...");

    sensor = new Tcs3472x(Device.CreateI2cBus());

    // instantiate our onboard LED that we'll show the color with
    rgbLed = new RgbPwmLed(
        Device,
        Device.Pins.OnboardLedRed,
        Device.Pins.OnboardLedGreen,
        Device.Pins.OnboardLedBlue,
        commonType: CommonType.CommonAnode);

    // Example that uses an IObersvable subscription to only be notified when the filter is satisfied
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
        Console.WriteLine($"  Ambient Light: {result.New.AmbientLight?.Lux:N2}Lux");
        Console.WriteLine($"  Color: {result.New.Color}");
        if (result.New.Color is { } color) { rgbLed.SetColor(color); }
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
    Console.WriteLine($"  Visible Light: {result.AmbientLight?.Lux:N2}Lux");
    Console.WriteLine($"  Color: {result.Color}");
    if (result.Color is { } color) { rgbLed.SetColor(color); }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Light.Tcs3472x/Samples/Sensors.Light.Tcs3472x_Sample)