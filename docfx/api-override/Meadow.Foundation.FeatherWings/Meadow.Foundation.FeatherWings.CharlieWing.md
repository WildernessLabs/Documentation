---
uid: Meadow.Foundation.FeatherWings.CharlieWing

---

| CharlieWing | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings/tree/main/Source/CharlieWing) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings/tree/main/Source/CharlieWing/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.FeatherWings.CharlieWing/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.FeatherWings.CharlieWing.svg?label=Meadow.Foundation.FeatherWings.CharlieWing" alt="NuGet Gallery for Meadow.Foundation.FeatherWings.CharlieWing" /></a> |

### Code Example

```csharp
CharlieWing charlieWing;
MicroGraphics graphics;

public override Task Initialize()
{
    Console.WriteLine("Initialize...");

    charlieWing = new CharlieWing(Device.CreateI2cBus());

    graphics = new MicroGraphics(charlieWing)
    {
        CurrentFont = new Font4x8()
    };

    return Task.CompletedTask;
}

public override Task Run()
{
    graphics.Clear();

    graphics.DrawText(0, 0, "F7");

    graphics.Show();

    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings/tree/main/Source/CharlieWing/Samples/CharlieWing_Sample)

