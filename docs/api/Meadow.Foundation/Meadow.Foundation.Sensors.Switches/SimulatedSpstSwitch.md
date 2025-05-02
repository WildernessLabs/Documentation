---
title: Class SimulatedSpstSwitch
sidebar_label: SimulatedSpstSwitch
description: Represents a simulated SPST switch
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Switches/SimulatedSpstSwitch
---
# Class SimulatedSpstSwitch
Represents a simulated SPST switch

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedSpstSwitch.cs#L10)
```csharp title="Declaration"
public class SimulatedSpstSwitch : ISwitch, ISensor<bool>, ISensor
```
**Implements:**  
`Meadow.Peripherals.Switches.ISwitch`, `Meadow.Peripherals.Sensors.ISensor<System.Boolean>`, `Meadow.Peripherals.Sensors.ISensor`

## Properties
### IsOn
Describes whether or not the switch circuit is closed/connected (IsOn = true), or open (IsOn = false).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedSpstSwitch.cs#L18)
```csharp title="Declaration"
public bool IsOn { get; }
```
## Methods
### Read()
Convenience method to get the current sensor reading
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedSpstSwitch.cs#L30)
```csharp title="Declaration"
public Task<bool> Read()
```

##### Returns

`System.Threading.Tasks.Task<System.Boolean>`
### SetState(bool)
Sets the state of the simulated switch
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedSpstSwitch.cs#L39)
```csharp title="Declaration"
public void SetState(bool newState)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Boolean` | *newState* |

## Events
### Changed
Raised when the switch circuit is opened or closed.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedSpstSwitch.cs#L13)
```csharp title="Declaration"
public event EventHandler? Changed
```
##### Event Type
`System.EventHandler`

## Implements

* `Meadow.Peripherals.Switches.ISwitch`
* `Meadow.Peripherals.Sensors.ISensor<System.Boolean>`
* `Meadow.Peripherals.Sensors.ISensor`
