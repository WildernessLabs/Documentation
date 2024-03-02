---
layout: Meadow
title: Getting Started
subtitle: Meadow.Foundation
---

## Hello, World!

1. [Configure your Meadow development environment](/Meadow/Getting_Started/).
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
        // Change F7FeatherV2 to F7FeatherV1 for V1.x boards
        public class MeadowApp : App<F7FeatherV2>
        {
            PwmLed pwmLed;

            public override Task Initialize()
            {
                pwmLed = new PwmLed(Device.Pins.D13, TypicalForwardVoltage.Blue);
                return base.Initialize();
            }

            public override Task Run()
            {
                // pulse the LED
                pwmLed.StartPulse();
                return base.Run();
            }
        }
    }
    ```

1. That's it, you're controlling a blue LED with a PWM signal, using Meadow.Foundation's `PwmLed` driver!

    ![Video of a Meadow pulsing a blue LED via pulse-width modulation.](HelloPulsy.gif)

