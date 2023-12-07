---
uid: Meadow.Foundation.Sensors.Atmospheric.Mpl3115a2
remarks: *content
---

| Mpl3115a2 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Mpl3115a2) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Mpl3115a2/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Atmospheric.Mpl3115a2/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Atmospheric.Mpl3115a2.svg?label=Meadow.Foundation.Sensors.Atmospheric.Mpl3115a2" alt="NuGet Gallery for Meadow.Foundation.Sensors.Atmospheric.Mpl3115a2" /></a> |

The **MPL3115A2** is a barometric pressure sensor capable of reading both temperature and temperature compensated pressure reading.  This sensor includes the following features:

* I2C digital interface
* 24-bit ADC
* Altitude and pressure measurements
* Temperature sensor

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Mpl3115A2/Samples/) 

## Purchasing

The MPL3115A2 is available on breakout boards and a weather shield:

* [Adafruit MPL3115A2 Breakout Board](https://www.adafruit.com/product/1893)
* [Sparkfun MPL3115A2 Breakout Board](https://www.sparkfun.com/products/11084)
* [Sparkfun Weather Shield](https://www.sparkfun.com/products/13956)

### Code Example

```csharp
Mpl3115a2? sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    sensor = new Mpl3115a2(Device.CreateI2cBus());

    var consumer = Mpl3115a2.CreateObserver(
        handler: result =>
        {
            Resolver.Log.Info($"Observer: Temp changed by threshold; new temp: {result.New.Temperature?.Celsius:N2}C, old: {result.Old?.Temperature?.Celsius:N2}C");
        },
        filter: result =>
        {
            //c# 8 pattern match syntax. checks for !null and assigns var.
            if (result.Old?.Temperature is { } oldTemp &&
                result.New.Temperature is { } newTemp)
            {
                return (newTemp - oldTemp).Abs().Celsius > 0.5; // returns true if > 0.5°C change.
            }
            return false;
        }
    );
    sensor.Subscribe(consumer);

    sensor.Updated += (sender, result) => {
        Resolver.Log.Info($"  Temperature: {result.New.Temperature?.Celsius:N2}C");
        Resolver.Log.Info($"  Pressure: {result.New.Pressure?.Bar:N2}bar");
    };

    return Task.CompletedTask;
}

public override async Task Run()
{
    if(sensor == null) { return; }

    var conditions = await sensor.Read();
    Resolver.Log.Info($"Temperature: {conditions.Temperature?.Celsius}°C, Pressure: {conditions.Pressure?.Pascal}Pa");

    sensor.StartUpdating(TimeSpan.FromSeconds(1));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Mpl3115a2/Samples/Mpl3115a2_Sample)

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

<img src="../../API_Assets/Meadow.Foundation.Sensors.Atmospheric.Mpl3115a2/Mpl3115a2_Fritzing.svg" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />




