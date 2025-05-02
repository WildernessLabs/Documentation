---
title: Enum SerialDataType
sidebar_label: SerialDataType
description: >-
  Describes the type of serial data received, either characters or an end  of
  file notification.
slug: /docs/api/Meadow/Meadow.Hardware/SerialDataType
---
# Enum SerialDataType
Describes the type of serial data received, either characters or an end 
of file notification.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/SerialDataType.cs#L7)
```csharp title="Declaration"
public enum SerialDataType
```
## Fields
### Chars
Character data.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/SerialDataType.cs#L12)
```csharp title="Declaration"
Chars = 0
```
### Eof
An End of File (EOF) notification.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/SerialDataType.cs#L16)
```csharp title="Declaration"
Eof = 1
```
