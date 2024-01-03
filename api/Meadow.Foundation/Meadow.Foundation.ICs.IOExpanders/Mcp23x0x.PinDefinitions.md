---
title: Class Mcp23x0x.PinDefinitions
sidebar_label: Mcp23x0x.PinDefinitions
description: "Pin definitions for 8 pin MCP IO expanders"
---
# Class Mcp23x0x.PinDefinitions
Pin definitions for 8 pin MCP IO expanders

###### **Assembly**: Mcp23xxx.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Drivers/Extras/Mcp23x0x.PinDefinitions.cs#L12)
```csharp title="Declaration"
public class Mcp23x0x.PinDefinitions : IPinDefinitions, IEnumerable<IPin>, IEnumerable
```
**Implements:**  
`Meadow.Hardware.IPinDefinitions`, `System.Collections.Generic.IEnumerable<Meadow.Hardware.IPin>`, `System.Collections.IEnumerable`

## Properties
### Controller
The controller for the pins
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Drivers/Extras/Mcp23x0x.PinDefinitions.cs#L17)
```csharp title="Declaration"
public IPinController? Controller { get; set; }
```
### AllPins
List of pins
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Drivers/Extras/Mcp23x0x.PinDefinitions.cs#L22)
```csharp title="Declaration"
public IList<IPin> AllPins { get; }
```
### GP0
Pin GP0
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Drivers/Extras/Mcp23x0x.PinDefinitions.cs#L27)
```csharp title="Declaration"
public IPin GP0 { get; }
```
### GP1
Pin GP1
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Drivers/Extras/Mcp23x0x.PinDefinitions.cs#L38)
```csharp title="Declaration"
public IPin GP1 { get; }
```
### GP2
Pin GP2
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Drivers/Extras/Mcp23x0x.PinDefinitions.cs#L49)
```csharp title="Declaration"
public IPin GP2 { get; }
```
### GP3
Pin GP3
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Drivers/Extras/Mcp23x0x.PinDefinitions.cs#L60)
```csharp title="Declaration"
public IPin GP3 { get; }
```
### GP4
Pin GP4
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Drivers/Extras/Mcp23x0x.PinDefinitions.cs#L71)
```csharp title="Declaration"
public IPin GP4 { get; }
```
### GP5
Pin GP5
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Drivers/Extras/Mcp23x0x.PinDefinitions.cs#L82)
```csharp title="Declaration"
public IPin GP5 { get; }
```
### GP6
Pin GP6
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Drivers/Extras/Mcp23x0x.PinDefinitions.cs#L93)
```csharp title="Declaration"
public IPin GP6 { get; }
```
### GP7
Pin GP7
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Drivers/Extras/Mcp23x0x.PinDefinitions.cs#L104)
```csharp title="Declaration"
public IPin GP7 { get; }
```
## Methods
### InitAllPins()
Initialize all pins
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Drivers/Extras/Mcp23x0x.PinDefinitions.cs#L124)
```csharp title="Declaration"
protected void InitAllPins()
```
### GetEnumerator()
Get Pins
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Drivers/Extras/Mcp23x0x.PinDefinitions.cs#L141)
```csharp title="Declaration"
public IEnumerator<IPin> GetEnumerator()
```

##### Returns

`System.Collections.Generic.IEnumerator<Meadow.Hardware.IPin>`: IEnumerator of IPin with all pins
## Implements

* `Meadow.Hardware.IPinDefinitions`
* `System.Collections.Generic.IEnumerable<Meadow.Hardware.IPin>`
* `System.Collections.IEnumerable`
