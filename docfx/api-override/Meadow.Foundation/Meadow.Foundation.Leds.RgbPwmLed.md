---
uid: Meadow.Foundation.Leds.RgbPwmLed
remarks: *content
---

| RgbPwmLed | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core/Leds) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.svg?label=Meadow.Foundation" alt="NuGet Gallery for Meadow.Foundation" /></a> |

**RgbPwmLed** represents an RGB LED whose color is controlled by the duty-cycle of three PWM signals. Can be used both with LEDs that have been current limited with in-series resistors, or LEDs without resistors.

Controlling an RGB LED via a PWM signal is more power efficient than using a current-limiting resistor, and it provides more control; allowing thousands of different colors, as opposed to the 8 colors of non-PWM powered RGB LED.

To use without resistors, pass in the forward voltages (voltage drop) of each of the LED components to the `redLedForwardVoltage`, `greenLedForwardVoltage`, and `blueLedForwardVoltage`, constructor parameters, and the class will limit its output to the maximum forward voltage rating for those LEDs.

To use with an LED that has a resistor in series, pass `0.0` or `TypicalForwardVoltage.ResistorLimited` for the `forwardVoltage` parameter.

### Code Example

```csharp
RgbPwmLed onboardLed;

public override Task Initialize()
{
    Console.WriteLine("Creating peripherals...");
    
    onboardLed = new RgbPwmLed(
        Device,
        Device.Pins.OnboardLedRed,
        Device.Pins.OnboardLedGreen,
        Device.Pins.OnboardLedBlue,
        commonType: CommonType.CommonAnode);

    return Task.CompletedTask;
}

public override Task Run()
{
    TestColors();

    RunColors();

    return Task.CompletedTask;
}

public void TestColors()
{
    onboardLed.SetColor(Color.Crimson);
    Thread.Sleep(3000);
    onboardLed.SetColor(Color.MediumPurple);
    Thread.Sleep(3000);
    onboardLed.SetColor(Color.FromHex("#23abe3"));
}

public void RunColors()
{
    while (true) {

        // loop through the entire hue spectrum (360 degrees)
        for (int i = 0; i < 360; i++) {
            var hue = ((double)i / 360F);
            Console.WriteLine($"Hue: {hue}");

            // set the color of the RGB
            onboardLed.SetColor(Color.FromHsba((hue), 1, 1));

            Thread.Sleep(18);
        }
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core.Samples/Leds.RgbPwmLed_Onboard_Sample)

### Example Code

The following example code loops through the entire 360º of hue spectrum and displays that color on the RGB LED.

```csharp
public MeadowApp : App<F7Micro, MeadowApp>
{
    public MeadowApp()
    {
        // create a new RgbPwmLed on pin 8
        var pwmLed = new RgbPwmLed(
            redPin: Device.Pins.D11,
            greenPin: Device.Pins.D10,
            bluePin: Device.Pins.D09,
            redLedForwardVoltage: 1.05f,
            greenLedForwardVoltage: 1.5f,
            blueLedForwardVoltage: 1.5f);
        );

        // alternate between blinking and pulsing the LED 
        while (true)
        {
            for (int i = 0; i < 360; i++)
            {
                var hue = ((double)i / 360F);
                Debug.Print(hue.ToString());

                // set the color of the RGB
                rgbPwmLed.SetColor(Color.FromHsba(((double)i / 360F), 1, 1));

                // for a fun, fast rotation through the hue spectrum:
                //Thread.Sleep (1);
                // for a gentle walk through the forest of colors;
                Thread.Sleep(18);
            }
        }
    }
}
```

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core.Samples) 

### Wiring Example

<img src="../../API_Assets/Meadow.Foundation.Leds.RgbPwmLed/RgbPwmLed_Fritzing.svg" 
