---
uid: Meadow.Foundation.Leds.RgbLed

---

| RgbLed | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core/Leds) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.svg?label=Meadow.Foundation" alt="NuGet Gallery for Meadow.Foundation" /></a> |

**RgbLed** represents an RGB LED whose color is controlled by three digital output ports. These diodes consist of four legs - one for each of the colors mentioned and one for a common cathode (ground) or common anode (vcc), which is also the longest one.

![Common Cathode/Common Anode RGB LEDs](/docs/API_Assets/Meadow.Foundation.Leds.RgbLed/RgbLed.jpg)

To connect these deds to Meadow, it is recommended to use an external resistor of ~270 to 1K ohms to prevent too much current from flowing through the led and causing damage. 

### Circuit of a common anode RGB LED

![Common Anode RGB LEDs](/docs/API_Assets/Meadow.Foundation.Leds.RgbLed/RgbLed_CommonAnode_Fritzing.png)

### Circuit of a common cathode RGB LED

![Common Cathode RGB LEDs](/docs/API_Assets/Meadow.Foundation.Leds.RgbLed/RgbLed_CommonCathode_Fritzing.png)

### Code Example

```csharp
protected List<RgbLed> rgbLeds;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

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

    return Task.CompletedTask;
}

public override async Task Run()
{
    Resolver.Log.Info("TestRgbLeds...");

    while (true)
    {
        Resolver.Log.Info("Going through each color on each RGB LED...");
        foreach (var rgbLed in rgbLeds)
        {
            for (int i = 0; i < (int)RgbLedColors.count; i++)
            {
                rgbLed.SetColor((RgbLedColors)i);
                await Task.Delay(500);
            }
        }

        await Task.Delay(1000);

        Resolver.Log.Info("Blinking through each color on each RGB LED (on 500ms / off 500ms)...");
        foreach (var rgbLed in rgbLeds)
        {
            for (int i = 0; i < (int)RgbLedColors.count; i++)
            {
                await rgbLed.StartBlink((RgbLedColors)i);
                await Task.Delay(3000);
                await rgbLed.StopAnimation();
                rgbLed.IsOn = false;
            }
        }

        await Task.Delay(1000);

        Resolver.Log.Info("Blinking through each color on each RGB LED (on 1s / off 1s)...");
        foreach (var rgbLed in rgbLeds)
        {
            for (int i = 0; i < (int)RgbLedColors.count; i++)
            {
                await rgbLed.StartBlink((RgbLedColors)i, TimeSpan.FromSeconds(1), TimeSpan.FromSeconds(1));
                await Task.Delay(3000);
                await rgbLed.StopAnimation();
                rgbLed.IsOn = false;
            }
        }

        await Task.Delay(1000);
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core.Samples/Leds.RgbLed_Sample)

