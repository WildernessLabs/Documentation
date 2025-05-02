---
title: Enum SignalType
sidebar_label: SignalType
description: Describes the type of electrical signal used.
slug: /docs/api/Meadow/Meadow.Hardware/SignalType
---
# Enum SignalType
Describes the type of electrical signal used.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/SignalType.cs#L6)
```csharp title="Declaration"
public enum SignalType
```
## Fields
### Analog
The electrical signal can be any level within a given range of `LOW`
to `HIGH`
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/SignalType.cs#L12)
```csharp title="Declaration"
Analog = 0
```
### Digital
The electrical signal can only be a `LOW` or `HIGH` value.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/SignalType.cs#L16)
```csharp title="Declaration"
Digital = 1
```
