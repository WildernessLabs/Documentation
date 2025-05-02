---
title: Class Adxl3xxBase
sidebar_label: Adxl3xxBase
description: 'Base class for ADXL335, ADXL337, and ADXL377 triple axis accelerometers'
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion/Adxl3xxBase
---
# Class Adxl3xxBase
Base class for ADXL335, ADXL337, and ADXL377 triple axis accelerometers

###### **Assembly**: Adxl3xx.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Adxl3xxBase.cs#L12)
```csharp title="Declaration"
public abstract class Adxl3xxBase : PollingSensorBase<Acceleration3D>, IObservable<IChangeResult<Acceleration3D>>, IAccelerometer, ISamplingSensor<Acceleration3D>, ISensor<Acceleration3D>, ISensor, ISamplingSensor, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`) -> [Meadow.Foundation.PollingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/PollingSensorBase`UNIT`)

**Derived:**  
[Meadow.Foundation.Sensors.Motion.Adxl335](../Meadow.Foundation.Sensors.Motion/Adxl335), [Meadow.Foundation.Sensors.Motion.Adxl337](../Meadow.Foundation.Sensors.Motion/Adxl337), [Meadow.Foundation.Sensors.Motion.Adxl377](../Meadow.Foundation.Sensors.Motion/Adxl377)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.Acceleration3D>>`, `Meadow.Peripherals.Sensors.Motion.IAccelerometer`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Acceleration3D>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Acceleration3D>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `System.IDisposable`

## Properties
### XAnalogInputPort
The X analog input port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Adxl3xxBase.cs#L17)
```csharp title="Declaration"
protected IObservableAnalogInputPort XAnalogInputPort { get; }
```
### YAnalogInputPort
The Y analog input port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Adxl3xxBase.cs#L22)
```csharp title="Declaration"
protected IObservableAnalogInputPort YAnalogInputPort { get; }
```
### ZAnalogInputPort
The Z analog input port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Adxl3xxBase.cs#L27)
```csharp title="Declaration"
protected IObservableAnalogInputPort ZAnalogInputPort { get; }
```
### SupplyVoltage
Power supply voltage applied to the sensor - this will be set (in the constructor)
to 3.3V by default
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Adxl3xxBase.cs#L33)
```csharp title="Declaration"
protected Voltage SupplyVoltage { get; }
```
### GravityRange
Gravity range
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Adxl3xxBase.cs#L38)
```csharp title="Declaration"
protected double GravityRange { get; }
```
### Acceleration3D
The current acceleration value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Adxl3xxBase.cs#L43)
```csharp title="Declaration"
public Acceleration3D? Acceleration3D { get; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Adxl3xxBase.cs#L48)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### ReadSensor()
Reads data from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Adxl3xxBase.cs#L84)
```csharp title="Declaration"
protected override Task<Acceleration3D> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Acceleration3D>`: The latest sensor reading### VoltageToGravity(Voltage)
Convert voltage to gravity
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Adxl3xxBase.cs#L98)
```csharp title="Declaration"
protected Acceleration VoltageToGravity(Voltage voltage)
```

##### Returns

`Meadow.Units.Acceleration`: Acceleration value
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Units.Voltage` | *voltage* | The voltage to convert |

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Adxl3xxBase.cs#L104)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Adxl3xxBase.cs#L114)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |


## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Units.Acceleration3D>>`
* `Meadow.Peripherals.Sensors.Motion.IAccelerometer`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Acceleration3D>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Acceleration3D>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `System.IDisposable`
