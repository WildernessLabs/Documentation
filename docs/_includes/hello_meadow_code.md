### Program.cs

If you've created a .Net console app before, the `Program` class should look familiar; it's very simple and only includes a `static void Main()` method that instantiates our Meadow app:

```csharp
using Meadow;
using System.Threading;

namespace HelloMeadow
{
    class Program
    {
        static IApp app;
        public static void Main(string[] args)
        {
            if (args.Length > 0 && args[0] == "--exitOnDebug") return;

            // instantiate and run new meadow app
            app = new MeadowApp();

            Thread.Sleep(Timeout.Infinite);
        }
    }
}

```

This pattern allows us to have an App instance, in which all things Meadow are done.

### MeadowApp.cs

Let's take a brief look at the MeadowApp class:

```csharp
using System;
using System.Threading;
using Meadow;
using Meadow.Devices;
using Meadow.Foundation;
using Meadow.Foundation.Leds;

namespace HelloMeadow
{
    public class MeadowApp : App<F7Micro, MeadowApp>
    {
        RgbPwmLed onboardLed;

        public MeadowApp()
        {
            Initialize();
            CycleColors(1000);
        }

        void Initialize()
        {
            Console.WriteLine("Initialize hardware...");

            onboardLed = new RgbPwmLed(device: Device,
                redPwmPin: Device.Pins.OnboardLedRed,
                greenPwmPin: Device.Pins.OnboardLedGreen,
                bluePwmPin: Device.Pins.OnboardLedBlue,
                3.3f, 3.3f, 3.3f,
                Meadow.Peripherals.Leds.IRgbLed.CommonType.CommonAnode);
        }

        void CycleColors(int duration)
        {
            Console.WriteLine("Cycle colors...");

            while (true)
            {
                ShowColorPulse(Color.Blue, duration);
                ShowColorPulse(Color.Cyan, duration);
                ShowColorPulse(Color.Green, duration);
                ShowColorPulse(Color.GreenYellow, duration);
                ShowColorPulse(Color.Yellow, duration);
                ShowColorPulse(Color.Orange, duration);
                ShowColorPulse(Color.OrangeRed, duration);
                ShowColorPulse(Color.Red, duration);
                ShowColorPulse(Color.MediumVioletRed, duration);
                ShowColorPulse(Color.Purple, duration);
                ShowColorPulse(Color.Magenta, duration);
                ShowColorPulse(Color.Pink, duration);
            }
        }

        void ShowColorPulse(Color color, int duration = 1000)
        {
            onboardLed.StartPulse(color, (uint)(duration / 2));
            Thread.Sleep(duration);
            onboardLed.Stop();
        }

        void ShowColor(Color color, int duration = 1000)
        {
            Console.WriteLine($"Color: {color}");
            onboardLed.SetColor(color);
            Thread.Sleep(duration);
            onboardLed.Stop();
        }
    }
}

```

### Meadow Namespaces

Let's break this down into pieces, first; the Meadow namespaces:

```csharp
using Meadow;
using Meadow.Devices;
using Meadow.Foundation;
using Meadow.Foundation.Leds;
```

These are the typical minimum set of namespaces in a Meadow app class and provide the following functionality:

 * `Meadow` - The root namespace contains Meadow application and OS classes, enabling you to interact with the Meadow.OS.
 * `Meadow.Devices` - Contains device-specific definitions for different Meadow boards, such as the F7 Micro Dev board, or the F7 Micro embeddable board.
 * `Meadow.Foundation` - [Meadow.Foundation](/Meadow/Meadow.Foundation) is a set of open-source peripheral drivers and hardware control libraries that make hardware development with Meadow, plug-and-play.

### MeadowApp Class Definition

Notice that the `HelloMeadow` application class inherits from `App`, and has two generic arguments, in this case `F7Micro`, and `HelloMeadow`:

```csharp
public class HelloMeadow : App<F7Micro, HelloMeadow>
```

All Meadow applications should inherit from the [App](/docs/api/Meadow/Meadow.App-2.html) base class. Under the hood, `App` registers itself with the Meadow.OS. It also provides hooks for getting notified during system events, such as the board being put to sleep.

`App` requires two parameters; first, the current device definition, and second, the type definition of your custom `IApp` class. These are passed to provide a strongly-typed reference to the current device, as well as the current instance of the application from anywhere in the app.

The device class defines properties and capabilities of the current device such as the pins, via the `Device` property on the `App` base class, and allows you to access them using autocomplete, via the specific device type:

```csharp
Device.Pins.OnboardLedRed
```

```csharp
public MeadowApp()
{
    Initialize();
    CycleColors(1000);
}
```

This MeadowApp() call calls an initialization method, described below, and also a new method called CycleColors with a duration of 1000ms.

### Controlling the Onboard LED via Ports

<!-- TODO: convert to Meadow.Foundation and explain that. -->

Direct access to hardware Input/Output (IO) is generally available via _ports_ and _buses_. In this case, we create a `IDigitalOutputPort` for each color component (red, green, and blue) of the onboard LED:

```csharp
RgbPwmLed onboardLed;
...

void Initialize()
{
    Console.WriteLine("Initialize hardware...");

    onboardLed = new RgbPwmLed(device: Device,
        redPwmPin: Device.Pins.OnboardLedRed,
        greenPwmPin: Device.Pins.OnboardLedGreen,
        bluePwmPin: Device.Pins.OnboardLedBlue,
        3.3f, 3.3f, 3.3f,
        Meadow.Peripherals.Leds.IRgbLed.CommonType.CommonAnode);
}
```

The `Initialize` call writes to the console for informational purposes, useful when debugging and watching your app start. Then ports are created from the device itself, and the `Pins` property provides named pins that map to the pins available on the particular device specified above in the `App` definition.


#### Digital Output

To pulse the color of the light emitted via the onboard LED, we can utilize the built in `StartPulse()` method of the `RgbPwmLed` class, this is done in the ShowColorPulse method, which takes a color and duration. All of this is tied together with the CycleColors call which will simply cycle through a variety of colors:


```csharp
void CycleColors(int duration)
{
    Console.WriteLine("Cycle colors...");

    while (true)
    {
        ShowColorPulse(Color.Blue, duration);
        ShowColorPulse(Color.Cyan, duration);
        ShowColorPulse(Color.Green, duration);
        ShowColorPulse(Color.GreenYellow, duration);
        ShowColorPulse(Color.Yellow, duration);
        ShowColorPulse(Color.Orange, duration);
        ShowColorPulse(Color.OrangeRed, duration);
        ShowColorPulse(Color.Red, duration);
        ShowColorPulse(Color.MediumVioletRed, duration);
        ShowColorPulse(Color.Purple, duration);
        ShowColorPulse(Color.Magenta, duration);
        ShowColorPulse(Color.Pink, duration);
    }
}

void ShowColorPulse(Color color, int duration = 1000)
{
    onboardLed.StartPulse(color, (uint)(duration / 2));
    Thread.Sleep(duration);
    onboardLed.Stop();
}

```