---
uid: Meadow.Foundation.FeatherWings.DotstarWing
remarks: *content
---

| DotstarWing | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings/tree/main/Source/DotstarWing) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings/tree/main/Source/DotstarWing/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.FeatherWings.DotstarWing/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.FeatherWings.DotstarWing.svg?label=Meadow.Foundation.FeatherWings.DotstarWing" alt="NuGet Gallery for DotstarWing" /></a> |

### Code Example

```csharp
DotstarWing dotStarWing;
MicroGraphics graphics;
public MeadowApp()
{
    Console.WriteLine("Initialize hardware...");
    ISpiBus spiBus = Device.CreateSpiBus();

    dotStarWing = new DotstarWing(spiBus);

    dotStarWing.Brightness = 0.1f;

    graphics = new MicroGraphics(dotStarWing);
    graphics.CurrentFont = new Font4x6();

    graphics.DrawRectangle(0, 0, 8, 4, Color.LawnGreen, true);
    graphics.DrawRectangle(2, 2, 8, 4, Color.Cyan, true);
    graphics.DrawText(0, 0, "F7", Color.White);

    graphics.Show();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings/tree/main/Source/DotstarWing/Samples/DotstarWing_Sample)

