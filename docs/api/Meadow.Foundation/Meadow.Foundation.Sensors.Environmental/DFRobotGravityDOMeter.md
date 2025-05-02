---
title: Class DFRobotGravityDOMeter
sidebar_label: DFRobotGravityDOMeter
description: DFRobot Analog Gravity Dissolved Oxygen Meter
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental/DFRobotGravityDOMeter
---
# Class DFRobotGravityDOMeter
DFRobot Analog Gravity Dissolved Oxygen Meter

###### **Assembly**: DFRobotGravityDOMeter.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.DFRobotGravityDOMeter/Driver/DFRobotGravityDOMeter.cs#L12)
```csharp title="Declaration"
public class DFRobotGravityDOMeter : SamplingSensorBase<ConcentrationInWater>, IObservable<IChangeResult<ConcentrationInWater>>, IDissolvedOxygenConcentrationSensor, IConcentrationInWaterSensor, ISamplingSensor<ConcentrationInWater>, ISensor<ConcentrationInWater>, ISensor, ISamplingSensor
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.ConcentrationInWater>>`, `Meadow.Peripherals.Sensors.Environmental.IDissolvedOxygenConcentrationSensor`, `Meadow.Peripherals.Sensors.Environmental.IConcentrationInWaterSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.ConcentrationInWater>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.ConcentrationInWater>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`

## Properties
### WaterTemperature
The current water temperature (default 25C)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.DFRobotGravityDOMeter/Driver/DFRobotGravityDOMeter.cs#L17)
```csharp title="Declaration"
public Temperature WaterTemperature { get; set; }
```
### CalibrationAt25C
The calibration value for the sensor at 25C (default 1.6V)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.DFRobotGravityDOMeter/Driver/DFRobotGravityDOMeter.cs#L22)
```csharp title="Declaration"
public Voltage CalibrationAt25C { get; set; }
```
### AnalogInputPort
Returns the analog input port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.DFRobotGravityDOMeter/Driver/DFRobotGravityDOMeter.cs#L27)
```csharp title="Declaration"
protected IObservableAnalogInputPort AnalogInputPort { get; }
```
### Concentration
Last concentration value read from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.DFRobotGravityDOMeter/Driver/DFRobotGravityDOMeter.cs#L32)
```csharp title="Declaration"
public ConcentrationInWater? Concentration { get; protected set; }
```
## Methods
### GetCurrentVoltage()
Get the current voltage, useful for calibration
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.DFRobotGravityDOMeter/Driver/DFRobotGravityDOMeter.cs#L82)
```csharp title="Declaration"
public Task<Voltage> GetCurrentVoltage()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Voltage>`
### ReadSensor()
Reads data from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.DFRobotGravityDOMeter/Driver/DFRobotGravityDOMeter.cs#L91)
```csharp title="Declaration"
protected override Task<ConcentrationInWater> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.ConcentrationInWater>`: The latest sensor reading### StartUpdating(TimeSpan?)
Starts continuously sampling the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.DFRobotGravityDOMeter/Driver/DFRobotGravityDOMeter.cs#L102)
```csharp title="Declaration"
public override void StartUpdating(TimeSpan? updateInterval)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Nullable<System.TimeSpan>` | *updateInterval* |

### StopUpdating()
Stops sampling the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.DFRobotGravityDOMeter/Driver/DFRobotGravityDOMeter.cs#L115)
```csharp title="Declaration"
public override void StopUpdating()
```

## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Units.ConcentrationInWater>>`
* `Meadow.Peripherals.Sensors.Environmental.IDissolvedOxygenConcentrationSensor`
* `Meadow.Peripherals.Sensors.Environmental.IConcentrationInWaterSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.ConcentrationInWater>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.ConcentrationInWater>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
