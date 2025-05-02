---
title: Interface ISpiCommunications
sidebar_label: ISpiCommunications
description: SPI communications abstraction
slug: /docs/api/Meadow/Meadow.Hardware/ISpiCommunications
---
# Interface ISpiCommunications
SPI communications abstraction

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/ISpiCommunications.cs#L8)
```csharp title="Declaration"
public interface ISpiCommunications : IByteCommunications
```
## Properties
### ChipSelect
Chip select port
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/ISpiCommunications.cs#L13)
```csharp title="Declaration"
IDigitalOutputPort? ChipSelect { get; }
```
### Bus
SPI bus
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/ISpiCommunications.cs#L18)
```csharp title="Declaration"
ISpiBus Bus { get; }
```
### BusSpeed
SPI bus speed
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/ISpiCommunications.cs#L23)
```csharp title="Declaration"
Frequency BusSpeed { get; set; }
```
### BusMode
SPI bus mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/ISpiCommunications.cs#L28)
```csharp title="Declaration"
SpiClockConfiguration.Mode BusMode { get; set; }
```
