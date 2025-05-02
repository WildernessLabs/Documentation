---
title: Class Mcp23x0x
sidebar_label: Mcp23x0x
description: Represent an MCP23x0x I2C/SPI port expander
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders/Mcp23x0x
---
# Class Mcp23x0x
Represent an MCP23x0x I2C/SPI port expander

###### **Assembly**: Mcp23xxx.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Drivers/Extras/Mcp23x0x.PinDefinitions.cs#L7)
```csharp title="Declaration"
public abstract class Mcp23x0x : Mcp23xxx, IDigitalInputOutputController, IDigitalInputController, IDigitalOutputController, ISpiPeripheral, II2cPeripheral, IDigitalInterruptController, IPinController
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ICs.IOExpanders.Mcp23xxx](../Meadow.Foundation.ICs.IOExpanders/Mcp23xxx)

**Derived:**  
[Meadow.Foundation.ICs.IOExpanders.Mcp23008](../Meadow.Foundation.ICs.IOExpanders/Mcp23008), [Meadow.Foundation.ICs.IOExpanders.Mcp23009](../Meadow.Foundation.ICs.IOExpanders/Mcp23009), [Meadow.Foundation.ICs.IOExpanders.Mcp23s08](../Meadow.Foundation.ICs.IOExpanders/Mcp23s08), [Meadow.Foundation.ICs.IOExpanders.Mcp23s09](../Meadow.Foundation.ICs.IOExpanders/Mcp23s09)

**Implements:**  
`Meadow.Hardware.IDigitalInputOutputController`, `Meadow.Hardware.IDigitalInputController`, `Meadow.Hardware.IDigitalOutputController`, `Meadow.Hardware.ISpiPeripheral`, `Meadow.Hardware.II2cPeripheral`, `Meadow.Hardware.IDigitalInterruptController`, `Meadow.Hardware.IPinController`

## Properties
### Pins
MCP23x0x pin definitions
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Drivers/Extras/Mcp23x0x.cs#L14)
```csharp title="Declaration"
public Mcp23x0x.PinDefinitions Pins { get; }
```
### NumberOfPins
The number of IO pins available on the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Drivers/Extras/Mcp23x0x.cs#L19)
```csharp title="Declaration"
public override int NumberOfPins { get; }
```
## Methods
### IsValidPin(IPin)
Is the pin valid for this device instance
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Drivers/Extras/Mcp23x0x.cs#L26)
```csharp title="Declaration"
protected override bool IsValidPin(IPin pin)
```

##### Returns

`System.Boolean`: True if pin is valid
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.IPin` | *pin* | The IPin to validate |

### GetPin(string)
Get pin reference by name
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Drivers/Extras/Mcp23x0x.cs#L65)
```csharp title="Declaration"
public override IPin GetPin(string pinName)
```

##### Returns

`Meadow.Hardware.IPin`: IPin reference if found
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *pinName* | The pin name as a string |


## Implements

* `Meadow.Hardware.IDigitalInputOutputController`
* `Meadow.Hardware.IDigitalInputController`
* `Meadow.Hardware.IDigitalOutputController`
* `Meadow.Hardware.ISpiPeripheral`
* `Meadow.Hardware.II2cPeripheral`
* `Meadow.Hardware.IDigitalInterruptController`
* `Meadow.Hardware.IPinController`
