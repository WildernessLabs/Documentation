---
uid: Meadow.Foundation.Sensors.Light.Alspt19315C
remarks: *content
---

| Alspt19315C | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Light.Alspt19315C) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Light.Alspt19315C/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Light.Alspt19315C.svg?label=Meadow.Foundation.Sensors.Light.Alspt19315C" /></a> |

The **ALS-PT19-315C** is a low cost analog ambient light sensor, consisting of phototransistor in a miniature SMD.

### Code Example

```csharp
Alspt19315C sensor;

public MeadowApp()
{
    Console.WriteLine("Initializing...");

    // configure our sensor
    var sensor = new Alspt19315C(Device, Device.Pins.A03);

    //==== IObservable Pattern with an optional notification filter.
    // Example that uses an IObersvable subscription to only be notified
    // when the voltage changes by at least 0.5V
    var consumer = Alspt19315C.CreateObserver(
        handler: result => Console.WriteLine($"Observer filter satisfied: {result.New.Volts:N2}V, old: {result.Old?.Volts:N2}V"),
  
        // only notify if the change is greater than 0.5V
        filter: result => {
            if (result.Old is { } old) { //c# 8 pattern match syntax. checks for !null and assigns var.
                return (result.New - old).Abs().Volts > 0.5; // returns true if > 0.5V change.
            }
            return false;
        }
    );
    sensor.Subscribe(consumer);

    //==== Classic Events Pattern
    sensor.Updated += (sender, result) => {
        Console.WriteLine($"Voltage Changed, new: {result.New.Volts:N2}V, old: {result.Old?.Volts:N2}V");
    };

    //==== One-off reading use case/pattern
    ReadTemp().Wait();

    // Spin up the sampling thread so that events are raised and IObservable notifications are sent.
    sensor.StartUpdating(TimeSpan.FromMilliseconds(1000));
}

protected async Task ReadTemp()
{
    var result = await sensor.Read();
    Console.WriteLine($"Initial temp: {result.Volts:N2}V");
}
```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Light.Alspt19315C/Samples/Sensors.Light.Alspt19315C_Sample)

### Purchasing

The ALS-PT19 senors are available on breakout boards and as individual sensors:

* [Adafruit breakout board](https://www.adafruit.com/product/2748)
* [Sparkfun ALS-PT19 Sensor](https://www.proto-pic.co.uk/als-pt19-light-sensor.html)
* [Sparkfun Weather Shield](https://www.proto-pic.co.uk/weather-shield.html)

### Circuit Example

The ALS-PT19C is a simple analog device requiring only three connections:

<img src="../../API_Assets/Meadow.Foundation.Sensors.Light.Alspt19315C/Alspt19315C_Fritzing.svg" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />




