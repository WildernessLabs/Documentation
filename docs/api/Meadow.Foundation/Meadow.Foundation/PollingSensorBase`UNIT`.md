---
title: Class PollingSensorBase<UNIT>
sidebar_label: PollingSensorBase<UNIT>
description: Base class that represents a sampling sensor to support the observable pattern
slug: /docs/api/Meadow.Foundation/Meadow.Foundation/PollingSensorBase`UNIT`
---
# Class PollingSensorBase&lt;UNIT&gt;
Base class that represents a sampling sensor to support the observable pattern

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/PollingSensorBase.cs#L11)
```csharp title="Declaration"
public abstract class PollingSensorBase<UNIT> : SamplingSensorBase<UNIT>, IObservable<IChangeResult<UNIT>>, ISamplingSensor<UNIT>, ISensor<UNIT>, ISensor, ISamplingSensor where UNIT : struct
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`)

**Derived:**  

<details>
<summary>Expand</summary>

[Meadow.Foundation.ByteCommsSensorBase&lt;UNIT&gt;](../Meadow.Foundation/ByteCommsSensorBase`UNIT`), [Meadow.Foundation.ICs.ADC.Ads1x15Base](../Meadow.Foundation.ICs.ADC/Ads1x15Base), [Meadow.Foundation.ICs.FanControllers.Emc2101](../Meadow.Foundation.ICs.FanControllers/Emc2101), [Meadow.Foundation.RTCs.Ds323x](../Meadow.Foundation.RTCs/Ds323x), [Meadow.Foundation.Sensors.Atmospheric.Bme280](../Meadow.Foundation.Sensors.Atmospheric/Bme280), [Meadow.Foundation.Sensors.Atmospheric.Bme68x](../Meadow.Foundation.Sensors.Atmospheric/Bme68x), [Meadow.Foundation.Sensors.Atmospheric.Bmp280](../Meadow.Foundation.Sensors.Atmospheric/Bmp280), [Meadow.Foundation.Sensors.Atmospheric.Ccs811](../Meadow.Foundation.Sensors.Atmospheric/Ccs811), [Meadow.Foundation.Sensors.Atmospheric.HC2](../Meadow.Foundation.Sensors.Atmospheric/HC2), [Meadow.Foundation.Sensors.Atmospheric.Ms5611](../Meadow.Foundation.Sensors.Atmospheric/Ms5611), [Meadow.Foundation.Sensors.Distance.A02yyuw](../Meadow.Foundation.Sensors.Distance/A02yyuw), [Meadow.Foundation.Sensors.Distance.MaxBotix](../Meadow.Foundation.Sensors.Distance/MaxBotix), [Meadow.Foundation.Sensors.Distance.Me007ys](../Meadow.Foundation.Sensors.Distance/Me007ys), [Meadow.Foundation.Sensors.Environmental.NextPm](../Meadow.Foundation.Sensors.Environmental/NextPm), [Meadow.Foundation.Sensors.Environmental.Scd4xBase](../Meadow.Foundation.Sensors.Environmental/Scd4xBase), [Meadow.Foundation.Sensors.LoadCell.Hx711](../Meadow.Foundation.Sensors.LoadCell/Hx711), [Meadow.Foundation.Sensors.Moisture.Fc28](../Meadow.Foundation.Sensors.Moisture/Fc28), [Meadow.Foundation.Sensors.Motion.Adxl3xxBase](../Meadow.Foundation.Sensors.Motion/Adxl3xxBase), [Meadow.Foundation.Sensors.Motion.Bmi270](../Meadow.Foundation.Sensors.Motion/Bmi270), [Meadow.Foundation.Sensors.Motion.Lis2mdl](../Meadow.Foundation.Sensors.Motion/Lis2mdl), [Meadow.Foundation.Sensors.Motion.Lis3mdl](../Meadow.Foundation.Sensors.Motion/Lis3mdl), [Meadow.Foundation.Sensors.Motion.Lsm303agr](../Meadow.Foundation.Sensors.Motion/Lsm303agr), [Meadow.Foundation.Sensors.Motion.Lsm6dsox](../Meadow.Foundation.Sensors.Motion/Lsm6dsox), [Meadow.Foundation.Sensors.Temperature.Pct2075](../Meadow.Foundation.Sensors.Temperature/Pct2075), [Meadow.Foundation.Sensors.Temperature.Thermistor](../Meadow.Foundation.Sensors.Temperature/Thermistor), [Meadow.Foundation.Sensors.Weather.SwitchingAnemometer](../Meadow.Foundation.Sensors.Weather/SwitchingAnemometer), [Meadow.Peripherals.Sensors.Flow.HallEffectBase](../Meadow.Peripherals.Sensors.Flow/HallEffectBase)
</details>



**Implements:**  
`System.IObservable<Meadow.IChangeResult<<UNIT>>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<<UNIT>>`, `Meadow.Peripherals.Sensors.ISensor<<UNIT>>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`

## Methods
### StartUpdating(TimeSpan?)
Starts updating the sensor on the updateInterval frequency specified.

This method also starts raising `Updated` events and notifying
IObservable subscribers. Use the `updateInterval` parameter
to specify how often events and notifications are raised/sent.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/PollingSensorBase.cs#L31)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/PollingSensorBase.cs#L84)
```csharp title="Declaration"
public override void StopUpdating()
```
## Events
### CommunicationError
Event raised when a bus communication error occurs
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/PollingSensorBase.cs#L18)
```csharp title="Declaration"
public event EventHandler<Exception>? CommunicationError
```
##### Event Type
`System.EventHandler<System.Exception>`

## Implements

* `System.IObservable<Meadow.IChangeResult<<UNIT>>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<<UNIT>>`
* `Meadow.Peripherals.Sensors.ISensor<<UNIT>>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
