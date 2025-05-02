---
title: Class CanErrorInfo
sidebar_label: CanErrorInfo
description: Represents CAN bus error information
slug: /docs/api/Meadow/Meadow.Hardware/CanErrorInfo
---
# Class CanErrorInfo
Represents CAN bus error information

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/CAN/CanErrorInfo.cs#L6)
```csharp title="Declaration"
public class CanErrorInfo
```
## Properties
### TransmitErrorCount
The number of transmit errors detected
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/CAN/CanErrorInfo.cs#L11)
```csharp title="Declaration"
public byte TransmitErrorCount { get; set; }
```
### ReceiveErrorCount
The number of receive errors detected
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/CAN/CanErrorInfo.cs#L15)
```csharp title="Declaration"
public byte ReceiveErrorCount { get; set; }
```
