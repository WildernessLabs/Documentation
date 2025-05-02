---
title: Class SimulatedRelay
sidebar_label: SimulatedRelay
description: >-
  Represents a simulated relay that implements both IRelay and ISimulatedSensor
  interfaces.
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Relays/SimulatedRelay
---
# Class SimulatedRelay
Represents a simulated relay that implements both IRelay and ISimulatedSensor interfaces.

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedRelay.cs#L11)
```csharp title="Declaration"
public class SimulatedRelay : IRelay, ISimulatedSensor
```
**Implements:**  
`Meadow.Peripherals.Relays.IRelay`, `Meadow.Peripherals.Sensors.ISimulatedSensor`

## Properties
### Type
Returns relay type.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedRelay.cs#L20)
```csharp title="Declaration"
public RelayType Type { get; }
```
### Name
Gets the name of the Relay
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedRelay.cs#L25)
```csharp title="Declaration"
public string Name { get; }
```
### State
Gets or sets the state of the relay.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedRelay.cs#L37)
```csharp title="Declaration"
public RelayState State { get; set; }
```
### SupportedBehaviors
Gets an array of supported simulation behaviors for the sensor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedRelay.cs#L49)
```csharp title="Declaration"
public SimulationBehavior[] SupportedBehaviors { get; }
```
### ValueType
Gets the type of the sensor's value.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedRelay.cs#L51)
```csharp title="Declaration"
public Type ValueType { get; }
```
## Methods
### Toggle()
Toggles the relay on or off.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedRelay.cs#L54)
```csharp title="Declaration"
public void Toggle()
```
### SetSensorValue(object)
Sets the simulated value for the sensor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedRelay.cs#L64)
```csharp title="Declaration"
public void SetSensorValue(object value)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Object` | *value* | The value to set for the sensor. |

### StartSimulation(SimulationBehavior)
Starts the simulation with the specified behavior.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedRelay.cs#L85)
```csharp title="Declaration"
public void StartSimulation(SimulationBehavior behavior)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Peripherals.Sensors.SimulationBehavior` | *behavior* | The simulation behavior to start. |

## Events
### OnChanged
Event raised after relay state change
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedRelay.cs#L17)
```csharp title="Declaration"
public event EventHandler<RelayState> OnChanged
```
##### Event Type
`System.EventHandler<Meadow.Peripherals.Relays.RelayState>`

## Implements

* `Meadow.Peripherals.Relays.IRelay`
* `Meadow.Peripherals.Sensors.ISimulatedSensor`
