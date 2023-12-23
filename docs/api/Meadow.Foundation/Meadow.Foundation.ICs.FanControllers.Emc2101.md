---
uid: Meadow.Foundation.ICs.FanControllers.Emc2101

---

| Emc2101 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.FanControllers.Emc2101) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.FanControllers.Emc2101/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.ICs.FanControllers.Emc2101/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.ICs.FanControllers.Emc2101.svg?label=Meadow.Foundation.ICs.FanControllers.Emc2101" alt="NuGet Gallery for Meadow.Foundation.ICs.FanControllers.Emc2101" /></a> |

### Code Example

```csharp
Emc2101 fanController;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    fanController = new Emc2101(i2cBus: Device.CreateI2cBus());

    return base.Initialize();
}

public override Task Run()
{
    Resolver.Log.Info("Run ...");

    return base.Run();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.FanControllers.Emc2101/Samples/Emc2101_Sample)

