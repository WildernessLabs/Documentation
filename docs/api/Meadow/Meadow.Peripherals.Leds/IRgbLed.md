---
title: Interface IRgbLed
sidebar_label: IRgbLed
description: Defines an RGB Light Emitting Diode (LED).
slug: /docs/api/Meadow/Meadow.Peripherals.Leds/IRgbLed
---
# Interface IRgbLed
Defines an RGB Light Emitting Diode (LED).

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Leds/IRgbLed.cs#L9)
```csharp title="Declaration"
public interface IRgbLed : ILed
```
## Methods
### SetColor(RgbLedColors)
Sets the current color of the LED.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Leds/IRgbLed.cs#L15)
```csharp title="Declaration"
void SetColor(RgbLedColors color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Peripherals.Leds.RgbLedColors](../Meadow.Peripherals.Leds/RgbLedColors) | *color* | The color value |

### StartBlink(RgbLedColors)
Start the Blink animation which sets turns the LED on and off on an interval of 1 second (500ms on, 500ms off)
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Leds/IRgbLed.cs#L21)
```csharp title="Declaration"
Task StartBlink(RgbLedColors color)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Peripherals.Leds.RgbLedColors](../Meadow.Peripherals.Leds/RgbLedColors) | *color* | The LED color |

### StartBlink(RgbLedColors, TimeSpan, TimeSpan)
Start the Blink animation which sets turns the LED on and off with the specified durations and color
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Leds/IRgbLed.cs#L29)
```csharp title="Declaration"
Task StartBlink(RgbLedColors color, TimeSpan onDuration, TimeSpan offDuration)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Peripherals.Leds.RgbLedColors](../Meadow.Peripherals.Leds/RgbLedColors) | *color* | The LED color |
| `System.TimeSpan` | *onDuration* | The duration the LED stays on |
| `System.TimeSpan` | *offDuration* | The duration the LED stays off |

