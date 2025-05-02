---
title: Class SimulatedHallEffectFlowSensor
sidebar_label: SimulatedHallEffectFlowSensor
description: >-
  A simulated hall-effect flow sensor that provides volumetric flow readings
  without requiring actual hardware.
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors/SimulatedHallEffectFlowSensor
---
# Class SimulatedHallEffectFlowSensor
A simulated hall-effect flow sensor that provides volumetric flow readings
without requiring actual hardware.

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedHallEffectFlowSensor.cs#L16)
```csharp title="Declaration"
public class SimulatedHallEffectFlowSensor : IVolumetricFlowSensor, ISensor<VolumetricFlow>, ISensor
```
**Implements:**  
`Meadow.Peripherals.Sensors.IVolumetricFlowSensor`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.VolumetricFlow>`, `Meadow.Peripherals.Sensors.ISensor`

## Properties
### Flow
Gets the current flow measurement.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedHallEffectFlowSensor.cs#L55)
```csharp title="Declaration"
public VolumetricFlow Flow { get; }
```
## Methods
### SetSignalFrequency(Frequency)
Sets the frequency of the simulated signal, effectively changing the 
flow rate in the simulation.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedHallEffectFlowSensor.cs#L43)
```csharp title="Declaration"
public void SetSignalFrequency(Frequency frequency)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Units.Frequency` | *frequency* | The new simulated pulse `Meadow.Units.Frequency`. |

### Read()
Reads the simulated flow value asynchronously.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedHallEffectFlowSensor.cs#L66)
```csharp title="Declaration"
public Task<VolumetricFlow> Read()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.VolumetricFlow>`: A `System.Threading.Tasks.Task%601` whose result is the current 
`Meadow.Units.VolumetricFlow` reading.
## Implements

* `Meadow.Peripherals.Sensors.IVolumetricFlowSensor`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.VolumetricFlow>`
* `Meadow.Peripherals.Sensors.ISensor`
