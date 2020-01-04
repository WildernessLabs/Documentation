---
uid: Meadow.Foundation.Leds.Led
remarks: *content
---

| Led         |             |
|-------------|-------------|
| Status      | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Core/Leds/) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.svg?label=Meadow.Foundation" style="width: auto; height: -webkit-fill-available;" /></a> |

An **LED** is a diode (a component that attempts to let current flow only one way through it) that emits light when voltage is applied to it. Because it is a diode, it only works when a voltage is applied in one direction. 

LEDs commonly have one lead longer (the Cathode) than the other (the Anode). The longer cathode leg indicates that it should be connected to the positive (+) side of a circuit.

### Code Example

The following example shows how to turn on and off the LED using the `IsOn` property, and uses a `StartBlink(onDuration, offDuration)` API method to make the LED blink staying on for 500ms (0.5s) and off for 1000ms (1s):

```csharp
public class LedApp : App<F7Micro, LedApp>
{
    public LedApp()
    {
        // create a new Led on pin 8
        var led = new Led(Device.CreateDigitalOutputPort(Device.Pins.D08));

        while (true)
        {
            led.IsOn = true;    // Led ON
            Thread.Sleep(3000); // 3 seconds
            led.IsOn = false;   // Led OFF
            Thread.Sleep(2000); // 2 seconds
            led.IsOn = true;    // Led ON
            Thread.Sleep(1000); // 1 second

            led.StartBlink(500, 1000);
            Thread.Sleep(5000); // 5 seconds
            led.Stop();
            Thread.Sleep(1500); // 1.5 seconds, ensure last blink cycle is complete
        }
    }
}
```

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Core.Samples) 

### Wiring Example

<img src="../../API_Assets/Meadow.Foundation.Leds.Led/Led_bb.svg" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />