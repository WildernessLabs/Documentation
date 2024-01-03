---
title: Class Thermistor
sidebar_label: Thermistor
description: "Thermistor temperature sensor object"
---
# Class Thermistor
Thermistor temperature sensor object

###### **Assembly**: Thermistor.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Thermistor/Driver/Thermistor.cs#L18)
```csharp title="Declaration"
public abstract class Thermistor : SamplingSensorBase<Temperature>, IObservable<IChangeResult<Temperature>>, ITemperatureSensor, ISamplingSensor<Temperature>, ISensor<Temperature>, ISensor, ISamplingSensor
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`)

**Derived:**  
[Meadow.Foundation.Sensors.Temperature.SteinhartHartCalculatedThermistor](../Meadow.Foundation.Sensors.Temperature/SteinhartHartCalculatedThermistor)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.Temperature>>`, `Meadow.Peripherals.Sensors.ITemperatureSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`

## Properties
### AnalogInputPort
The analog input port used to determine output voltage of the voltage divider circuit
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Thermistor/Driver/Thermistor.cs#L23)
```csharp title="Declaration"
protected IAnalogInputPort AnalogInputPort { get; }
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Thermistor/Driver/Thermistor.cs#L70)
```csharp title="Declaration"
public Temperature? Temperature { get; protected set; }
```
## Methods
### StartUpdating(TimeSpan?)
Starts updating the sensor on the updateInterval frequency specified
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Thermistor/Driver/Thermistor.cs#L46)
```csharp title="Declaration"
public override void StartUpdating(TimeSpan? updateInterval = null)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Nullable<System.TimeSpan>` | *updateInterval* | A TimeSpan that specifies how long to
    wait between readings |

### StopUpdating()
Stops sampling the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Thermistor/Driver/Thermistor.cs#L57)
```csharp title="Declaration"
public override void StopUpdating()
```
## Events
### TemperatureUpdated
Raised when the temperature is updated
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Thermistor/Driver/Thermistor.cs#L75)
```csharp title="Declaration"
public event EventHandler<IChangeResult<Temperature>> TemperatureUpdated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Units.Temperature>>`

## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Units.Temperature>>`
* `Meadow.Peripherals.Sensors.ITemperatureSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
