---
title: Class Vl53l0x
sidebar_label: Vl53l0x
description: Represents the Vl53l0x distance sensor
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Distance/Vl53l0x
---
# Class Vl53l0x
Represents the Vl53l0x distance sensor

###### **Assembly**: Vl53l0x.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Vl53l0x/Driver/Vl53l0x.Enums.cs#L6)
```csharp title="Declaration"
public class Vl53l0x : ByteCommsSensorBase<Length>, IObservable<IChangeResult<Length>>, IDisposable, IRangeFinder, ISamplingSensor<Length>, ISensor<Length>, ISensor, ISamplingSensor, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`) -> [Meadow.Foundation.PollingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/PollingSensorBase`UNIT`) -> [Meadow.Foundation.ByteCommsSensorBase&lt;UNIT&gt;](../Meadow.Foundation/ByteCommsSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.Length>>`, `System.IDisposable`, `Meadow.Peripherals.Sensors.Distance.IRangeFinder`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Length>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Length>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.Hardware.II2cPeripheral`

## Properties
### IsShutdown
Is the hardware shutdown / off
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Vl53l0x/Driver/Vl53l0x.cs#L18)
```csharp title="Declaration"
public bool IsShutdown { get; }
```
### Distance
The distance to the measured object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Vl53l0x/Driver/Vl53l0x.cs#L23)
```csharp title="Declaration"
public Length? Distance { get; protected set; }
```
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Vl53l0x/Driver/Vl53l0x.cs#L38)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
## Fields
### MinimumDistance
Minimum valid distance
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Vl53l0x/Driver/Vl53l0x.cs#L28)
```csharp title="Declaration"
public static Length MinimumDistance
```
### MaximumDistance
Maximum valid distance
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Vl53l0x/Driver/Vl53l0x.cs#L33)
```csharp title="Declaration"
public static Length MaximumDistance
```
## Methods
### Initialize()
Initializes the VL53L0X
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Vl53l0x/Driver/Vl53l0x.cs#L73)
```csharp title="Declaration"
protected Task Initialize()
```

##### Returns

`System.Threading.Tasks.Task`
### MeasureDistance()
Tell the sensor to take a measurement
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Vl53l0x/Driver/Vl53l0x.cs#L224)
```csharp title="Declaration"
public void MeasureDistance()
```
### ReadSensor()
Returns the current distance/range
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Vl53l0x/Driver/Vl53l0x.cs#L233)
```csharp title="Declaration"
protected override Task<Length> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Length>`: The current distance, returns 0 if the shutdown pin is used and is off### SetAddress(byte)
Set a new I2C address
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Vl53l0x/Driver/Vl53l0x.cs#L254)
```csharp title="Declaration"
public void SetAddress(byte newAddress)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Byte` | *newAddress* |

### ShutDown(bool)
Set the Shutdown state of the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Vl53l0x/Driver/Vl53l0x.cs#L269)
```csharp title="Declaration"
public Task ShutDown(bool state)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *state* | returns true if off/shutdown, false if on |

### GetSpadInfo()
Get the SPAD info
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Vl53l0x/Driver/Vl53l0x.cs#L290)
```csharp title="Declaration"
protected Tuple<int, bool> GetSpadInfo()
```

##### Returns

`System.Tuple<System.Int32,System.Boolean>`
### PerformSingleRefCalibration(byte)
perform a sensor self calibration
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Vl53l0x/Driver/Vl53l0x.cs#L341)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Vl53l0x/Driver/Vl53l0x.cs#L421)
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
