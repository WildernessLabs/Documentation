---
title: Class TemperatureHumiditySensor_HighAccuracyMini
sidebar_label: TemperatureHumiditySensor_HighAccuracyMini
description: Represents a Temperature HumiditySensor HighAccuracy Mini
slug: >-
  /docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Atmospheric/TemperatureHumiditySensor_HighAccuracyMini
---
# Class TemperatureHumiditySensor_HighAccuracyMini
Represents a Temperature HumiditySensor HighAccuracy Mini

###### **Assembly**: TemperatureHumiditySensor_HighAccuracyMini.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.Grove.git/blob/develop/Source/TemperatureHumiditySensor_HighAccuracyMini/Driver/TemperatureHumiditySensor_HighAccuracyMini.cs#L9)
```csharp title="Declaration"
public class TemperatureHumiditySensor_HighAccuracyMini : Th02, IObservable<IChangeResult<(Temperature? Temperature, RelativeHumidity? Humidity)>>, ISamplingSensor<(Temperature? Temperature, RelativeHumidity? Humidity)>, ISensor<(Temperature? Temperature, RelativeHumidity? Humidity)>, IDisposable, ITemperatureSensor, ISamplingSensor<Temperature>, ISensor<Temperature>, IHumiditySensor, ISamplingSensor<RelativeHumidity>, ISensor<RelativeHumidity>, ISensor, ISamplingSensor, II2cPeripheral
```
**Inheritance:** `System.Object` -> `Meadow.Foundation.ObservableBase<System.ValueTuple<System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>>>` -> `Meadow.Foundation.SamplingSensorBase<System.ValueTuple<System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>>>` -> `Meadow.Foundation.PollingSensorBase<System.ValueTuple<System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>>>` -> `Meadow.Foundation.ByteCommsSensorBase<System.ValueTuple<System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>>>` -> `Meadow.Foundation.Sensors.Atmospheric.Th02`

**Implements:**  

<details>
<summary>Expand</summary>

`System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>>>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>>>`, `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>>>`, `System.IDisposable`, `Meadow.Peripherals.Sensors.ITemperatureSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.Atmospheric.IHumiditySensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.RelativeHumidity>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.RelativeHumidity>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.Hardware.II2cPeripheral`
</details>




## Implements

* `System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>>>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>>>`
* `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>>>`
* `System.IDisposable`
* `Meadow.Peripherals.Sensors.ITemperatureSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`
* `Meadow.Peripherals.Sensors.Atmospheric.IHumiditySensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.RelativeHumidity>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.RelativeHumidity>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `Meadow.Hardware.II2cPeripheral`
