---
title: Class Mcp23x1x.PinDefinitions
sidebar_label: Mcp23x1x.PinDefinitions
description: Pin definitions for 16 pin MCP IO expanders
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders/Mcp23x1x.PinDefinitions
---
# Class Mcp23x1x.PinDefinitions
Pin definitions for 16 pin MCP IO expanders

###### **Assembly**: Mcp23xxx.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Drivers/Extras/Mcp23x1x.PinDefinitions.cs#L12)
```csharp title="Declaration"
public class Mcp23x1x.PinDefinitions : IPinDefinitions, IEnumerable<IPin>, IEnumerable
```
**Implements:**  
`Meadow.Hardware.IPinDefinitions`, `System.Collections.Generic.IEnumerable<Meadow.Hardware.IPin>`, `System.Collections.IEnumerable`

## Properties
### Controller
The controller for the pins
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Drivers/Extras/Mcp23x1x.PinDefinitions.cs#L17)
```csharp title="Declaration"
public IPinController? Controller { get; set; }
```
### AllPins
List of pins
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Drivers/Extras/Mcp23x1x.PinDefinitions.cs#L22)
```csharp title="Declaration"
public IList<IPin> AllPins { get; }
```
### GPA0
Pin GPA0
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Drivers/Extras/Mcp23x1x.PinDefinitions.cs#L27)
```csharp title="Declaration"
public IPin GPA0 { get; }
```
### GPA1
Pin GPA1
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Drivers/Extras/Mcp23x1x.PinDefinitions.cs#L38)
```csharp title="Declaration"
public IPin GPA1 { get; }
```
### GPA2
Pin GPA2
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Drivers/Extras/Mcp23x1x.PinDefinitions.cs#L49)
```csharp title="Declaration"
public IPin GPA2 { get; }
```
### GPA3
Pin GPA3
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Drivers/Extras/Mcp23x1x.PinDefinitions.cs#L60)
```csharp title="Declaration"
public IPin GPA3 { get; }
```
### GPA4
Pin GPA4
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Drivers/Extras/Mcp23x1x.PinDefinitions.cs#L71)
```csharp title="Declaration"
public IPin GPA4 { get; }
```
### GPA5
Pin GPA5
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Drivers/Extras/Mcp23x1x.PinDefinitions.cs#L82)
```csharp title="Declaration"
public IPin GPA5 { get; }
```
### GPA6
Pin GPA6
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Drivers/Extras/Mcp23x1x.PinDefinitions.cs#L93)
```csharp title="Declaration"
public IPin GPA6 { get; }
```
### GPA7
Pin GPA7
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Drivers/Extras/Mcp23x1x.PinDefinitions.cs#L104)
```csharp title="Declaration"
public IPin GPA7 { get; }
```
### GPB0
Pin GPB0
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Drivers/Extras/Mcp23x1x.PinDefinitions.cs#L115)
```csharp title="Declaration"
public IPin GPB0 { get; }
```
### GPB1
Pin GPB1
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Drivers/Extras/Mcp23x1x.PinDefinitions.cs#L126)
```csharp title="Declaration"
public IPin GPB1 { get; }
```
### GPB2
Pin GPB2
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Drivers/Extras/Mcp23x1x.PinDefinitions.cs#L137)
```csharp title="Declaration"
public IPin GPB2 { get; }
```
### GPB3
Pin GPB3
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Drivers/Extras/Mcp23x1x.PinDefinitions.cs#L148)
```csharp title="Declaration"
public IPin GPB3 { get; }
```
### GPB4
Pin GPB4
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Drivers/Extras/Mcp23x1x.PinDefinitions.cs#L159)
```csharp title="Declaration"
public IPin GPB4 { get; }
```
### GPB5
Pin GPB5
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Drivers/Extras/Mcp23x1x.PinDefinitions.cs#L170)
```csharp title="Declaration"
public IPin GPB5 { get; }
```
### GPB6
Pin GPB6
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Drivers/Extras/Mcp23x1x.PinDefinitions.cs#L181)
```csharp title="Declaration"
public IPin GPB6 { get; }
```
### GPB7
Pin GPB7
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Drivers/Extras/Mcp23x1x.PinDefinitions.cs#L192)
```csharp title="Declaration"
public IPin GPB7 { get; }
```
## Methods
### InitAllPins()
Initialize all pins
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Drivers/Extras/Mcp23x1x.PinDefinitions.cs#L212)
```csharp title="Declaration"
protected void InitAllPins()
```
### GetEnumerator()
Get Pins
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Drivers/Extras/Mcp23x1x.PinDefinitions.cs#L238)
```csharp title="Declaration"
public IEnumerator<IPin> GetEnumerator()
```

##### Returns

`System.Collections.Generic.IEnumerator<Meadow.Hardware.IPin>`: IEnumerator of IPin with all pins
## Implements

* `Meadow.Hardware.IPinDefinitions`
* `System.Collections.Generic.IEnumerable<Meadow.Hardware.IPin>`
* `System.Collections.IEnumerable`
