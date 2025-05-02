---
title: Interface ISpiPeripheral
sidebar_label: ISpiPeripheral
description: Interface for a device/peripheral that communicates over SPI
slug: /docs/api/Meadow/Meadow.Hardware/ISpiPeripheral
---
# Interface ISpiPeripheral
Interface for a device/peripheral that communicates over SPI

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/ISpiPeripheral.cs#L8)
```csharp title="Declaration"
public interface ISpiPeripheral
```
## Properties
### DefaultSpiBusMode
Default SPI bus mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/ISpiPeripheral.cs#L13)
```csharp title="Declaration"
SpiClockConfiguration.Mode DefaultSpiBusMode { get; }
```
### SpiBusMode
Current SPI bus mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/ISpiPeripheral.cs#L18)
```csharp title="Declaration"
SpiClockConfiguration.Mode SpiBusMode { get; set; }
```
### DefaultSpiBusSpeed
Default SPI bus speed for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/ISpiPeripheral.cs#L23)
```csharp title="Declaration"
Frequency DefaultSpiBusSpeed { get; }
```
### SpiBusSpeed
Current SPI bus speed
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/ISpiPeripheral.cs#L28)
```csharp title="Declaration"
Frequency SpiBusSpeed { get; set; }
```
