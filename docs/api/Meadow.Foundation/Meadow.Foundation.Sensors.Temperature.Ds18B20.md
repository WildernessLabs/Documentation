---
uid: Meadow.Foundation.Sensors.Temperature.Ds18B20
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature.Ds18B20
---

| Ds18B20 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/InProgress-yellow" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: in-progress" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Ds18B20) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Ds18B20/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Temperature.Ds18B20/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Temperature.Ds18B20.svg?label=Meadow.Foundation.Sensors.Temperature.Ds18B20" alt="NuGet Gallery for Meadow.Foundation.Sensors.Temperature.Ds18B20" /></a> |

The **DS18B20** is a 1-Wire temperature sensor manufactured by Maxim.  The sensor can operate in 9, 10, 11 or 12 bit precision and has a range of -55&deg;C to 125 &deg;C.

Each sensor has a 64-bit unique identifier built in.  This allows multiple sensors to be connected to the same 1-Wire bus.  So for instance, a project could measure internal and external temperature using a single GPIO pin.

### Code Example

```csharp
/*
Ds18B20 ds18B20;

public override Task Initialize()
{
    Console.WriteLine("Initialize...");

    ds18B20 = new ds18B20(Device.CreateI2cBus());

    var consumer = ds18B20.CreateObserver(
        handler: result =>
        {
            Console.WriteLine($"Temperature New Value { result.New.Celsius}C");
            Console.WriteLine($"Temperature Old Value { result.Old?.Celsius}C");
        },
        filter: null
    );
    ds18B20.Subscribe(consumer);

    ds18B20.TemperatureUpdated += (object sender, IChangeResult<Meadow.Units.Temperature> e) =>
    {
        Console.WriteLine($"Temperature Updated: {e.New.Celsius:n2}C");
    };
    return Task.CompletedTask;
}

public override async Task Run()
{
    var temp = await ds18B20.Read();
    Console.WriteLine($"Temperature New Value {temp.Celsius}C");

    ds18B20.StartUpdating();
}*/

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Ds18B20/Samples/Ds18B20_Sample)

### Wiring Example

<img src="/API_Assets/Meadow.Foundation.Sensors.Temperature.Ds18B20/Ds18B20_Fritzing.png" />




