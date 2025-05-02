---
title: Class Mcp23xxx.DigitalInputPort
sidebar_label: Mcp23xxx.DigitalInputPort
description: Represents an Mcp23xxx digital input port
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders/Mcp23xxx.DigitalInputPort
---
# Class Mcp23xxx.DigitalInputPort
Represents an Mcp23xxx digital input port

###### **Assembly**: Mcp23xxx.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.DigitalInputPort.cs#L11)
```csharp title="Declaration"
public class Mcp23xxx.DigitalInputPort : DigitalInputPortBase, IDigitalInputPort, IDigitalPort, IPort<IDigitalChannelInfo>, IDisposable
```
**Inheritance:** `System.Object` -> `Meadow.Hardware.PortBase<Meadow.Hardware.IDigitalChannelInfo>` -> `Meadow.Hardware.DigitalPortBase` -> `Meadow.Hardware.DigitalInputPortBase`

**Implements:**  
`Meadow.Hardware.IDigitalInputPort`, `Meadow.Hardware.IDigitalPort`, `Meadow.Hardware.IPort<Meadow.Hardware.IDigitalChannelInfo>`, `System.IDisposable`

## Properties
### State
Gets the current state of the port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.DigitalInputPort.cs#L14)
```csharp title="Declaration"
public override bool State { get; }
```
### Resistor
Gets or sets the internal resistor mode of the port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.DigitalInputPort.cs#L28)
```csharp title="Declaration"
public override ResistorMode Resistor { get; set; }
```

## Implements

* `Meadow.Hardware.IDigitalInputPort`
* `Meadow.Hardware.IDigitalPort`
* `Meadow.Hardware.IPort<Meadow.Hardware.IDigitalChannelInfo>`
* `System.IDisposable`
