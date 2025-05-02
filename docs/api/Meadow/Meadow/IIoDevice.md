---
title: Interface IIoDevice
sidebar_label: IIoDevice
description: >-
  Interface representing an I/O device that combines functionality for digital
  input/output, SPI, and I2C controllers.
slug: /docs/api/Meadow/Meadow/IIoDevice
---
# Interface IIoDevice
Interface representing an I/O device that combines functionality
for digital input/output, SPI, and I2C controllers.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/IIoDevice.cs#L9)
```csharp title="Declaration"
public interface IIoDevice : IDigitalInputOutputController, IDigitalInputController, ISpiController, IDigitalOutputController, II2cController, IPinController
```
