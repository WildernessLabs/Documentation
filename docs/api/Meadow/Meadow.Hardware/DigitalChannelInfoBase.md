---
title: Class DigitalChannelInfoBase
sidebar_label: DigitalChannelInfoBase
description: A base implementation of the IDigitalChannelInfo interface.
slug: /docs/api/Meadow/Meadow.Hardware/DigitalChannelInfoBase
---
# Class DigitalChannelInfoBase
A base implementation of the IDigitalChannelInfo interface.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/DigitalChannelInfoBase.cs#L6)
```csharp title="Declaration"
public class DigitalChannelInfoBase : ChannelInfoBase, IDigitalChannelInfo, IChannelInfo
```
**Inheritance:** `System.Object` -> [Meadow.Hardware.ChannelInfoBase](../Meadow.Hardware/ChannelInfoBase)

**Derived:**  
[Meadow.Hardware.CanChannelInfo](../Meadow.Hardware/CanChannelInfo), [Meadow.Hardware.DigitalChannelInfo](../Meadow.Hardware/DigitalChannelInfo), [Meadow.Hardware.I2cChannelInfo](../Meadow.Hardware/I2cChannelInfo), [Meadow.Hardware.PwmChannelInfo](../Meadow.Hardware/PwmChannelInfo), [Meadow.Hardware.SpiChannelInfo](../Meadow.Hardware/SpiChannelInfo), [Meadow.Hardware.UartChannelInfo](../Meadow.Hardware/UartChannelInfo)

**Implements:**  
[Meadow.Hardware.IDigitalChannelInfo](../Meadow.Hardware/IDigitalChannelInfo), [Meadow.Hardware.IChannelInfo](../Meadow.Hardware/IChannelInfo)

## Properties
### InputCapable
Gets or sets the channel's digital input capability.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/DigitalChannelInfoBase.cs#L11)
```csharp title="Declaration"
public bool InputCapable { get; protected set; }
```
### OutputCapable
Gets or sets the channel's digital output capability.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/DigitalChannelInfoBase.cs#L15)
```csharp title="Declaration"
public bool OutputCapable { get; protected set; }
```
### InterruptCapable
Gets or sets the channel's digital interrupt capability.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/DigitalChannelInfoBase.cs#L19)
```csharp title="Declaration"
public bool InterruptCapable { get; protected set; }
```
### PullDownCapable
Gets or sets the channel's internal pull-down resistor capability.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/DigitalChannelInfoBase.cs#L23)
```csharp title="Declaration"
public bool PullDownCapable { get; protected set; }
```
### PullUpCapable
Gets or sets the channel's internal pull-up resistor capability.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/DigitalChannelInfoBase.cs#L27)
```csharp title="Declaration"
public bool PullUpCapable { get; protected set; }
```
### InverseLogic
Gets or sets whether the channel has inverse boolean logic (low == true).
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/DigitalChannelInfoBase.cs#L31)
```csharp title="Declaration"
public bool InverseLogic { get; protected set; }
```
### InterruptGroup
When relevant, gets or sets any platform interrupt group association for the channel.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/DigitalChannelInfoBase.cs#L35)
```csharp title="Declaration"
public int? InterruptGroup { get; protected set; }
```

## Implements

* [Meadow.Hardware.IDigitalChannelInfo](../Meadow.Hardware/IDigitalChannelInfo)
* [Meadow.Hardware.IChannelInfo](../Meadow.Hardware/IChannelInfo)
