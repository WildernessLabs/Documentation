---
title: Class Mcp960x
sidebar_label: Mcp960x
description: Represents a Mcp960x Thermocouple sensor object
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature/Mcp960x
---
# Class Mcp960x
Represents a Mcp960x Thermocouple sensor object

###### **Assembly**: Mcp960x.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Mcp960x/Driver/Mcp960x.Registers.cs#L3)
```csharp title="Declaration"
public abstract class Mcp960x : ByteCommsSensorBase<(Temperature? TemperatureHot, Temperature? TemperatureCold)>, IObservable<IChangeResult<(Temperature? TemperatureHot, Temperature? TemperatureCold)>>, ISamplingSensor<(Temperature? TemperatureHot, Temperature? TemperatureCold)>, ISensor<(Temperature? TemperatureHot, Temperature? TemperatureCold)>, IDisposable, ITemperatureSensor, ISamplingSensor<Temperature>, ISensor<Temperature>, ISensor, ISamplingSensor, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`) -> [Meadow.Foundation.PollingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/PollingSensorBase`UNIT`) -> [Meadow.Foundation.ByteCommsSensorBase&lt;UNIT&gt;](../Meadow.Foundation/ByteCommsSensorBase`UNIT`)

**Derived:**  
[Meadow.Foundation.Sensors.Temperature.Mcp9600](../Meadow.Foundation.Sensors.Temperature/Mcp9600), [Meadow.Foundation.Sensors.Temperature.Mcp9601](../Meadow.Foundation.Sensors.Temperature/Mcp9601)

**Implements:**  

<details>
<summary>Expand</summary>

`System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.Temperature>>>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.Temperature>>>`, `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.Temperature>>>`, `System.IDisposable`, `Meadow.Peripherals.Sensors.ITemperatureSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.Hardware.II2cPeripheral`
</details>



## Properties
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Mcp960x/Driver/Mcp960x.cs#L18)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
### Temperature
The Hot Temperature value from the last reading
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Mcp960x/Driver/Mcp960x.cs#L41)
```csharp title="Declaration"
public Temperature? Temperature { get; }
```
### TemperatureHot
The Hot Temperature value from the last reading
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Mcp960x/Driver/Mcp960x.cs#L46)
```csharp title="Declaration"
public Temperature? TemperatureHot { get; }
```
### TemperatureCold
The Cold Temperature value from the last reading
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Mcp960x/Driver/Mcp960x.cs#L51)
```csharp title="Declaration"
public Temperature? TemperatureCold { get; }
```
## Methods
### ReadSensor()
Update the Temperature property
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Mcp960x/Driver/Mcp960x.cs#L72)
```csharp title="Declaration"
protected override Task<(Temperature? TemperatureHot, Temperature? TemperatureCold)> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<System.ValueTuple<System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.Temperature>>>`
### SetThermocoupleType(ThermocoupleType)
Sets the thermocouple type for the MCP960x
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Mcp960x/Driver/Mcp960x.cs#L118)
```csharp title="Declaration"
public void SetThermocoupleType(Mcp960x.ThermocoupleType type)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Sensors.Temperature.Mcp960x.ThermocoupleType](../Meadow.Foundation.Sensors.Temperature/Mcp960x.ThermocoupleType) | *type* | The thermocouple type to set |

### GetThermocoupleType()
Gets the thermocouple type currently configured for the MCP960x
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Mcp960x/Driver/Mcp960x.cs#L131)
```csharp title="Declaration"
public Mcp960x.ThermocoupleType GetThermocoupleType()
```

##### Returns

[Meadow.Foundation.Sensors.Temperature.Mcp960x.ThermocoupleType](../Meadow.Foundation.Sensors.Temperature/Mcp960x.ThermocoupleType): The currently configured thermocouple type### SetAdcResolution(AdcResolution)
Sets the ADC resolution for the MCP960x
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Mcp960x/Driver/Mcp960x.cs#L142)
```csharp title="Declaration"
public void SetAdcResolution(Mcp960x.AdcResolution resolution)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Sensors.Temperature.Mcp960x.AdcResolution](../Meadow.Foundation.Sensors.Temperature/Mcp960x.AdcResolution) | *resolution* | The ADC resolution to set |

### GetAdcResolution()
Gets the ADC resolution currently configured for the MCP960x
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Mcp960x/Driver/Mcp960x.cs#L155)
```csharp title="Declaration"
public Mcp960x.AdcResolution GetAdcResolution()
```

##### Returns

[Meadow.Foundation.Sensors.Temperature.Mcp960x.AdcResolution](../Meadow.Foundation.Sensors.Temperature/Mcp960x.AdcResolution): The currently configured ADC resolution### SetFilterCoefficient(FilterCoefficient)
Sets the filter coefficient for the MCP960x
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Mcp960x/Driver/Mcp960x.cs#L166)
```csharp title="Declaration"
public void SetFilterCoefficient(Mcp960x.FilterCoefficient coefficient)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Sensors.Temperature.Mcp960x.FilterCoefficient](../Meadow.Foundation.Sensors.Temperature/Mcp960x.FilterCoefficient) | *coefficient* | The filter coefficient to set |

### GetFilterCoefficient()
Gets the filter coefficient for the MCP960x
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Mcp960x/Driver/Mcp960x.cs#L179)
```csharp title="Declaration"
public Mcp960x.FilterCoefficient GetFilterCoefficient()
```

##### Returns

[Meadow.Foundation.Sensors.Temperature.Mcp960x.FilterCoefficient](../Meadow.Foundation.Sensors.Temperature/Mcp960x.FilterCoefficient): The currently configured filter coefficient### SetAlertTemperature(AlertNumber, Temperature)
Sets the alert temperature for the specified alert number of the MCP960x
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Mcp960x/Driver/Mcp960x.cs#L191)
```csharp title="Declaration"
public void SetAlertTemperature(Mcp960x.AlertNumber alertNumber, Temperature temperature)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Sensors.Temperature.Mcp960x.AlertNumber](../Meadow.Foundation.Sensors.Temperature/Mcp960x.AlertNumber) | *alertNumber* | The alert number (1-4) to set the temperature for |
| `Meadow.Units.Temperature` | *temperature* | The temperature value |

### GetAlertTemperature(AlertNumber)
Gets the alert temperature for the specified alert number of the MCP960x
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Mcp960x/Driver/Mcp960x.cs#L208)
```csharp title="Declaration"
public Temperature GetAlertTemperature(Mcp960x.AlertNumber alertNumber)
```

##### Returns

`Meadow.Units.Temperature`: The alert temperature value
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Sensors.Temperature.Mcp960x.AlertNumber](../Meadow.Foundation.Sensors.Temperature/Mcp960x.AlertNumber) | *alertNumber* | The alert number (1-4) to get the temperature for |

### ConfigureAlert(AlertNumber, bool, bool, bool, bool, bool)
Configures the alert settings for the MCP960x
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Mcp960x/Driver/Mcp960x.cs#L234)
```csharp title="Declaration"
public void ConfigureAlert(Mcp960x.AlertNumber alertNumber, bool enabled, bool rising, bool alertColdJunction, bool activeHigh, bool interruptMode)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Sensors.Temperature.Mcp960x.AlertNumber](../Meadow.Foundation.Sensors.Temperature/Mcp960x.AlertNumber) | *alertNumber* | The alert number (Alert1-Alert4) to configure |
| `System.Boolean` | *enabled* | Whether the alert is enabled |
| `System.Boolean` | *rising* | Whether the alert triggers on a rising temperature. Set to false for falling temperature |
| `System.Boolean` | *alertColdJunction* | Whether the alert triggers on cold junction temperature. Set to false for thermocouple temperature |
| `System.Boolean` | *activeHigh* | Whether the alert pin is active high. Set to false for active low |
| `System.Boolean` | *interruptMode* | Whether the alert pin is in interrupt mode. Set to false for comparator mode |

### Enable(bool)
Enables or disables the MCP960x sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Mcp960x/Driver/Mcp960x.cs#L256)
```csharp title="Declaration"
public void Enable(bool enable)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *enable* | True to enable the sensor, false to enter sleep mode |

### IsEnabled()
Checks whether the MCP960x sensor is enabled and working or in sleep mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Mcp960x/Driver/Mcp960x.cs#L274)
```csharp title="Declaration"
public bool IsEnabled()
```

##### Returns

`System.Boolean`: True if in awake mode, false if in sleep mode### RaiseEventsAndNotify(IChangeResult&lt;(Temperature? TemperatureHot, Temperature? TemperatureCold)&gt;)
Raise events for subscribers and notify of value changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Mcp960x/Driver/Mcp960x.cs#L286)
```csharp title="Declaration"
protected override void RaiseEventsAndNotify(IChangeResult<(Temperature? TemperatureHot, Temperature? TemperatureCold)> changeResult)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.Temperature>>>` | *changeResult* | The updated sensor data |

## Events
### TemperatureHotUpdated
Raised when the Hot temperature value changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Mcp960x/Driver/Mcp960x.cs#L31)
```csharp title="Declaration"
public event EventHandler<IChangeResult<Temperature>> TemperatureHotUpdated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Units.Temperature>>`
### TemperatureColdUpdated
Raised when the Cold / ambient temperature value changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Mcp960x/Driver/Mcp960x.cs#L36)
```csharp title="Declaration"
public event EventHandler<IChangeResult<Temperature>> TemperatureColdUpdated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Units.Temperature>>`

## Implements

* `System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.Temperature>>>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.Temperature>>>`
* `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.Temperature>>>`
* `System.IDisposable`
* `Meadow.Peripherals.Sensors.ITemperatureSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `Meadow.Hardware.II2cPeripheral`
