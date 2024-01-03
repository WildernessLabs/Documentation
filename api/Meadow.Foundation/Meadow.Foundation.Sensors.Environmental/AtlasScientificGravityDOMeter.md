---
title: Class AtlasScientificGravityDOMeter
sidebar_label: AtlasScientificGravityDOMeter
description: "Atlas Scientific Analog Gravity Dissolved Oxygen Meter"
---
# Class AtlasScientificGravityDOMeter
Atlas Scientific Analog Gravity Dissolved Oxygen Meter

###### **Assembly**: AtlasScientificGravityDOMeter.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.AtlasScientificGravityDOMeter/Driver/AtlasScientificGravityDOMeter.cs#L12)
```csharp title="Declaration"
public class AtlasScientificGravityDOMeter : SamplingSensorBase<double>, IObservable<IChangeResult<double>>, IDissolvedOxygenSensor, ISamplingSensor<double>, ISensor<double>, ISensor, ISamplingSensor
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<System.Double>>`, `Meadow.Peripherals.Sensors.Environmental.IDissolvedOxygenSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<System.Double>`, `Meadow.Peripherals.Sensors.ISensor<System.Double>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`

## Properties
### CalibrationInAir
The calibration value for the sensor in air
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.AtlasScientificGravityDOMeter/Driver/AtlasScientificGravityDOMeter.cs#L17)
```csharp title="Declaration"
public Voltage CalibrationInAir { get; set; }
```
### AnalogInputPort
Returns the analog input port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.AtlasScientificGravityDOMeter/Driver/AtlasScientificGravityDOMeter.cs#L22)
```csharp title="Declaration"
protected IAnalogInputPort AnalogInputPort { get; }
```
### Saturation
Last saturation value read from the sensor (0.0-1.0)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.AtlasScientificGravityDOMeter/Driver/AtlasScientificGravityDOMeter.cs#L27)
```csharp title="Declaration"
public double? Saturation { get; protected set; }
```
## Methods
### GetCurrentVoltage()
Get the current voltage, useful for calibration
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.AtlasScientificGravityDOMeter/Driver/AtlasScientificGravityDOMeter.cs#L68)
```csharp title="Declaration"
public Task<Voltage> GetCurrentVoltage()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Voltage>`
### ReadSensor()
Reads data from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.AtlasScientificGravityDOMeter/Driver/AtlasScientificGravityDOMeter.cs#L77)
```csharp title="Declaration"
protected override Task<double> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<System.Double>`: The latest sensor reading### StartUpdating(TimeSpan?)
Starts continuously sampling the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.AtlasScientificGravityDOMeter/Driver/AtlasScientificGravityDOMeter.cs#L88)
```csharp title="Declaration"
public override void StartUpdating(TimeSpan? updateInterval)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Nullable<System.TimeSpan>` | *updateInterval* |

### StopUpdating()
Stops sampling the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.AtlasScientificGravityDOMeter/Driver/AtlasScientificGravityDOMeter.cs#L101)
```csharp title="Declaration"
public override void StopUpdating()
```

## Implements

* `System.IObservable<Meadow.IChangeResult<System.Double>>`
* `Meadow.Peripherals.Sensors.Environmental.IDissolvedOxygenSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<System.Double>`
* `Meadow.Peripherals.Sensors.ISensor<System.Double>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
