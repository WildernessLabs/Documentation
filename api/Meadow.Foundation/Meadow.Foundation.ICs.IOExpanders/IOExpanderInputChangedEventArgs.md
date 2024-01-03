---
title: Class IOExpanderInputChangedEventArgs
sidebar_label: IOExpanderInputChangedEventArgs
description: "IOExpanderInputChangedEventArgs class"
---
# Class IOExpanderInputChangedEventArgs
IOExpanderInputChangedEventArgs class

###### **Assembly**: Mcp23xxx.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.IOExpanderInputChangedEventArgs.cs#L8)
```csharp title="Declaration"
public class IOExpanderInputChangedEventArgs : EventArgs
```
**Inheritance:** `System.Object` -> `System.EventArgs`

## Properties
### InterruptPins
Which pins were interrupted
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.IOExpanderInputChangedEventArgs.cs#L13)
```csharp title="Declaration"
public byte InterruptPins { get; }
```
### InputState
The values of pins that were interrupted
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.IOExpanderInputChangedEventArgs.cs#L18)
```csharp title="Declaration"
public ushort InputState { get; }
```
