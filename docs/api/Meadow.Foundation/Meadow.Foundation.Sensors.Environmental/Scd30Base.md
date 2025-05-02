---
title: Class Scd30Base
sidebar_label: Scd30Base
description: Base class for SCD30 C02 sensor
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental/Scd30Base
---
# Class Scd30Base
Base class for SCD30 C02 sensor

###### **Assembly**: Scd30.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd30/Driver/Scd30Base.Enums.cs#L3)
```csharp title="Declaration"
public abstract class Scd30Base : ByteCommsSensorBase<(Concentration? Concentration, Temperature? Temperature, RelativeHumidity? Humidity)>, IObservable<IChangeResult<(Concentration? Concentration, Temperature? Temperature, RelativeHumidity? Humidity)>>, ISamplingSensor<(Concentration? Concentration, Temperature? Temperature, RelativeHumidity? Humidity)>, ISensor<(Concentration? Concentration, Temperature? Temperature, RelativeHumidity? Humidity)>, IDisposable, ITemperatureSensor, ISamplingSensor<Temperature>, ISensor<Temperature>, IHumiditySensor, ISamplingSensor<RelativeHumidity>, ISensor<RelativeHumidity>, ICO2ConcentrationSensor, ISamplingSensor<Concentration>, ISensor<Concentration>, ISensor, ISamplingSensor, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`) -> [Meadow.Foundation.PollingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/PollingSensorBase`UNIT`) -> [Meadow.Foundation.ByteCommsSensorBase&lt;UNIT&gt;](../Meadow.Foundation/ByteCommsSensorBase`UNIT`)

**Derived:**  
[Meadow.Foundation.Sensors.Environmental.Scd30](../Meadow.Foundation.Sensors.Environmental/Scd30)

**Implements:**  

<details>
<summary>Expand</summary>

`System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Concentration>,System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>>>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.Concentration>,System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>>>`, `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.Concentration>,System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>>>`, `System.IDisposable`, `Meadow.Peripherals.Sensors.ITemperatureSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.Atmospheric.IHumiditySensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.RelativeHumidity>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.RelativeHumidity>`, `Meadow.Peripherals.Sensors.Environmental.ICO2ConcentrationSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Concentration>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Concentration>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.Hardware.II2cPeripheral`
</details>



## Properties
### CO2Concentration
The current C02 concentration value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd30/Driver/Scd30Base.cs#L48)
```csharp title="Declaration"
public Concentration? CO2Concentration { get; }
```
### Temperature
The current temperature
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd30/Driver/Scd30Base.cs#L53)
```csharp title="Declaration"
public Temperature? Temperature { get; }
```
### Humidity
The current humidity
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd30/Driver/Scd30Base.cs#L58)
```csharp title="Declaration"
public RelativeHumidity? Humidity { get; }
```
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd30/Driver/Scd30Base.cs#L63)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
## Methods
### PerformSoftReset()
Soft reset the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd30/Driver/Scd30Base.cs#L82)
```csharp title="Declaration"
public Task PerformSoftReset()
```

##### Returns

`System.Threading.Tasks.Task`
### IsDataReady()
Is there sensor measurement data ready
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd30/Driver/Scd30Base.cs#L93)
```csharp title="Declaration"
protected bool IsDataReady()
```

##### Returns

`System.Boolean`: True if ready### SetMeasurementInterval(ushort)
Set the interval between measurements of the sensor itself.
Sensor reads data between 2 or 1800 seconds.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd30/Driver/Scd30Base.cs#L102)
```csharp title="Declaration"
public void SetMeasurementInterval(ushort interval)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.UInt16` | *interval* |

### GetMeasurementInterval()
Get the interval between measurements of the sensor itself.
Sensor reads data between 2 or 1800 seconds.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd30/Driver/Scd30Base.cs#L116)
```csharp title="Declaration"
public ushort GetMeasurementInterval()
```

##### Returns

`System.UInt16`
### SelfCalibrationEnabled()
Get the status of the automatic self calibration
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd30/Driver/Scd30Base.cs#L125)
```csharp title="Declaration"
public bool SelfCalibrationEnabled()
```

##### Returns

`System.Boolean`: True if auto calibration is enabled### SetAutoCalibration(bool)
Enables or disables the automatic self calibration
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd30/Driver/Scd30Base.cs#L134)
```csharp title="Declaration"
protected bool SetAutoCalibration(bool enabled)
```

##### Returns

`System.Boolean`: True if auto read from register is the same as given
##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Boolean` | *enabled* |

### StartUpdating(TimeSpan?)
Starts measuring sensor data.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd30/Driver/Scd30Base.cs#L149)
```csharp title="Declaration"
public override void StartUpdating(TimeSpan? updateInterval = null)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Nullable<System.TimeSpan>` | *updateInterval* | The sensor updates based on the measurement interval between 2 and 1800 seconds.
Its recommended to choose an update interval between that.
You can change the measurement interval later with [Meadow.Foundation.Sensors.Environmental.Scd30Base.SetMeasurementInterval(ushort)](../Meadow.Foundation.Sensors.Environmental/Scd30Base#setmeasurementintervalushort). |

### StartUpdating(ushort, TimeSpan)
Starts measuring sensor data.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd30/Driver/Scd30Base.cs#L166)
```csharp title="Declaration"
public void StartUpdating(ushort ambientPressure, TimeSpan updateInterval)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.UInt16` | *ambientPressure* | Optional parameter to set the ambient pressure in mBar. |
| `System.TimeSpan` | *updateInterval* | The sensor updates based on the measurement interval between 2 and 1800 seconds.
Its recommended to choose an update interval between that.
You can change the measurement interval later with [Meadow.Foundation.Sensors.Environmental.Scd30Base.SetMeasurementInterval(ushort)](../Meadow.Foundation.Sensors.Environmental/Scd30Base#setmeasurementintervalushort). |

### GetAmbientPressureOffset()
Gets the ambient pressure setting used when measuring started.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd30/Driver/Scd30Base.cs#L175)
```csharp title="Declaration"
public ushort GetAmbientPressureOffset()
```

##### Returns

`System.UInt16`
### SetAltitudeOffset(ushort)
Sets the Altitude used for ambient pressure calibration.
This value is stored on the sensor, even after reboot.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd30/Driver/Scd30Base.cs#L185)
```csharp title="Declaration"
public void SetAltitudeOffset(ushort altitude)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.UInt16` | *altitude* | Altitude in meters above sea level. |

### GetAltitudeOffset()
Gets the Altitude used for ambient pressure calibration.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd30/Driver/Scd30Base.cs#L193)
```csharp title="Declaration"
public ushort GetAltitudeOffset()
```

##### Returns

`System.UInt16`
### SetTemperatureOffset(ushort)
Sets the temperature to set in hundredths of degrees, used for temperature compensation.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd30/Driver/Scd30Base.cs#L201)
```csharp title="Declaration"
public void SetTemperatureOffset(ushort offset)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.UInt16` | *offset* |

### GetTemperatureOffset()
Get the temperature to set in hundredths of degrees, used for temperature compensation.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd30/Driver/Scd30Base.cs#L209)
```csharp title="Declaration"
public ushort GetTemperatureOffset()
```

##### Returns

`System.UInt16`
### ForceCalibration(ushort)
Forces the sensor to recalibrate it's CO2 sensor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd30/Driver/Scd30Base.cs#L221)
```csharp title="Declaration"
public void ForceCalibration(ushort reference)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.UInt16` | *reference* | The calibration value between 400 and 2000 ppm.
This value is saved in the sensor, even after reboot. |

### GetForceCalibrationValue()
Get the value used for forced recalibration.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd30/Driver/Scd30Base.cs#L234)
```csharp title="Declaration"
public ushort GetForceCalibrationValue()
```

##### Returns

`System.UInt16`
### StopUpdating()
Stop updating the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd30/Driver/Scd30Base.cs#L250)
```csharp title="Declaration"
public override void StopUpdating()
```
### ReadSensor()
Get Scd30 sensor values.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd30/Driver/Scd30Base.cs#L300)
```csharp title="Declaration"
protected override Task<(Concentration? Concentration, Temperature? Temperature, RelativeHumidity? Humidity)> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<System.ValueTuple<System.Nullable<Meadow.Units.Concentration>,System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>>>`
### RaiseChangedAndNotify(IChangeResult&lt;(Concentration? Concentration, Temperature? Temperature, RelativeHumidity? Humidity)&gt;)
Raise change events for subscribers
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd30/Driver/Scd30Base.cs#L349)
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
* `Meadow.Peripherals.Sensors.Environmental.ICO2ConcentrationSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Concentration>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Concentration>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `Meadow.Hardware.II2cPeripheral`
