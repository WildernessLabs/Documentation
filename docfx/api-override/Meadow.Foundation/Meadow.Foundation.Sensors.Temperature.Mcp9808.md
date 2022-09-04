---
uid: Meadow.Foundation.Sensors.Temperature.Mcp9808
remarks: *content
---

| Mcp9808 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Mcp9808/Driver) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Mcp9808/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Temperature.Mcp9808/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Temperature.Mcp9808.svg?label=Meadow.Foundation.Sensors.Temperature.Mcp9808" alt="NuGet Gallery for Meadow.Foundation.Sensors.Temperature.Mcp9808" /></a> |

### Code Example

```csharp
Mcp9808 mcp9808;

public override Task Initialize()
{
    Console.WriteLine("Initialize...");

    mcp9808 = new Mcp9808(Device.CreateI2cBus());

    var consumer = Mcp9808.CreateObserver(
        handler: result =>
        {
            Console.WriteLine($"Temperature New Value { result.New.Celsius}C");
            Console.WriteLine($"Temperature Old Value { result.Old?.Celsius}C");
        },
        filter: null
    );
    mcp9808.Subscribe(consumer);

    mcp9808.TemperatureUpdated += (object sender, IChangeResult<Meadow.Units.Temperature> e) =>
    {
        Console.WriteLine($"Temperature Updated: {e.New.Celsius:N2}C");
    };

    return Task.CompletedTask;
}

public override async Task Run()
{
    var temp = await mcp9808.Read();

    Console.WriteLine($"Temperature New Value {temp.Celsius}C");

    mcp9808.StartUpdating(TimeSpan.FromSeconds(1));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Mcp9808/Samples/Mcp9808_Sample)

