---
title: Class Mcp492x
sidebar_label: Mcp492x
description: "This class represents an MCP492x digital-to-analog converter (DAC) and implements 
the ISpiPeripheral and IAnalogOutputController interfaces."
---
# Class Mcp492x
This class represents an MCP492x digital-to-analog converter (DAC) and implements 
the ISpiPeripheral and IAnalogOutputController interfaces.

###### **Assembly**: Mcp492x.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.DAC.Mcp492x/Driver/Mcp492x.cs#L12)
```csharp title="Declaration"
public abstract class Mcp492x : ISpiPeripheral, IAnalogOutputController, IPinController
```
**Derived:**  
[Meadow.Foundation.ICs.DAC.Mcp4921](../Meadow.Foundation.ICs.DAC/Mcp4921), [Meadow.Foundation.ICs.DAC.Mcp4922](../Meadow.Foundation.ICs.DAC/Mcp4922)

**Implements:**  
`Meadow.Hardware.ISpiPeripheral`, `Meadow.Hardware.IAnalogOutputController`, `Meadow.Hardware.IPinController`

## Properties
### DefaultSpiBusMode
Gets the default SPI bus mode (Mode0).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.DAC.Mcp492x/Driver/Mcp492x.cs#L25)
```csharp title="Declaration"
public SpiClockConfiguration.Mode DefaultSpiBusMode { get; }
```
### DefaultSpiBusSpeed
Gets the default SPI bus speed (20 MHz).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.DAC.Mcp492x/Driver/Mcp492x.cs#L30)
```csharp title="Declaration"
public Frequency DefaultSpiBusSpeed { get; }
```
### SpiBusMode
Gets or sets the SPI bus mode.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.DAC.Mcp492x/Driver/Mcp492x.cs#L35)
```csharp title="Declaration"
public SpiClockConfiguration.Mode SpiBusMode { get; set; }
```
### SpiBusSpeed
Gets or sets the SPI bus speed.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.DAC.Mcp492x/Driver/Mcp492x.cs#L40)
```csharp title="Declaration"
public Frequency SpiBusSpeed { get; set; }
```
## Methods
### CreateAnalogOutputPort(IPin)
Creates an IAnalogOutputPort on the specified pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.DAC.Mcp492x/Driver/Mcp492x.cs#L94)
```csharp title="Declaration"
public IAnalogOutputPort CreateAnalogOutputPort(IPin pin)
```

##### Returns

`Meadow.Hardware.IAnalogOutputPort`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.IPin` | *pin* | The pin on which to create the port. |

### CreateAnalogOutputPort(IPin, Gain, bool)

###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.DAC.Mcp492x/Driver/Mcp492x.cs#L100)
```csharp title="Declaration"
public IAnalogOutputPort CreateAnalogOutputPort(IPin pin, Mcp492x.Gain gain = Gain.Gain1x, bool bufferedInput = false)
```

##### Returns

`Meadow.Hardware.IAnalogOutputPort`

##### Parameters

| Type | Name |
|:--- |:--- |
| `Meadow.Hardware.IPin` | *pin* |
| [Meadow.Foundation.ICs.DAC.Mcp492x.Gain](../Meadow.Foundation.ICs.DAC/Mcp492x.Gain) | *gain* |
| `System.Boolean` | *bufferedInput* |


## Implements

* `Meadow.Hardware.ISpiPeripheral`
* `Meadow.Hardware.IAnalogOutputController`
* `Meadow.Hardware.IPinController`
