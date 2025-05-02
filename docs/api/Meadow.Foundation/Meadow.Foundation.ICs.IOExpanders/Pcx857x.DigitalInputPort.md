---
title: Class Pcx857x.DigitalInputPort
sidebar_label: Pcx857x.DigitalInputPort
description: A Pcx857x-specific implementation of the IDigitalInputPort
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders/Pcx857x.DigitalInputPort
---
# Class Pcx857x.DigitalInputPort
A Pcx857x-specific implementation of the IDigitalInputPort

###### **Assembly**: Pcx857x.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pcx857x/Driver/Pcx857x.DigitalInputPort.cs#L12)
```csharp title="Declaration"
public class Pcx857x.DigitalInputPort : DigitalInputPortBase, IDigitalInputPort, IDigitalPort, IPort<IDigitalChannelInfo>, IDisposable
```
**Inheritance:** `System.Object` -> `Meadow.Hardware.PortBase<Meadow.Hardware.IDigitalChannelInfo>` -> `Meadow.Hardware.DigitalPortBase` -> `Meadow.Hardware.DigitalInputPortBase`

**Implements:**  
`Meadow.Hardware.IDigitalInputPort`, `Meadow.Hardware.IDigitalPort`, `Meadow.Hardware.IPort<Meadow.Hardware.IDigitalChannelInfo>`, `System.IDisposable`

## Properties
### Resistor
Gets or sets the internal resistor mode of the port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pcx857x/Driver/Pcx857x.DigitalInputPort.cs#L15)
```csharp title="Declaration"
public override ResistorMode Resistor { get; set; }
```
### State
Gets the current state of the port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pcx857x/Driver/Pcx857x.DigitalInputPort.cs#L31)
```csharp title="Declaration"
public override bool State { get; }
```
### Peripheral
The port's containing Pcx857x
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pcx857x/Driver/Pcx857x.DigitalInputPort.cs#L36)
```csharp title="Declaration"
public Pcx857x Peripheral { get; }
```
## Methods
### Dispose(bool)
Releases the resources used by the port.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pcx857x/Driver/Pcx857x.DigitalInputPort.cs#L54)
```csharp title="Declaration"
protected override void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | A boolean value indicating whether the port is being disposed. |


## Implements

* `Meadow.Hardware.IDigitalInputPort`
* `Meadow.Hardware.IDigitalPort`
* `Meadow.Hardware.IPort<Meadow.Hardware.IDigitalChannelInfo>`
* `System.IDisposable`
