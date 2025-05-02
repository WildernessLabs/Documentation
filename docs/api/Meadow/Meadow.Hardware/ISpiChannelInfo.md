---
title: Interface ISpiChannelInfo
sidebar_label: ISpiChannelInfo
description: Represents the communication channel information for an SPI channel.
slug: /docs/api/Meadow/Meadow.Hardware/ISpiChannelInfo
---
# Interface ISpiChannelInfo
Represents the communication channel information for an SPI channel.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/ChannelInfos/ISpiChannelInfo.cs#L6)
```csharp title="Declaration"
public interface ISpiChannelInfo : IDigitalChannelInfo, IChannelInfo
```
## Properties
### LineTypes
Gets the line types supported by the SPI channel.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/ChannelInfos/ISpiChannelInfo.cs#L11)
```csharp title="Declaration"
SpiLineType LineTypes { get; }
```
### BusNumber
Gets the system bus number for the channel
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/ChannelInfos/ISpiChannelInfo.cs#L15)
```csharp title="Declaration"
int BusNumber { get; }
```
