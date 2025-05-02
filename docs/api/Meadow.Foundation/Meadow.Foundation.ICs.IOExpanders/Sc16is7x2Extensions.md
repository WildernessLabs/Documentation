---
title: Class Sc16is7x2Extensions
sidebar_label: Sc16is7x2Extensions
description: Convenience extension methods for the Sc16is7x2 class
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders/Sc16is7x2Extensions
---
# Class Sc16is7x2Extensions
Convenience extension methods for the Sc16is7x2 class

###### **Assembly**: Sc16is7x2.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2Extensions.cs#L10)
```csharp title="Declaration"
public static class Sc16is7x2Extensions
```
## Methods
### CreateRs485SerialPort(Sc16SerialPortName, int, int, Parity, StopBits, bool)
Creates an RS485 Serial Port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2Extensions.cs#L21)
```csharp title="Declaration"
public static ISerialPort CreateRs485SerialPort(this Sc16is7x2.Sc16SerialPortName portName, int baudRate = 9600, int dataBits = 8, Parity parity = Parity.None, StopBits stopBits = StopBits.One, bool invertDE = false)
```

##### Returns

`Meadow.Hardware.ISerialPort`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.ICs.IOExpanders.Sc16is7x2.Sc16SerialPortName](../Meadow.Foundation.ICs.IOExpanders/Sc16is7x2.Sc16SerialPortName) | *portName* | The Sc16SerialPortName name of the channel to create |
| `System.Int32` | *baudRate* | The baud rate used in communication |
| `System.Int32` | *dataBits* | The data bits used in communication |
| `Meadow.Hardware.Parity` | *parity* | The parity used in communication |
| `Meadow.Hardware.StopBits` | *stopBits* | The stop bits used in communication |
| `System.Boolean` | *invertDE* | Set to true to invert the logic (active high) driver enable output signal |

