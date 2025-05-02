---
title: Class Sc16is7x2.PinDefinitions
sidebar_label: Sc16is7x2.PinDefinitions
description: >-
  Pin definitions for the 8 GPIO pins 03.12.2023: This is a copy of the
  Mcp23x0x.PinDefinitions.cs file.
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders/Sc16is7x2.PinDefinitions
---
# Class Sc16is7x2.PinDefinitions
Pin definitions for the 8 GPIO pins
03.12.2023: This is a copy of the Mcp23x0x.PinDefinitions.cs file.

###### **Assembly**: Sc16is7x2.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.PinDefinitions.cs#L16)
```csharp title="Declaration"
public class Sc16is7x2.PinDefinitions : IPinDefinitions, IEnumerable<IPin>, IEnumerable
```
**Implements:**  
`Meadow.Hardware.IPinDefinitions`, `System.Collections.Generic.IEnumerable<Meadow.Hardware.IPin>`, `System.Collections.IEnumerable`

## Properties
### Controller
The controller for the pins
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.PinDefinitions.cs#L21)
```csharp title="Declaration"
public IPinController? Controller { get; set; }
```
### AllPins
List of pins
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.PinDefinitions.cs#L26)
```csharp title="Declaration"
public IList<IPin> AllPins { get; }
```
### GP0
Pin GP0
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.PinDefinitions.cs#L31)
```csharp title="Declaration"
public IPin GP0 { get; }
```
### GP1
Pin GP1
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.PinDefinitions.cs#L42)
```csharp title="Declaration"
public IPin GP1 { get; }
```
### GP2
Pin GP2
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.PinDefinitions.cs#L53)
```csharp title="Declaration"
public IPin GP2 { get; }
```
### GP3
Pin GP3
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.PinDefinitions.cs#L64)
```csharp title="Declaration"
public IPin GP3 { get; }
```
### GP4
Pin GP4
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.PinDefinitions.cs#L75)
```csharp title="Declaration"
public IPin GP4 { get; }
```
### GP5
Pin GP5
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.PinDefinitions.cs#L86)
```csharp title="Declaration"
public IPin GP5 { get; }
```
### GP6
Pin GP6
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.PinDefinitions.cs#L97)
```csharp title="Declaration"
public IPin GP6 { get; }
```
### GP7
Pin GP7
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.PinDefinitions.cs#L108)
```csharp title="Declaration"
public IPin GP7 { get; }
```
## Methods
### InitAllPins()
Initialize all pins
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.PinDefinitions.cs#L128)
```csharp title="Declaration"
protected void InitAllPins()
```
### GetEnumerator()
Get Pins
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.PinDefinitions.cs#L145)
```csharp title="Declaration"
public IEnumerator<IPin> GetEnumerator()
```

##### Returns

`System.Collections.Generic.IEnumerator<Meadow.Hardware.IPin>`: IEnumerator of IPin with all pins
## Implements

* `Meadow.Hardware.IPinDefinitions`
* `System.Collections.Generic.IEnumerable<Meadow.Hardware.IPin>`
* `System.Collections.IEnumerable`
