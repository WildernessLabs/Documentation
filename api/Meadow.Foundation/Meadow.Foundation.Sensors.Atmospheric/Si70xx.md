---
title: Class Si70xx
sidebar_label: Si70xx
description: "Provide access to the Si70xx series (Si7020, Si7021, and Si7030)
temperature and humidity sensors"
---
# Class Si70xx
Provide access to the Si70xx series (Si7020, Si7021, and Si7030)
temperature and humidity sensors

###### **Assembly**: Si70xx.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Si70xx/Driver/Si70xx.Enums.cs#L3)
```csharp title="Declaration"
public class Si70xx : ByteCommsSensorBase<(Temperature? Temperature, RelativeHumidity? Humidity)>, IObservable<IChangeResult<(Temperature? Temperature, RelativeHumidity? Humidity)>>, ISamplingSensor<(Temperature? Temperature, RelativeHumidity? Humidity)>, ISensor<(Temperature? Temperature, RelativeHumidity? Humidity)>, IDisposable, ITemperatureSensor, ISamplingSensor<Temperature>, ISensor<Temperature>, IHumiditySensor, ISamplingSensor<RelativeHumidity>, ISensor<RelativeHumidity>, ISensor, ISamplingSensor, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`) -> [Meadow.Foundation.PollingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/PollingSensorBase`UNIT`) -> [Meadow.Foundation.ByteCommsSensorBase&lt;UNIT&gt;](../Meadow.Foundation/ByteCommsSensorBase`UNIT`)

**Implements:**  

<details><summary>Expand</summary>

`System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>>>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>>>`, `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>>>`, `System.IDisposable`, `Meadow.Peripherals.Sensors.ITemperatureSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.Atmospheric.IHumiditySensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.RelativeHumidity>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.RelativeHumidity>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.Hardware.II2cPeripheral`
</details>



## Properties
### Temperature
The temperature from the last reading
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Si70xx/Driver/Si70xx.cs#L39)
```csharp title="Declaration"
public Temperature? Temperature { get; }
```
### Humidity
The humidity, in percent relative humidity, from the last reading
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Si70xx/Driver/Si70xx.cs#L44)
```csharp title="Declaration"
public RelativeHumidity? Humidity { get; }
```
### SerialNumber
Serial number of the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Si70xx/Driver/Si70xx.cs#L49)
```csharp title="Declaration"
public ulong SerialNumber { get; }
```
### SensorType
Device type as extracted from the serial number
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Si70xx/Driver/Si70xx.cs#L54)
```csharp title="Declaration"
public Si70xx.DeviceType SensorType { get; }
```
### FirmwareRevision
Firmware revision of the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Si70xx/Driver/Si70xx.cs#L59)
```csharp title="Declaration"
public byte FirmwareRevision { get; }
```
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Si70xx/Driver/Si70xx.cs#L64)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
## Methods
### Reset()
Reset the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Si70xx/Driver/Si70xx.cs#L79)
```csharp title="Declaration"
protected void Reset()
```
### Initialize()
Initialize the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Si70xx/Driver/Si70xx.cs#L88)
```csharp title="Declaration"
protected void Initialize()
```
### ReadSensor()
Reads data from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Si70xx/Driver/Si70xx.cs#L133)
```csharp title="Declaration"
protected override Task<(Temperature? Temperature, RelativeHumidity? Humidity)> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<System.ValueTuple<System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>>>`: The latest sensor reading### RaiseEventsAndNotify(IChangeResult&lt;(Temperature? Temperature, RelativeHumidity? Humidity)&gt;)
Inheritance-safe way to raise events and notify observers.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Si70xx/Driver/Si70xx.cs#L167)
```csharp title="Declaration"
protected override void RaiseEventsAndNotify(IChangeResult<(Temperature? Temperature, RelativeHumidity? Humidity)> changeResult)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>>>` | *changeResult* |

### Heater(bool)
Turn the heater on or off
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Si70xx/Driver/Si70xx.cs#L184)
```csharp title="Declaration"
public void Heater(bool onOrOff)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *onOrOff* | Heater status, true = turn heater on, false = turn heater off. |


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
