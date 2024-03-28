---
uid: Meadow.Foundation.mikroBUS.Displays.C16x9
slug: /docs/api/Meadow.Foundation.mikroBUS/Meadow.Foundation.mikroBUS.Displays.C16x9
---

| C16x9 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.MikroBus/tree/main/Source/C16x9) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.mikroBUS.Displays.C16x9/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.mikroBUS.Displays.C16x9.svg?label=Meadow.Foundation.mikroBUS.Displays.C16x9" alt="NuGet Gallery for Meadow.Foundation.mikroBUS.Displays.C16x9" /></a> |

### Code Example

```csharp
readonly C16x9 c16x9;

public MeadowApp()
{
    Console.WriteLine("Initializing ...");

    c16x9 = new C16x9(Device.Pins.D14, Device.CreateI2cBus(Meadow.Hardware.I2cBusSpeed.Standard));
    c16x9.IgnoreOutOfBoundsPixels = true;

    c16x9.Clear();

    var graphics = new MicroGraphics(c16x9)
    {
        Rotation = RotationType._180Degrees
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

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.MikroBus/tree/main/Source/C16x9/Sample/C16x9_Sample)

