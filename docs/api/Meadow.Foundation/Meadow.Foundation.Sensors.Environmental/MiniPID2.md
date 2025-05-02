---
title: Class MiniPID2
sidebar_label: MiniPID2
description: >-
  Represents an IonScience MiniPID2 analog photoionisation (PID) Volatile
  Organic Compounds (VOC) sensor
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental/MiniPID2
---
# Class MiniPID2
Represents an IonScience MiniPID2 analog photoionisation (PID) Volatile Organic Compounds (VOC) sensor

###### **Assembly**: MiniPID2.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.MiniPID2/Driver/MiniPID2.Enums.cs#L3)
```csharp title="Declaration"
public class MiniPID2 : SamplingSensorBase<Concentration>, IObservable<IChangeResult<Concentration>>, IVOCConcentrationSensor, ISamplingSensor<Concentration>, ISensor<Concentration>, ISensor, ISamplingSensor, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.Concentration>>`, `Meadow.Peripherals.Sensors.Environmental.IVOCConcentrationSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Concentration>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Concentration>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `System.IDisposable`

## Properties
### VOCConcentration
The current VOC concentration value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.MiniPID2/Driver/MiniPID2.cs#L17)
```csharp title="Declaration"
public Concentration? VOCConcentration { get; protected set; }
```
### MiniPID2DeviceType
The MiniPID2 device type
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.MiniPID2/Driver/MiniPID2.cs#L22)
```csharp title="Declaration"
public MiniPID2.MiniPID2Type MiniPID2DeviceType { get; protected set; }
```
### AnalogInputPort

###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.MiniPID2/Driver/MiniPID2.cs#L27)
```csharp title="Declaration"
protected IObservableAnalogInputPort AnalogInputPort { get; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.MiniPID2/Driver/MiniPID2.cs#L32)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### SetOffsetForSensor(Voltage, MiniPID2Type)
Set the sensor voltage offset 
Useful for compensating for air conditions
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.MiniPID2/Driver/MiniPID2.cs#L78)
```csharp title="Declaration"
public void SetOffsetForSensor(Voltage offset, MiniPID2.MiniPID2Type sensorType)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Units.Voltage` | *offset* | Offset voltage |
| [Meadow.Foundation.Sensors.Environmental.MiniPID2.MiniPID2Type](../Meadow.Foundation.Sensors.Environmental/MiniPID2.MiniPID2Type) | *sensorType* | The sensor to change |

### GetOffsetForSensor(MiniPID2Type)
Get the voltage offset for a sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.MiniPID2/Driver/MiniPID2.cs#L88)
```csharp title="Declaration"
public Voltage GetOffsetForSensor(MiniPID2.MiniPID2Type sensorType)
```

##### Returns

`Meadow.Units.Voltage`: The offset as voltage
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Sensors.Environmental.MiniPID2.MiniPID2Type](../Meadow.Foundation.Sensors.Environmental/MiniPID2.MiniPID2Type) | *sensorType* | The sensor |

### ReadSensor()
Convenience method to get the current concentration. For frequent reads, use
StartSampling() and StopSampling() in conjunction with the SampleBuffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.MiniPID2/Driver/MiniPID2.cs#L135)
```csharp title="Declaration"
protected override Task<Concentration> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Concentration>`: The concentration averages of the given sample count### StartUpdating(TimeSpan?)
Starts updating the sensor on the updateInterval frequency specified
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.MiniPID2/Driver/MiniPID2.cs#L146)
```csharp title="Declaration"
public override void StartUpdating(TimeSpan? updateInterval = null)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Nullable<System.TimeSpan>` | *updateInterval* |

### StopUpdating()
Stops sampling the concentration
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.MiniPID2/Driver/MiniPID2.cs#L159)
```csharp title="Declaration"
public override void StopUpdating()
```
### VoltageToConcentration(Voltage)
Converts voltage to Concentration
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.MiniPID2/Driver/MiniPID2.cs#L174)
```csharp title="Declaration"
protected Concentration VoltageToConcentration(Voltage voltage)
```

##### Returns

`Meadow.Units.Concentration`: Concentration
##### Parameters

| Type | Name |
|:--- |:--- |
| `Meadow.Units.Voltage` | *voltage* |

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.MiniPID2/Driver/MiniPID2.cs#L214)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.MiniPID2/Driver/MiniPID2.cs#L224)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |


## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Units.Concentration>>`
* `Meadow.Peripherals.Sensors.Environmental.IVOCConcentrationSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Concentration>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Concentration>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `System.IDisposable`
