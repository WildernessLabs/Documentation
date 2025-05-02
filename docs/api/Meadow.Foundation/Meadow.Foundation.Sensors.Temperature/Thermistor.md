---
title: Class Thermistor
sidebar_label: Thermistor
description: Thermistor temperature sensor object
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature/Thermistor
---
# Class Thermistor
Thermistor temperature sensor object

###### **Assembly**: Thermistor.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Thermistor/Driver/Thermistor.cs#L18)
```csharp title="Declaration"
public abstract class Thermistor : PollingSensorBase<Temperature>, IObservable<IChangeResult<Temperature>>, ITemperatureSensor, ISamplingSensor<Temperature>, ISensor<Temperature>, ISensor, ISamplingSensor
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`) -> [Meadow.Foundation.PollingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/PollingSensorBase`UNIT`)

**Derived:**  
[Meadow.Foundation.Sensors.Temperature.BParameterThermistor](../Meadow.Foundation.Sensors.Temperature/BParameterThermistor), [Meadow.Foundation.Sensors.Temperature.SteinhartHartCalculatedThermistor](../Meadow.Foundation.Sensors.Temperature/SteinhartHartCalculatedThermistor)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.Temperature>>`, `Meadow.Peripherals.Sensors.ITemperatureSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`

## Properties
### AnalogInputPort
The analog input port used to determine output voltage of the voltage divider circuit
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Thermistor/Driver/Thermistor.cs#L23)
```csharp title="Declaration"
protected IObservableAnalogInputPort AnalogInputPort { get; }
```
### NominalResistance
The nominal resistance of the thermistor (e.g. 10kOhm for a 10k thermistor)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Thermistor/Driver/Thermistor.cs#L27)
```csharp title="Declaration"
public abstract Resistance NominalResistance { get; }
```
### NominalTemperature
The nominal temperature for the nominal resistance, typically 25C
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Thermistor/Driver/Thermistor.cs#L31)
```csharp title="Declaration"
public virtual Temperature NominalTemperature { get; }
```
### Temperature
The temperature from the last reading
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Thermistor/Driver/Thermistor.cs#L72)
```csharp title="Declaration"
public Temperature? Temperature { get; }
```
## Methods
### StartUpdating(TimeSpan?)
Starts updating the sensor on the updateInterval frequency specified.

This method also starts raising `Updated` events and notifying
IObservable subscribers. Use the `updateInterval` parameter
to specify how often events and notifications are raised/sent.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Thermistor/Driver/Thermistor.cs#L44)
```csharp title="Declaration"
public override void StartUpdating(TimeSpan? updateInterval = null)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Nullable<System.TimeSpan>` | *updateInterval* | A `TimeSpan` that specifies how long to
     wait between readings. This value influences how often `*Updated`
     events are raised and `IObservable` consumers are notified.
     The default is 5 seconds. |

### StopUpdating()
Stops sampling the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Thermistor/Driver/Thermistor.cs#L57)
```csharp title="Declaration"
public override void StopUpdating()
```

## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Units.Temperature>>`
* `Meadow.Peripherals.Sensors.ITemperatureSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
