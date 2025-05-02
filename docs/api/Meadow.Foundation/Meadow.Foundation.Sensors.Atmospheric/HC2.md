---
title: Class HC2
sidebar_label: HC2
description: Represents a HC2 humidity probe by Rotronic
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric/HC2
---
# Class HC2
Represents a HC2 humidity probe by Rotronic

###### **Assembly**: Hc2.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Hc2/Driver/Hc2.Serial.cs#L8)
```csharp title="Declaration"
public class HC2 : PollingSensorBase<(RelativeHumidity? Humidity, Temperature? Temperature)>, IObservable<IChangeResult<(RelativeHumidity? Humidity, Temperature? Temperature)>>, ISamplingSensor<(RelativeHumidity? Humidity, Temperature? Temperature)>, ISensor<(RelativeHumidity? Humidity, Temperature? Temperature)>, ITemperatureSensor, ISamplingSensor<Temperature>, ISensor<Temperature>, IHumiditySensor, ISamplingSensor<RelativeHumidity>, ISensor<RelativeHumidity>, ISensor, ISamplingSensor
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`) -> [Meadow.Foundation.PollingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/PollingSensorBase`UNIT`)

**Implements:**  

<details>
<summary>Expand</summary>

`System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.RelativeHumidity>,System.Nullable<Meadow.Units.Temperature>>>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.RelativeHumidity>,System.Nullable<Meadow.Units.Temperature>>>`, `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.RelativeHumidity>,System.Nullable<Meadow.Units.Temperature>>>`, `Meadow.Peripherals.Sensors.ITemperatureSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.Atmospheric.IHumiditySensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.RelativeHumidity>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.RelativeHumidity>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`
</details>



## Properties
### Humidity
The current relative humidity
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Hc2/Driver/Hc2.cs#L34)
```csharp title="Declaration"
public RelativeHumidity? Humidity { get; }
```
### Temperature
The current temperature
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Hc2/Driver/Hc2.cs#L39)
```csharp title="Declaration"
public Temperature? Temperature { get; }
```
## Fields
### HumidityInputPort
Analog port connected to Humidity pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Hc2/Driver/Hc2.Analog.cs#L13)
```csharp title="Declaration"
protected IObservableAnalogInputPort? HumidityInputPort
```
### TemperatureInputPort
Analog port connected to Temperature pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Hc2/Driver/Hc2.Analog.cs#L18)
```csharp title="Declaration"
protected IObservableAnalogInputPort? TemperatureInputPort
```
## Methods
### RaiseEventsAndNotify(IChangeResult&lt;(RelativeHumidity? Humidity, Temperature? Temperature)&gt;)
Raise all change events for subscribers
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Hc2/Driver/Hc2.cs#L47)
```csharp title="Declaration"
protected override void RaiseEventsAndNotify(IChangeResult<(RelativeHumidity? Humidity, Temperature? Temperature)> changeResult)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.RelativeHumidity>,System.Nullable<Meadow.Units.Temperature>>>` | *changeResult* | humidity and temperature |

### ReadSensor()
Reads the humidity and temperature.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Hc2/Driver/Hc2.cs#L63)
```csharp title="Declaration"
protected override Task<(RelativeHumidity?, Temperature?)> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<System.ValueTuple<System.Nullable<Meadow.Units.RelativeHumidity>,System.Nullable<Meadow.Units.Temperature>>>`

## Implements

* `System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.RelativeHumidity>,System.Nullable<Meadow.Units.Temperature>>>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.RelativeHumidity>,System.Nullable<Meadow.Units.Temperature>>>`
* `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.RelativeHumidity>,System.Nullable<Meadow.Units.Temperature>>>`
* `Meadow.Peripherals.Sensors.ITemperatureSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`
* `Meadow.Peripherals.Sensors.Atmospheric.IHumiditySensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.RelativeHumidity>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.RelativeHumidity>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
