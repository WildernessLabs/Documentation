---
uid: Meadow.Foundation.FeatherWings.NeoPixelWing
remarks: *content
---

| NeoPixelWing | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings/tree/main/Source/NeoPixelWing) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.FeatherWings.NeoPixelWing/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.FeatherWings.NeoPixelWing.svg?label=Meadow.Foundation.FeatherWings.NeoPixelWing" alt="NuGet Gallery for Meadow.Foundation.FeatherWings.NeoPixelWing" /></a> |
### Code Example

```csharp
NeoPixelWing neoWing;
MicroGraphics graphics;

public override Task Initialize()
{
    Console.WriteLine("Initializing ...");

    neoWing = new NeoPixelWing(Device.CreateSpiBus());

    graphics = new MicroGraphics(neoWing);

    return Task.CompletedTask;
}

public override Task Run()
{
    graphics.Clear();

    graphics.DrawRectangle(0, 0, 8, 4, false);

    graphics.Show();

    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings/tree/main/Source/NeoPixelWing/Sample/NeoPixelWing_Sample)


