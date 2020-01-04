---
uid: Meadow.Foundation.Sensors.Atmospheric.Mpl3115a2
remarks: *content
---

| MPL3115A2     |             |
|---------------|-------------|
| Status        | Not working |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.MPL3115A2) |
| NuGet package | Not published |

The **MPL3115A2** is a barometric pressure sensor capable of reading both temperature and temperature compensated pressure reading.  This sensor includes the following features:

* I2C digital interface
* 24-bit ADC
* Altitude and pressure measurements
* Temperature sensor

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Mpl3115A2/Samples/) 

## Purchasing

The MPL3115A2 is available on breakout boards and a weather shield:

* [Adafruit MPL3115A2 Breakout Board](https://www.adafruit.com/product/1893)
* [Sparkfun MPL3115A2 Breakout Board](https://www.sparkfun.com/products/11084)
* [Sparkfun Weather Shield](https://www.sparkfun.com/products/13956)

#### Interrupt Mode

The application below connects the MPL3115A2 to two interrupt handlers.  These interrupt handlers (events) will display the `Temperature` and `Pressure` properties when the handlers are triggered.  The sensor is checked every 100 milliseconds (the default for the `updatePeriod`).

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    public MeadowApp()
    {
        Console.WriteLine("MPL3115A2 Interrupt Example");
        var mpl3115a2 = new MPL3115A2(temperatureChangeNotificationThreshold: 0.1F);
        mpl3115a2.TemperatureChanged += (s, e) =>
        {
            Console.WriteLine("Temperature: " + mpl3115a2.Temperature.ToString("f2"));
        };
        mpl3115a2.PressureChanged += (s, e) =>
        {
            Console.WriteLine("Pressure: " + mpl3115a2.Pressure.ToString("f2")); 
        };
        Thread.Sleep(Timeout.Infinite);
    }
}
```

#### Polling Mode

The following application reads the temperature and pressure every second and displays the result on the debug console:

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    public MeadowApp()
    {
        Console.WriteLine("MPL3115A2 Polling Example");
        var mpl3115a2 = new MPL3115A2(updateInterval: 0);
        while (true)
        {
            mpl3115a2.Update();
            Console.WriteLine("Temperature: " + mpl3115a2.Temperature.ToString("f2") + ", Pressure: " + mpl3115a2.Pressure.ToString("f2"));
            Thread.Sleep(1000);
        }
    }
}
```

### Wiring Example

MPL3115A2 configured for polling more data reads:

<img src="../../API_Assets/Meadow.Foundation.Sensors.Barometric.MPL3115A2/MPL3115A2.svg" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />