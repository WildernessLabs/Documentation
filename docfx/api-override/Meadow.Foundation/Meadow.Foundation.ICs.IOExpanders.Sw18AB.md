---
uid: Meadow.Foundation.ICs.IOExpanders.Sw18AB
remarks: *content
---

| Sw18AB | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.ICs.IOExpanders.SerialWombat/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.ICs.IOExpanders.SerialWombat.svg?label=Meadow.Foundation.ICs.IOExpanders.SerialWombat" alt="NuGet Gallery for Meadow.Foundation.ICs.IOExpanders.SerialWombat" /></a> |

### Code Example

```csharp
private Sw18AB serialWombat;
private IDigitalOutputPort digitalOutputPort;
private IDigitalInputPort digitalInputPort;
public override Task Initialize()
{
    Console.WriteLine("Initialize...");

    try
    {
        serialWombat = new Sw18AB(Device.CreateI2cBus());
        digitalOutputPort = serialWombat.CreateDigitalOutputPort(serialWombat.Pins.WP0);
        digitalInputPort = serialWombat.CreateDigitalInputPort(serialWombat.Pins.WP1);
    }
    catch (Exception ex)
    {
        Console.WriteLine($"error: {ex.Message}");
    }

    return Task.CompletedTask;
}

public override async Task Run()
{
    Resolver.Log.Info("Running...");

    bool state = false;

    while (true)
    {
        Resolver.Log.Info($"WP0 = {(state ? "high" : "low")}");
        digitalOutputPort.State = state;
        Resolver.Log.Info($"WP1 = {(digitalInputPort.State ? "high" : "low")}");
        state = !state;

        await Task.Delay(1000);
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Samples/Sw18AB_Sample)

### Wiring Example

To wire a Ds3502 to your Meadow board, connect the following:

| Ds3502  | Meadow Pin    |
|---------|---------------|
| GND     | GND           |
| VCC     | 3V3           |
| SCL     | D08 (SCL Pin) |
| SDA     | D07 (SDA Pin) |
