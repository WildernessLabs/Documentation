---
title: Class Capacitive
sidebar_label: Capacitive
description: "Capacitive Soil Moisture Sensor"
---
# Class Capacitive
Capacitive Soil Moisture Sensor

###### **Assembly**: Capacitive.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Moisture.Capacitive/Driver/Capacitive.cs#L12)
```csharp title="Declaration"
public class Capacitive : SamplingSensorBase<double>, IObservable<IChangeResult<double>>, IMoistureSensor, ISamplingSensor<double>, ISensor<double>, ISensor, ISamplingSensor, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<System.Double>>`, `Meadow.Peripherals.Sensors.Moisture.IMoistureSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<System.Double>`, `Meadow.Peripherals.Sensors.ISensor<System.Double>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `System.IDisposable`

## Properties
### AnalogInputPort
Returns the analog input port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Moisture.Capacitive/Driver/Capacitive.cs#L17)
```csharp title="Declaration"
protected IAnalogInputPort AnalogInputPort { get; }
```
### Moisture
Last value read from the moisture sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Moisture.Capacitive/Driver/Capacitive.cs#L22)
```csharp title="Declaration"
public double? Moisture { get; protected set; }
```
### MinimumVoltageCalibration
Voltage value of most dry soil - default is 0 volts
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Moisture.Capacitive/Driver/Capacitive.cs#L27)
```csharp title="Declaration"
public Voltage MinimumVoltageCalibration { get; set; }
```
### MaximumVoltageCalibration
Voltage value of most moist soil - default of 3.3V
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Moisture.Capacitive/Driver/Capacitive.cs#L32)
```csharp title="Declaration"
public Voltage MaximumVoltageCalibration { get; set; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Moisture.Capacitive/Driver/Capacitive.cs#L37)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### ReadSensor()
Reads data from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Moisture.Capacitive/Driver/Capacitive.cs#L103)
```csharp title="Declaration"
protected override Task<double> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<System.Double>`: The latest sensor reading### StartUpdating(TimeSpan?)
Starts continuously sampling the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Moisture.Capacitive/Driver/Capacitive.cs#L114)
```csharp title="Declaration"
public override void StartUpdating(TimeSpan? updateInterval)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Nullable<System.TimeSpan>` | *updateInterval* |

### StopUpdating()
Stops sampling the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Moisture.Capacitive/Driver/Capacitive.cs#L127)
```csharp title="Declaration"
public override void StopUpdating()
```
### VoltageToMoisture(Voltage)
Converts voltage to moisture value, ranging from 0 (most dry) to 1 (most wet)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Moisture.Capacitive/Driver/Capacitive.cs#L141)
```csharp title="Declaration"
protected double VoltageToMoisture(Voltage voltage)
```

##### Returns

`System.Double`

##### Parameters

| Type | Name |
|:--- |:--- |
| `Meadow.Units.Voltage` | *voltage* |

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Moisture.Capacitive/Driver/Capacitive.cs#L151)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Moisture.Capacitive/Driver/Capacitive.cs#L161)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |


## Implements

* `System.IObservable<Meadow.IChangeResult<System.Double>>`
* `Meadow.Peripherals.Sensors.Moisture.IMoistureSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<System.Double>`
* `Meadow.Peripherals.Sensors.ISensor<System.Double>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `System.IDisposable`
