---
uid: Meadow.Foundation.Sensors.Atmospheric.Sgp40
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Sgp40
---

| Sgp40 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Sgp40) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Sgp40/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Atmospheric.Sgp40/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Atmospheric.Sgp40.svg?label=Meadow.Foundation.Sensors.Atmospheric.Sgp40" alt="NuGet Gallery for Meadow.Foundation.Sensors.Atmospheric.Sgp40" /></a> |

### Code Example

```csharp
Sgp40? sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    sensor = new Sgp40(Device.CreateI2cBus());

    Resolver.Log.Info($"Sensor SN: {sensor.SerialNumber:x6}");

    if (sensor.RunSelfTest())
    {
        Resolver.Log.Info("Self test successful");
    }
    else
    {
        Resolver.Log.Warn("Self test failed");
    }

    var consumer = Sgp40.CreateObserver(
        handler: result =>
        {
            Resolver.Log.Info($"Observer: VOC changed by threshold; new index: {result.New}");
        },
        filter: result =>
        {
            return Math.Abs(result.New - result.Old ?? 0) > 10;
        }
    );
    sensor.Subscribe(consumer);

    sensor.Updated += (sender, result) =>
    {
        Resolver.Log.Info($"  VOC: {result.New}");
    };

    return base.Initialize();
}

public override async Task Run()
{
    await ReadConditions();

    sensor?.StartUpdating(TimeSpan.FromSeconds(1));
}

async Task ReadConditions()
{
    if (sensor == null) { return; }

    var result = await sensor.Read();
    Resolver.Log.Info("Initial Readings:");
    Resolver.Log.Info($"  Temperature: {result}");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Sgp40/Samples/Sgp40_Sample)

### Wiring Example

To wire a Sgp40 to your Meadow board, connect the following:

| Sgp40  | Meadow Pin  |
|---------|-------------|
| GND     | GND         |
| SCL     | D08 (SCL)   |
| SDA     | D07 (SDA)   |
| VCC     | 3V3         |

# Class Sgp40
Provides access to the Sensirion SGP40 VOC sensor

###### **Assembly**: Sgp40.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Sgp40/Driver/Sgp40.Enums.cs#L3)
```csharp title="Declaration"
public class Sgp40 : ByteCommsSensorBase<int>, IObservable<IChangeResult<int>>, ISamplingSensor<int>, ISensor<int>, ISensor, ISamplingSensor, IDisposable, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../ByteCommsSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<System.Int32>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<System.Int32>`, `Meadow.Peripherals.Sensors.ISensor<System.Int32>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `System.IDisposable`, `Meadow.Hardware.II2cPeripheral`

## Properties
### VocIndex
The VOC Index, from the last reading
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Sgp40/Driver/Sgp40.cs#L17)
```csharp title="Declaration"
public int VocIndex { get; }
```
### SerialNumber
Serial number of the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Sgp40/Driver/Sgp40.cs#L22)
```csharp title="Declaration"
public ulong SerialNumber { get; }
```
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Sgp40/Driver/Sgp40.cs#L27)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
## Methods
### Initialize()
Initialize the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Sgp40/Driver/Sgp40.cs#L45)
```csharp title="Declaration"
protected void Initialize()
```
### RunSelfTest()
This command triggers the built-in self-test checking for integrity of both hotplate and MOX material
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Sgp40/Driver/Sgp40.cs#L62)
```csharp title="Declaration"
public bool RunSelfTest()
```

##### Returns

`System.Boolean`: true on successful test, otherwise false### ReadSensor()
Reads data from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Sgp40/Driver/Sgp40.cs#L77)
```csharp title="Declaration"
protected override Task<int> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<System.Int32>`: The latest sensor reading### TurnHeaterOff()
This command turns the hotplate off and stops the measurement. Subsequently, the sensor enters idle mode.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Sgp40/Driver/Sgp40.cs#L100)
```csharp title="Declaration"
public void TurnHeaterOff()
```
### SetCompensationData(RelativeHumidity, Temperature)
Set the compensation data
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Sgp40/Driver/Sgp40.cs#L110)
```csharp title="Declaration"
public void SetCompensationData(RelativeHumidity humidity, Temperature temperature)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Units.RelativeHumidity` | *humidity* | Humidity compensation |
| `Meadow.Units.Temperature` | *temperature* | Temperature compensation |

### ClearCompensationData()
Clear the compensation data
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Sgp40/Driver/Sgp40.cs#L130)
```csharp title="Declaration"
public void ClearCompensationData()
```

## Implements

* `System.IObservable<Meadow.IChangeResult<System.Int32>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<System.Int32>`
* `Meadow.Peripherals.Sensors.ISensor<System.Int32>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `System.IDisposable`
* `Meadow.Hardware.II2cPeripheral`
