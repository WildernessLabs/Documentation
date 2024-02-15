---
uid: Meadow.Foundation.Sensors.Atmospheric.Bme280
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Bme280
---

| Bme280 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme280) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme280/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Atmospheric.Bme280/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Atmospheric.Bme280.svg?label=Meadow.Foundation.Sensors.Atmospheric.Bme280" alt="NuGet Gallery for Meadow.Foundation.Sensors.Atmospheric.Bme280" /></a> |

The **BME280** is a combined temperature, pressure and humidity sensor controlled via I2C.

### Code Example

```csharp
Bme280 sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    //CreateSpiSensor();
    CreateI2CSensor();

    var consumer = Bme280.CreateObserver(
        handler: result =>
        {
            Resolver.Log.Info($"Observer: Temp changed by threshold; new temp: {result.New.Temperature?.Celsius:N2}C, old: {result.Old?.Temperature?.Celsius:N2}C");
        },
        filter: result =>
        {
            if (result.Old is { } old)
            {
                return (
                (result.New.Temperature.Value - old.Temperature.Value).Abs().Celsius > 0.5
                &&
                (result.New.Humidity.Value - old.Humidity.Value).Percent > 0.05
                );
            }
            return false;
        }
    );
    sensor.Subscribe(consumer);

    sensor.Updated += (sender, result) =>
    {
        Resolver.Log.Info($"  Temperature: {result.New.Temperature?.Celsius:N2}C");
        Resolver.Log.Info($"  Relative Humidity: {result.New.Humidity:N2}%");
        Resolver.Log.Info($"  Pressure: {result.New.Pressure?.Millibar:N2}mbar ({result.New.Pressure?.Pascal:N2}Pa)");
    };

    return Task.CompletedTask;
}

public override async Task Run()
{
    var conditions = await sensor.Read();
    Resolver.Log.Info("Initial Readings:");
    Resolver.Log.Info($"  Temperature: {conditions.Temperature?.Celsius:N2}C");
    Resolver.Log.Info($"  Pressure: {conditions.Pressure?.Bar:N2}hPa");
    Resolver.Log.Info($"  Relative Humidity: {conditions.Humidity?.Percent:N2}%");

    sensor.StartUpdating(TimeSpan.FromSeconds(1));
}

void CreateSpiSensor()
{
    Resolver.Log.Info("Create BME280 sensor with SPI...");

    var spi = Device.CreateSpiBus();
    sensor = new Bme280(spi, Device.Pins.D00.CreateDigitalOutputPort());
}

void CreateI2CSensor()
{
    Resolver.Log.Info("Create BME280 sensor with I2C...");

    var i2c = Device.CreateI2cBus();
    sensor = new Bme280(i2c, (byte)Bme280.Addresses.Default); // SDA pulled up

}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme280/Samples/Bme280_Sample)

### Interrupt Mode

When the driver is operating in interrupt mode, the driver will periodically check the sensor reading.  An interrupt will be generated if the difference between the last reported reading and the current reading is greater than a threshold value.

The sensor operates in interrupt mode by default.

The following application will generate interrupts when changes to any one of the temperature, humidity or pressure readings exceed their threshold values:

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    Bme280 bme280;

    public MeadowApp()
    {
        Console.WriteLine("Initializing...");

        // configure our BME280 on the I2C Bus
        var i2c = Device.CreateI2cBus();
        bme280 = new Bme280 (
            i2c,
            Bme280.I2cAddress.Adddress0x77 //default
        );

        bme280.Subscribe(new FilterableObserver<AtmosphericConditionChangeResult, AtmosphericConditions>(
            h => {
                Console.WriteLine($"Temp and pressure changed by threshold; new temp: {h.New.Temperature}, old: {h.Old.Temperature}");
            },
            e => {
                return (
                    (Math.Abs(e.Delta.Temperature) > 1)
                    &&
                    (Math.Abs(e.Delta.Pressure) > 5)
                    );
            }
        ));

        // classical .NET events can also be used:
        bme280.Updated += (object sender, AtmosphericConditionChangeResult e) => 
        {
            Console.WriteLine($"  Temperature: {e.New.Temperature}ºC");
            Console.WriteLine($"  Pressure: {e.New.Pressure}hPa");
            Console.WriteLine($"  Relative Humidity: {e.New.Humidity}%");
        };

        // get chip id
        Console.WriteLine($"ChipID: {bme280.GetChipID():X2}");            

        // get an initial reading
        ReadConditions().Wait();

        // start updating continuously
        bme280.StartUpdating();
    }

    protected async Task ReadConditions()
    {
        var conditions = await bme280.Read();
        Console.WriteLine("Initial Readings:");
        Console.WriteLine($"  Temperature: {conditions.Temperature}ºC");
        Console.WriteLine($"  Pressure: {conditions.Pressure}hPa");
        Console.WriteLine($"  Relative Humidity: {conditions.Humidity}%");
    }
}
```

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme280/Samples/) 

### Polling Mode

In polling mode, it is the responsibility of the main application to check the sensor readings ona periodic basis.  The following application creates an instance of the `BME280` class using the I2C interface.  The temperature, pressure and humidity are read every second and the readings displayed using the debugger.

The sensor is put into polling mode by setting the `updateInterval` to `0` in the constructor.

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    public MeadowApp()
    {
        // Create a new BME280 object and put the sensor into polling
        // mode (update interval set to 0ms).
        Bme280 sensor = new Bme280(updateInterval: 0);

        string message;
        while (true)
        {
            // Make the sensor take new readings.
            sensor.Update();

            // Prepare a message for the user and output to the debug console.
            message = "Temperature: " + sensor.Temperature.ToString("F1") + " C\n";
            message += "Humidity: " + sensor.Humidity.ToString("F1") + " %\n";
            message += "Pressure: " + (sensor.Pressure / 100).ToString("F0") + " hPa\n\n";
            Console.WriteLine(message);

            // Sleep for 1000ms before repeating the process.
            Thread.Sleep(1000);
        }
    }
}
```

### Wiring Example

The BME280 can be connected using I2C or SPI.  Only 4 wires are required when using I2C:

* 3.3V
* Ground
* SDA
* SCL

<img src="/API_Assets/Meadow.Foundation.Sensors.Atmospheric.BME280/BME280_Fritzing.svg" />

It should be noted that the Sparkfun board is supplied with pull-up resistors enabled by default.  The Adafruit board does not have any pull-up resistors onboard.  It is therefore necessary to add two pull-up resistors (`4.7 K` should be adequate for a single device) between 3.3V and SDA and 3.3V and SCL.





# Class Bme280
BME280 Temperature, Pressure and Humidity Sensor

###### **Assembly**: Bme280.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme280/Driver/Bme280.StandbyDuration.cs#L3)
```csharp title="Declaration"
public class Bme280 : PollingSensorBase<(Temperature? Temperature, RelativeHumidity? Humidity, Pressure? Pressure)>, IObservable<IChangeResult<(Temperature? Temperature, RelativeHumidity? Humidity, Pressure? Pressure)>>, ISamplingSensor<(Temperature? Temperature, RelativeHumidity? Humidity, Pressure? Pressure)>, ISensor<(Temperature? Temperature, RelativeHumidity? Humidity, Pressure? Pressure)>, ITemperatureSensor, ISamplingSensor<Temperature>, ISensor<Temperature>, IHumiditySensor, ISamplingSensor<RelativeHumidity>, ISensor<RelativeHumidity>, IBarometricPressureSensor, ISamplingSensor<Pressure>, ISensor<Pressure>, ISensor, ISamplingSensor, ISpiPeripheral, II2cPeripheral, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../PollingSensorBase`UNIT`)

**Implements:**  

<details><summary>Expand</summary>

`System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>,System.Nullable<Meadow.Units.Pressure>>>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>,System.Nullable<Meadow.Units.Pressure>>>`, `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>,System.Nullable<Meadow.Units.Pressure>>>`, `Meadow.Peripherals.Sensors.ITemperatureSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.Atmospheric.IHumiditySensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.RelativeHumidity>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.RelativeHumidity>`, `Meadow.Peripherals.Sensors.Atmospheric.IBarometricPressureSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Pressure>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Pressure>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.Hardware.ISpiPeripheral`, `Meadow.Hardware.II2cPeripheral`, `System.IDisposable`
</details>



## Properties
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme280/Driver/Bme280.cs#L49)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
### TemperatureSampleCount
Temperature oversample count
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme280/Driver/Bme280.cs#L69)
```csharp title="Declaration"
public Bme280.Oversample TemperatureSampleCount { get; set; }
```
### PressureSampleCount
Pressure oversample count
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme280/Driver/Bme280.cs#L74)
```csharp title="Declaration"
public Bme280.Oversample PressureSampleCount { get; set; }
```
### HumiditySampleCount
Humidity oversample count
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme280/Driver/Bme280.cs#L79)
```csharp title="Declaration"
public Bme280.Oversample HumiditySampleCount { get; set; }
```
### Temperature
The temperature from the last reading
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme280/Driver/Bme280.cs#L99)
```csharp title="Declaration"
public Temperature? Temperature { get; }
```
### Pressure
The pressure, in hectopascals (hPa), from the last reading. 1 hPa
is equal to one millibar, or 1/10th of a kilopascal (kPa)/centibar.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme280/Driver/Bme280.cs#L105)
```csharp title="Declaration"
public Pressure? Pressure { get; }
```
### Humidity
The humidity, in percent relative humidity, from the last reading..
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme280/Driver/Bme280.cs#L110)
```csharp title="Declaration"
public RelativeHumidity? Humidity { get; }
```
### DefaultSpiBusSpeed
The default SPI bus speed for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme280/Driver/Bme280.cs#L115)
```csharp title="Declaration"
public Frequency DefaultSpiBusSpeed { get; }
```
### SpiBusSpeed
The SPI bus speed for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme280/Driver/Bme280.cs#L120)
```csharp title="Declaration"
public Frequency SpiBusSpeed { get; set; }
```
### DefaultSpiBusMode
The default SPI bus mode for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme280/Driver/Bme280.cs#L129)
```csharp title="Declaration"
public SpiClockConfiguration.Mode DefaultSpiBusMode { get; }
```
### SpiBusMode
The SPI bus mode for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme280/Driver/Bme280.cs#L134)
```csharp title="Declaration"
public SpiClockConfiguration.Mode SpiBusMode { get; set; }
```
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme280/Driver/Bme280.cs#L143)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
## Fields
### readBuffer
The read buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme280/Driver/Bme280.cs#L59)
```csharp title="Declaration"
protected Memory<byte> readBuffer
```
### writeBuffer
The write buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme280/Driver/Bme280.cs#L64)
```csharp title="Declaration"
protected Memory<byte> writeBuffer
```
### configuration
Sensor configuration
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme280/Driver/Bme280.cs#L94)
```csharp title="Declaration"
protected Bme280.Configuration configuration
```
## Methods
### Initialize()
Initialize the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme280/Driver/Bme280.cs#L185)
```csharp title="Declaration"
protected void Initialize()
```
### RaiseEventsAndNotify(IChangeResult&lt;(Temperature? Temperature, RelativeHumidity? Humidity, Pressure? Pressure)&gt;)
Raise events for subscribers and notify of value changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme280/Driver/Bme280.cs#L198)
```csharp title="Declaration"
protected override void RaiseEventsAndNotify(IChangeResult<(Temperature? Temperature, RelativeHumidity? Humidity, Pressure? Pressure)> changeResult)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>,System.Nullable<Meadow.Units.Pressure>>>` | *changeResult* | The updated sensor data |

### ReadSensor()
Update the sensor information from the BME280.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme280/Driver/Bme280.cs#L228)
```csharp title="Declaration"
protected override Task<(Temperature? Temperature, RelativeHumidity? Humidity, Pressure? Pressure)> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<System.ValueTuple<System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>,System.Nullable<Meadow.Units.Pressure>>>`
### UpdateConfiguration(Configuration)
Update the configuration for the BME280.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme280/Driver/Bme280.cs#L308)
```csharp title="Declaration"
protected void UpdateConfiguration(Bme280.Configuration configuration)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Foundation.Sensors.Atmospheric.Bme280.Configuration](../Bme280.Configuration) | *configuration* |

### Reset()
Reset the sensor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme280/Driver/Bme280.cs#L331)
```csharp title="Declaration"
public void Reset()
```
### ReadCompensationData()
Reads the compensation data.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme280/Driver/Bme280.cs#L349)
```csharp title="Declaration"
protected void ReadCompensationData()
```
### GetChipID()
Get the chip ID
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme280/Driver/Bme280.cs#L388)
```csharp title="Declaration"
public byte GetChipID()
```

##### Returns

`System.Byte`
### StartUpdating(TimeSpan?)
Start updating
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme280/Driver/Bme280.cs#L398)
```csharp title="Declaration"
public override void StartUpdating(TimeSpan? updateInterval = null)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Nullable<System.TimeSpan>` | *updateInterval* | The update inverval |

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme280/Driver/Bme280.cs#L407)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme280/Driver/Bme280.cs#L417)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |


## Implements

* `System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>,System.Nullable<Meadow.Units.Pressure>>>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>,System.Nullable<Meadow.Units.Pressure>>>`
* `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>,System.Nullable<Meadow.Units.Pressure>>>`
* `Meadow.Peripherals.Sensors.ITemperatureSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`
* `Meadow.Peripherals.Sensors.Atmospheric.IHumiditySensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.RelativeHumidity>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.RelativeHumidity>`
* `Meadow.Peripherals.Sensors.Atmospheric.IBarometricPressureSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Pressure>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Pressure>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `Meadow.Hardware.ISpiPeripheral`
* `Meadow.Hardware.II2cPeripheral`
* `System.IDisposable`
