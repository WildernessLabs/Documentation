---
title: Interface IDeviceInformation
sidebar_label: IDeviceInformation
description: Interface for accessing device information.
slug: /docs/api/Meadow/Meadow.Hardware/IDeviceInformation
---
# Interface IDeviceInformation
Interface for accessing device information.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/IDeviceInformation.cs#L6)
```csharp title="Declaration"
public interface IDeviceInformation
```
## Properties
### DeviceName
Gets or sets the current device name.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/IDeviceInformation.cs#L11)
```csharp title="Declaration"
string DeviceName { get; set; }
```
### Model
Gets the current model name.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/IDeviceInformation.cs#L16)
```csharp title="Declaration"
string Model { get; }
```
### Platform
Gets the currently executing platform.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/IDeviceInformation.cs#L21)
```csharp title="Declaration"
MeadowPlatform Platform { get; }
```
### ProcessorType
Gets the processor type.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/IDeviceInformation.cs#L26)
```csharp title="Declaration"
string ProcessorType { get; }
```
### ProcessorSerialNumber
Gets the serial number of the device.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/IDeviceInformation.cs#L31)
```csharp title="Declaration"
string ProcessorSerialNumber { get; }
```
### UniqueID
Gets the unique ID of the Meadow device.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/IDeviceInformation.cs#L36)
```csharp title="Declaration"
string UniqueID { get; }
```
### CoprocessorType
Gets the coprocessor type.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/IDeviceInformation.cs#L41)
```csharp title="Declaration"
string CoprocessorType { get; }
```
### CoprocessorOSVersion
Gets the version of the firmware flashed to the coprocessor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/IDeviceInformation.cs#L46)
```csharp title="Declaration"
string? CoprocessorOSVersion { get; }
```
### OSVersion
Gets the version of the firmware flashed to the microcontroller.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/IDeviceInformation.cs#L51)
```csharp title="Declaration"
string OSVersion { get; }
```
