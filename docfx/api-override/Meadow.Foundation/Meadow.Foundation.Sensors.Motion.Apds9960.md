---
uid: Meadow.Foundation.Sensors.Motion.Apds9960
remarks: *content
---

| Apds9960 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/InProgress-yellow" style="width: auto; height: -webkit-fill-available;" alt="Status badge: in-progress" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Apds9960/Driver) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Apds9960/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Motion.Apds9960/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Motion.Apds9960.svg?label=Meadow.Foundation.Sensors.Motion.Apds9960" alt="NuGet Gallery for Meadow.Foundation.Sensors.Motion.Apds9960" /></a> |

### Code Example

```csharp
Apds9960 sensor;

public MeadowApp()
{
    Console.WriteLine("Initializing...");

    // configure our sensor on the I2C Bus
    var i2c = Device.CreateI2cBus();
    sensor = new Apds9960(Device, i2c, Device.Pins.D00);
    
    // classical .NET events can also be used:
    sensor.Updated += (sender, result) => {
        Console.WriteLine($"  Ambient Light: {result.New.AmbientLight?.Lux:N2}Lux");
        Console.WriteLine($"  Color: {result.New.Color:N2}Lux");
    };

    //==== enable the features we want
    sensor.EnableLightSensor(false);

    //==== one-off read
    ReadConditions().Wait();

    // start updating continuously
    sensor.StartUpdating(TimeSpan.FromSeconds(1));
}

protected async Task ReadConditions()
{
    var result = await sensor.Read();
    Console.WriteLine("Initial Readings:");
    Console.WriteLine($"  Ambient Light: {result.AmbientLight?.Lux:N2}Lux");
    Console.WriteLine($"  Color: {result.Color:N2}Lux");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Apds9960/Samples/Apds9960_Sample)

