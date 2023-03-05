---
uid: Meadow.Foundation.mikroBUS.Displays.C8x8
remarks: *content
---

| C8x8 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.MikroBus/tree/main/Source/C8x8) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.mikroBUS.Displays.C8x8/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.mikroBUS.Displays.C8x8.svg?label=Meadow.Foundation.mikroBUS.Displays.C8x8" alt="NuGet Gallery for Meadow.Foundation.mikroBUS.Displays.C8x8" /></a> |
### Code Example

```csharp
C8x8 c8x8;

public MeadowApp()
{
    Console.WriteLine("Initializing ...");

    c8x8 = new C8x8(Device.CreateSpiBus(), Device.Pins.D14);

    var graphics = new MicroGraphics(c8x8)
    {
        IgnoreOutOfBoundsPixels = true,
        Rotation = RotationType._270Degrees
    };
    graphics.CurrentFont = new Font4x8();

    var message = "Wilderness Labs Meadow F7 Feather";

    while (true)
    {
        for (int x = 0; x < message.Length * 4; x++)
        {
            graphics.Clear();
            graphics.DrawText(0 - x, 1, message);
            graphics.Show();
        }
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.MikroBus/tree/main/Source/C8x8/Sample/C8x8_Sample)


