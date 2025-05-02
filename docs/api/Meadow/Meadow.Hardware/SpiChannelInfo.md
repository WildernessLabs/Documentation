---
title: Class SpiChannelInfo
sidebar_label: SpiChannelInfo
description: Represents SPI channel information.
slug: /docs/api/Meadow/Meadow.Hardware/SpiChannelInfo
---
# Class SpiChannelInfo
Represents SPI channel information.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Communications/SpiChannelInfo.cs#L6)
```csharp title="Declaration"
public class SpiChannelInfo : DigitalChannelInfoBase, ISpiChannelInfo, IDigitalChannelInfo, IChannelInfo
```
**Inheritance:** `System.Object` -> [Meadow.Hardware.ChannelInfoBase](../Meadow.Hardware/ChannelInfoBase) -> [Meadow.Hardware.DigitalChannelInfoBase](../Meadow.Hardware/DigitalChannelInfoBase)

**Implements:**  
[Meadow.Hardware.ISpiChannelInfo](../Meadow.Hardware/ISpiChannelInfo), [Meadow.Hardware.IDigitalChannelInfo](../Meadow.Hardware/IDigitalChannelInfo), [Meadow.Hardware.IChannelInfo](../Meadow.Hardware/IChannelInfo)

## Properties
### LineTypes
Gets the supported line types of the SPI channel.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Communications/SpiChannelInfo.cs#L11)
```csharp title="Declaration"
public SpiLineType LineTypes { get; protected set; }
```
### BusNumber
Gets the system bus number for the channel
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Communications/SpiChannelInfo.cs#L14)
```csharp title="Declaration"
public int BusNumber { get; }
```

## Implements

* [Meadow.Hardware.ISpiChannelInfo](../Meadow.Hardware/ISpiChannelInfo)
* [Meadow.Hardware.IDigitalChannelInfo](../Meadow.Hardware/IDigitalChannelInfo)
* [Meadow.Hardware.IChannelInfo](../Meadow.Hardware/IChannelInfo)
