---
title: Class Bh1900Nux
sidebar_label: Bh1900Nux
description: Represents a Bh1900Nux temperature sensor
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric/Bh1900Nux
---
# Class Bh1900Nux
Represents a Bh1900Nux temperature sensor

###### **Assembly**: Bh1900Nux.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bh1900Nux/Driver/Bh1900Nux.Register.cs#L3)
```csharp title="Declaration"
public class Bh1900Nux : ByteCommsSensorBase<Temperature>, IObservable<IChangeResult<Temperature>>, IDisposable, ITemperatureSensor, ISamplingSensor<Temperature>, ISensor<Temperature>, ISensor, ISamplingSensor, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`) -> [Meadow.Foundation.PollingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/PollingSensorBase`UNIT`) -> [Meadow.Foundation.ByteCommsSensorBase&lt;UNIT&gt;](../Meadow.Foundation/ByteCommsSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.Temperature>>`, `System.IDisposable`, `Meadow.Peripherals.Sensors.ITemperatureSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.Hardware.II2cPeripheral`

## Properties
### Temperature
The current temperature
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bh1900Nux/Driver/Bh1900Nux.cs#L16)
```csharp title="Declaration"
public Temperature? Temperature { get; }
```
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bh1900Nux/Driver/Bh1900Nux.cs#L21)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
### MeasurementMode
The measurement mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bh1900Nux/Driver/Bh1900Nux.cs#L70)
```csharp title="Declaration"
public Bh1900Nux.MeasurementModes MeasurementMode { get; set; }
```
### FaultQueueDepth
The fault queue depth
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bh1900Nux/Driver/Bh1900Nux.cs#L111)
```csharp title="Declaration"
public Bh1900Nux.FaultQueue FaultQueueDepth { get; set; }
```
### AlertPolarity
The alert polarity
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bh1900Nux/Driver/Bh1900Nux.cs#L125)
```csharp title="Declaration"
public Bh1900Nux.Polarity AlertPolarity { get; set; }
```
### AlertIsActive
Is the alert active
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bh1900Nux/Driver/Bh1900Nux.cs#L146)
```csharp title="Declaration"
public bool AlertIsActive { get; }
```
### LowLimit
The temperature low limit
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bh1900Nux/Driver/Bh1900Nux.cs#L154)
```csharp title="Declaration"
public Temperature LowLimit { get; set; }
```
### HighLimit
The temperature high limit
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bh1900Nux/Driver/Bh1900Nux.cs#L171)
```csharp title="Declaration"
public Temperature HighLimit { get; set; }
```
## Methods
### Reset()
Reset the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bh1900Nux/Driver/Bh1900Nux.cs#L51)
```csharp title="Declaration"
public void Reset()
```
### Sleep()
Set the sensor to sleep state
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bh1900Nux/Driver/Bh1900Nux.cs#L91)
```csharp title="Declaration"
public void Sleep()
```
### Wake()
Wake the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bh1900Nux/Driver/Bh1900Nux.cs#L101)
```csharp title="Declaration"
public void Wake()
```
### ReadSensor()
Read the temperature
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bh1900Nux/Driver/Bh1900Nux.cs#L210)
```csharp title="Declaration"
protected override Task<Temperature> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Temperature>`: The current temperature value
## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Units.Temperature>>`
* `System.IDisposable`
* `Meadow.Peripherals.Sensors.ITemperatureSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `Meadow.Hardware.II2cPeripheral`
