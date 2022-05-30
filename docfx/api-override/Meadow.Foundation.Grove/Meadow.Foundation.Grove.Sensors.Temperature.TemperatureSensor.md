---
uid: Meadow.Foundation.Grove.Sensors.Temperature.TemperatureSensor
remarks: *content
---

| TemperatureSensor | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/TemperatureSensor) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Grove.Sensors.Temperature.TemperatureSensor/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Grove.Sensors.Temperature.TemperatureSensor.svg?label=Meadow.Foundation.Grove.Sensors.Temperature.TemperatureSensor" alt="NuGet Gallery for TemperatureSensor" /></a> |

### Code Example

```csharp
TemperatureSensor sensor;

public MeadowApp()
{
    Console.WriteLine("Initializing...");

    // configure our sensor
    sensor = new TemperatureSensor(Device, Device.Pins.A01);

    // Example that uses an IObservable subscription to only be notified when the voltage changes by at least 500mV
    var consumer = TemperatureSensor.CreateObserver(
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
    sensor.Updated += (sender, result) => 
    {
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

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/TemperatureSensor/Sample/TemperatureSensor_Sample)

### Wiring Example

| TemperatureSensor | Meadow Pin |
|--------|------------|
| GND    | GND        |
| VCC    | 3.3V       |
| RX     | D01        |
| TX     | D00        |
