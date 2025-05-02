---
title: Class Scd40
sidebar_label: Scd40
description: Represents an SCD40 C02 sensor
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental/Scd40
---
# Class Scd40
Represents an SCD40 C02 sensor

###### **Assembly**: Scd4x.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd4x/Driver/Drivers/Scd40.cs#L8)
```csharp title="Declaration"
public class Scd40 : Scd4xBase, IObservable<IChangeResult<(Concentration? Concentration, Temperature? Temperature, RelativeHumidity? Humidity)>>, ISamplingSensor<(Concentration? Concentration, Temperature? Temperature, RelativeHumidity? Humidity)>, ISensor<(Concentration? Concentration, Temperature? Temperature, RelativeHumidity? Humidity)>, ITemperatureSensor, ISamplingSensor<Temperature>, ISensor<Temperature>, IHumiditySensor, ISamplingSensor<RelativeHumidity>, ISensor<RelativeHumidity>, ICO2ConcentrationSensor, ISamplingSensor<Concentration>, ISensor<Concentration>, ISensor, ISamplingSensor, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`) -> [Meadow.Foundation.PollingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/PollingSensorBase`UNIT`) -> [Meadow.Foundation.Sensors.Environmental.Scd4xBase](../Meadow.Foundation.Sensors.Environmental/Scd4xBase)

**Implements:**  

<details>
<summary>Expand</summary>

`System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Concentration>,System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>>>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.Concentration>,System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>>>`, `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.Concentration>,System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>>>`, `Meadow.Peripherals.Sensors.ITemperatureSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.Atmospheric.IHumiditySensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.RelativeHumidity>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.RelativeHumidity>`, `Meadow.Peripherals.Sensors.Environmental.ICO2ConcentrationSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Concentration>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Concentration>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.Hardware.II2cPeripheral`
</details>




## Implements

* `System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Concentration>,System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>>>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.Concentration>,System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>>>`
* `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.Concentration>,System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>>>`
* `Meadow.Peripherals.Sensors.ITemperatureSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`
* `Meadow.Peripherals.Sensors.Atmospheric.IHumiditySensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.RelativeHumidity>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.RelativeHumidity>`
* `Meadow.Peripherals.Sensors.Environmental.ICO2ConcentrationSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Concentration>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Concentration>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `Meadow.Hardware.II2cPeripheral`
