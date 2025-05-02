---
title: Interface II2cCommunications
sidebar_label: II2cCommunications
description: I2C communications abstraction
slug: /docs/api/Meadow/Meadow.Hardware/II2cCommunications
---
# Interface II2cCommunications
I2C communications abstraction

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/II2cCommunications.cs#L6)
```csharp title="Declaration"
public interface II2cCommunications : IByteCommunications
```
## Properties
### Address
The I2C address of the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/II2cCommunications.cs#L11)
```csharp title="Declaration"
byte Address { get; }
```
### Bus
The I2C bus
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/II2cCommunications.cs#L16)
```csharp title="Declaration"
II2cBus Bus { get; }
```
