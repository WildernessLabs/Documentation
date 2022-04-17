---
uid: Meadow.Foundation.Grove.Sensors.Rotary.RotaryAngleSensor
remarks: *content
---

| RotaryAngleSensor | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/RotaryAngleSensor) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Grove.Sensors.Rotary.RotaryAngleSensor/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Grove.Sensors.Rotary.RotaryAngleSensor.svg?label=Meadow.Foundation.Grove.Sensors.Rotary.RotaryAngleSensor" /></a> |

### Code Example

```csharp
RotaryAngleSensor sensor;

public MeadowApp()
{
    Console.WriteLine("Initializing...");

    // configure our sensor
    sensor = new RotaryAngleSensor(Device, Device.Pins.A01);

    // Example that uses an IObservable subscription to only be notified when the voltage changes by at least 500mV
    var consumer = RotaryAngleSensor.CreateObserver(
        handler: result => Console.WriteLine($"Observer filter satisfied: {result.New.Millivolts:N2}mV, old: {result.Old?.Millivolts:N2}mV"),
        // only notify if the change is greater than 0.5V
        filter: result => 
        {
            if (result.Old is { } old)
            { //c# 8 pattern match syntax. checks for !null and assigns var.
                return (result.New - old).Abs().Millivolts > 500;
            }
            return false;
        });

    sensor.Subscribe(consumer);

    // classical .NET events can also be used:
    sensor.Updated += (sender, result) => {
        Console.WriteLine($"Voltage Changed, new: {result.New.Millivolts:N2}mV, old: {result.Old?.Millivolts:N2}mV");
    };

    //==== One-off reading use case/pattern
    Read().Wait();

    sensor.StartUpdating(TimeSpan.FromMilliseconds(1000));
}

protected async Task Read()
{
    var result = await sensor.Read();
    Console.WriteLine($"Initial read: {result.Millivolts:N2}mV");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/RotaryAngleSensor)

### Wiring Example

| RotaryAngleSensor | Meadow Pin |
|--------|------------|
| GND    | GND        |
| VCC    | 3.3V       |
| RX     | D01        |
| TX     | D00        |
















