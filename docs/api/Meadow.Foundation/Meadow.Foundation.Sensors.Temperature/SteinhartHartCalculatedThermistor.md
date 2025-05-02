---
title: Class SteinhartHartCalculatedThermistor
sidebar_label: SteinhartHartCalculatedThermistor
description: >-
  Thermistor temperature sensor object using the Steinhart-Hart equation to
  determine temperature
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature/SteinhartHartCalculatedThermistor
---
# Class SteinhartHartCalculatedThermistor
Thermistor temperature sensor object using the Steinhart-Hart equation to determine temperature

###### **Assembly**: Thermistor.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Thermistor/Driver/SteinhartHartCalculatedThermistor.cs#L11)
```csharp title="Declaration"
public class SteinhartHartCalculatedThermistor : Thermistor, IObservable<IChangeResult<Temperature>>, ITemperatureSensor, ISamplingSensor<Temperature>, ISensor<Temperature>, ISensor, ISamplingSensor
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`) -> [Meadow.Foundation.PollingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/PollingSensorBase`UNIT`) -> [Meadow.Foundation.Sensors.Temperature.Thermistor](../Meadow.Foundation.Sensors.Temperature/Thermistor)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.Temperature>>`, `Meadow.Peripherals.Sensors.ITemperatureSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`

## Properties
### BetaCoefficient
Gets the beta coefficient of the thermistor used in the Steinhart-Hart equation
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Thermistor/Driver/SteinhartHartCalculatedThermistor.cs#L21)
```csharp title="Declaration"
public double BetaCoefficient { get; }
```
### SeriesResistance
Gets the resistance of the fixed-value series resistor in your voltage divider circuit
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Thermistor/Driver/SteinhartHartCalculatedThermistor.cs#L26)
```csharp title="Declaration"
public Resistance SeriesResistance { get; }
```
### NominalResistance
Gets the nominal resistance of the thermistor (e.g. 10kOhm for a 10k thermistor)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Thermistor/Driver/SteinhartHartCalculatedThermistor.cs#L31)
```csharp title="Declaration"
public override Resistance NominalResistance { get; }
```
## Fields
### DefaultBetaCoefficient
The common default beta coefficient (3950) for many thermistors
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Thermistor/Driver/SteinhartHartCalculatedThermistor.cs#L16)
```csharp title="Declaration"
public const double DefaultBetaCoefficient = 3950
```
## Methods
### ReadSensor()
Update the Temperature property
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Thermistor/Driver/SteinhartHartCalculatedThermistor.cs#L92)
```csharp title="Declaration"
protected override Task<Temperature> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Temperature>`

## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Units.Temperature>>`
* `Meadow.Peripherals.Sensors.ITemperatureSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
