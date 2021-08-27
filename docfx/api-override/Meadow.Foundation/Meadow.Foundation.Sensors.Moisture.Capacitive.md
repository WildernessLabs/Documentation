---
uid: Meadow.Foundation.Sensors.Moisture.Capacitive
remarks: *content
---

| Capacitive | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Moisture.Capacitive) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Moisture.Capacitive/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Moisture.Capacitive.svg?label=Meadow.Foundation.Sensors.Moisture.Capacitive" /></a> |

Capacitive Soil Moisture sensor is a simple breakout for measuring the moisture in soil and similar materials. This sensor measures moisture levels by capacitive sensing, rather then resistive sensing like other types of moisture sensor such as the FC-28.

<img src="../../API_Assets/Meadow.Foundation.Sensors.Moisture.Capacitive/img_Capacitive.jpg" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />

Capacitive sensing means measuring the dielectrum that is formed by the soil and the water is the most important factor that forms the dielectrum. Even though this kind of sensor might be a little pricier, it is made of corrosion resistant material giving it a longer service of life than a resistive sensor.

The following example shows how read the soil moisture every second:

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    Capacitive _Capacitive;

    public MeadowApp()
    {
        // create a new Capacitive sensor object connected to analog pin A01
        _Capacitive = new Capacitive(Device.Pins.A01);

        Run();
    }

    async Task Run()
    {
        while (true)
        {
            float moisture = await _Capacitive.Read();
            Console.WriteLine($"Moisture: {0}", moisture);
            Thread.Sleep(1000);
        }
    }
}
```

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Moisture.Capacitive/Samples/) 

### Code Example

```csharp
Capacitive capacitive;

public MeadowApp()
{
    Console.WriteLine("Initializing...");

    capacitive = new Capacitive(
        analogPort: Device.CreateAnalogInputPort(Device.Pins.A00),
        minimumVoltageCalibration: new Voltage(2.84f),
        maximumVoltageCalibration: new Voltage(1.63f)
    );

    // Example that uses an IObservable subscription to only be notified when the humidity changes by filter defined.
    var consumer = Capacitive.CreateObserver(
        handler: result => {
            // the first time through, old will be null.
            string oldValue = (result.Old is { } old) ? $"{old:n2}" : "n/a"; // C# 8 pattern matching
            Console.WriteLine($"Subscribed - " +
                $"new: {result.New}, " +
                $"old: {oldValue}");
        },
        filter: null
    );
    capacitive.Subscribe(consumer);

    // classical .NET events can also be used:
    capacitive.HumidityUpdated += (sender, result) =>
    {   // the first time through, old will be null.
        string oldValue = (result.Old is { } old) ? $"{old:n2}" : "n/a"; // C# 8 pattern matching
        Console.WriteLine($"Updated - New: {result.New}, Old: {oldValue}");
    };

    // Get an initial reading.
    ReadMoisture().Wait();

    // Spin up the sampling thread so that events are raised and IObservable notifications are sent.
    capacitive.StartUpdating(TimeSpan.FromSeconds(5));
}

protected async Task ReadMoisture()
{
    var moisture = await capacitive.Read();
    Console.WriteLine($"Moisture New Value { moisture }");            
}
```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Moisture.Capacitive/Samples/Sensors.Moisture.Capacitive_Sample)

### Wiring Example

<img src="../../API_Assets/Meadow.Foundation.Sensors.Moisture.Capacitive/Capacitive.svg" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />




