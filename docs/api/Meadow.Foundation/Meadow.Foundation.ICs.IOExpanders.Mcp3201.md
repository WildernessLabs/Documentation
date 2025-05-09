---
uid: Meadow.Foundation.ICs.IOExpanders.Mcp3201
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Mcp3201
---

| Mcp3201 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.ICs.ADCs.Mcp3xxx/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.ICs.ADCs.Mcp3xxx.svg?label=Meadow.Foundation.ICs.ADCs.Mcp3xxx" alt="NuGet Gallery for Meadow.Foundation.ICs.ADCs.Mcp3xxx" /></a> |

### Code Example

```csharp
Mcp3201 mcp;

IObservableAnalogInputPort port;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize");

    IDigitalOutputPort chipSelectPort = Device.CreateDigitalOutputPort(Device.Pins.D14);

    mcp = new Mcp3201(Device.CreateSpiBus(), chipSelectPort);

    port = mcp.CreateAnalogInputPort();

    port.Updated += (s, result) =>
    {
        Resolver.Log.Info($"Analog event, new voltage: {result.New.Volts}V, old: {result.Old?.Volts}V");
    };

    var observer = IObservableAnalogInputPort.CreateObserver(
        handler: result =>
        {
            Resolver.Log.Info($"Analog observer triggered; new: {result.New.Volts}V, old: {result.Old?.Volts}V");
        },
        filter: result =>
        {
            if (result.Old is { } oldValue)
            {
                return (result.New - oldValue).Abs().Volts > 0.1;
            }
            else { return false; }
        }
    );
    port.Subscribe(observer);

    return base.Initialize();
}

public override Task Run()
{
    Resolver.Log.Info("Run");

    port.StartUpdating();

    Resolver.Log.Info("Run complete");

    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Samples/Mcp3201_Sample)

