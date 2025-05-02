---
title: Enum Mcp3xxx.InputType
sidebar_label: Mcp3xxx.InputType
description: The Mcp3xxx pin connection type
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders/Mcp3xxx.InputType
---
# Enum Mcp3xxx.InputType
The Mcp3xxx pin connection type

###### **Assembly**: Mcp3xxx.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Driver/Mcp3xxx.Enums.cs#L8)
```csharp title="Declaration"
public enum Mcp3xxx.InputType
```
## Fields
### SingleEnded
The value is measured as the voltage on a single pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Driver/Mcp3xxx.Enums.cs#L13)
```csharp title="Declaration"
SingleEnded = 0
```
### Differential
The value is measured as the difference in voltage between two pins with the first pin positive
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Driver/Mcp3xxx.Enums.cs#L17)
```csharp title="Declaration"
Differential = 1
```
### InvertedDifferential
The value is measured as the difference in voltage between two pins with the second pin positive
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Driver/Mcp3xxx.Enums.cs#L21)
```csharp title="Declaration"
InvertedDifferential = 2
```
