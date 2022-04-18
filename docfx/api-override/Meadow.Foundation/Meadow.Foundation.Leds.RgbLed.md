---
uid: Meadow.Foundation.Leds.RgbLed
remarks: *content
---

| RgbLed | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core/Leds) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.svg?label=Meadow.Foundation" /></a> |

**RgbLed** represents an RGB LED whose color is controlled by three digital output ports. These diodes consist of four legs - one for each of the colors mentioned and one for a common cathode (ground) or common anode (vcc), which is also the longest one.

<img src="../../API_Assets/Meadow.Foundation.Leds.RgbLed/RgbLed.jpg" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />

To connect these deds to Meadow, it is recommended to use an external resistor of ~270 to 1K ohms to prevent too much current from flowing through the led and causing damage. 

### Circuit of a common anode RGB LED

<img src="../../API_Assets/Meadow.Foundation.Leds.RgbLed/RgbLed_CommonAnode_Fritzing.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />

### Circuit of a common cathode RGB LED

<img src="../../API_Assets/Meadow.Foundation.Leds.RgbLed/RgbLed_CommonCathode_Fritzing.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />

### Code Example

```csharp
protected List<RgbLed> rgbLeds;

public MeadowApp()
{
    Console.WriteLine("Initializing...");

    var onRgbLed = new RgbLed(
        device: Device,
        redPin: Device.Pins.OnboardLedRed,
        greenPin: Device.Pins.OnboardLedGreen,
        bluePin: Device.Pins.OnboardLedBlue);
    onRgbLed.SetColor(RgbLed.Colors.Red);

    rgbLeds = new List<RgbLed>
    {
        new RgbLed(
            Device.CreateDigitalOutputPort(Device.Pins.D02),
            Device.CreateDigitalOutputPort(Device.Pins.D03),
            Device.CreateDigitalOutputPort(Device.Pins.D04)),
        new RgbLed(
            Device.CreateDigitalOutputPort(Device.Pins.D05),
            Device.CreateDigitalOutputPort(Device.Pins.D06),
            Device.CreateDigitalOutputPort(Device.Pins.D07)),
        new RgbLed(
            Device.CreateDigitalOutputPort(Device.Pins.D08),
            Device.CreateDigitalOutputPort(Device.Pins.D09),
            Device.CreateDigitalOutputPort(Device.Pins.D10)),
        new RgbLed(
            Device.CreateDigitalOutputPort(Device.Pins.D11),
            Device.CreateDigitalOutputPort(Device.Pins.D12),
            Device.CreateDigitalOutputPort(Device.Pins.D13))
    };

    onRgbLed.SetColor(RgbLed.Colors.Green);

    TestRgbLeds();
}

protected void TestRgbLeds()
{
    Console.WriteLine("TestRgbLeds...");

    while (true)
    {
        Console.WriteLine("Going through each color on each RGB LED...");
        foreach (var rgbLed in rgbLeds)
        {
            for (int i = 0; i < (int)RgbLed.Colors.count; i++)
            {
                rgbLed.SetColor((RgbLed.Colors)i);
                Thread.Sleep(500);
            }
        }

        Thread.Sleep(1000);

        Console.WriteLine("Blinking through each color on each RGB LED...");
        foreach (var rgbLed in rgbLeds)
        {
            for (int i = 0; i < (int)RgbLed.Colors.count; i++)
            {
                rgbLed.StartBlink((RgbLed.Colors)i);
                Thread.Sleep(3000);
            }
        }

        Thread.Sleep(1000);

        Console.WriteLine("Blinking through each color on each RGB LED...");
        foreach (var rgbLed in rgbLeds)
        {
            for (int i = 0; i < (int)RgbLed.Colors.count; i++)
            {
                rgbLed.StartBlink((RgbLed.Colors)i, TimeSpan.FromSeconds(1), TimeSpan.FromSeconds(1));
                Thread.Sleep(3000);
            }
        }

        Thread.Sleep(1000);
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core.Samples/Leds.RgbLed_Sample)

