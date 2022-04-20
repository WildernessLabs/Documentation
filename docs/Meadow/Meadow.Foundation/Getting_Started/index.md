---
layout: Meadow
title: Getting Started
subtitle: Meadow.Foundation
---

## Hello, World!

1. [Configure your Meadow development environment](/Meadow/Getting_Started/Setup).
1. Create a new C# Meadow Application project, name it `HelloPulsy`.
1. Plug the longer leg (anode) of a blue LED into pin `13` and the other leg into `GND`:
    ![Diagram of a Meadow with a blue LED legs connected between ground and pin D13.](PwmLed.png)
1. Replace the template logic in `MeadowApp.cs` with the code below, then deploy and run:

```csharp
using Meadow;
using Meadow.Devices;
using Meadow.Foundation.Leds;

namespace HelloPulsy
{
    public class MeadowApp : App<F7Micro, MeadowApp>
    {
        public MeadowApp()
        {
            var pwmLed = new PwmLed(Device, Device.Pins.D13, TypicalForwardVoltage.Blue);

            // pulse the LED
            pwmLed.StartPulse();
        }
    }
}
```

That's it, you're controlling a blue LED with a PWM signal, using Meadow.Foundation's `PwmLed` driver!

![Video of a Meadow pulsing a blue LED via pulse-width modulation.](HelloPulsy.gif)

Next up, check out how to work with sensors; which comprise a huge portion of the Meadow.Foundation [peripheral library](/Meadow/Meadow.Foundation/Peripherals).

## [Next - Working with Sensors](/Meadow/Meadow.Foundation/Working_with_Sensors/)
