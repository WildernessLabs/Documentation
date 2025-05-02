---
title: Interface IDigitalChannelInfo
sidebar_label: IDigitalChannelInfo
description: Contract for a GPIO channel that supports digital communications.
slug: /docs/api/Meadow/Meadow.Hardware/IDigitalChannelInfo
---
# Interface IDigitalChannelInfo
Contract for a GPIO channel that supports digital communications.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/ChannelInfos/IDigitalChannelInfo.cs#L6)
```csharp title="Declaration"
public interface IDigitalChannelInfo : IChannelInfo
```
## Properties
### InputCapable
Whether or not the channel is capable of reading input.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/ChannelInfos/IDigitalChannelInfo.cs#L12)
```csharp title="Declaration"
bool InputCapable { get; }
```
### OutputCapable
Whether or not the channel is capable of writing outputs.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/ChannelInfos/IDigitalChannelInfo.cs#L17)
```csharp title="Declaration"
bool OutputCapable { get; }
```
### InterruptCapable
Whether or not the channel is capable of receiving interrupts.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/ChannelInfos/IDigitalChannelInfo.cs#L22)
```csharp title="Declaration"
bool InterruptCapable { get; }
```
### PullDownCapable
Whether or not the channel is capable of internal pull-down resistors.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/ChannelInfos/IDigitalChannelInfo.cs#L27)
```csharp title="Declaration"
bool PullDownCapable { get; }
```
### PullUpCapable
Whether or not the channel is capable of internal pull-up resistors.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/ChannelInfos/IDigitalChannelInfo.cs#L32)
```csharp title="Declaration"
bool PullUpCapable { get; }
```
### InverseLogic
Whether or not the channel uses high-voltage as logic high or low.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/ChannelInfos/IDigitalChannelInfo.cs#L37)
```csharp title="Declaration"
bool InverseLogic { get; }
```
### InterruptGroup
If the channel is interrupt capable and is grouped (i.e. only one channel per group is allowed) this will be non-zero.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/ChannelInfos/IDigitalChannelInfo.cs#L42)
```csharp title="Declaration"
int? InterruptGroup { get; }
```
