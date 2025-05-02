---
title: Class SpstSwitch
sidebar_label: SpstSwitch
description: >-
  Represents a simple, on/off, Single-Pole-Single-Throw (SPST) switch that
  closes a circuit  to either ground/common or high. 

  Use the SwitchCircuitTerminationType to specify whether the other side of the
  switch terminates to ground or high.
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Switches/SpstSwitch
---
# Class SpstSwitch
Represents a simple, on/off, Single-Pole-Single-Throw (SPST) switch that closes a circuit 
to either ground/common or high. 

Use the SwitchCircuitTerminationType to specify whether the other side of the switch
terminates to ground or high.

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Switches/SpstSwitch.cs#L15)
```csharp title="Declaration"
public class SpstSwitch : ISwitch, ISensor<bool>, ISensor
```
**Implements:**  
`Meadow.Peripherals.Switches.ISwitch`, `Meadow.Peripherals.Sensors.ISensor<System.Boolean>`, `Meadow.Peripherals.Sensors.ISensor`

## Properties
### IsOn
Describes whether or not the switch circuit is closed/connected (IsOn = true), or open (IsOn = false).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Switches/SpstSwitch.cs#L20)
```csharp title="Declaration"
public bool IsOn { get; protected set; }
```
### DigitalInputPort
Returns the DigitalInputPort.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Switches/SpstSwitch.cs#L34)
```csharp title="Declaration"
protected IDigitalInterruptPort DigitalInputPort { get; set; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Switches/SpstSwitch.cs#L39)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### DigitalInChanged(object, DigitalPortResult)
Event handler when switch value has been changed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Switches/SpstSwitch.cs#L85)
```csharp title="Declaration"
protected void DigitalInChanged(object sender, DigitalPortResult e)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Object` | *sender* |
| `Meadow.Hardware.DigitalPortResult` | *e* |

### Read()
Convenience method to get the current sensor reading
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Switches/SpstSwitch.cs#L93)
```csharp title="Declaration"
public Task<bool> Read()
```

##### Returns

`System.Threading.Tasks.Task<System.Boolean>`
### Dispose()

###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Switches/SpstSwitch.cs#L96)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Switches/SpstSwitch.cs#L106)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |

## Events
### Changed
Raised when the switch circuit is opened or closed.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Switches/SpstSwitch.cs#L29)
```csharp title="Declaration"
public event EventHandler Changed
```
##### Event Type
`System.EventHandler`

## Implements

* `Meadow.Peripherals.Switches.ISwitch`
* `Meadow.Peripherals.Sensors.ISensor<System.Boolean>`
* `Meadow.Peripherals.Sensors.ISensor`
