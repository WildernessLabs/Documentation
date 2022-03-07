---
uid: Meadow.Foundation.Sensors.Light.AnalogSolarGauge
remarks: *content
---

| AnalogSolarGauge | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Light.AnalogSolarGauge) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Light.AnalogSolarIntensityGauge/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Light.AnalogSolarIntensityGauge.svg?label=Meadow.Foundation.Sensors.Light.AnalogSolarIntensityGauge" /></a> |

### Code Example

```csharp
AnalogSolarGauge solarGauge;

public MeadowApp()
{
    Console.WriteLine("Initialize hardware...");
    solarGauge = new AnalogSolarGauge(Device, Device.Pins.A02, updateInterval: TimeSpan.FromSeconds(1));

    //==== classic .NET Event
    solarGauge.SolarIntensityUpdated += (s, result) => Console.WriteLine($"SolarIntensityUpdated: {result.New * 100:n2}%");
    
    //==== Filterable observer
    var observer = AnalogSolarGauge.CreateObserver(
        handler: result => Console.WriteLine($"Observer filter satisifed, new intensity: {result.New * 100:n2}%"),
        filter: result => {
            if (result.Old is { } old)
            {
                return (Math.Abs(result.New - old) > 0.05); // only notify if change is > 5%
            }
            return false;
        });
    solarGauge.Subscribe(observer);

    Console.WriteLine("Hardware initialized.");

    // do a one-off read
    ReadSolarIntensityGauge().Wait();

    // start updating
    solarGauge.StartUpdating(TimeSpan.FromSeconds(1));
}

async Task ReadSolarIntensityGauge()
{
    var result = await solarGauge.Read();
    Console.WriteLine($"Solar Intensity: {result * 100:n2}%");
}
```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Light.AnalogSolarGauge/Samples/Sensors.Light.AnalogSolarGauge_Sample)

