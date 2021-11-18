---
uid: Meadow.Foundation.Sensors.Weather.SwitchingAnemometer
remarks: *content
---

| SwitchingAnemometer | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Weather.SwitchingAnemometer) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Weather.SwitchingAnemometer/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Weather.SwitchingAnemometer.svg?label=Meadow.Foundation.Sensors.Weather.SwitchingAnemometer" /></a> |

### Code Example

```csharp
RgbPwmLed onboardLed;
SwitchingAnemometer anemometer;

public MeadowApp()
{

    Console.WriteLine("Initialize hardware...");

    //==== onboard LED
    onboardLed = new RgbPwmLed(device: Device,
        redPwmPin: Device.Pins.OnboardLedRed,
        greenPwmPin: Device.Pins.OnboardLedGreen,
        bluePwmPin: Device.Pins.OnboardLedBlue,
        3.3f, 3.3f, 3.3f,
        Meadow.Peripherals.Leds.IRgbLed.CommonType.CommonAnode);

    //==== create the anemometer
    anemometer = new SwitchingAnemometer(Device, Device.Pins.A01);

    //==== classic events example
    anemometer.WindSpeedUpdated += (sender, result) =>
    {
        Console.WriteLine($"new speed: {result.New.KilometersPerHour:n1}kmh, old: {result.Old?.KilometersPerHour:n1}kmh");
        OutputWindSpeed(result.New);
    };

    //==== IObservable example
    var observer = SwitchingAnemometer.CreateObserver(
        handler: result => {
            Console.WriteLine($"new speed (from observer): {result.New.KilometersPerHour:n1}kmh, old: {result.Old?.KilometersPerHour:n1}kmh");
        },
        null
        );
    anemometer.Subscribe(observer);

    // start raising updates
    anemometer.StartUpdating();

    Console.WriteLine("Hardware initialized.");
}

/// <summary>
/// Displays the windspeed on the onboard LED as full red @ >= `10km/h`,
/// blue @ `0km/h`, and a proportional mix, in between those speeds.
/// </summary>
/// <param name="windspeed"></param>
void OutputWindSpeed(Speed windspeed)
{
    // `0.0` - `10kmh`
    int r = (int)windspeed.KilometersPerHour.Map(0f, 10f, 0f, 255f);
    int b = (int)windspeed.KilometersPerHour.Map(0f, 10f, 255f, 0f);

    var wspeedColor = Color.FromRgb(r, 0, b);
    onboardLed.SetColor(wspeedColor);
}
```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Weather.SwitchingAnemometer/Samples/Sensors.Weather.SwitchingAnemometer_Sample)
