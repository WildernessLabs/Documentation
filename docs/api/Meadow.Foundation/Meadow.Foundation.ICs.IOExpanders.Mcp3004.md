---
uid: Meadow.Foundation.ICs.IOExpanders.Mcp3004

---

| Mcp3004 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.ICs.ADCs.Mcp3xxx/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.ICs.ADCs.Mcp3xxx.svg?label=Meadow.Foundation.ICs.ADCs.Mcp3xxx" alt="NuGet Gallery for Meadow.Foundation.ICs.ADCs.Mcp3xxx" /></a> |

### Code Example

```csharp
Mcp3004 mcp;

IAnalogInputPort port;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize");

    IDigitalOutputPort chipSelectPort = Device.CreateDigitalOutputPort(Device.Pins.D01);

    mcp = new Mcp3004(Device.CreateSpiBus(), chipSelectPort);

    port = mcp.CreateAnalogInputPort(mcp.Pins.CH0, 32, TimeSpan.FromSeconds(1), new Voltage(3.3, Voltage.UnitType.Volts), Mcp3xxx.InputType.SingleEnded);

    port.Updated += (s, result) =>
    {
        Resolver.Log.Info($"Analog event, new voltage: {result.New.Volts:N2}V, old: {result.Old?.Volts:N2}V");
    };

    var observer = IAnalogInputPort.CreateObserver(
        handler: result =>
        {
            Resolver.Log.Info($"Analog observer triggered; new: {result.New.Volts:n2}V, old: {result.Old?.Volts:n2}V");
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

    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Samples/Mcp3004_Sample)

