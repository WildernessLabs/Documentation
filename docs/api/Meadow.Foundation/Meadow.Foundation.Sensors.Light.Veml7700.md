---
uid: Meadow.Foundation.Sensors.Light.Veml7700
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.Veml7700
---

| Veml7700 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Veml7700) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Veml7700/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Light.Veml7700/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Light.Veml7700.svg?label=Meadow.Foundation.Sensors.Light.Veml7700" alt="NuGet Gallery for Meadow.Foundation.Sensors.Light.Veml7700" /></a> |

The TEMT6000 is an I2C ambient light sensor.

### Code Example

```csharp
Veml7700 sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    sensor = new Veml7700(Device.CreateI2cBus());
    sensor.DataSource = Veml7700.SensorTypes.Ambient;

    sensor.RangeExceededHigh += (s, a) => Resolver.Log.Info("Too bright to measure");
    sensor.RangeExceededLow += (s, a) => Resolver.Log.Info("Too dim to measure");

    // classical .NET events can also be used:
    sensor.Updated += (sender, result) => Resolver.Log.Info($"Illuminance: {result.New.Lux:n3}Lux");

    return Task.CompletedTask;
}

public override async Task Run()
{
    var conditions = await sensor.Read();

    Resolver.Log.Info("Initial Readings:");
    Resolver.Log.Info($"  Illuminance: {conditions.Lux:n3}Lux");

    sensor.StartUpdating(TimeSpan.FromSeconds(1));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Veml7700/Samples/Veml7700_Sample)

### Wiring Example

To wire a Veml7700 to your Meadow board, connect the following:

| Veml7700 | Meadow Pin  |
|----------|-------------|
| 3V3      | 3V3         |
| GND      | GND         |
| SCK      | D08         |
| SDA      | D07         |

It should look like the following diagram:

<img src="/API_Assets/Meadow.Foundation.Sensors.Light.Veml7700/Veml7700_Fritzing.png" />





# Class Veml7700
High Accuracy Ambient Light Sensor

###### **Assembly**: Veml7700.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Veml7700/Driver/Veml7700.SensorTypes.cs#L3)
```csharp title="Declaration"
public class Veml7700 : ByteCommsSensorBase<Illuminance>, IObservable<IChangeResult<Illuminance>>, ILightSensor, ISamplingSensor<Illuminance>, ISensor<Illuminance>, ISensor, ISamplingSensor, II2cPeripheral, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../ByteCommsSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.Illuminance>>`, `Meadow.Peripherals.Sensors.Light.ILightSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Illuminance>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Illuminance>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.Hardware.II2cPeripheral`, `System.IDisposable`

## Properties
### Illuminance
Luminosity reading from the TSL2561 sensor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Veml7700/Driver/Veml7700.cs#L30)
```csharp title="Declaration"
public Illuminance? Illuminance { get; protected set; }
```
### DataSource
Sensor types Data source
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Veml7700/Driver/Veml7700.cs#L35)
```csharp title="Declaration"
public Veml7700.SensorTypes DataSource { get; set; }
```
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Veml7700/Driver/Veml7700.cs#L43)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
## Methods
### ReadSensor()
Reads data from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Veml7700/Driver/Veml7700.cs#L63)
```csharp title="Declaration"
protected override Task<Illuminance> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Illuminance>`: The latest sensor reading### SetPower(bool)
Set power mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Veml7700/Driver/Veml7700.cs#L175)
```csharp title="Declaration"
public void SetPower(bool on)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Boolean` | *on* |

## Events
### RangeExceededHigh
Raised when the high range is exceeded
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Veml7700/Driver/Veml7700.cs#L18)
```csharp title="Declaration"
public event EventHandler RangeExceededHigh
```
##### Event Type
`System.EventHandler`
### RangeExceededLow
Raised when the low range is exceeded
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Veml7700/Driver/Veml7700.cs#L23)
```csharp title="Declaration"
public event EventHandler RangeExceededLow
```
##### Event Type
`System.EventHandler`

## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Units.Illuminance>>`
* `Meadow.Peripherals.Sensors.Light.ILightSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Illuminance>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Illuminance>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `Meadow.Hardware.II2cPeripheral`
* `System.IDisposable`
