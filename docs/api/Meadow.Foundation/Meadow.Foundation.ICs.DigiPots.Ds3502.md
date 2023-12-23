---
uid: Meadow.Foundation.ICs.DigiPots.Ds3502

---

| Ds3502 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.DigiPots.Ds3502) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.DigiPots.Ds3502/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.ICs.DigiPots.Ds3502/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.ICs.DigiPots.Ds3502.svg?label=Meadow.Foundation.ICs.DigiPots.Ds3502" alt="NuGet Gallery for Meadow.Foundation.ICs.DigiPots.Ds3502" /></a> |

### Code Example

```csharp
protected Ds3502 ds3502;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    ds3502 = new Ds3502(Device.CreateI2cBus(Ds3502.DefaultBusSpeed));

    return base.Initialize();
}

public override Task Run()
{
    for (byte i = 0; i < 127; i++)
    {
        ds3502.SetWiper(i);
        Resolver.Log.Info($"wiper {ds3502.GetWiper()}");

        Thread.Sleep(1000);
    }

    return base.Run();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.DigiPots.Ds3502/Samples/Ds3502_Sample)

