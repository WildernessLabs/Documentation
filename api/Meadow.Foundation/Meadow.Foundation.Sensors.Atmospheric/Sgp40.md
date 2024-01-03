---
title: Class Sgp40
sidebar_label: Sgp40
description: "Provides access to the Sensirion SGP40 VOC sensor"
---
# Class Sgp40
Provides access to the Sensirion SGP40 VOC sensor

###### **Assembly**: Sgp40.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Sgp40/Driver/Sgp40.Enums.cs#L3)
```csharp title="Declaration"
public class Sgp40 : ByteCommsSensorBase<int>, IObservable<IChangeResult<int>>, ISamplingSensor<int>, ISensor<int>, ISensor, ISamplingSensor, IDisposable, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`) -> [Meadow.Foundation.PollingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/PollingSensorBase`UNIT`) -> [Meadow.Foundation.ByteCommsSensorBase&lt;UNIT&gt;](../Meadow.Foundation/ByteCommsSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<System.Int32>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<System.Int32>`, `Meadow.Peripherals.Sensors.ISensor<System.Int32>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `System.IDisposable`, `Meadow.Hardware.II2cPeripheral`

## Properties
### VocIndex
The VOC Index, from the last reading
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Sgp40/Driver/Sgp40.cs#L17)
```csharp title="Declaration"
public int VocIndex { get; }
```
### SerialNumber
Serial number of the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Sgp40/Driver/Sgp40.cs#L22)
```csharp title="Declaration"
public ulong SerialNumber { get; }
```
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Sgp40/Driver/Sgp40.cs#L27)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
## Methods
### Initialize()
Initialize the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Sgp40/Driver/Sgp40.cs#L45)
```csharp title="Declaration"
protected void Initialize()
```
### RunSelfTest()
This command triggers the built-in self-test checking for integrity of both hotplate and MOX material
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Sgp40/Driver/Sgp40.cs#L62)
```csharp title="Declaration"
public bool RunSelfTest()
```

##### Returns

`System.Boolean`: true on successful test, otherwise false### ReadSensor()
Reads data from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Sgp40/Driver/Sgp40.cs#L77)
```csharp title="Declaration"
protected override Task<int> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<System.Int32>`: The latest sensor reading### TurnHeaterOff()
This command turns the hotplate off and stops the measurement. Subsequently, the sensor enters idle mode.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Sgp40/Driver/Sgp40.cs#L100)
```csharp title="Declaration"
public void TurnHeaterOff()
```
### SetCompensationData(RelativeHumidity, Temperature)
Set the compensation data
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Sgp40/Driver/Sgp40.cs#L110)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Sgp40/Driver/Sgp40.cs#L130)
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
