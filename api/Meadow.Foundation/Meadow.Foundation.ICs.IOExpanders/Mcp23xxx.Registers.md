---
title: Class Mcp23xxx.Registers
sidebar_label: Mcp23xxx.Registers
description: "Mcp23xxx registers class"
---
# Class Mcp23xxx.Registers
Mcp23xxx registers class

###### **Assembly**: Mcp23xxx.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.Registers.cs#L8)
```csharp title="Declaration"
public static class Mcp23xxx.Registers
```
## Fields
### IODIR_IODirection
IODIR Controls the direction of the data I/O
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.Registers.cs#L17)
```csharp title="Declaration"
public const byte IODIR_IODirection = 0
```
### IPOL_InputPolarity
IPOL. The IPOL register allows the user to configure the
polarity on the corresponding GPIO port bits.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.Registers.cs#L27)
```csharp title="Declaration"
public const byte IPOL_InputPolarity = 1
```
### GPINTEN_InterruptOnChange
GPINTEN. The GPINTEN register controls the interrupt-on-change
feature for each pin.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.Registers.cs#L38)
```csharp title="Declaration"
public const byte GPINTEN_InterruptOnChange = 2
```
### DEFVAL_DefaultComparisonValue
DEFVAL. The default comparison value is configured in the DEFVAL
register. If enabled (via GPINTEN and INTCON) to compare against
the DEFVAL register, an opposite value on the associated pin
will cause an interrupt to occur.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.Registers.cs#L46)
```csharp title="Declaration"
public const byte DEFVAL_DefaultComparisonValue = 3
```
### INTCON_InterruptControl
INTCON.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.Registers.cs#L58)
```csharp title="Declaration"
public const byte INTCON_InterruptControl = 4
```
### IOCON_IOConfiguration
IOCON
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.Registers.cs#L83)
```csharp title="Declaration"
public const byte IOCON_IOConfiguration = 5
```
### GPPU_PullupResistorConfiguration
GPPU.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.Registers.cs#L94)
```csharp title="Declaration"
public const byte GPPU_PullupResistorConfiguration = 6
```
### INTF_InterruptFlag
INTF
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.Registers.cs#L113)
```csharp title="Declaration"
public const byte INTF_InterruptFlag = 7
```
### INTCAP_InterruptCapture
INTCAP
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.Registers.cs#L124)
```csharp title="Declaration"
public const byte INTCAP_InterruptCapture = 8
```
### GPIO
GPIO. The GPIO module contains the data port (GPIO), internal
pull up resistors and the Output Latches (OLAT).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.Registers.cs#L140)
```csharp title="Declaration"
public const byte GPIO = 9
```
### OutputLatch
OLAT
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.Registers.cs#L151)
```csharp title="Declaration"
public const byte OutputLatch = 10
```
