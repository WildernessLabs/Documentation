---
uid: Meadow.Foundation.FeatherWings.LedMatrix8x16Wing
remarks: *content
---

| LedMatrix8x16Wing | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings/tree/main/Source/LedMatrix8x16Wing/Driver) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.FeatherWings.LedMatrix8x16Wing/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.FeatherWings.LedMatrix8x16Wing.svg?label=Meadow.Foundation.FeatherWings.LedMatrix8x16Wing" alt="NuGet Gallery for Meadow.Foundation.FeatherWings.LedMatrix8x16Wing" /></a> |

### Code Example

```csharp
LedMatrix8x16Wing ledMatrixWing;
MicroGraphics graphics;

public override Task Initialize()
{
    Console.WriteLine("Initializing ..");

    ledMatrixWing = new LedMatrix8x16Wing(Device.CreateI2cBus());
    ledMatrixWing.Clear();

    graphics = new MicroGraphics(ledMatrixWing) 
    {
        Rotation = RotationType._90Degrees,
        CurrentFont = new Font4x8()
    };

    return Task.CompletedTask;
}

public override Task Run()
{
    graphics.Clear();

    graphics.DrawText(0, 0, "M F7");

    graphics.Show();

    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings/tree/main/Source/LedMatrix8x16Wing/Samples/LedMatrix8x16Wing_Sample)

