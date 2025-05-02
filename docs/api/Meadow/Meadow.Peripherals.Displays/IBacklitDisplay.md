---
title: Interface IBacklitDisplay
sidebar_label: IBacklitDisplay
description: Defines a Display with a controllable backlight
slug: /docs/api/Meadow/Meadow.Peripherals.Displays/IBacklitDisplay
---
# Interface IBacklitDisplay
Defines a Display with a controllable backlight

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/IBacklitDisplay.cs#L6)
```csharp title="Declaration"
public interface IBacklitDisplay : IDisplay
```
## Methods
### SetBacklightIntensity(byte)
Sets the backlight intensity.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/IBacklitDisplay.cs#L13)
```csharp title="Declaration"
void SetBacklightIntensity(byte intensity)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *intensity* | Intensity value |

