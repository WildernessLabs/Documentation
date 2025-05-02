---
title: Class PCanConfiguration
sidebar_label: PCanConfiguration
description: >-
  Represents the configuration settings for a PCAN device, including the bus
  handle and bitrate.
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.CAN/PCanConfiguration
---
# Class PCanConfiguration
Represents the configuration settings for a PCAN device, including the bus handle and bitrate.

###### **Assembly**: Meadow.PCanBasic.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.CAN.PCanBasic/Driver/PCanConfiguration.cs#L9)
```csharp title="Declaration"
public class PCanConfiguration
```
## Properties
### BusHandle
Gets or sets the handle for the CAN bus.
Default value is `Peak.Can.Basic.BackwardCompatibility.PCANBasic.PCAN_USBBUS1`.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.CAN.PCanBasic/Driver/PCanConfiguration.cs#L18)
```csharp title="Declaration"
public ushort BusHandle { get; set; }
```
### Bitrate
Gets or sets the bitrate for the CAN communication.
Default value is `Meadow.Hardware.CanBitrate.Can_250kbps`.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.CAN.PCanBasic/Driver/PCanConfiguration.cs#L27)
```csharp title="Declaration"
public CanBitrate Bitrate { get; set; }
```
