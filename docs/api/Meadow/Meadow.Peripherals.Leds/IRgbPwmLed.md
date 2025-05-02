---
title: Interface IRgbPwmLed
sidebar_label: IRgbPwmLed
description: Defines a Pulse-Width-Modulation (PWM) controlled RGB LED.
slug: /docs/api/Meadow/Meadow.Peripherals.Leds/IRgbPwmLed
---
# Interface IRgbPwmLed
Defines a Pulse-Width-Modulation (PWM) controlled RGB LED.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Leds/IRgbPwmLed.cs#L9)
```csharp title="Declaration"
public interface IRgbPwmLed : IPwmLed, IRgbLed, ILed
```
## Methods
### SetColor(Color, float)
Sets the current color of the LED
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Leds/IRgbPwmLed.cs#L16)
```csharp title="Declaration"
void SetColor(Color color, float brightness = 1)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Color](../Meadow/Color) | *color* | The LED color |
| `System.Single` | *brightness* | Valid values are from 0 to 1, inclusive |

### StartBlink(Color, float, float)
Start the Blink animation which sets the brightness of the LED alternating
between a low and high brightness on an interval of 1 second (500ms on, 500ms off)
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Leds/IRgbPwmLed.cs#L25)
```csharp title="Declaration"
Task StartBlink(Color color, float highBrightness = 1, float lowBrightness = 0)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Color](../Meadow/Color) | *color* | The LED color |
| `System.Single` | *highBrightness* | The maximum brightness of the animation |
| `System.Single` | *lowBrightness* | The minimum brightness of the animation |

### StartBlink(Color, TimeSpan, TimeSpan, float, float)
Start the Blink animation which sets the brightness of the LED alternating 
between a low and high brightness setting, using the durations provided
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Leds/IRgbPwmLed.cs#L36)
```csharp title="Declaration"
Task StartBlink(Color color, TimeSpan onDuration, TimeSpan offDuration, float highBrightness = 1, float lowBrightness = 0)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Color](../Meadow/Color) | *color* | The LED color |
| `System.TimeSpan` | *onDuration* | The duration the LED stays on |
| `System.TimeSpan` | *offDuration* | The duration the LED stays off |
| `System.Single` | *highBrightness* | The maximum brightness of the animation |
| `System.Single` | *lowBrightness* | The minimum brightness of the animation |

### StartPulse(Color, float, float)
Start the Pulse animation which gradually alternates the brightness of 
the LED between a low and high brightness setting with a cycle time of 600ms
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Leds/IRgbPwmLed.cs#L45)
```csharp title="Declaration"
Task StartPulse(Color color, float highBrightness = 1, float lowBrightness = 0.15)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Color](../Meadow/Color) | *color* | The LED color |
| `System.Single` | *highBrightness* | The maximum brightness of the animation |
| `System.Single` | *lowBrightness* | The minimum brightness of the animation |

### StartPulse(Color, TimeSpan, float, float)
Start the Pulse animation which gradually alternates the brightness of the 
LED between a low and high brightness setting, using the duration provided
and specified color
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Leds/IRgbPwmLed.cs#L56)
```csharp title="Declaration"
Task StartPulse(Color color, TimeSpan pulseDuration, float highBrightness = 1, float lowBrightness = 0.15)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Color](../Meadow/Color) | *color* | The LED color |
| `System.TimeSpan` | *pulseDuration* | The pulse animation duration |
| `System.Single` | *highBrightness* | The maximum brightness of the animation |
| `System.Single` | *lowBrightness* | The minimum brightness of the animation |

