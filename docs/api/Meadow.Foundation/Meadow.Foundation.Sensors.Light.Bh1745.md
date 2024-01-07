---
uid: Meadow.Foundation.Sensors.Light.Bh1745
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.Bh1745
---

| Bh1745 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Bh1745) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Bh1745/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Light.Bh1745/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Light.Bh1745.svg?label=Meadow.Foundation.Sensors.Light.Bh1745" alt="NuGet Gallery for Meadow.Foundation.Sensors.Light.Bh1745" /></a> |

The BH1745 is a RGB color and luminance sensor that communicates over I2C.

### Code Example

```csharp
Bh1745 sensor;
RgbPwmLed rgbLed;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    sensor = new Bh1745(Device.CreateI2cBus());

    // instantiate our onboard LED that we'll show the color with
    rgbLed = new RgbPwmLed(
        Device.Pins.OnboardLedRed,
        Device.Pins.OnboardLedGreen,
        Device.Pins.OnboardLedBlue,
        commonType: CommonType.CommonAnode);

    // Example that uses an IObservable subscription to only be notified
    var consumer = Bh1745.CreateObserver(
        handler: result => Resolver.Log.Info($"Observer: filter satisfied: {result.New.AmbientLight?.Lux:N2}Lux, old: {result.Old?.AmbientLight?.Lux:N2}Lux"),

        // only notify if the visible light changes by 100 lux (put your hand over the sensor to trigger)
        filter: result =>
        {
            if (result.Old is { } old)
            {
                // returns true if > 100lux change
                return ((result.New.AmbientLight.Value - old.AmbientLight.Value).Abs().Lux > 100);
            }
            return false;
        });

    sensor.Subscribe(consumer);

    //classical .NET events can also be used:
    sensor.Updated += (sender, result) =>
    {
        Resolver.Log.Info($"  Ambient Light: {result.New.AmbientLight?.Lux:N2}Lux");
        Resolver.Log.Info($"  Color: {result.New.Color}");

        if (result.New.Color is { } color)
        {
            rgbLed.SetColor(color);
        }
    };

    return Task.CompletedTask;
}

public override async Task Run()
{
    var result = await sensor.Read();

    Resolver.Log.Info("Initial Readings:");
    Resolver.Log.Info($" Visible Light: {result.AmbientLight?.Lux:N2}Lux");
    Resolver.Log.Info($" Color: {result.Color}");

    if (result.Color is { } color)
    {
        rgbLed.SetColor(color);
    }

    sensor.StartUpdating(TimeSpan.FromSeconds(1));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Bh1745/Samples/Bh1745_Sample)

### Wiring Example

To wire a Bh1745 to your Meadow board, connect the following:

| Bh1745  | Meadow Pin  |
|---------|-------------|
| GND     | GND         |
| SCL     | D08 (SCL)   |
| SDA     | D07 (SDA)   |
| VCC     | 3V3         |

It should look like the following diagram:

<img src="/API_Assets/Meadow.Foundation.Sensors.Light.Bh1745/Bh1745_Frizzing.png"  />




