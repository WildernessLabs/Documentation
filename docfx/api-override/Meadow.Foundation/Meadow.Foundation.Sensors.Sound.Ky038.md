---
uid: Meadow.Foundation.Sensors.Sound.Ky038
remarks: *content
---

| Ky038 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Sound.Ky038/Driver) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Sound.Ky038/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Sound.Ky038.svg?label=Meadow.Foundation.Sensors.Sound.Ky038" alt="NuGet Gallery for Meadow.Foundation.Sensors.Sound.Ky038" /></a> |

### Code Example

```csharp
Ky038 sensor;

public override Task Initialize()
{
    Console.WriteLine("Initialize...");

    sensor = new Ky038(Device, Device.Pins.A00, Device.Pins.D10);

    return Task.CompletedTask;
}

public override Task Run()
{
    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Sound.Ky038/Samples/Ky038_Sample)

