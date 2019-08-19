---
layout: Guides
title: Meadow.Foundation
subtitle: Guides and documentation for Meadow
---

![Meadow.Foundation Logo](Meadow.Foundation_Logo.svg){:standalone}

Meadow.Foundation greatly simplifies the task of building connected things with Meadow, by providing a unified driver and library framework that includes drivers and abstractions for common peripherals such as sensors, displays, motors, and more. Additionally, it includes utility functions and helpers for common tasks when building connected things.

It's completely [open source](https://github.com/WildernessLabs/Meadow.Foundation) and we welcome pull-requests!

## Hello, World Example

```
using System.Threading;
using Meadow;
using Meadow.Foundation;

public class HelloBlinky
{
    public static void Main()
    {
        var pwmLed = new LEDs.PwmLed(
            App.Device.D01, 
            LEDs.TypicalForwardVoltage.Green);

            // pulse the LED
            pwmLed.StartPulse();

            // keep the app running
            Thread.Sleep(Timeout.Infinite);
    }
}
```

**[Get Started with Meadow.Foundation](/Guides/Meadow.Foundation/Getting_Started)**

## Huge Peripheral Driver Library

Meadow.Foundation has built in support for most common sensors, motors, and other peripherals available on the market.

**[See the full peripheral list](/Guides/Meadow.Foundation/Peripherals)**

## Powerful Frameworks and Libraries

**[See the full list](/Guides/Meadow.Foundation/Libraries_and_Frameworks)**
