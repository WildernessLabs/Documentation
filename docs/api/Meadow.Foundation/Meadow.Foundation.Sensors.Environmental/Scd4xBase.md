---
title: Class Scd4xBase
sidebar_label: Scd4xBase
description: Base class for SCD4x series of C02 sensors
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental/Scd4xBase
---
# Class Scd4xBase
Base class for SCD4x series of C02 sensors

###### **Assembly**: Scd4x.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd4x/Driver/Scd4xBase.Enums.cs#L3)
```csharp title="Declaration"
public abstract class Scd4xBase : PollingSensorBase<(Concentration? Concentration, Temperature? Temperature, RelativeHumidity? Humidity)>, IObservable<IChangeResult<(Concentration? Concentration, Temperature? Temperature, RelativeHumidity? Humidity)>>, ISamplingSensor<(Concentration? Concentration, Temperature? Temperature, RelativeHumidity? Humidity)>, ISensor<(Concentration? Concentration, Temperature? Temperature, RelativeHumidity? Humidity)>, ITemperatureSensor, ISamplingSensor<Temperature>, ISensor<Temperature>, IHumiditySensor, ISamplingSensor<RelativeHumidity>, ISensor<RelativeHumidity>, ICO2ConcentrationSensor, ISamplingSensor<Concentration>, ISensor<Concentration>, ISensor, ISamplingSensor, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`) -> [Meadow.Foundation.PollingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/PollingSensorBase`UNIT`)

**Derived:**  
[Meadow.Foundation.Sensors.Environmental.Scd40](../Meadow.Foundation.Sensors.Environmental/Scd40), [Meadow.Foundation.Sensors.Environmental.Scd41](../Meadow.Foundation.Sensors.Environmental/Scd41)

**Implements:**  

<details>
<summary>Expand</summary>

`System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Concentration>,System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>>>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.Concentration>,System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>>>`, `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.Concentration>,System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>>>`, `Meadow.Peripherals.Sensors.ITemperatureSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.Atmospheric.IHumiditySensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.RelativeHumidity>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.RelativeHumidity>`, `Meadow.Peripherals.Sensors.Environmental.ICO2ConcentrationSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Concentration>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Concentration>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.Hardware.II2cPeripheral`
</details>



## Properties
### CO2Concentration
The current C02 concentration value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd4x/Driver/Scd4xBase.cs#L44)
```csharp title="Declaration"
public Concentration? CO2Concentration { get; }
```
### Temperature
The current temperature
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd4x/Driver/Scd4xBase.cs#L49)
```csharp title="Declaration"
public Temperature? Temperature { get; }
```
### Humidity
The current humidity
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd4x/Driver/Scd4xBase.cs#L54)
```csharp title="Declaration"
public RelativeHumidity? Humidity { get; }
```
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd4x/Driver/Scd4xBase.cs#L59)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
## Fields
### i2cComms
I2C Communication bus used to communicate with the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd4x/Driver/Scd4xBase.cs#L64)
```csharp title="Declaration"
protected readonly II2cCommunications i2cComms
```
## Methods
### ReInitialize()
Re-initialize the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd4x/Driver/Scd4xBase.cs#L88)
```csharp title="Declaration"
public Task ReInitialize()
```

##### Returns

`System.Threading.Tasks.Task`
### PerformForcedCalibration()
Forced calibration allows calibration using an external CO2 reference
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd4x/Driver/Scd4xBase.cs#L97)
```csharp title="Declaration"
public Task PerformForcedCalibration()
```

##### Returns

`System.Threading.Tasks.Task`
### PersistSettings()
Persist settings to EEPROM
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd4x/Driver/Scd4xBase.cs#L106)
```csharp title="Declaration"
public void PersistSettings()
```
### PerformFactoryReset()
Device factory reset and clear all saved settings
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd4x/Driver/Scd4xBase.cs#L114)
```csharp title="Declaration"
public void PerformFactoryReset()
```
### GetSerialNumber()
Get Serial Number from the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd4x/Driver/Scd4xBase.cs#L123)
```csharp title="Declaration"
public byte[] GetSerialNumber()
```

##### Returns

`System.Byte[]`: a 48bit (6 byte) serial number as a byte array### IsDataReady()
Is there sensor measurement data ready
Sensor returns data ~5 seconds in normal operation and ~30 seconds in low power mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd4x/Driver/Scd4xBase.cs#L148)
```csharp title="Declaration"
protected bool IsDataReady()
```

##### Returns

`System.Boolean`: True if ready### StartUpdating(TimeSpan?)
Starts updating the sensor on the updateInterval frequency specified
The sensor updates every 5 seconds, its recommended to choose an interval of 5s or longer
If the update interval is 30 seconds or longer, the sensor will run in low power mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd4x/Driver/Scd4xBase.cs#L177)
```csharp title="Declaration"
public override void StartUpdating(TimeSpan? updateInterval = null)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Nullable<System.TimeSpan>` | *updateInterval* |

### StopUpdating()
Stop updating the sensor
The sensor will not respond to commands for 500ms 
The call will delay the calling thread for 500ms
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd4x/Driver/Scd4xBase.cs#L200)
```csharp title="Declaration"
public override void StopUpdating()
```
### ReadSensor()
Get Scd4x C02 Gas Concentration and
Update the Concentration property
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd4x/Driver/Scd4xBase.cs#L219)
```csharp title="Declaration"
protected override Task<(Concentration? Concentration, Temperature? Temperature, RelativeHumidity? Humidity)> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<System.ValueTuple<System.Nullable<Meadow.Units.Concentration>,System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>>>`
### RaiseEventsAndNotify(IChangeResult&lt;(Concentration? Concentration, Temperature? Temperature, RelativeHumidity? Humidity)&gt;)
Raise change events for subscribers
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd4x/Driver/Scd4xBase.cs#L267)
```csharp title="Declaration"
protected override void RaiseEventsAndNotify(IChangeResult<(Concentration? Concentration, Temperature? Temperature, RelativeHumidity? Humidity)> changeResult)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Concentration>,System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>>>` | *changeResult* | The change result with the current sensor data |


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
