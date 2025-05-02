---
title: Class AdafruitMPRLS
sidebar_label: AdafruitMPRLS
description: Device driver for the Adafruit MPRLS Ported Pressure Sensor Breakout
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric/AdafruitMPRLS
---
# Class AdafruitMPRLS
Device driver for the Adafruit MPRLS Ported Pressure Sensor Breakout

###### **Assembly**: AdafruitMPRLS.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.AdafruitMPRLS/Driver/AdafruitMPRLS.Enums.cs#L3)
```csharp title="Declaration"
public class AdafruitMPRLS : ByteCommsSensorBase<(Pressure? Pressure, Pressure? RawPsiMeasurement)>, IObservable<IChangeResult<(Pressure? Pressure, Pressure? RawPsiMeasurement)>>, ISamplingSensor<(Pressure? Pressure, Pressure? RawPsiMeasurement)>, ISensor<(Pressure? Pressure, Pressure? RawPsiMeasurement)>, IDisposable, II2cPeripheral, IBarometricPressureSensor, ISamplingSensor<Pressure>, ISensor<Pressure>, ISensor, ISamplingSensor
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`) -> [Meadow.Foundation.PollingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/PollingSensorBase`UNIT`) -> [Meadow.Foundation.ByteCommsSensorBase&lt;UNIT&gt;](../Meadow.Foundation/ByteCommsSensorBase`UNIT`)

**Implements:**  

<details>
<summary>Expand</summary>

`System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Pressure>,System.Nullable<Meadow.Units.Pressure>>>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.Pressure>,System.Nullable<Meadow.Units.Pressure>>>`, `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.Pressure>,System.Nullable<Meadow.Units.Pressure>>>`, `System.IDisposable`, `Meadow.Hardware.II2cPeripheral`, `Meadow.Peripherals.Sensors.Atmospheric.IBarometricPressureSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Pressure>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Pressure>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`
</details>



## Properties
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.AdafruitMPRLS/Driver/AdafruitMPRLS.cs#L22)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
### IsDevicePowered
Set by the sensor, to tell us it has power.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.AdafruitMPRLS/Driver/AdafruitMPRLS.cs#L35)
```csharp title="Declaration"
public bool IsDevicePowered { get; set; }
```
### IsDeviceBusy
Set by the sensor, to tell us it's busy.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.AdafruitMPRLS/Driver/AdafruitMPRLS.cs#L40)
```csharp title="Declaration"
public bool IsDeviceBusy { get; set; }
```
### HasMemoryIntegrityFailed
Set by the sensor, to tell us whether or not there's an issue with its own memory.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.AdafruitMPRLS/Driver/AdafruitMPRLS.cs#L45)
```csharp title="Declaration"
public bool HasMemoryIntegrityFailed { get; set; }
```
### RawPsiMeasurement
Returns the current raw pressure value in pounds per square inch (PSI)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.AdafruitMPRLS/Driver/AdafruitMPRLS.cs#L50)
```csharp title="Declaration"
public Pressure? RawPsiMeasurement { get; }
```
### Pressure
Returns the current pressure reading
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.AdafruitMPRLS/Driver/AdafruitMPRLS.cs#L55)
```csharp title="Declaration"
public Pressure? Pressure { get; }
```
### InternalMathSaturated
Indicates the sensor has reached its pressure limit.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.AdafruitMPRLS/Driver/AdafruitMPRLS.cs#L60)
```csharp title="Declaration"
public bool InternalMathSaturated { get; set; }
```
## Methods
### RaiseEventsAndNotify(IChangeResult&lt;(Pressure? Pressure, Pressure? RawPsiMeasurement)&gt;)
Notify subscribers of PressureUpdated event handler
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.AdafruitMPRLS/Driver/AdafruitMPRLS.cs#L79)
```csharp title="Declaration"
protected override void RaiseEventsAndNotify(IChangeResult<(Pressure? Pressure, Pressure? RawPsiMeasurement)> changeResult)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Pressure>,System.Nullable<Meadow.Units.Pressure>>>` | *changeResult* |

### ReadSensor()
Convenience method to get the current Pressure. For frequent reads, use
StartSampling() and StopSampling() in conjunction with the SampleBuffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.AdafruitMPRLS/Driver/AdafruitMPRLS.cs#L92)
```csharp title="Declaration"
protected override Task<(Pressure? Pressure, Pressure? RawPsiMeasurement)> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<System.ValueTuple<System.Nullable<Meadow.Units.Pressure>,System.Nullable<Meadow.Units.Pressure>>>`

## Implements

* `System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Pressure>,System.Nullable<Meadow.Units.Pressure>>>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.Pressure>,System.Nullable<Meadow.Units.Pressure>>>`
* `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.Pressure>,System.Nullable<Meadow.Units.Pressure>>>`
* `System.IDisposable`
* `Meadow.Hardware.II2cPeripheral`
* `Meadow.Peripherals.Sensors.Atmospheric.IBarometricPressureSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Pressure>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Pressure>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
