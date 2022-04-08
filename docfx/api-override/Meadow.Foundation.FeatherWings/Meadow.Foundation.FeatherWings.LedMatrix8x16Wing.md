---
uid: Meadow.Foundation.FeatherWings.LedMatrix8x16Wing
remarks: *content
---

| LedMatrix8x16Wing | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings/tree/main/Source/LedMatrix8x16Wing) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.FeatherWings.LedMatrix8x16Wing/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.FeatherWings.LedMatrix8x16Wing.svg?label=Meadow.Foundation.FeatherWings.LedMatrix8x16Wing" /></a> |

### Code Example

```csharp
LedMatrix8x16Wing ledMatrixWing;
MicroGraphics graphics;

public MeadowApp()
{
    Console.WriteLine("Initializing ..");

    ledMatrixWing = new LedMatrix8x16Wing(Device.CreateI2cBus());
    ledMatrixWing.Clear();

    graphics = new MicroGraphics(ledMatrixWing);
    graphics.CurrentFont = new Font4x8();

    graphics.Rotation = RotationType._90Degrees;
    graphics.Clear();
    graphics.DrawText(0, 0, "M F7");
    graphics.Show();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings/tree/main/Source/LedMatrix8x16Wing)

