---
uid: Meadow.Foundation.Displays.Tft.Ili9341
remarks: *content
---

| TftSpi        |             |
|---------------|-------------|
| Status        | Working     |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Displays.TftSpi) |
| NuGet package | ![NuGet](https://img.shields.io/nuget/v/Meadow.Foundation.Displays.TftSpi.svg?label=NuGet) |
| | |

### Code Example

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    Ili9341 display;
    GraphicsLibrary graphics;

    public MeadowApp ()
    {
        var spiBus = Device.CreateSpiBus();

        display = new Ili9341(
            device: Device, 
            spiBus: spiBus,
            chipSelectPin: null,
            dcPin: Device.Pins.D01,
            resetPin: Device.Pins.D00,
            width: 240, height: 320);

        graphics = new GraphicsLibrary(display);

        graphics.CurrentFont = new Font8x8();
        graphics.Clear();
        graphics.DrawTriangle(10, 10, 50, 50, 10, 50, Meadow.Foundation.Color.Red);
        graphics.DrawRectangle(20, 15, 40, 20, Meadow.Foundation.Color.Yellow, false);
        graphics.DrawCircle(50, 50, 40, Meadow.Foundation.Color.Blue, false);
        graphics.DrawText(5, 5, "Meadow F7 SPI");
        graphics.Show();
    }
}
```