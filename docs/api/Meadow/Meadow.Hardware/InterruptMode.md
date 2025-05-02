---
title: Enum InterruptMode
sidebar_label: InterruptMode
description: Describes if and when an interrupt is triggered in response to signal changes.
slug: /docs/api/Meadow/Meadow.Hardware/InterruptMode
---
# Enum InterruptMode
Describes if and when an interrupt is triggered in response to signal
changes.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/InteruptMode.cs#L7)
```csharp title="Declaration"
public enum InterruptMode
```
## Fields
### None
No interrupt is enabled.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/InteruptMode.cs#L12)
```csharp title="Declaration"
None = 0
```
### EdgeFalling
The interrupt is triggered on the falling edge when changing from `HIGH`
to `LOW`.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/InteruptMode.cs#L17)
```csharp title="Declaration"
EdgeFalling = 1
```
### EdgeRising
The interrupt is triggered on the rising edge when changing from 
`LOW` to `HIGH`.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/InteruptMode.cs#L22)
```csharp title="Declaration"
EdgeRising = 2
```
### EdgeBoth
The interrupt is triggered on any state change.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/InteruptMode.cs#L26)
```csharp title="Declaration"
EdgeBoth = 3
```
