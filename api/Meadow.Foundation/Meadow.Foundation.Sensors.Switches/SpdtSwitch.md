---
title: Class SpdtSwitch
sidebar_label: SpdtSwitch
description: "Represents a simple, two position, Single-Pole-Dual-Throw (SPDT) switch that closes a circuit 
to either ground/common or high depending on position"
---
# Class SpdtSwitch
Represents a simple, two position, Single-Pole-Dual-Throw (SPDT) switch that closes a circuit 
to either ground/common or high depending on position

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Switches/SpdtSwitch.cs#L12)
```csharp title="Declaration"
public class SpdtSwitch : ISwitch, ISensor<bool>, ISensor, IDisposable
```
**Implements:**  
`Meadow.Peripherals.Switches.ISwitch`, `Meadow.Peripherals.Sensors.ISensor<System.Boolean>`, `Meadow.Peripherals.Sensors.ISensor`, `System.IDisposable`

## Properties
### IsOn
Describes whether or not the switch circuit is closed/connected (IsOn = true), or open (IsOn = false).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Switches/SpdtSwitch.cs#L17)
```csharp title="Declaration"
public bool IsOn { get; protected set; }
```
### DigitalInputPort
Returns the DigitalInputPort.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Switches/SpdtSwitch.cs#L26)
```csharp title="Declaration"
protected IDigitalInterruptPort DigitalInputPort { get; set; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Switches/SpdtSwitch.cs#L36)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### DigitalInChanged(object, DigitalPortResult)
Event handler when switch value has been changed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Switches/SpdtSwitch.cs#L82)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Switches/SpdtSwitch.cs#L90)
```csharp title="Declaration"
public Task<bool> Read()
```

##### Returns

`System.Threading.Tasks.Task<System.Boolean>`
### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Switches/SpdtSwitch.cs#L93)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Switches/SpdtSwitch.cs#L103)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Switches/SpdtSwitch.cs#L31)
```csharp title="Declaration"
public event EventHandler Changed
```
##### Event Type
`System.EventHandler`

## Implements

* `Meadow.Peripherals.Switches.ISwitch`
* `Meadow.Peripherals.Sensors.ISensor<System.Boolean>`
* `Meadow.Peripherals.Sensors.ISensor`
* `System.IDisposable`
