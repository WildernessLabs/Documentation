---
title: Enum DuplexType
sidebar_label: DuplexType
description: >-
  Describes how read and write buffers are sent.

  Half-duplex is the most common and means that the write data is clocked (sent)
  out, and then the read data is clocked in only after write has finished.
  Protocols that only have a single data line (such as I2C) can only support
  half-duplex.

  Full-duplex is supported only on protocols that use two or more data lines
  (such as SPI) and means that data is clocked in at the same time as it is
  clocked out. Full-duplex peripherals are much less common than half-duplex.
slug: /docs/api/Meadow/Meadow.Hardware/DuplexType
---
# Enum DuplexType
Describes how read and write buffers are sent.

Half-duplex is the most common and means that the write data is
clocked (sent) out, and then the read data is clocked in only after
write has finished. Protocols that only have a single data line
(such as I2C) can only support half-duplex.

Full-duplex is supported only on protocols that use two or more
data lines (such as SPI) and means that data is clocked in at the
same time as it is clocked out. Full-duplex peripherals are much
less common than half-duplex.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/DuplexType.cs#L16)
```csharp title="Declaration"
public enum DuplexType
```
## Fields
### Half
Half-duplex. Write data is sent, and then read data is read in.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/DuplexType.cs#L21)
```csharp title="Declaration"
Half = 0
```
### Full
Full-duplex. Write and read data buffers are sent and received
at the same time.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/DuplexType.cs#L26)
```csharp title="Declaration"
Full = 1
```
