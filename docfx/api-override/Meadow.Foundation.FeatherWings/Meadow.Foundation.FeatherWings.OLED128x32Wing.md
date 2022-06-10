---
uid: Meadow.Foundation.FeatherWings.OLED128x32Wing
remarks: *content
---

| OLED128x32Wing | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings/tree/main/Source/OLED128x32Wing) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings/tree/main/Source/OLED128x32Wing/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.FeatherWings.OLED128x32Wing/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.FeatherWings.OLED128x32Wing.svg?label=Meadow.Foundation.FeatherWings.OLED128x32Wing" alt="NuGet Gallery for OLED128x32Wing" /></a> |

### Code Example

```csharp
MicroGraphics graphics;

public MeadowApp()
{
    Console.WriteLine("Initializing ...");
    var i2cBus = Device.CreateI2cBus(I2cBusSpeed.FastPlus);

    var oledWing = new OLED128x32Wing(i2cBus, Device, Device.Pins.D11, Device.Pins.D10, Device.Pins.D09);

    graphics = new MicroGraphics(oledWing.Display);
    graphics.CurrentFont = new Font12x16();

    oledWing.ButtonA.Clicked += (sender, e) => UpdateDisplay("A pressed");
    oledWing.ButtonB.Clicked += (sender, e) => UpdateDisplay("B pressed");
    oledWing.ButtonC.Clicked += (sender, e) => UpdateDisplay("C pressed");
}

void UpdateDisplay(string message)
{
    graphics.Clear();
    graphics.DrawText(0, 8, message);
    graphics.Show();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings/tree/main/Source/OLED128x32Wing/Sample/OLED128x32Wing_Sample)
