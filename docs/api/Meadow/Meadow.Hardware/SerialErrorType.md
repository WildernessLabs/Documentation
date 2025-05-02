---
title: Enum SerialErrorType
sidebar_label: SerialErrorType
description: Describes the type of error encountered during serial communication.
slug: /docs/api/Meadow/Meadow.Hardware/SerialErrorType
---
# Enum SerialErrorType
Describes the type of error encountered during serial communication.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/SerialErrorType.cs#L6)
```csharp title="Declaration"
public enum SerialErrorType
```
## Fields
### TxFull
Transmit buffer is full
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/SerialErrorType.cs#L11)
```csharp title="Declaration"
TxFull = 0
```
### RxOverrun
Receive buffer overrun
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/SerialErrorType.cs#L15)
```csharp title="Declaration"
RxOverrun = 1
```
### Overrun
Buffer overrun
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/SerialErrorType.cs#L19)
```csharp title="Declaration"
Overrun = 2
```
### RxParity
Parity error on received data
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/SerialErrorType.cs#L23)
```csharp title="Declaration"
RxParity = 3
```
### Frame
Frame error
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/SerialErrorType.cs#L27)
```csharp title="Declaration"
Frame = 4
```
