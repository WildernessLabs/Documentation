---
title: Class Ahtx0
sidebar_label: Ahtx0
description: Ahtx0 Temperature sensor object
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric/Ahtx0
---
# Class Ahtx0
Ahtx0 Temperature sensor object

###### **Assembly**: Ahtx0.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Ahtx0/Driver/Ahtx0.Registers.cs#L3)
```csharp title="Declaration"
public abstract class Ahtx0 : ByteCommsSensorBase<(RelativeHumidity? Humidity, Temperature? Temperature)>, IObservable<IChangeResult<(RelativeHumidity? Humidity, Temperature? Temperature)>>, ISamplingSensor<(RelativeHumidity? Humidity, Temperature? Temperature)>, ISensor<(RelativeHumidity? Humidity, Temperature? Temperature)>, IDisposable, ITemperatureSensor, ISamplingSensor<Temperature>, ISensor<Temperature>, IHumiditySensor, ISamplingSensor<RelativeHumidity>, ISensor<RelativeHumidity>, ISensor, ISamplingSensor, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`) -> [Meadow.Foundation.PollingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/PollingSensorBase`UNIT`) -> [Meadow.Foundation.ByteCommsSensorBase&lt;UNIT&gt;](../Meadow.Foundation/ByteCommsSensorBase`UNIT`)

**Derived:**  
[Meadow.Foundation.Sensors.Atmospheric.Aht10](../Meadow.Foundation.Sensors.Atmospheric/Aht10), [Meadow.Foundation.Sensors.Atmospheric.Aht20](../Meadow.Foundation.Sensors.Atmospheric/Aht20)

**Implements:**  

<details>
<summary>Expand</summary>

`System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.RelativeHumidity>,System.Nullable<Meadow.Units.Temperature>>>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.RelativeHumidity>,System.Nullable<Meadow.Units.Temperature>>>`, `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.RelativeHumidity>,System.Nullable<Meadow.Units.Temperature>>>`, `System.IDisposable`, `Meadow.Peripherals.Sensors.ITemperatureSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.Atmospheric.IHumiditySensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.RelativeHumidity>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.RelativeHumidity>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.Hardware.II2cPeripheral`
</details>



## Properties
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Ahtx0/Driver/Ahtx0.cs#L38)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
### Temperature
Last value read from the Temperature sensor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Ahtx0/Driver/Ahtx0.cs#L41)
```csharp title="Declaration"
public Temperature? Temperature { get; protected set; }
```
### Humidity
Last value read from the humidity sensor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Ahtx0/Driver/Ahtx0.cs#L44)
```csharp title="Declaration"
public RelativeHumidity? Humidity { get; protected set; }
```
## Methods
### RaiseEventsAndNotify(IChangeResult&lt;(RelativeHumidity? Humidity, Temperature? Temperature)&gt;)
Raise all change events for subscribers
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Ahtx0/Driver/Ahtx0.cs#L60)
```csharp title="Declaration"
protected override void RaiseEventsAndNotify(IChangeResult<(RelativeHumidity? Humidity, Temperature? Temperature)> changeResult)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.RelativeHumidity>,System.Nullable<Meadow.Units.Temperature>>>` | *changeResult* | humidity and temperature |

### ReadSensor()
Reads the humidity and temperature.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Ahtx0/Driver/Ahtx0.cs#L106)
```csharp title="Declaration"
protected override Task<(RelativeHumidity?, Temperature?)> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<System.ValueTuple<System.Nullable<Meadow.Units.RelativeHumidity>,System.Nullable<Meadow.Units.Temperature>>>`

## Implements

* `System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.RelativeHumidity>,System.Nullable<Meadow.Units.Temperature>>>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.RelativeHumidity>,System.Nullable<Meadow.Units.Temperature>>>`
* `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.RelativeHumidity>,System.Nullable<Meadow.Units.Temperature>>>`
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
