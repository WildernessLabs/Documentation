---
title: Class RfidReadResult
sidebar_label: RfidReadResult
description: "RFID Read Result event args class"
---
# Class RfidReadResult
RFID Read Result event args class

###### **Assembly**: IDxxLA.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Radio.Rfid.IDxxLA/Driver/RfidReadResult.cs#L8)
```csharp title="Declaration"
public class RfidReadResult : EventArgs
```
**Inheritance:** `System.Object` -> `System.EventArgs`

## Properties
### Status
RFID validation status
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Radio.Rfid.IDxxLA/Driver/RfidReadResult.cs#L13)
```csharp title="Declaration"
public RfidValidationStatus Status { get; set; }
```
### RfidTag
RFIS tag
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Radio.Rfid.IDxxLA/Driver/RfidReadResult.cs#L18)
```csharp title="Declaration"
public byte[]? RfidTag { get; set; }
```
