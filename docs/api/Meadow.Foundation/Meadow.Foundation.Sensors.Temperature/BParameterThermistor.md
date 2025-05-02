---
title: Class BParameterThermistor
sidebar_label: BParameterThermistor
description: >-
  Thermistor temperature sensor object using the B-Parameter or Beta equation to
  determine temperature
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature/BParameterThermistor
---
# Class BParameterThermistor
Thermistor temperature sensor object using the B-Parameter or Beta equation to determine temperature

###### **Assembly**: Thermistor.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Thermistor/Driver/BParameterThermistor.cs#L11)
```csharp title="Declaration"
public class BParameterThermistor : Thermistor, IObservable<IChangeResult<Temperature>>, ITemperatureSensor, ISamplingSensor<Temperature>, ISensor<Temperature>, ISensor, ISamplingSensor
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`) -> [Meadow.Foundation.PollingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/PollingSensorBase`UNIT`) -> [Meadow.Foundation.Sensors.Temperature.Thermistor](../Meadow.Foundation.Sensors.Temperature/Thermistor)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.Temperature>>`, `Meadow.Peripherals.Sensors.ITemperatureSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`

## Properties
### NominalResistance
The nominal resistance of the thermistor (e.g. 10kOhm for a 10k thermistor)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Thermistor/Driver/BParameterThermistor.cs#L18)
```csharp title="Declaration"
public override Resistance NominalResistance { get; }
```
### SeriesResistance
Gets the resistance of the fixed-value series resistor in your voltage divider circuit
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Thermistor/Driver/BParameterThermistor.cs#L23)
```csharp title="Declaration"
public Resistance SeriesResistance { get; }
```
## Methods
### ReadSensor()
Read value from sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Thermistor/Driver/BParameterThermistor.cs#L52)
```csharp title="Declaration"
protected override Task<Temperature> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Temperature>`: unitized value
## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Units.Temperature>>`
* `Meadow.Peripherals.Sensors.ITemperatureSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
