---
layout: Meadow
title: Get started with Meadow Core-Compute module
subtitle: "To get up and running with Meadow Core-Compute, follow these steps:"
---

Getting started with the [Meadow Core-Compute module](https://store.wildernesslabs.co/collections/frontpage/products/meadow-f7v2-core-compute-module) is similar to getting started with a [Meadow Feather board](https://store.wildernesslabs.co/collections/frontpage/products/meadow-f7-feather), especially if you are working with the [Core-Compute Development Kit](https://store.wildernesslabs.co/collections/frontpage/products/meadow-f7v2-core-compute-breakout-board).

If you are working with a bare Meadow Core-Compute module without the development kit, you will likely want to connect the castellated pins to peripherals to be able to move beyond logging or code-only projects. For production builds, the Core-Compute board on its own doesn't include an onboard LED to interact with.

1. Download and Install [Visual Studio](https://visualstudio.microsoft.com/) for either Windows or macOS to prepare your development machine. Community edition will work fine.
1. Use the Meadow.CLI to [deploy Meadow.OS to your board](/Meadow/Getting_Started/Deploying_Meadow/), booting the Core-Compute module into bootloader mode when you first connect it to your development machine.
1. Deploy your first Meadow application. You can start from a [Hello, Meadow](/Meadow/Getting_Started/Hello_World/) application, but you will need to connect external components or peripherals to recreate the experience of the onboard RGB LED. You will see logging output without any additional components.

    For a simple example, on the Core-Compute Development Kit, you could bridge an LED between the ground pin and pin **D15** and toggle it.

    ```csharp
    using Meadow;
    using Meadow.Devices;
    using Meadow.Foundation.Leds;
    using System;
    using System.Threading.Tasks;

    namespace HelloMeadow
    {
        // Change F7FeatherV2 or F7FeatherV1 for Feather boards
        public class MeadowApp : App<F7CoreComputeV2>
        {
            Led led;

            public override Task Run()
            {
                Console.WriteLine("Run...");

                led.StartBlink(TimeSpan.FromSeconds(1), TimeSpan.FromSeconds(0.5));

                return base.Run();
            }

            public async override Task Initialize()
            {
                Console.WriteLine("Initialize...");

                led = new Led(Device.CreateDigitalOutputPort(Device.Pins.D15));

                await base.Initialize();
            }
        }
    }
    ```
