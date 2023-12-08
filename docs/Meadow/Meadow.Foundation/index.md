---
layout: Meadow
title: Meadow.Foundation
subtitle: Peripheral driver library and hardware control libraries that make IoT development plug-and-play.
---

![Meadow.Foundation Logo](Meadow.Foundation_Logo_white_BG.svg){:standalone}

Meadow.Foundation greatly simplifies the task of building connected things with Meadow, by providing a unified driver and library framework that includes drivers and abstractions for common peripherals such as sensors, displays, motors, and more. Additionally, it includes utility functions and helpers for common tasks when building connected things.

It's completely [open source](https://github.com/WildernessLabs/Meadow.Foundation) and we welcome pull-requests!

## Hello, World Example

With Meadow.Foundation, you can use drivers and hardware abstractions directly. For example, instead of using an `IDigitalOutputPort` class, an LED can be driven by the the [`PwmLed`](/docs/api/Meadow.Foundation/Meadow.Foundation.Leds.PwmLed.html) class, using high-level methods such as `StartBlink()`, `StartPulse()`, and more.

```csharp
using Meadow;
using Meadow.Devices;
using Meadow.Foundation;
using Meadow.Foundation.Leds;
...

public class MeadowApp : App<F7FeatherV2>
{
    PwmLed pwmLed;

    public override Task Initialize()
    {
        pwmLed = new PwmLed(
            Device,
            Device.Pins.OnboardLedGreen,
            TypicalForwardVoltage.Green);
        return base.Initialize();
    }

    public override Task Run()
    {
        // blink the LED
        pwmLed.StartBlink();

        // keep the app running
        Thread.Sleep(Timeout.Infinite);
        return base.Run();
    }
}
```

**[Get Started with Meadow.Foundation](/Meadow/Meadow.Foundation/Getting_Started)**

## Huge Peripheral Driver Library

Meadow.Foundation has built in support for most common sensors, motors, and other peripherals available on the market.

**[See the full peripheral list](/Meadow/Meadow.Foundation/Peripherals)**

## Powerful Frameworks and Libraries

**[See the full list](/Meadow/Meadow.Foundation/Libraries_and_Frameworks)**
