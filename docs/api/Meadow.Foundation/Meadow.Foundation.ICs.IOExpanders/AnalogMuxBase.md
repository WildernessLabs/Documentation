---
title: Class AnalogMuxBase
sidebar_label: AnalogMuxBase
description: Represents an Analog Input Multiplexer (Mux) base
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders/AnalogMuxBase
---
# Class AnalogMuxBase
Represents an Analog Input Multiplexer (Mux) base

###### **Assembly**: AnalogMux.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.AnalogMux/Driver/AnalogMuxBase.cs#L8)
```csharp title="Declaration"
public abstract class AnalogMuxBase : IAnalogInputMultiplexer
```
**Derived:**  
[Meadow.Foundation.ICs.IOExpanders.Nxp74HC4051](../Meadow.Foundation.ICs.IOExpanders/Nxp74HC4051), [Meadow.Foundation.ICs.IOExpanders.Nxp74HC4067](../Meadow.Foundation.ICs.IOExpanders/Nxp74HC4067)

**Implements:**  
[Meadow.Foundation.ICs.IOExpanders.IAnalogInputMultiplexer](../Meadow.Foundation.ICs.IOExpanders/IAnalogInputMultiplexer)

## Properties
### SyncRoot
Get the sync root
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.AnalogMux/Driver/AnalogMuxBase.cs#L13)
```csharp title="Declaration"
protected object SyncRoot { get; }
```
### EnablePort
The port connected to the Enable pin of the mux (otherwise must be tied low)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.AnalogMux/Driver/AnalogMuxBase.cs#L18)
```csharp title="Declaration"
public IDigitalOutputPort? EnablePort { get; }
```
### Signal
The analog input connected to the Mux output pin (Z)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.AnalogMux/Driver/AnalogMuxBase.cs#L23)
```csharp title="Declaration"
public IObservableAnalogInputPort Signal { get; }
```
## Methods
### SetInputChannel(int)
Set input channel
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.AnalogMux/Driver/AnalogMuxBase.cs#L29)
```csharp title="Declaration"
public abstract void SetInputChannel(int channel)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *channel* | he input channel |

### Enable()
Enables the multiplexer (if an enable port was provided)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.AnalogMux/Driver/AnalogMuxBase.cs#L40)
```csharp title="Declaration"
public void Enable()
```
### Disable()
Disables the multiplexer (if an enable port was provided)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.AnalogMux/Driver/AnalogMuxBase.cs#L54)
```csharp title="Declaration"
public void Disable()
```

## Implements

* [Meadow.Foundation.ICs.IOExpanders.IAnalogInputMultiplexer](../Meadow.Foundation.ICs.IOExpanders/IAnalogInputMultiplexer)
