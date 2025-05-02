---
title: Class Mcp23xxx.DigitalOutputPort
sidebar_label: Mcp23xxx.DigitalOutputPort
description: Represents an Mcp23xxx DigitalOutputPort
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders/Mcp23xxx.DigitalOutputPort
---
# Class Mcp23xxx.DigitalOutputPort
Represents an Mcp23xxx DigitalOutputPort

###### **Assembly**: Mcp23xxx.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.DigitalOutputPort.cs#L10)
```csharp title="Declaration"
public class Mcp23xxx.DigitalOutputPort : DigitalOutputPortBase, IDigitalOutputPort, IDigitalPort, IPort<IDigitalChannelInfo>, IDisposable
```
**Inheritance:** `System.Object` -> `Meadow.Hardware.PortBase<Meadow.Hardware.IDigitalChannelInfo>` -> `Meadow.Hardware.DigitalPortBase` -> `Meadow.Hardware.DigitalOutputPortBase`

**Implements:**  
`Meadow.Hardware.IDigitalOutputPort`, `Meadow.Hardware.IDigitalPort`, `Meadow.Hardware.IPort<Meadow.Hardware.IDigitalChannelInfo>`, `System.IDisposable`

## Properties
### State
The port state
True for high, false for low
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.DigitalOutputPort.cs#L28)
```csharp title="Declaration"
public override bool State { get; set; }
```
## Fields
### SetPinState
The SetPinState delegate
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.DigitalOutputPort.cs#L22)
```csharp title="Declaration"
public Mcp23xxx.DigitalOutputPort.SetPinStateDelegate SetPinState
```

## Implements

* `Meadow.Hardware.IDigitalOutputPort`
* `Meadow.Hardware.IDigitalPort`
* `Meadow.Hardware.IPort<Meadow.Hardware.IDigitalChannelInfo>`
* `System.IDisposable`
