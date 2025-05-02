---
title: Class UartChannelInfo
sidebar_label: UartChannelInfo
description: Represents information about a UART channel.
slug: /docs/api/Meadow/Meadow.Hardware/UartChannelInfo
---
# Class UartChannelInfo
Represents information about a UART channel.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Communications/UartChannelInfo.cs#L6)
```csharp title="Declaration"
public class UartChannelInfo : DigitalChannelInfoBase, IUartChannelInfo, IDigitalChannelInfo, IChannelInfo, ISerialCommunicationChannelInfo, ICommunicationChannelInfo
```
**Inheritance:** `System.Object` -> [Meadow.Hardware.ChannelInfoBase](../Meadow.Hardware/ChannelInfoBase) -> [Meadow.Hardware.DigitalChannelInfoBase](../Meadow.Hardware/DigitalChannelInfoBase)

**Implements:**  
[Meadow.Hardware.IUartChannelInfo](../Meadow.Hardware/IUartChannelInfo), [Meadow.Hardware.IDigitalChannelInfo](../Meadow.Hardware/IDigitalChannelInfo), [Meadow.Hardware.IChannelInfo](../Meadow.Hardware/IChannelInfo), [Meadow.Hardware.ISerialCommunicationChannelInfo](../Meadow.Hardware/ISerialCommunicationChannelInfo), [Meadow.Hardware.ICommunicationChannelInfo](../Meadow.Hardware/ICommunicationChannelInfo)

## Properties
### SerialDirection
Gets the serial direction type of the UART channel.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Communications/UartChannelInfo.cs#L11)
```csharp title="Declaration"
public SerialDirectionType SerialDirection { get; protected set; }
```

## Implements

* [Meadow.Hardware.IUartChannelInfo](../Meadow.Hardware/IUartChannelInfo)
* [Meadow.Hardware.IDigitalChannelInfo](../Meadow.Hardware/IDigitalChannelInfo)
* [Meadow.Hardware.IChannelInfo](../Meadow.Hardware/IChannelInfo)
* [Meadow.Hardware.ISerialCommunicationChannelInfo](../Meadow.Hardware/ISerialCommunicationChannelInfo)
* [Meadow.Hardware.ICommunicationChannelInfo](../Meadow.Hardware/ICommunicationChannelInfo)
