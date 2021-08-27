---
uid: Meadow.Foundation.Sensors.Temperature.Tmp102
remarks: *content
---

| Tmp102 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Tmp102) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Temperature.Tmp102/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Temperature.Tmp102.svg?label=Meadow.Foundation.Sensors.Temperature.Tmp102" /></a> |

The **TMP102** is a temperature sensor capable of reading the current temperature with an accuracy of 0.5C over the range of -25C to 85C with a total range of -40C to 125C.

## Purchasing

TMP102 sensors are available on a breakout board from the following suppliers:

* [Sparkfun TMP102 Breakout Board](https://www.sparkfun.com/products/13314)

The TMP102 temperature sensor can operate in interrupt or polling mode.

### Code Example

```csharp
Tmp102 tmp102;

public MeadowApp()
{
    Console.WriteLine("Initializing...");

    tmp102 = new Tmp102(Device.CreateI2cBus());

    var consumer = Tmp102.CreateObserver(
        handler: result =>
        {
            Console.WriteLine($"Temperature New Value { result.New.Celsius}C");
            Console.WriteLine($"Temperature Old Value { result.Old?.Celsius}C");
        },
        filter: null
    );
    tmp102.Subscribe(consumer);

    tmp102.TemperatureUpdated += (object sender, IChangeResult<Meadow.Units.Temperature> e) =>
    {
        Console.WriteLine($"Temperature Updated: {e.New.Celsius:N2}C");
    };

    tmp102.StartUpdating(TimeSpan.FromSeconds(1));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Tmp102/Samples/Sensors.Temperature.Tmp102_Sample)

### Interrupt Mode

The example below will check the temperature every second.  An interrupt will be raised if the difference in temperature between the last reported reading and the current reading is greater than + / - 0.1 &deg;C.

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    public MeadowApp()
    {
        Console.WriteLine("TMP102 Interrupt Sample");

        // Create a new TMP102 object, check the temperature every
        // 1s and report any changes grater than +/- 0.1C.
        var tmp102 = new TMP102(updateInterval: 1000, temperatureChangeNotificationThreshold: 0.1F);

        // Hook up the interrupt handler.
        tmp102.TemperatureChanged += (s, e) =>
        {
            Console.WriteLine("Temperature: " + e.CurrentValue.ToString("f2"));
        };

        // Now put the main program to sleep as the interrupt handler
        // above deals with processing the sensor data.
        Thread.Sleep(Timeout.Infinite);
    }
}
```

### Polling Mode

The following application reads the temperature from the TMP102 sensor every second and displays the results in the debug console:

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    public MeadowApp()
    {
      gi  Console.WriteLine("TMP102 Test");
        var tmp102 = new TMP102();
        while (true)
        {
            Console.WriteLine("Temperature: " + tmp102.Temperature.ToString("f2"));
            Thread.Sleep(1000);
        }
    }
}
```

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Tmp102/Samples/) 

### Wiring Example

TMP102 sensors can be connected to Meadow using only four connections:

<img src="../../API_Assets/Meadow.Foundation.Sensors.Temperature.TMP102/TMP102.svg" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />




