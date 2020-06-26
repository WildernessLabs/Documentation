---
uid: Meadow.Foundation.FeatherWings.OLED128x32Wing
remarks: *content
---

| OLED128x32Wing   |             |
|------------------|-------------|
| Status        | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/develop/Source/Meadow.Foundation.Peripherals/FeatherWings.OLED128x32Wing) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.FeatherWings.OLED128x32Wing/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.FeatherWings.OLED128x32Wing.svg?label=Meadow.Foundation.FeatherWings.OLED128x32Wing" style="width: auto; height: -webkit-fill-available;" /></a> |

### Code Example

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    OLED128x32Wing oledWing;
    GraphicsLibrary graphics;

    public MeadowApp()
    {
        Initialize();
        UpdateDisplay("OLED Wing");
    }

    void Initialize()
    {
        Console.WriteLine("Initialize hardware...");
        var i2cBus = Device.CreateI2cBus(I2cBusSpeed.FastPlus);

        oledWing = new OLED128x32Wing(i2cBus, Device, Device.Pins.D11, Device.Pins.D10, Device.Pins.D09);

        graphics = new GraphicsLibrary(oledWing.Display);
        graphics.CurrentFont = new Font12x16();

        oledWing.ButtonA.Clicked += (sender, e) =>
        {
            Console.WriteLine("A");
            UpdateDisplay("A pressed");
        };

        oledWing.ButtonB.Clicked += (sender, e) => 
        {
            Console.WriteLine("B");
            UpdateDisplay("B pressed");
        };

        oledWing.ButtonC.Clicked += (sender, e) => {
            Console.WriteLine("C");
            UpdateDisplay("C pressed");
        };
    }

    void UpdateDisplay(string message)
    {
        graphics.Clear();
        graphics.DrawText(0, 8, message);
        graphics.Show();
    }
}
```

