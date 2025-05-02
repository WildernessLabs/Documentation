---
title: Interface IPwmChannelInfo
sidebar_label: IPwmChannelInfo
description: Describes the capabilities of a Pulse-Width-Modulation channel
slug: /docs/api/Meadow/Meadow.Hardware/IPwmChannelInfo
---
# Interface IPwmChannelInfo
Describes the capabilities of a Pulse-Width-Modulation channel

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/ChannelInfos/IPwmChannelInfo.cs#L6)
```csharp title="Declaration"
public interface IPwmChannelInfo : IDigitalChannelInfo, IChannelInfo
```
## Properties
### Timer
Gets the timer corresponding to the microcontroller timer associated
with this managed PWM channel.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/ChannelInfos/IPwmChannelInfo.cs#L12)
```csharp title="Declaration"
uint Timer { get; }
```
### TimerChannel
Gets the timer channel corresponding to the microcontroller timer
channel associated with this managed PWM channel.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/ChannelInfos/IPwmChannelInfo.cs#L18)
```csharp title="Declaration"
uint TimerChannel { get; }
```
### MinimumFrequency
Gets the minimum frequency that the underlying PWM generator is 
capable of generating.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/ChannelInfos/IPwmChannelInfo.cs#L25)
```csharp title="Declaration"
float MinimumFrequency { get; }
```
### MaximumFrequency
Gets the maximum frequency that the underlying PWM generator is 
capable of generating.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/ChannelInfos/IPwmChannelInfo.cs#L32)
```csharp title="Declaration"
float MaximumFrequency { get; }
```
