---
title: Class Mma7660fc
sidebar_label: Mma7660fc
description: "Represents Mma7660fc 3-axis accelerometer"
---
# Class Mma7660fc
Represents Mma7660fc 3-axis accelerometer

###### **Assembly**: Mma7660fc.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Mma7660fc/Driver/Mma7660fc.Registers.cs#L3)
```csharp title="Declaration"
public class Mma7660fc : ByteCommsSensorBase<Acceleration3D>, IObservable<IChangeResult<Acceleration3D>>, IDisposable, IAccelerometer, ISamplingSensor<Acceleration3D>, ISensor<Acceleration3D>, ISensor, ISamplingSensor, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`) -> [Meadow.Foundation.PollingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/PollingSensorBase`UNIT`) -> [Meadow.Foundation.ByteCommsSensorBase&lt;UNIT&gt;](../Meadow.Foundation/ByteCommsSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.Acceleration3D>>`, `System.IDisposable`, `Meadow.Peripherals.Sensors.Motion.IAccelerometer`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Acceleration3D>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Acceleration3D>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.Hardware.II2cPeripheral`

## Properties
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Mma7660fc/Driver/Mma7660fc.cs#L16)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
### Acceleration3D
Current Acceleration3d value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Mma7660fc/Driver/Mma7660fc.cs#L21)
```csharp title="Declaration"
public Acceleration3D? Acceleration3D { get; }
```
### Direction
Get the current direction value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Mma7660fc/Driver/Mma7660fc.cs#L26)
```csharp title="Declaration"
public Mma7660fc.DirectionType Direction { get; set; }
```
### Orientation
Get the current orientation
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Mma7660fc/Driver/Mma7660fc.cs#L31)
```csharp title="Declaration"
public Mma7660fc.OrientationType Orientation { get; set; }
```
## Methods
### SetSampleRate(SampleRate)
Set sample rate in samples per second
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Mma7660fc/Driver/Mma7660fc.cs#L69)
```csharp title="Declaration"
public void SetSampleRate(Mma7660fc.SampleRate rate)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Sensors.Motion.Mma7660fc.SampleRate](../Meadow.Foundation.Sensors.Motion/Mma7660fc.SampleRate) | *rate* | sample rate |

### ReadSensor()
Read sensor data from registers
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Mma7660fc/Driver/Mma7660fc.cs#L78)
```csharp title="Declaration"
protected override Task<Acceleration3D> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Acceleration3D>`

## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Units.Acceleration3D>>`
* `System.IDisposable`
* `Meadow.Peripherals.Sensors.Motion.IAccelerometer`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Acceleration3D>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Acceleration3D>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `Meadow.Hardware.II2cPeripheral`
