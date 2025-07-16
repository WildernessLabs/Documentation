---
uid: Meadow.Foundation.ICs.IOExpanders.Tca9535
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Tca9535
---

| Tca9535 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Tca95x5) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Tca95x5/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.ICs.IOExpanders.Tca95x5/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.ICs.IOExpanders.Tca95x5.svg?label=Meadow.Foundation.ICs.IOExpanders.Tca95x5" alt="NuGet Gallery for Meadow.Foundation.ICs.IOExpanders.Tca95x5" /></a> |
### Code Example

```csharp
private Tca95x5 expander;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");
    var i2CBus = Device.CreateI2cBus(1);

    expander = new Tca9535(i2CBus);

    return base.Initialize();
}

public override async Task Run()
{
    var port0 = expander.Pins.P00.CreateDigitalOutputPort();
    var port1 = expander.Pins.P01.CreateDigitalOutputPort();
    var port2 = expander.Pins.P02.CreateDigitalOutputPort();
    var port3 = expander.Pins.P03.CreateDigitalOutputPort();

    bool state = false;

    while (true)
    {
        Resolver.Log.Info($"state: {state}");
        port0.State = state;
        port1.State = state;
        port2.State = state;
        port3.State = state;

        state = !state;
        await Task.Delay(2000);
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Tca95x5/Samples/Tca9535_Sample)

