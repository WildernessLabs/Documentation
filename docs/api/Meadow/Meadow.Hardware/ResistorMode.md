---
title: Enum ResistorMode
sidebar_label: ResistorMode
description: Describes the internal/external IO resistor states.
slug: /docs/api/Meadow/Meadow.Hardware/ResistorMode
---
# Enum ResistorMode
Describes the internal/external IO resistor states.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/ResistorMode.cs#L8)
```csharp title="Declaration"
public enum ResistorMode
```
## Fields
### Disabled
Internal pull-up/pull-down resistor is disabled.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/ResistorMode.cs#L13)
```csharp title="Declaration"
Disabled = 0
```
### InternalPullDown
Internal resistor pulled down to `0V` by default.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/ResistorMode.cs#L17)
```csharp title="Declaration"
InternalPullDown = 1
```
### InternalPullUp
Internal resistor pulled up to `VCC` by default.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/ResistorMode.cs#L21)
```csharp title="Declaration"
InternalPullUp = 2
```
### ExternalPullDown
External pull down resistor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/ResistorMode.cs#L25)
```csharp title="Declaration"
ExternalPullDown = 3
```
### ExternalPullUp
External Pull up resistor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/ResistorMode.cs#L29)
```csharp title="Declaration"
ExternalPullUp = 4
```
