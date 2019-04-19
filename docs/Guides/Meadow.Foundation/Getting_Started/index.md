# Getting Started with Meadow.Foundation

## Hello, World!

1. [Configure your Meadow development environment](/guides/Getting_Started/Setup/index.html).
3. Create a new .NET console application.
4. `Install-Package Meadow.Foundation` (Detailed Nuget instructions: [Mac](https://docs.microsoft.com/en-us/visualstudio/mac/nuget-walkthrough), [Windows](https://docs.microsoft.com/en-us/nuget/tools/package-manager-ui)).
5. Plug the longer leg (cathode) of a green LED into pin `11` and the other leg into `GND`:
  [Need image]
6. Add the following code to the `program.cs` file in your application, then deploy and run:
 
```csharp
using Meadow;
using Meadow.Foundation;
using System.Threading;

namespace HelloPulsy
{
    public class HelloWorldProgram
    {
        public static void Main()
        {
            // create a new LED on pin 11
            var pwmLed = new LEDs.PwmLed(Device.Pins.D11, 
                LEDs.TypicalForwardVoltage.Green);

            // pulse the LED
            pwmLed.StartPulse();

            // keep the app running
            Thread.Sleep(Timeout.Infinite);
        }
    }
}
```

That's it, and you're up and running using Meadow.Foundation!

Next up, check out how to work with sensors; which comprise a huge portion of the Meadow.Foundation [peripheral library](/guides/Meadow.Foundation/Peripherals/index.html).

## [Next - Working with Sensors](/guides/Meadow.Foundation/Working_w_Sensors/index.html)