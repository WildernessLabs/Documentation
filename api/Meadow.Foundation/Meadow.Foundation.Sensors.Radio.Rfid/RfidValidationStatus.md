---
title: Enum RfidValidationStatus
sidebar_label: RfidValidationStatus
description: "RFID validation statuses"
---
# Enum RfidValidationStatus
RFID validation statuses

###### **Assembly**: IDxxLA.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Radio.Rfid.IDxxLA/Driver/RfidValidationStatus.cs#L6)
```csharp title="Declaration"
public enum RfidValidationStatus
```
## Fields
### Ok
Rfid read was successful
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Radio.Rfid.IDxxLA/Driver/RfidValidationStatus.cs#L11)
```csharp title="Declaration"
Ok = 0
```
### ChecksumFailed
Rfid was read but failed checksum validation
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Radio.Rfid.IDxxLA/Driver/RfidValidationStatus.cs#L16)
```csharp title="Declaration"
ChecksumFailed = 1
```
### InvalidDataFormat
Attempt to read the Rfid failed due to the data read from the serial port not being in an expected format.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Radio.Rfid.IDxxLA/Driver/RfidValidationStatus.cs#L21)
```csharp title="Declaration"
InvalidDataFormat = 2
```
