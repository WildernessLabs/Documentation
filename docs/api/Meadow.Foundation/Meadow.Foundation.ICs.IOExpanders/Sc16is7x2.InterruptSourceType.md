---
title: Enum Sc16is7x2.InterruptSourceType
sidebar_label: Sc16is7x2.InterruptSourceType
description: >-
  The interrupt sources for the SC16IS7x2 Using a bit mask to allow for multiple
  sources to be set, with minimal overhead. Really not sure if multiple sources
  can be active at the same time, but making it possible.
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders/Sc16is7x2.InterruptSourceType
---
# Enum Sc16is7x2.InterruptSourceType
The interrupt sources for the SC16IS7x2
Using a bit mask to allow for multiple sources to be set, with minimal overhead.
Really not sure if multiple sources can be active at the same time, but making it possible.

###### **Assembly**: Sc16is7x2.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.Enums.cs#L277)
```csharp title="Declaration"
public enum Sc16is7x2.InterruptSourceType
```
## Fields
### Unknown
Unknown Interrupt Identification Register (IIR) status
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.Enums.cs#L282)
```csharp title="Declaration"
Unknown = -1
```
### None
No interrupt.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.Enums.cs#L286)
```csharp title="Declaration"
None = 0
```
### ReceiverLineStatus
Overrun Error(OE), Framing Error(FE), Parity Error, (PE), or Break Interrupt(BI) errors occur in characters in the RX FIFO.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.Enums.cs#L290)
```csharp title="Declaration"
ReceiverLineStatus = 1
```
### RxTimeout
Stale data in RX FIFO.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.Enums.cs#L294)
```csharp title="Declaration"
RxTimeout = 2
```
### RHR
Receive data ready (FIFO disable) or RX FIFO above trigger level (FIFO enable)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.Enums.cs#L298)
```csharp title="Declaration"
RHR = 4
```
### THR
Transmit FIFO empty (FIFO disable) or TX FIFO passes above trigger level (FIFO enable)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.Enums.cs#L302)
```csharp title="Declaration"
THR = 8
```
### ModemStatus
Change of state of modem input pins.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.Enums.cs#L306)
```csharp title="Declaration"
ModemStatus = 16
```
### GpioPins
Input pins change of state. (GPIO)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.Enums.cs#L310)
```csharp title="Declaration"
GpioPins = 32
```
### Xoff
Receive Xoff character(s)/special character.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.Enums.cs#L314)
```csharp title="Declaration"
Xoff = 64
```
### CtsRts
RTS pin or CTS pin change state from active(LOW) to inactive(HIGH).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.Enums.cs#L318)
```csharp title="Declaration"
CtsRts = 128
```
