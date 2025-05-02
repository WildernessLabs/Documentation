---
title: Class FourChannelSpdtRelay
sidebar_label: FourChannelSpdtRelay
description: Represents a Grove Four Channel Spdt Relay
slug: >-
  /docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Relays/FourChannelSpdtRelay
---
# Class FourChannelSpdtRelay
Represents a Grove Four Channel Spdt Relay

###### **Assembly**: 4-ChannelSpdtRelay.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.Grove.git/blob/develop/Source/4-ChannelSpdtRelay/Driver/4-ChannelSpdtRelay.enums.cs#L3)
```csharp title="Declaration"
public class FourChannelSpdtRelay : II2cPeripheral
```
**Implements:**  
`Meadow.Hardware.II2cPeripheral`

## Properties
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.Grove.git/blob/develop/Source/4-ChannelSpdtRelay/Driver/4-ChannelSpdtRelay.cs#L18)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
## Fields
### Relays
The relays
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.Grove.git/blob/develop/Source/4-ChannelSpdtRelay/Driver/4-ChannelSpdtRelay.cs#L15)
```csharp title="Declaration"
public readonly Relay[] Relays
```
### ports
The digital output ports for the relays
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.Grove.git/blob/develop/Source/4-ChannelSpdtRelay/Driver/4-ChannelSpdtRelay.cs#L23)
```csharp title="Declaration"
protected readonly IDigitalOutputPort[] ports
```
## Methods
### GetFirmwareVersion()
Get the firmware version
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.Grove.git/blob/develop/Source/4-ChannelSpdtRelay/Driver/4-ChannelSpdtRelay.cs#L56)
```csharp title="Declaration"
public byte GetFirmwareVersion()
```

##### Returns

`System.Byte`: The firmware version as a byte### SetI2cAddress(byte)
Set a new I2C address
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.Grove.git/blob/develop/Source/4-ChannelSpdtRelay/Driver/4-ChannelSpdtRelay.cs#L65)
```csharp title="Declaration"
public void SetI2cAddress(byte address)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Byte` | *address* |

### SetAllOff()
Convenience method to turn all outputs off
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.Grove.git/blob/develop/Source/4-ChannelSpdtRelay/Driver/4-ChannelSpdtRelay.cs#L73)
```csharp title="Declaration"
public void SetAllOff()
```
### SetAllOn()
Convenience method to turn all outputs on
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.Grove.git/blob/develop/Source/4-ChannelSpdtRelay/Driver/4-ChannelSpdtRelay.cs#L81)
```csharp title="Declaration"
public void SetAllOn()
```

## Implements

* `Meadow.Hardware.II2cPeripheral`
