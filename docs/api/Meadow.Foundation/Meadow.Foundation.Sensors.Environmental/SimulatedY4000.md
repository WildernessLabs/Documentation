---
title: Class SimulatedY4000
sidebar_label: SimulatedY4000
description: Represents a simulated Yosemitech Y4000 Multiparameter Sonde
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental/SimulatedY4000
---
# Class SimulatedY4000
Represents a simulated Yosemitech Y4000 Multiparameter Sonde

###### **Assembly**: Y4000.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Y4000/Driver/Drivers/SimulatedY4000.cs#L14)
```csharp title="Declaration"
public class SimulatedY4000 : IY4000, IWaterQualityConcentrationsSensor, ISamplingSensor<WaterQualityConcentrations>, ISensor<WaterQualityConcentrations>, IElectricalConductivitySensor, ISamplingSensor<Conductivity>, ISensor<Conductivity>, IPotentialHydrogenSensor, ISamplingSensor<PotentialHydrogen>, ISensor<PotentialHydrogen>, ITurbiditySensor, ISamplingSensor<Turbidity>, ISensor<Turbidity>, ITemperatureSensor, ISamplingSensor<Temperature>, ISensor<Temperature>, IRedoxPotentialSensor, ISamplingSensor<Voltage>, ISensor<Voltage>, ISensor, ISamplingSensor
```
**Implements:**  

<details>
<summary>Expand</summary>

[Meadow.Foundation.Sensors.Environmental.IY4000](../Meadow.Foundation.Sensors.Environmental/IY4000), [Meadow.Foundation.Sensors.Environmental.IWaterQualityConcentrationsSensor](../Meadow.Foundation.Sensors.Environmental/IWaterQualityConcentrationsSensor), `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Foundation.Sensors.Environmental.WaterQualityConcentrations>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Foundation.Sensors.Environmental.WaterQualityConcentrations>`, `Meadow.Peripherals.Sensors.IElectricalConductivitySensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Conductivity>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Conductivity>`, `Meadow.Peripherals.Sensors.Environmental.IPotentialHydrogenSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.PotentialHydrogen>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.PotentialHydrogen>`, `Meadow.Peripherals.Sensors.Environmental.ITurbiditySensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Turbidity>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Turbidity>`, `Meadow.Peripherals.Sensors.ITemperatureSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`, [Meadow.Foundation.Sensors.Environmental.IRedoxPotentialSensor](../Meadow.Foundation.Sensors.Environmental/IRedoxPotentialSensor), `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Voltage>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Voltage>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`
</details>



## Properties
### UpdateInterval
A `TimeSpan` that specifies how long to wait between readings
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Y4000/Driver/Drivers/SimulatedY4000.cs#L73)
```csharp title="Declaration"
public TimeSpan UpdateInterval { get; }
```
### IsSampling
Gets a value indicating whether the sensor is currently sampling
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Y4000/Driver/Drivers/SimulatedY4000.cs#L76)
```csharp title="Declaration"
public bool IsSampling { get; }
```
## Methods
### GetSerialNumber()
Get the Y4000 serial number
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Y4000/Driver/Drivers/SimulatedY4000.cs#L102)
```csharp title="Declaration"
public Task<string> GetSerialNumber()
```

##### Returns

`System.Threading.Tasks.Task<System.String>`
### StartUpdating(TimeSpan?)
Starts updating the sensor on the updateInterval frequency specified
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Y4000/Driver/Drivers/SimulatedY4000.cs#L108)
```csharp title="Declaration"
public void StartUpdating(TimeSpan? updateInterval)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Nullable<System.TimeSpan>` | *updateInterval* | A TimeSpan that specifies how long to
    wait between readings |

### StopUpdating()
Stops sampling the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Y4000/Driver/Drivers/SimulatedY4000.cs#L115)
```csharp title="Declaration"
public void StopUpdating()
```
### ReadSensor()
Reads all measurements of the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Y4000/Driver/Drivers/SimulatedY4000.cs#L130)
```csharp title="Declaration"
public Task<Y4000.Measurements> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Foundation.Sensors.Environmental.Y4000.Measurements>`

## Implements

* [Meadow.Foundation.Sensors.Environmental.IY4000](../Meadow.Foundation.Sensors.Environmental/IY4000)
* [Meadow.Foundation.Sensors.Environmental.IWaterQualityConcentrationsSensor](../Meadow.Foundation.Sensors.Environmental/IWaterQualityConcentrationsSensor)
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Foundation.Sensors.Environmental.WaterQualityConcentrations>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Foundation.Sensors.Environmental.WaterQualityConcentrations>`
* `Meadow.Peripherals.Sensors.IElectricalConductivitySensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Conductivity>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Conductivity>`
* `Meadow.Peripherals.Sensors.Environmental.IPotentialHydrogenSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.PotentialHydrogen>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.PotentialHydrogen>`
* `Meadow.Peripherals.Sensors.Environmental.ITurbiditySensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Turbidity>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Turbidity>`
* `Meadow.Peripherals.Sensors.ITemperatureSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`
* [Meadow.Foundation.Sensors.Environmental.IRedoxPotentialSensor](../Meadow.Foundation.Sensors.Environmental/IRedoxPotentialSensor)
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Voltage>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Voltage>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
