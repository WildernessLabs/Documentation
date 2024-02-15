---
uid: Meadow.Foundation.Sensors.Distance.Vl53l0x
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Distance.Vl53l0x
---

| Vl53l0x | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Vl53l0x) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Vl53l0x/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Distance.Vl53l0x/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Distance.Vl53l0x.svg?label=Meadow.Foundation.Sensors.Distance.Vl53l0x" alt="NuGet Gallery for Meadow.Foundation.Sensors.Distance.Vl53l0x" /></a> |

### Code Example

```csharp
Vl53l0x sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing hardware...");

    var i2cBus = Device.CreateI2cBus(I2cBusSpeed.FastPlus);
    sensor = new Vl53l0x(i2cBus);

    sensor.DistanceUpdated += Sensor_Updated;

    return Task.CompletedTask;
}

public override Task Run()
{
    sensor.StartUpdating(TimeSpan.FromMilliseconds(250));

    return Task.CompletedTask;
}

private void Sensor_Updated(object sender, IChangeResult<Length> result)
{
    if (result.New == null) { return; }

    if (result.New < new Length(0, LU.Millimeters))
    {
        Resolver.Log.Info("out of range.");
    }
    else
    {
        Resolver.Log.Info($"{result.New.Millimeters}mm / {result.New.Inches:n3}\"");
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Vl53l0x/Samples/Vl53l0x_Sample)

### Wiring Example

To wire a Vl53l0x to your Meadow board, connect the following:

| Vl53l0x | Meadow Pin  |
|---------|-------------|
| GND     | GND         |
| SCL     | D08 (SCL)   |
| SDA     | D07 (SDA)   |
| VCC     | 3V3         |

It should look like the following diagram:

<img src="/API_Assets/Meadow.Foundation.Sensors.Distance.Vl53l0x/Vl53l0x_Fritzing.png" />





# Class Vl53l0x
Represents the Vl53l0x distance sensor

###### **Assembly**: Vl53l0x.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Vl53l0x/Driver/Vl53l0x.Enums.cs#L6)
```csharp title="Declaration"
public class Vl53l0x : ByteCommsSensorBase<Length>, IObservable<IChangeResult<Length>>, IDisposable, IRangeFinder, ISamplingSensor<Length>, ISensor<Length>, ISensor, ISamplingSensor, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../ByteCommsSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.Length>>`, `System.IDisposable`, `Meadow.Peripherals.Sensors.Distance.IRangeFinder`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Length>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Length>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.Hardware.II2cPeripheral`

## Properties
### IsShutdown
Is the hardware shutdown / off
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Vl53l0x/Driver/Vl53l0x.cs#L18)
```csharp title="Declaration"
public bool IsShutdown { get; }
```
### Distance
The distance to the measured object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Vl53l0x/Driver/Vl53l0x.cs#L36)
```csharp title="Declaration"
public Length? Distance { get; protected set; }
```
### MinimumDistance
Minimum valid distance
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Vl53l0x/Driver/Vl53l0x.cs#L41)
```csharp title="Declaration"
public Length MinimumDistance { get; }
```
### MaximumDistance
Maximum valid distance (CurrentDistance returns -1 if above)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Vl53l0x/Driver/Vl53l0x.cs#L46)
```csharp title="Declaration"
public Length MaximumDistance { get; }
```
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Vl53l0x/Driver/Vl53l0x.cs#L51)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
## Methods
### Initialize()
Initializes the VL53L0X
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Vl53l0x/Driver/Vl53l0x.cs#L86)
```csharp title="Declaration"
protected Task Initialize()
```

##### Returns

`System.Threading.Tasks.Task`
### MeasureDistance()
Tell the sensor to take a measurement
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Vl53l0x/Driver/Vl53l0x.cs#L237)
```csharp title="Declaration"
public void MeasureDistance()
```
### ReadSensor()
Returns the current distance/range
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Vl53l0x/Driver/Vl53l0x.cs#L246)
```csharp title="Declaration"
protected override Task<Length> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Length>`: The distance in the specified Units. Default mm. Returns -1 if the shutdown pin is used and is off### SetAddress(byte)
Set a new I2C address
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Vl53l0x/Driver/Vl53l0x.cs#L271)
```csharp title="Declaration"
public void SetAddress(byte newAddress)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Byte` | *newAddress* |

### ShutDown(bool)
Set the Shutdown state of the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Vl53l0x/Driver/Vl53l0x.cs#L284)
```csharp title="Declaration"
public Task ShutDown(bool state)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *state* | true = off/shutdown. false = on |

### GetSpadInfo()
Get the spad info
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Vl53l0x/Driver/Vl53l0x.cs#L307)
```csharp title="Declaration"
protected Tuple<int, bool> GetSpadInfo()
```

##### Returns

`System.Tuple<System.Int32,System.Boolean>`

##### Exceptions

`System.Exception`  

### PerformSingleRefCalibration(byte)
perform a sensor self calibration
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Vl53l0x/Driver/Vl53l0x.cs#L358)
```csharp title="Declaration"
protected void PerformSingleRefCalibration(byte vhvInitByte)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *vhvInitByte* | The VHV init byte |


##### Exceptions

`System.Exception`  

### ShutDown()
Shut down/power down the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Vl53l0x/Driver/Vl53l0x.cs#L435)
```csharp title="Declaration"
public void ShutDown()
```

## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Units.Length>>`
* `System.IDisposable`
* `Meadow.Peripherals.Sensors.Distance.IRangeFinder`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Length>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Length>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `Meadow.Hardware.II2cPeripheral`
