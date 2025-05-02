---
title: Enum FlowControlType
sidebar_label: FlowControlType
description: >-
  Describes the type of serial flow control. See 
  https://en.wikipedia.org/wiki/Flow_control_(data)
slug: /docs/api/Meadow/Meadow.Hardware/FlowControlType
---
# Enum FlowControlType
Describes the type of serial flow control. See 
https://en.wikipedia.org/wiki/Flow_control_(data)

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/FlowControlType.cs#L7)
```csharp title="Declaration"
public enum FlowControlType
```
## Fields
### None
No flow control.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/FlowControlType.cs#L12)
```csharp title="Declaration"
None = 0
```
### RequestToSend
Hardware flow control.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/FlowControlType.cs#L16)
```csharp title="Declaration"
RequestToSend = 6
```
### XOnXOff
Software flow control.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/FlowControlType.cs#L20)
```csharp title="Declaration"
XOnXOff = 24
```
