---
title: Enum SpiLineType
sidebar_label: SpiLineType
description: Description of a SPI line function
slug: /docs/api/Meadow/Meadow.Hardware/SpiLineType
---
# Enum SpiLineType
Description of a SPI line function

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/SpiLineType.cs#L7)
```csharp title="Declaration"
[Flags]
public enum SpiLineType
```
## Fields
### None
Not a SPI function
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/SpiLineType.cs#L13)
```csharp title="Declaration"
None = 0
```
### COPI
A SPI Controller-out Peripheral-in line
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/SpiLineType.cs#L17)
```csharp title="Declaration"
COPI = 1
```
### CIPO
A SPI Controller-in Peripheral-out line
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/SpiLineType.cs#L21)
```csharp title="Declaration"
CIPO = 2
```
### Clock
A SPI Clock line
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/SpiLineType.cs#L25)
```csharp title="Declaration"
Clock = 4
```
### ChipSelect
A SPI Chip Select line
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/SpiLineType.cs#L29)
```csharp title="Declaration"
ChipSelect = 8
```
### MOSI
Backward compatible alias for COPI
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/SpiLineType.cs#L34)
```csharp title="Declaration"
MOSI = 1
```
### MISO
Backward compatible alias for CIPO
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/SpiLineType.cs#L38)
```csharp title="Declaration"
MISO = 2
```
