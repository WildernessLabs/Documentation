---
title: Class AnalogChannelInfo
sidebar_label: AnalogChannelInfo
description: Information about an analog channel
slug: /docs/api/Meadow/Meadow.Hardware/AnalogChannelInfo
---
# Class AnalogChannelInfo
Information about an analog channel

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Channelnfo/AnalogChannelInfo.cs#L6)
```csharp title="Declaration"
public class AnalogChannelInfo : ChannelInfoBase, IAnalogChannelInfo, IChannelInfo
```
**Inheritance:** `System.Object` -> [Meadow.Hardware.ChannelInfoBase](../Meadow.Hardware/ChannelInfoBase)

**Implements:**  
[Meadow.Hardware.IAnalogChannelInfo](../Meadow.Hardware/IAnalogChannelInfo), [Meadow.Hardware.IChannelInfo](../Meadow.Hardware/IChannelInfo)

## Properties
### InputCapable
Whether or not the channel is capable of reading input (i.e. ADC).
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Channelnfo/AnalogChannelInfo.cs#L12)
```csharp title="Declaration"
public bool InputCapable { get; protected set; }
```
### OutputCapable
Whether or not the channel is capable of writing output (i.e. DAC).
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Channelnfo/AnalogChannelInfo.cs#L17)
```csharp title="Declaration"
public bool OutputCapable { get; protected set; }
```
### Precision
Precision (in bits) of the channel
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Channelnfo/AnalogChannelInfo.cs#L21)
```csharp title="Declaration"
public byte Precision { get; protected set; }
```

## Implements

* [Meadow.Hardware.IAnalogChannelInfo](../Meadow.Hardware/IAnalogChannelInfo)
* [Meadow.Hardware.IChannelInfo](../Meadow.Hardware/IChannelInfo)
