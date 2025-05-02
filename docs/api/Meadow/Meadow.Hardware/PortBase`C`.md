---
title: Class PortBase<C>
sidebar_label: PortBase<C>
description: Represents a base class for hardware ports.
slug: /docs/api/Meadow/Meadow.Hardware/PortBase`C`
---
# Class PortBase&lt;C&gt;
Represents a base class for hardware ports.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/PortBase.cs#L9)
```csharp title="Declaration"
public abstract class PortBase<C> : IPort<C>, IDisposable where C : class, IChannelInfo
```
**Derived:**  
[Meadow.Hardware.AnalogPortBase](../Meadow.Hardware/AnalogPortBase), [Meadow.Hardware.DigitalPortBase](../Meadow.Hardware/DigitalPortBase)

**Implements:**  
[Meadow.Hardware.IPort&lt;C&gt;](../Meadow.Hardware/IPort`C`), `System.IDisposable`

## Properties
### Channel
Gets the channel information associated with the port.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/PortBase.cs#L19)
```csharp title="Declaration"
public C Channel { get; }
```
### Pin
Gets or sets the pin associated with the port.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/PortBase.cs#L24)
```csharp title="Declaration"
public IPin Pin { get; protected set; }
```
## Fields
### disposed
Indicates whether the port has been disposed.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/PortBase.cs#L14)
```csharp title="Declaration"
protected bool disposed
```
## Methods
### Dispose(bool)
Releases the resources used by the port.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/PortBase.cs#L42)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | A boolean value indicating whether the port is being disposed. |

### Dispose()
Releases the resources used by the port.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/PortBase.cs#L47)
```csharp title="Declaration"
public void Dispose()
```

## Implements

* [Meadow.Hardware.IPort&lt;C&gt;](../Meadow.Hardware/IPort`C`)
* `System.IDisposable`
