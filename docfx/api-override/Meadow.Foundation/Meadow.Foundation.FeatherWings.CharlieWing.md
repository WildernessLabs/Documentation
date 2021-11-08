---
uid: Meadow.Foundation.FeatherWings.CharlieWing
remarks: *content
---

| CharlieWing | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/FeatherWings.CharlieWing) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.FeatherWings.CharlieWing/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.FeatherWings.CharlieWing.svg?label=Meadow.Foundation.FeatherWings.CharlieWing" /></a> |

### Code Example

```csharp
CharlieWing charlieWing;
GraphicsLibrary graphics;

public MeadowApp()
{
    Console.WriteLine("Initializing ...");

    charlieWing = new CharlieWing(Device.CreateI2cBus());
    charlieWing.Clear();

    graphics = new GraphicsLibrary(charlieWing);
    graphics.CurrentFont = new Font4x8();

    graphics.DrawText(0, 0, "F7");
    graphics.Show();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/FeatherWings.CharlieWing/Samples/FeatherWings.CharlieWing_Sample)

