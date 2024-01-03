---
title: Class Bme68x
sidebar_label: Bme68x
description: "Represents the Bosch BME68x Temperature, Pressure and Humidity Sensor"
---
# Class Bme68x
Represents the Bosch BME68x Temperature, Pressure and Humidity Sensor

###### **Assembly**: Bme68x.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme68x/Driver/Bme68x.Registers.cs#L3)
```csharp title="Declaration"
public abstract class Bme68x : PollingSensorBase<(Temperature? Temperature, RelativeHumidity? Humidity, Pressure? Pressure, Resistance? GasResistance)>, IObservable<IChangeResult<(Temperature? Temperature, RelativeHumidity? Humidity, Pressure? Pressure, Resistance? GasResistance)>>, ISamplingSensor<(Temperature? Temperature, RelativeHumidity? Humidity, Pressure? Pressure, Resistance? GasResistance)>, ISensor<(Temperature? Temperature, RelativeHumidity? Humidity, Pressure? Pressure, Resistance? GasResistance)>, ITemperatureSensor, ISamplingSensor<Temperature>, ISensor<Temperature>, IHumiditySensor, ISamplingSensor<RelativeHumidity>, ISensor<RelativeHumidity>, IBarometricPressureSensor, ISamplingSensor<Pressure>, ISensor<Pressure>, IGasResistanceSensor, ISamplingSensor<Resistance>, ISensor<Resistance>, ISensor, ISamplingSensor, ISpiPeripheral, II2cPeripheral, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`) -> [Meadow.Foundation.PollingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/PollingSensorBase`UNIT`)

**Derived:**  
[Meadow.Foundation.Sensors.Atmospheric.Bme680](../Meadow.Foundation.Sensors.Atmospheric/Bme680), [Meadow.Foundation.Sensors.Atmospheric.Bme688](../Meadow.Foundation.Sensors.Atmospheric/Bme688)

**Implements:**  

<details><summary>Expand</summary>

`System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>,System.Nullable<Meadow.Units.Pressure>,System.Nullable<Meadow.Units.Resistance>>>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>,System.Nullable<Meadow.Units.Pressure>,System.Nullable<Meadow.Units.Resistance>>>`, `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>,System.Nullable<Meadow.Units.Pressure>,System.Nullable<Meadow.Units.Resistance>>>`, `Meadow.Peripherals.Sensors.ITemperatureSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.Atmospheric.IHumiditySensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.RelativeHumidity>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.RelativeHumidity>`, `Meadow.Peripherals.Sensors.Atmospheric.IBarometricPressureSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Pressure>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Pressure>`, `Meadow.Peripherals.Sensors.Environmental.IGasResistanceSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Resistance>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Resistance>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.Hardware.ISpiPeripheral`, `Meadow.Hardware.II2cPeripheral`, `System.IDisposable`
</details>



## Properties
### TemperatureOversampleMode
The temperature oversampling mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme68x/Driver/Bme68x.cs#L36)
```csharp title="Declaration"
public Bme68x.Oversample TemperatureOversampleMode { get; set; }
```
### PressureOversampleMode
The pressure oversampling mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme68x/Driver/Bme68x.cs#L45)
```csharp title="Declaration"
public Bme68x.Oversample PressureOversampleMode { get; set; }
```
### HumidityOversampleMode
The humidity oversampling mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme68x/Driver/Bme68x.cs#L54)
```csharp title="Declaration"
public Bme68x.Oversample HumidityOversampleMode { get; set; }
```
### HeaterProfile
Gets / sets the heater profile to be used for measurements
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme68x/Driver/Bme68x.cs#L63)
```csharp title="Declaration"
public Bme68x.HeaterProfileType HeaterProfile { get; set; }
```
### FilterMode
Gets / sets the filtering mode to be used for measurements
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme68x/Driver/Bme68x.cs#L90)
```csharp title="Declaration"
public Bme68x.FilteringMode FilterMode { get; set; }
```
### HeaterIsEnabled
Enable / disable the sensor heater
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme68x/Driver/Bme68x.cs#L114)
```csharp title="Declaration"
public bool HeaterIsEnabled { get; set; }
```
### GasConversionIsEnabled
Enable / disable gas conversions
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme68x/Driver/Bme68x.cs#L133)
```csharp title="Declaration"
public bool GasConversionIsEnabled { get; set; }
```
### DefaultSpiBusSpeed
The default SPI bus speed for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme68x/Driver/Bme68x.cs#L152)
```csharp title="Declaration"
public Frequency DefaultSpiBusSpeed { get; }
```
### SpiBusSpeed
The SPI bus speed for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme68x/Driver/Bme68x.cs#L157)
```csharp title="Declaration"
public Frequency SpiBusSpeed { get; set; }
```
### DefaultSpiBusMode
The default SPI bus mode for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme68x/Driver/Bme68x.cs#L166)
```csharp title="Declaration"
public SpiClockConfiguration.Mode DefaultSpiBusMode { get; }
```
### SpiBusMode
The SPI bus mode for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme68x/Driver/Bme68x.cs#L171)
```csharp title="Declaration"
public SpiClockConfiguration.Mode SpiBusMode { get; set; }
```
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme68x/Driver/Bme68x.cs#L180)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
### Temperature
The current temperature
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme68x/Driver/Bme68x.cs#L190)
```csharp title="Declaration"
public Temperature? Temperature { get; }
```
### Pressure
The current pressure
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme68x/Driver/Bme68x.cs#L195)
```csharp title="Declaration"
public Pressure? Pressure { get; }
```
### Humidity
The current humidity, in percent relative humidity
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme68x/Driver/Bme68x.cs#L200)
```csharp title="Declaration"
public RelativeHumidity? Humidity { get; }
```
### GasResistance
The current gas resistance
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme68x/Driver/Bme68x.cs#L205)
```csharp title="Declaration"
public Resistance? GasResistance { get; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme68x/Driver/Bme68x.cs#L210)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### Initialize()
Initialize the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme68x/Driver/Bme68x.cs#L301)
```csharp title="Declaration"
protected void Initialize()
```
### Reset()
Perform a complete power-on-reset
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme68x/Driver/Bme68x.cs#L325)
```csharp title="Declaration"
public void Reset()
```
### ConfigureHeatingProfile(HeaterProfileType, Temperature, TimeSpan, Temperature)
Configures a heater profile, making it ready for use.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme68x/Driver/Bme68x.cs#L337)
```csharp title="Declaration"
public void ConfigureHeatingProfile(Bme68x.HeaterProfileType profile, Temperature targetTemperature, TimeSpan duration, Temperature ambientTemperature)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Sensors.Atmospheric.Bme68x.HeaterProfileType](../Meadow.Foundation.Sensors.Atmospheric/Bme68x.HeaterProfileType) | *profile* | The heater profile to configure |
| `Meadow.Units.Temperature` | *targetTemperature* | The target temperature (0-400 C) |
| `System.TimeSpan` | *duration* | The measurement duration (0-4032ms) |
| `Meadow.Units.Temperature` | *ambientTemperature* | The ambient temperature |

### GetPowerMode()
Get the current power mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme68x/Driver/Bme68x.cs#L359)
```csharp title="Declaration"
public Bme68x.PowerMode GetPowerMode()
```

##### Returns

[Meadow.Foundation.Sensors.Atmospheric.Bme68x.PowerMode](../Meadow.Foundation.Sensors.Atmospheric/Bme68x.PowerMode): The power mode### SetPowerMode(PowerMode)
Sets the power mode to the given mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme68x/Driver/Bme68x.cs#L370)
```csharp title="Declaration"
public void SetPowerMode(Bme68x.PowerMode powerMode)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Sensors.Atmospheric.Bme68x.PowerMode](../Meadow.Foundation.Sensors.Atmospheric/Bme68x.PowerMode) | *powerMode* | The [Meadow.Foundation.Sensors.Atmospheric.Bme68x.PowerMode](../Meadow.Foundation.Sensors.Atmospheric/Bme68x.PowerMode) to set. |

### GetMeasurementDuration(HeaterProfileType)
Gets the required time in to perform a measurement. The duration of the gas
measurement is not considered if [Meadow.Foundation.Sensors.Atmospheric.Bme68x.GasConversionIsEnabled](../Meadow.Foundation.Sensors.Atmospheric/Bme68x#gasconversionisenabled) is set to false
or the chosen [Meadow.Foundation.Sensors.Atmospheric.Bme68x.HeaterProfile](../Meadow.Foundation.Sensors.Atmospheric/Bme68x#heaterprofile) is not configured.
The precision of this duration is within 1ms of the actual measurement time.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme68x/Driver/Bme68x.cs#L386)
```csharp title="Declaration"
public TimeSpan GetMeasurementDuration(Bme68x.HeaterProfileType profile)
```

##### Returns

`System.TimeSpan`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Sensors.Atmospheric.Bme68x.HeaterProfileType](../Meadow.Foundation.Sensors.Atmospheric/Bme68x.HeaterProfileType) | *profile* | The used [Meadow.Foundation.Sensors.Atmospheric.Bme68x.HeaterProfile](../Meadow.Foundation.Sensors.Atmospheric/Bme68x#heaterprofile). |

### RaiseEventsAndNotify(IChangeResult&lt;(Temperature? Temperature, RelativeHumidity? Humidity, Pressure? Pressure, Resistance? GasResistance)&gt;)
Raise events for subscribers and notify of value changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme68x/Driver/Bme68x.cs#L420)
```csharp title="Declaration"
protected override void RaiseEventsAndNotify(IChangeResult<(Temperature? Temperature, RelativeHumidity? Humidity, Pressure? Pressure, Resistance? GasResistance)> changeResult)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>,System.Nullable<Meadow.Units.Pressure>,System.Nullable<Meadow.Units.Resistance>>>` | *changeResult* | The updated sensor data |

### ReadSensor()
Reads data from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme68x/Driver/Bme68x.cs#L445)
```csharp title="Declaration"
protected override Task<(Temperature? Temperature, RelativeHumidity? Humidity, Pressure? Pressure, Resistance? GasResistance)> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<System.ValueTuple<System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>,System.Nullable<Meadow.Units.Pressure>,System.Nullable<Meadow.Units.Resistance>>>`: The latest sensor reading### CompensateTemperature(int)
Compensates the temperature
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme68x/Driver/Bme68x.cs#L512)
```csharp title="Declaration"
protected Temperature CompensateTemperature(int rawTemperature)
```

##### Returns

`Meadow.Units.Temperature`: The temperature
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *rawTemperature* | The temperature value read from the device |

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme68x/Driver/Bme68x.cs#L644)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme68x/Driver/Bme68x.cs#L654)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |


## Implements

* `System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>,System.Nullable<Meadow.Units.Pressure>,System.Nullable<Meadow.Units.Resistance>>>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>,System.Nullable<Meadow.Units.Pressure>,System.Nullable<Meadow.Units.Resistance>>>`
* `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>,System.Nullable<Meadow.Units.Pressure>,System.Nullable<Meadow.Units.Resistance>>>`
* `Meadow.Peripherals.Sensors.ITemperatureSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`
* `Meadow.Peripherals.Sensors.Atmospheric.IHumiditySensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.RelativeHumidity>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.RelativeHumidity>`
* `Meadow.Peripherals.Sensors.Atmospheric.IBarometricPressureSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Pressure>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Pressure>`
* `Meadow.Peripherals.Sensors.Environmental.IGasResistanceSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Resistance>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Resistance>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `Meadow.Hardware.ISpiPeripheral`
* `Meadow.Hardware.II2cPeripheral`
* `System.IDisposable`
