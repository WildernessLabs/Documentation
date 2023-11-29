---
uid: Meadow.Foundation.ICs.DigiPots.Mcp4162
remarks: *content
---

| Mcp4162 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.DigiPots.Mcp4xxx) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.DigiPots.Mcp4xxx/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.ICs.DigiPots.Mcp4xxx/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.ICs.DigiPots.Mcp4xxx.svg?label=Meadow.Foundation.ICs.DigiPots.Mcp4xxx" alt="NuGet Gallery for Meadow.Foundation.ICs.DigiPots.Mcp4xxx" /></a> |
### Code Example

```csharp
protected Mcp4162 mcp;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    mcp = new Mcp4162(
        Device.CreateSpiBus(),
        Device.Pins.D15.CreateDigitalOutputPort(),
        new Resistance(5, Resistance.UnitType.Kiloohms)
        );

    return base.Initialize();
}

public override async Task Run()
{
    Resolver.Log.Info("Run");

    for (var i = 0; i <= mcp.MaxResistance.Ohms; i += 100)
    {
        var r = new Resistance(i, Resistance.UnitType.Ohms);
        Resolver.Log.Info($"Setting resistance to {r.Ohms:0} ohms");
        mcp.Rheostats[0].Resistance = r;
        await Task.Delay(1000);
    }

    Resolver.Log.Info("Done");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.DigiPots.Mcp4xxx/Samples/Mcp4162_Sample)

