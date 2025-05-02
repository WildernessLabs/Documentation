---
title: Interface II2cChannelInfo
sidebar_label: II2cChannelInfo
description: Represents the I2C channel information.
slug: /docs/api/Meadow/Meadow.Hardware/II2cChannelInfo
---
# Interface II2cChannelInfo
Represents the I2C channel information.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/ChannelInfos/II2cChannelInfo.cs#L21)
```csharp title="Declaration"
public interface II2cChannelInfo : IDigitalChannelInfo, IChannelInfo, ICommunicationChannelInfo
```
## Properties
### ChannelFunction
Gets the I2C channel function type.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/ChannelInfos/II2cChannelInfo.cs#L26)
```csharp title="Declaration"
I2cChannelFunctionType ChannelFunction { get; }
```
### BusNumber
Gets the system bus number for the channel
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/ChannelInfos/II2cChannelInfo.cs#L30)
```csharp title="Declaration"
int BusNumber { get; }
```
