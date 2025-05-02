---
title: Interface IAnalogChannelInfo
sidebar_label: IAnalogChannelInfo
description: Contract for analog communication channels.
slug: /docs/api/Meadow/Meadow.Hardware/IAnalogChannelInfo
---
# Interface IAnalogChannelInfo
Contract for analog communication channels.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/ChannelInfos/IAnalogChannelInfo.cs#L6)
```csharp title="Declaration"
public interface IAnalogChannelInfo : IChannelInfo
```
## Properties
### InputCapable
Whether or not the channel is capable of reading input (i.e. ADC).
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/ChannelInfos/IAnalogChannelInfo.cs#L12)
```csharp title="Declaration"
bool InputCapable { get; }
```
### OutputCapable
Whether or not the channel is capable of writing output (i.e. DAC).
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/ChannelInfos/IAnalogChannelInfo.cs#L17)
```csharp title="Declaration"
bool OutputCapable { get; }
```
### Precision
Precision (in bits) of the channel
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/ChannelInfos/IAnalogChannelInfo.cs#L21)
```csharp title="Declaration"
byte Precision { get; }
```
