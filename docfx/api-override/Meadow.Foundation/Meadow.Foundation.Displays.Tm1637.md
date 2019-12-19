---
uid: Meadow.Foundation.Displays.Tm1637
remarks: *content
---

| TM1637        |             |
|---------------|-------------|
| Status        | Working     |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Displays.Tm1637) |
| NuGet package | ![NuGet](https://img.shields.io/nuget/v/Meadow.Foundation.Displays.Tm1637.svg?label=NuGet) |
| | |

### Purchasing

* [HALJIA 0.91 128x32 pixel OLED Display](https://www.amazon.co.uk/gp/product/B071Z18R1M/ref=oh_aui_detailpage_o03_s00?ie=UTF8&psc=1)

### Code Example

The following example shows how to initialize a TEA5767 and display an array of characters:

```csharp
using System;
using System.Threading;
using Meadow;
using Meadow.Devices;
using Meadow.Foundation.Displays;

namespace Displays.Tm1637_Sample
{
    class Program
    {
        static IApp app;
        public static void Main(string[] args)
        {
            if (args.Length > 0 && args[0] == "--exitOnDebug") return;

            // instantiate and run new meadow app
            app = new MeadowApp();
            Thread.Sleep(Timeout.Infinite);
        }
    }
    
    public class MeadowApp : App<F7Micro, MeadowApp>
    {
        Tm1637 display;

        public MeadowApp()
        {
            display = new Tm1637(Device, Device.Pins.D02, Device.Pins.D01);
            display.Brightness = 7;
            display.ScreenOn = true;
            display.Clear();

            var chars = new Character[] 
            { 
                Character.A, 
                Character.B, 
                Character.C, 
                Character.D 
            };

            display.Show(chars);
        }
    }    
}
```

### Wiring Example

 To wire a TM1637 to your Meadow board, connect the following:

| TM1637  | Meadow Pin    |
|---------|---------------|
| GND     | GND           |
| VCC     | 3V3           |
| SCL     | D08 (SCL Pin) |
| SDA     | D07 (SDA Pin) |
