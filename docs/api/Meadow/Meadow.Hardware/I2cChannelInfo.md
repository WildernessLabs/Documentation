---
title: Class I2cChannelInfo
sidebar_label: I2cChannelInfo
description: Represents information about an I2C channel
slug: /docs/api/Meadow/Meadow.Hardware/I2cChannelInfo
---
# Class I2cChannelInfo
Represents information about an I2C channel

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Communications/I2cChannelInfo.cs#L6)
```csharp title="Declaration"
public class I2cChannelInfo : DigitalChannelInfoBase, II2cChannelInfo, IDigitalChannelInfo, IChannelInfo, ICommunicationChannelInfo
```
**Inheritance:** `System.Object` -> [Meadow.Hardware.ChannelInfoBase](../Meadow.Hardware/ChannelInfoBase) -> [Meadow.Hardware.DigitalChannelInfoBase](../Meadow.Hardware/DigitalChannelInfoBase)

**Implements:**  
[Meadow.Hardware.II2cChannelInfo](../Meadow.Hardware/II2cChannelInfo), [Meadow.Hardware.IDigitalChannelInfo](../Meadow.Hardware/IDigitalChannelInfo), [Meadow.Hardware.IChannelInfo](../Meadow.Hardware/IChannelInfo), [Meadow.Hardware.ICommunicationChannelInfo](../Meadow.Hardware/ICommunicationChannelInfo)

## Properties
### ChannelFunction
Gets the function type of the I2C channel
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Communications/I2cChannelInfo.cs#L11)
```csharp title="Declaration"
public I2cChannelFunctionType ChannelFunction { get; protected set; }
```
### BusNumber
Gets the system bus number for the channel
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Communications/I2cChannelInfo.cs#L14)
```csharp title="Declaration"
public int BusNumber { get; }
```

## Implements

* [Meadow.Hardware.II2cChannelInfo](../Meadow.Hardware/II2cChannelInfo)
* [Meadow.Hardware.IDigitalChannelInfo](../Meadow.Hardware/IDigitalChannelInfo)
* [Meadow.Hardware.IChannelInfo](../Meadow.Hardware/IChannelInfo)
* [Meadow.Hardware.ICommunicationChannelInfo](../Meadow.Hardware/ICommunicationChannelInfo)
