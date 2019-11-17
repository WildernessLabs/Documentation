---
uid: Meadow.Foundation.Leds.RgbPwmLed
remarks: *content
---

Represents an RGB LED whose color is controlled by the duty-cycle of three PWM signals. Can be used both with LEDs that have been current limited with in-series resistors, or LEDs without resistors.

Controlling an RGB LED via a PWM signal is more power efficient than using a current-limiting resistor, and it provides more control; allowing thousands of different colors, as opposed to the 8 colors of non-PWM powered RGB LED.

To use without resistors, pass in the forward voltages (voltage drop) of each of the LED components to the `redLedForwardVotlage`, `greenLedForwardVotlage`, and `blueLedForwardVotlage`, constructor parameters, and the class will limit its output to the maximum forward voltage rating for those LEDs.

To use with an LED that has a resistor in series, pass `0.0` or `TypicalForwardVoltage.ResistorLimited` for the `forwardVoltage` parameter.

---
uid: Meadow.Foundation.Leds.RgbPwmLed
example: [*content]
---

###Displaying the Rainbow of Hues

The following example code loops through the entire 360º of hue spectrum and displays that color on the RGB LED.

```csharp
using System.Threading;
using Meadow;
using Meadow.Foundation.LEDs;

namespace PwmLedSample
{
    public class Program
    {
        static IApp _app; 
        public static void Main()
        {
            _app = new App();
        }
    }

    public App : AppBase<F7Micro, App>
    {
        public App()
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
}
```

##### Example Circuit

![](../../API_Assets/Meadow.Foundation.Leds.RgbPwmLed/RgbPwmLed.svg)