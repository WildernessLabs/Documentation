---
title: Class CanChannelInfo
sidebar_label: CanChannelInfo
description: Information about a Controller Area Network (CanChannelInfo) channel
slug: /docs/api/Meadow/Meadow.Hardware/CanChannelInfo
---
# Class CanChannelInfo
Information about a Controller Area Network (CanChannelInfo) channel

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Channelnfo/CanChannelInfo.cs#L6)
```csharp title="Declaration"
public class CanChannelInfo : DigitalChannelInfoBase, ICanChannelInfo, IDigitalChannelInfo, IChannelInfo
```
**Inheritance:** `System.Object` -> [Meadow.Hardware.ChannelInfoBase](../Meadow.Hardware/ChannelInfoBase) -> [Meadow.Hardware.DigitalChannelInfoBase](../Meadow.Hardware/DigitalChannelInfoBase)

**Implements:**  
[Meadow.Hardware.ICanChannelInfo](../Meadow.Hardware/ICanChannelInfo), [Meadow.Hardware.IDigitalChannelInfo](../Meadow.Hardware/IDigitalChannelInfo), [Meadow.Hardware.IChannelInfo](../Meadow.Hardware/IChannelInfo)

## Properties
### SerialDirection
Direction
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Channelnfo/CanChannelInfo.cs#L11)
```csharp title="Declaration"
public SerialDirectionType SerialDirection { get; protected set; }
```

## Implements

* [Meadow.Hardware.ICanChannelInfo](../Meadow.Hardware/ICanChannelInfo)
* [Meadow.Hardware.IDigitalChannelInfo](../Meadow.Hardware/IDigitalChannelInfo)
* [Meadow.Hardware.IChannelInfo](../Meadow.Hardware/IChannelInfo)
