---
title: Class RfidValidationException
sidebar_label: RfidValidationException
description: RfidValidationException class
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Radio.Rfid/RfidValidationException
---
# Class RfidValidationException
RfidValidationException class

###### **Assembly**: IDxxLA.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Radio.Rfid.IDxxLA/Driver/RfidValidationException.cs#L8)
```csharp title="Declaration"
public class RfidValidationException : Exception, ISerializable
```
**Inheritance:** `System.Object` -> `System.Exception`

**Implements:**  
`System.Runtime.Serialization.ISerializable`

## Properties
### Status
The RFID validation status
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Radio.Rfid.IDxxLA/Driver/RfidValidationException.cs#L23)
```csharp title="Declaration"
public RfidValidationStatus Status { get; }
```

## Implements

* `System.Runtime.Serialization.ISerializable`
