---
title: Class Scd4xBase
sidebar_label: Scd4xBase
description: "Base class for SCD4x series of C02 sensors"
---
# Class Scd4xBase
Base class for SCD4x series of C02 sensors

###### **Assembly**: Scd4x.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd4x/Driver/Scd4xBase.Enums.cs#L3)
```csharp title="Declaration"
public abstract class Scd4xBase : ByteCommsSensorBase<(Concentration? Concentration, Temperature? Temperature, RelativeHumidity? Humidity)>, IObservable<IChangeResult<(Concentration? Concentration, Temperature? Temperature, RelativeHumidity? Humidity)>>, ISamplingSensor<(Concentration? Concentration, Temperature? Temperature, RelativeHumidity? Humidity)>, ISensor<(Concentration? Concentration, Temperature? Temperature, RelativeHumidity? Humidity)>, IDisposable, ITemperatureSensor, ISamplingSensor<Temperature>, ISensor<Temperature>, IHumiditySensor, ISamplingSensor<RelativeHumidity>, ISensor<RelativeHumidity>, IConcentrationSensor, ISamplingSensor<Concentration>, ISensor<Concentration>, ISensor, ISamplingSensor, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`) -> [Meadow.Foundation.PollingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/PollingSensorBase`UNIT`) -> [Meadow.Foundation.ByteCommsSensorBase&lt;UNIT&gt;](../Meadow.Foundation/ByteCommsSensorBase`UNIT`)

**Derived:**  
[Meadow.Foundation.Sensors.Environmental.Scd40](../Meadow.Foundation.Sensors.Environmental/Scd40), [Meadow.Foundation.Sensors.Environmental.Scd41](../Meadow.Foundation.Sensors.Environmental/Scd41)

**Implements:**  

<details><summary>Expand</summary>

`System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Concentration>,System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>>>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.Concentration>,System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>>>`, `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.Concentration>,System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>>>`, `System.IDisposable`, `Meadow.Peripherals.Sensors.ITemperatureSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.Atmospheric.IHumiditySensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.RelativeHumidity>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.RelativeHumidity>`, `Meadow.Peripherals.Sensors.Environmental.IConcentrationSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Concentration>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Concentration>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.Hardware.II2cPeripheral`
</details>



## Properties
### Concentration
The current C02 concentration value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd4x/Driver/Scd4xBase.cs#L46)
```csharp title="Declaration"
public Concentration? Concentration { get; }
```
### Temperature
The current temperature
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd4x/Driver/Scd4xBase.cs#L51)
```csharp title="Declaration"
public Temperature? Temperature { get; }
```
### Humidity
The current humidity
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd4x/Driver/Scd4xBase.cs#L56)
```csharp title="Declaration"
public RelativeHumidity? Humidity { get; }
```
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd4x/Driver/Scd4xBase.cs#L61)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
## Methods
### ReInitialize()
Re-initialize the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd4x/Driver/Scd4xBase.cs#L81)
```csharp title="Declaration"
public Task ReInitialize()
```

##### Returns

`System.Threading.Tasks.Task`
### PerformForcedRecalibration()
Forced recalibration allows recalibration using an external CO2 reference
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd4x/Driver/Scd4xBase.cs#L90)
```csharp title="Declaration"
public Task PerformForcedRecalibration()
```

##### Returns

`System.Threading.Tasks.Task`
### PersistSettings()
Persist settings to EEPROM
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd4x/Driver/Scd4xBase.cs#L99)
```csharp title="Declaration"
public void PersistSettings()
```
### PerformFactoryReset()
Device factory reset and clear all saved settings
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd4x/Driver/Scd4xBase.cs#L107)
```csharp title="Declaration"
public void PerformFactoryReset()
```
### GetSerialNumber()
Get Serial Number from the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd4x/Driver/Scd4xBase.cs#L116)
```csharp title="Declaration"
public byte[] GetSerialNumber()
```

##### Returns

`System.Byte[]`: a 48bit (6 byte) serial number as a byte array### IsDataReady()
Is there sensor measurement data ready
Sensor returns data ~5 seconds in normal operation and ~30 seconds in low power mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd4x/Driver/Scd4xBase.cs#L141)
```csharp title="Declaration"
protected bool IsDataReady()
```

##### Returns

`System.Boolean`: True if ready### StartUpdating(TimeSpan?)
Starts updating the sensor on the updateInterval frequency specified
The sensor updates every 5 seconds, its recommended to choose an interval of 5s or longer
If the update interval is 30 seconds or longer, the sensor will run in low power mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd4x/Driver/Scd4xBase.cs#L170)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd4x/Driver/Scd4xBase.cs#L188)
```csharp title="Declaration"
public override void StopUpdating()
```
### ReadSensor()
Get Scdx40 C02 Gas Concentration and
Update the Concentration property
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd4x/Driver/Scd4xBase.cs#L207)
```csharp title="Declaration"
protected override Task<(Concentration? Concentration, Temperature? Temperature, RelativeHumidity? Humidity)> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<System.ValueTuple<System.Nullable<Meadow.Units.Concentration>,System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>>>`
### RaiseChangedAndNotify(IChangeResult&lt;(Concentration? Concentration, Temperature? Temperature, RelativeHumidity? Humidity)&gt;)
Raise change events for subscribers
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd4x/Driver/Scd4xBase.cs#L243)
```csharp title="Declaration"
protected void RaiseChangedAndNotify(IChangeResult<(Concentration? Concentration, Temperature? Temperature, RelativeHumidity? Humidity)> changeResult)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Concentration>,System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>>>` | *changeResult* | The change result with the current sensor data |


## Implements

* `System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Concentration>,System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>>>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.Concentration>,System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>>>`
* `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.Concentration>,System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>>>`
* `System.IDisposable`
* `Meadow.Peripherals.Sensors.ITemperatureSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`
* `Meadow.Peripherals.Sensors.Atmospheric.IHumiditySensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.RelativeHumidity>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.RelativeHumidity>`
* `Meadow.Peripherals.Sensors.Environmental.IConcentrationSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Concentration>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Concentration>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `Meadow.Hardware.II2cPeripheral`
