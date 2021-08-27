---
uid: Meadow.Foundation.Sensors.Light.Temt6000
remarks: *content
---

| Temt6000      |             |
|---------------|-------------|
| Status        | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Light.Temt6000) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Light.Temt6000/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Light.Temt6000.svg?label=Meadow.Foundation.Sensors.Light.Temt6000" style="width: auto; height: -webkit-fill-available;" /></a> |

The TEMT6000 is an analog ambient light sensor.

### Code Example

```csharp
Temt6000 sensor;

public MeadowApp()
{
    Console.WriteLine("Initializing...");

    // configure our sensor
    sensor = new Temt6000(Device, Device.Pins.A03);

    // Example that uses an IObersvable subscription to only be notified when the voltage changes by at least 0.5V
    var consumer = Temt6000.CreateObserver(
        handler: result => Console.WriteLine($"Observer filter satisfied: {result.New.Volts:N2}V, old: {result.Old?.Volts:N2}V"),
        // only notify if the change is greater than 0.5V
        filter: result => {
            if (result.Old is { } old) { //c# 8 pattern match syntax. checks for !null and assigns var.
                return (result.New - old).Abs().Volts > 0.5; // returns true if > 0.5V change.
            }
            return false;
        });

    sensor.Subscribe(consumer);

    // classical .NET events can also be used:
    sensor.Updated += (sender, result) => {
        Console.WriteLine($"Voltage Changed, new: {result.New.Volts:N2}V, old: {result.Old?.Volts:N2}V");
    };

    //==== One-off reading use case/pattern
    ReadTemp().Wait();

    sensor.StartUpdating(TimeSpan.FromMilliseconds(1000));
}

protected async Task ReadTemp()
{
    var result = await sensor.Read();
    Console.WriteLine($"Initial temp: {result.Volts:N2}V");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Light.Temt6000/Samples/Sensors.Light.Temt6000_Sample)

### Wiring Example

To wire a Temt6000 to your Meadow board, connect the following:

| Temt6000 | Meadow Pin  |
|----------|-------------|
| GND      | GND         |
| SIG      | A03         |
| VCC      | 3V3         |

It should look like the following diagram:

<img src="../../API_Assets/Meadow.Foundation.Sensors.Light.Temt6000/Temt6000_Fritzing.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />