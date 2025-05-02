---
title: Interface IChannelInfo
sidebar_label: IChannelInfo
description: >-
  Minimum contract to describe a GPIO channel type or protocol on a  Meadow
  device such as Analog, Digital, or I2C.
slug: /docs/api/Meadow/Meadow.Hardware/IChannelInfo
---
# Interface IChannelInfo
Minimum contract to describe a GPIO channel type or protocol on a 
Meadow device such as Analog, Digital, or I2C.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/ChannelInfos/IChannelInfo.cs#L7)
```csharp title="Declaration"
public interface IChannelInfo
```
## Properties
### Name
Gets the name of the channel.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/ChannelInfos/IChannelInfo.cs#L13)
```csharp title="Declaration"
string Name { get; }
```
