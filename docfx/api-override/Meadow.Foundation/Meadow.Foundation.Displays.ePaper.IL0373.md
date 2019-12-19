---
uid: Meadow.Foundation.Displays.ePaper.Il0373
remarks: *content
---

| ePaper        |             |
|---------------|-------------|
| Status        | Working     |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Displays.ePaper) |
| NuGet package | ![NuGet](https://img.shields.io/nuget/v/Meadow.Foundation.Displays.ePaper.svg?label=NuGet) |
| | |

The **IL0373** is a tri-color display controller for ePaper displays. Data is sent to the controller via SPI and supports partial screen updates.

The IL0373 is commonly paired with 1.54", 2.13" or 2.9" dual or tri-color ePaper displays of various resolutions. 

### Code Example

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    IL0373 display;

    public MeadowApp()
    {
        var spiBus = Device.CreateSpiBus();

        Console.WriteLine("Create display driver instance");
        display = new IL0373(device: Device, spiBus: spiBus,
            chipSelectPin: Device.Pins.D02,
            dcPin: Device.Pins.D01,
            resetPin: Device.Pins.D00,
            busyPin: Device.Pins.D03,
            width: 102,
            height: 212);

        var graphics = new GraphicsLibrary(display);

        //any color but black will show the ePaper alternate color 
        graphics.DrawRectangle(1, 1, 126, 32, Meadow.Foundation.Color.Red, false);

        graphics.CurrentFont = new Font8x12();
        graphics.DrawText(2, 2, "IL0373");
        graphics.DrawText(2, 20, "Meadow F7");

        int ySpacing = 6;

        for (int i = 0; i < 3; i++)
        {
            graphics.DrawLine(2, 70 + ySpacing * i, 22, 50 + ySpacing * i);
            graphics.DrawLine(22, 50 + ySpacing * i, 42, 70 + ySpacing * i);
            graphics.DrawLine(44, 70 + ySpacing * i, 64, 50 + ySpacing * i);
            graphics.DrawLine(64, 50 + ySpacing * i, 84, 70 + ySpacing * i);
            graphics.DrawLine(86, 70 + ySpacing * i, 106, 50 + ySpacing * i);
            graphics.DrawLine(106, 50 + ySpacing * i, 126, 70 + ySpacing * i);
        }

        Console.WriteLine("Show");

        graphics.Show();
    }
}
```
[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Samples)

### Wiring Example

 To control a ILI0373 from Meadow, connect the following:

| IL0373  | Meadow Pin |
|---------|------------|
| BUSY    | Dxx        |
| RST     | Dxx        |
| DC      | Dxx        |
| CS      | Dxx        |
| CLK     | SCK        |
| DIN     | MOSI       |
| GND     | GND        |
| VCC     | 3V3        |

If your display does not include any of the above pins, they can be omitted. Pass `NULL` into the constructor for the missing pin(s).
