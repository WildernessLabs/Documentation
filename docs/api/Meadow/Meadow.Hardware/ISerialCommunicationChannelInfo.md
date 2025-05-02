---
title: Interface ISerialCommunicationChannelInfo
sidebar_label: ISerialCommunicationChannelInfo
description: >-
  Represents the communication channel information for a serial communication
  channel.
slug: /docs/api/Meadow/Meadow.Hardware/ISerialCommunicationChannelInfo
---
# Interface ISerialCommunicationChannelInfo
Represents the communication channel information for a serial communication channel.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/ChannelInfos/ISerialCommunicationChannelInfo.cs#L6)
```csharp title="Declaration"
public interface ISerialCommunicationChannelInfo : ICommunicationChannelInfo
```
## Properties
### SerialDirection
Gets the serial direction type.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/ChannelInfos/ISerialCommunicationChannelInfo.cs#L11)
```csharp title="Declaration"
SerialDirectionType SerialDirection { get; }
```
