---
title: Class Pcx857x.DigitalOutputPort
sidebar_label: Pcx857x.DigitalOutputPort
description: "A Pcx857x-specific implementation of the IDigitalOutputPort"
---
# Class Pcx857x.DigitalOutputPort
A Pcx857x-specific implementation of the IDigitalOutputPort

###### **Assembly**: Pcx857x.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pcx857x/Driver/Pcx857x.DigitalOutputPort.cs#L11)
```csharp title="Declaration"
public class Pcx857x.DigitalOutputPort : DigitalOutputPortBase, IDigitalOutputPort, IDigitalPort, IPort<IDigitalChannelInfo>, IDisposable
```
**Inheritance:** `System.Object` -> `Meadow.Hardware.PortBase<Meadow.Hardware.IDigitalChannelInfo>` -> `Meadow.Hardware.DigitalPortBase` -> `Meadow.Hardware.DigitalOutputPortBase`

**Implements:**  
`Meadow.Hardware.IDigitalOutputPort`, `Meadow.Hardware.IDigitalPort`, `Meadow.Hardware.IPort<Meadow.Hardware.IDigitalChannelInfo>`, `System.IDisposable`

## Properties
### Peripheral
The port's containing Pcx857x
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pcx857x/Driver/Pcx857x.DigitalOutputPort.cs#L18)
```csharp title="Declaration"
public Pcx857x Peripheral { get; }
```
### State
Gets or sets the current state of the port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pcx857x/Driver/Pcx857x.DigitalOutputPort.cs#L39)
```csharp title="Declaration"
public override bool State { get; set; }
```
## Methods
### Dispose(bool)
Releases the resources used by the port.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pcx857x/Driver/Pcx857x.DigitalOutputPort.cs#L32)
```csharp title="Declaration"
protected override void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | A boolean value indicating whether the port is being disposed. |


## Implements

* `Meadow.Hardware.IDigitalOutputPort`
* `Meadow.Hardware.IDigitalPort`
* `Meadow.Hardware.IPort<Meadow.Hardware.IDigitalChannelInfo>`
* `System.IDisposable`
