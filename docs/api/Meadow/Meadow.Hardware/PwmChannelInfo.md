---
title: Class PwmChannelInfo
sidebar_label: PwmChannelInfo
description: Information about a Pulse Width Modulation (PWM) channel
slug: /docs/api/Meadow/Meadow.Hardware/PwmChannelInfo
---
# Class PwmChannelInfo
Information about a Pulse Width Modulation (PWM) channel

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Channelnfo/PwmChannelInfo.cs#L6)
```csharp title="Declaration"
public class PwmChannelInfo : DigitalChannelInfoBase, IPwmChannelInfo, IDigitalChannelInfo, IChannelInfo
```
**Inheritance:** `System.Object` -> [Meadow.Hardware.ChannelInfoBase](../Meadow.Hardware/ChannelInfoBase) -> [Meadow.Hardware.DigitalChannelInfoBase](../Meadow.Hardware/DigitalChannelInfoBase)

**Implements:**  
[Meadow.Hardware.IPwmChannelInfo](../Meadow.Hardware/IPwmChannelInfo), [Meadow.Hardware.IDigitalChannelInfo](../Meadow.Hardware/IDigitalChannelInfo), [Meadow.Hardware.IChannelInfo](../Meadow.Hardware/IChannelInfo)

## Properties
### MinimumFrequency
The minimum pulse frequency supported by the channel
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Channelnfo/PwmChannelInfo.cs#L11)
```csharp title="Declaration"
public float MinimumFrequency { get; protected set; }
```
### MaximumFrequency
The maximum pulse frequency supported by the channel
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Channelnfo/PwmChannelInfo.cs#L15)
```csharp title="Declaration"
public float MaximumFrequency { get; protected set; }
```
### Timer
Gets the OS system timer number used to drive the PWM
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Channelnfo/PwmChannelInfo.cs#L19)
```csharp title="Declaration"
public uint Timer { get; protected set; }
```
### TimerChannel
Gets the OS timer channel used to drive the PWM
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Channelnfo/PwmChannelInfo.cs#L23)
```csharp title="Declaration"
public uint TimerChannel { get; protected set; }
```

## Implements

* [Meadow.Hardware.IPwmChannelInfo](../Meadow.Hardware/IPwmChannelInfo)
* [Meadow.Hardware.IDigitalChannelInfo](../Meadow.Hardware/IDigitalChannelInfo)
* [Meadow.Hardware.IChannelInfo](../Meadow.Hardware/IChannelInfo)
