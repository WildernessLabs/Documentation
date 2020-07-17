---
uid: Meadow.Foundation.Leds.Apa102
remarks: *content
---

| Pca9685       |             |
|---------------|-------------|
| Status        | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/develop/Source/Meadow.Foundation.Peripherals/Leds.Apa102) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Leds.Apa102/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Leds.Apa102.svg?label=Meadow.Foundation.Leds.Apa102" style="width: auto; height: -webkit-fill-available;" /></a> |

### Code Example

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    Apa102 apa102;

    public MeadowApp()
    {
        Initialize();
        Run();
    }

    void Initialize()
    {
        Console.WriteLine("Initialize hardware...");
        ISpiBus spiBus = Device.CreateSpiBus();

        //Not used but is need to create the SPI Peripheral
        IDigitalOutputPort spiPeriphChipSelect = Device.CreateDigitalOutputPort(Device.Pins.D04);
        apa102 = new Apa102(spiBus, spiPeriphChipSelect, 10, Apa102.PixelOrder.BGR);
    }

    void Run()
    {
        Console.WriteLine("Run...");
        apa102.Clear();
        apa102.Show();

        Thread.Sleep(2000);
        apa102.SetLed(0, Color.Red, 0.5f);
        apa102.SetLed(1, Color.White);
        apa102.SetLed(2, Color.Blue);

        Thread.Sleep(2000);
        apa102.Show();

        Thread.Sleep(2000);
        apa102.AutoWrite = true;
        apa102.SetLed(0, Color.Green);
        apa102.SetLed(1, Color.Yellow);
        apa102.SetLed(2, Color.Pink);

        Thread.Sleep(5000);
        apa102.Clear();
    }
}
```