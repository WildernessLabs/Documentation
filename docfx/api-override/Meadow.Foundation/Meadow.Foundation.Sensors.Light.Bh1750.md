---
uid: Meadow.Foundation.Sensors.Light.Bh1750
remarks: *content
---

| Bh1750 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Bh1750) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Bh1750/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Light.Bh1750/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Light.Bh1750.svg?label=Meadow.Foundation.Sensors.Light.Bh1750" alt="NuGet Gallery for Bh1750" /></a> |

The BH1750 is a light intensity sensor that communicates over I2C. 

### Code Example

```csharp
Bh1750 sensor;

public MeadowApp()
{
    Console.WriteLine("Initializing...");

    var i2c = Device.CreateI2cBus();
    sensor = new Bh1750(
        i2c,
        measuringMode: Mode.ContinuouslyHighResolutionMode, // the various modes take differing amounts of time.
        lightTransmittance: 1 // lower this to increase sensitivity, for instance, if it's behind a semi opaque window
        ); 

    // Example that uses an IObersvable subscription to only be notified when the filter is satisfied
    var consumer = Bh1750.CreateObserver(
        handler: result => Console.WriteLine($"Observer: filter satisifed: {result.New.Lux:N2}Lux, old: {result.Old?.Lux:N2}Lux"),
        
        // only notify if the visible light changes by 100 lux (put your hand over the sensor to trigger)
        filter: result => {
            if (result.Old is { } old) { //c# 8 pattern match syntax. checks for !null and assigns var.
                // returns true if > 100lux change
                return ((result.New - old).Abs().Lux > 100);
            }
            return false;
        });
    sensor.Subscribe(consumer);

    //==== Events
    // classical .NET events can also be used:
    sensor.Updated += (sender, result) => Console.WriteLine($"Light: {result.New.Lux:N2}Lux");

    //==== one-off read
    ReadConditions().Wait();

    // start updating continuously
    sensor.StartUpdating(TimeSpan.FromSeconds(1));
}

protected async Task ReadConditions()
{
    var result = await sensor.Read();
    Console.WriteLine("Initial Readings:");
    Console.WriteLine($"   Light: {result.Lux:N2}Lux");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Bh1750/Samples/Bh1750_Sample)

### Wiring Example

To wire a Bh1750 to your Meadow board, connect the following:

| Bh1750  | Meadow Pin  |
|---------|-------------|
| GND     | GND         |
| SCL     | D08 (SCL)   |
| SDA     | D07 (SDA)   |
| VCC     | 3V3         |

It should look like the following diagram:

<img src="../../API_Assets/Meadow.Foundation.Sensors.Light.Bh1750/Bh1750_Fritzing.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />




