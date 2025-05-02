---
title: Class Adxl362
sidebar_label: Adxl362
description: Driver for the ADXL362 triple axis accelerometer
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion/Adxl362
---
# Class Adxl362
Driver for the ADXL362 triple axis accelerometer

###### **Assembly**: Adxl3xx.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.StatusBitMasks.cs#L3)
```csharp title="Declaration"
public class Adxl362 : ByteCommsSensorBase<(Acceleration3D? Acceleration3D, Temperature? Temperature)>, IObservable<IChangeResult<(Acceleration3D? Acceleration3D, Temperature? Temperature)>>, ISamplingSensor<(Acceleration3D? Acceleration3D, Temperature? Temperature)>, ISensor<(Acceleration3D? Acceleration3D, Temperature? Temperature)>, IDisposable, IAccelerometer, ISamplingSensor<Acceleration3D>, ISensor<Acceleration3D>, ITemperatureSensor, ISamplingSensor<Temperature>, ISensor<Temperature>, ISensor, ISamplingSensor, ISpiPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`) -> [Meadow.Foundation.PollingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/PollingSensorBase`UNIT`) -> [Meadow.Foundation.ByteCommsSensorBase&lt;UNIT&gt;](../Meadow.Foundation/ByteCommsSensorBase`UNIT`)

**Implements:**  

<details>
<summary>Expand</summary>

`System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.Temperature>>>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.Temperature>>>`, `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.Temperature>>>`, `System.IDisposable`, `Meadow.Peripherals.Sensors.Motion.IAccelerometer`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Acceleration3D>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Acceleration3D>`, `Meadow.Peripherals.Sensors.ITemperatureSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.Hardware.ISpiPeripheral`
</details>



## Properties
### Acceleration3D
The current acceleration value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362.cs#L52)
```csharp title="Declaration"
public Acceleration3D? Acceleration3D { get; }
```
### Temperature
The current temperature value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362.cs#L57)
```csharp title="Declaration"
public Temperature? Temperature { get; }
```
### DefaultSpiBusSpeed
The default SPI bus speed for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362.cs#L62)
```csharp title="Declaration"
public Frequency DefaultSpiBusSpeed { get; }
```
### SpiBusSpeed
The SPI bus speed for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362.cs#L68)
```csharp title="Declaration"
public Frequency SpiBusSpeed { get; set; }
```
### DefaultSpiBusMode
The default SPI bus mode for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362.cs#L77)
```csharp title="Declaration"
public SpiClockConfiguration.Mode DefaultSpiBusMode { get; }
```
### SpiBusMode
The SPI bus mode for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362.cs#L83)
```csharp title="Declaration"
public SpiClockConfiguration.Mode SpiBusMode { get; set; }
```
### DataReady
Indicate of data is ready to be read
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362.cs#L92)
```csharp title="Declaration"
public bool DataReady { get; }
```
### FIFOReady
Indicate if there is any data in the FIFO buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362.cs#L106)
```csharp title="Declaration"
public bool FIFOReady { get; }
```
### FIFOWatermark
Indicate if there are at least the desired number of samples in the FIFO buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362.cs#L120)
```csharp title="Declaration"
public bool FIFOWatermark { get; }
```
### FIFOOverrun
Indicate if the FIFO buffer has overrun (newly generated data
is overwriting data already stored in the FIFO buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362.cs#L135)
```csharp title="Declaration"
public bool FIFOOverrun { get; }
```
### ActivityDetected
Indicate if any activity has been detected over the specified threshold
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362.cs#L149)
```csharp title="Declaration"
public bool ActivityDetected { get; }
```
### InactivityDetected
Indicate if the sensor has detected inactivity or a free fall condition
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362.cs#L163)
```csharp title="Declaration"
public bool InactivityDetected { get; }
```
### IsAwake
Indicate if the sensor is awake or inactive
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362.cs#L177)
```csharp title="Declaration"
public bool IsAwake { get; }
```
### DeviceID
Read the device ID, MEMS ID, Part ID and silicon revision ID and
encode the value in a 32-bit integer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362.cs#L192)
```csharp title="Declaration"
public int DeviceID { get; }
```
### Status
Read the status register
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362.cs#L210)
```csharp title="Declaration"
public byte Status { get; }
```
### ActivityInactivityControl
Activity / Inactivity control register (see page 29 of the data sheet)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362.cs#L224)
```csharp title="Declaration"
public byte ActivityInactivityControl { get; set; }
```
### SelfTest
Set the value of the self test register - setting this to true will put the device into 
self test mode, setting this to false will turn off the self test
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362.cs#L243)
```csharp title="Declaration"
public bool SelfTest { set; }
```
### FilterControl
Get / set the filter control register (see page 33 of the data sheet)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362.cs#L259)
```csharp title="Declaration"
public byte FilterControl { get; set; }
```
## Methods
### RaiseEventsAndNotify(IChangeResult&lt;(Acceleration3D? Acceleration3D, Temperature? Temperature)&gt;)
Raise events for subscribers and notify of value changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362.cs#L287)
```csharp title="Declaration"
protected override void RaiseEventsAndNotify(IChangeResult<(Acceleration3D? Acceleration3D, Temperature? Temperature)> changeResult)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.Temperature>>>` | *changeResult* | The updated sensor data |

### Reset()
Reset the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362.cs#L303)
```csharp title="Declaration"
public void Reset()
```
### Start()
Start making sensor readings
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362.cs#L315)
```csharp title="Declaration"
public void Start()
```
### Stop()
Stop sensor readings
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362.cs#L326)
```csharp title="Declaration"
public void Stop()
```
### Read()
Read data from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362.cs#L341)
```csharp title="Declaration"
public override Task<(Acceleration3D? Acceleration3D, Temperature? Temperature)> Read()
```

##### Returns

`System.Threading.Tasks.Task<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.Temperature>>>`: The sensor data### StartUpdating(TimeSpan?)
Start updates
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362.cs#L351)
```csharp title="Declaration"
public override void StartUpdating(TimeSpan? updateInterval = null)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Nullable<System.TimeSpan>` | *updateInterval* | The update interval |

### StopUpdating()
Stop updating
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362.cs#L360)
```csharp title="Declaration"
public override void StopUpdating()
```
### ReadSensor()
Reads data from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362.cs#L370)
```csharp title="Declaration"
protected override Task<(Acceleration3D? Acceleration3D, Temperature? Temperature)> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.Temperature>>>`: The latest sensor reading### ConfigureActivityThreshold(ushort, byte)
Configure the activity threshold and activity time. Once configured it will be
necessary to set the activity/inactivity control and interrupts if required.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362.cs#L411)
```csharp title="Declaration"
public void ConfigureActivityThreshold(ushort threshold, byte numberOfSamples)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.UInt16` | *threshold* | 11-bit unsigned value for the activity threshold. |
| `System.Byte` | *numberOfSamples* | Number of consecutive samples that must exceed the threshold |

### ConfigureInactivityThreshold(ushort, ushort)
Configure the inactivity threshold and activity time.   Once configured it will be
necessary to set the activity/inactivity control and interrupts if required.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362.cs#L444)
```csharp title="Declaration"
public void ConfigureInactivityThreshold(ushort threshold, ushort numberOfSamples)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.UInt16` | *threshold* | 11-bit unsigned value for the activity threshold. |
| `System.UInt16` | *numberOfSamples* | Number of consecutive samples that must exceed the threshold |


## Implements

* `System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.Temperature>>>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.Temperature>>>`
* `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.Temperature>>>`
* `System.IDisposable`
* `Meadow.Peripherals.Sensors.Motion.IAccelerometer`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Acceleration3D>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Acceleration3D>`
* `Meadow.Peripherals.Sensors.ITemperatureSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `Meadow.Hardware.ISpiPeripheral`
