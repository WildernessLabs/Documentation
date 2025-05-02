---
title: Interface IPwmLed
sidebar_label: IPwmLed
description: >-
  Defines a Light Emitting Diode (LED) controlled by a pulse-width-modulation
  (PWM) signal to limit current.
slug: /docs/api/Meadow/Meadow.Peripherals.Leds/IPwmLed
---
# Interface IPwmLed
Defines a Light Emitting Diode (LED) controlled by a pulse-width-modulation
(PWM) signal to limit current.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Leds/IPwmLed.cs#L10)
```csharp title="Declaration"
public interface IPwmLed : ILed
```
## Properties
### Brightness
Gets the brightness of the LED, controlled by a PWM signal
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Leds/IPwmLed.cs#L15)
```csharp title="Declaration"
float Brightness { get; }
```
## Methods
### StartBlink(float, float)
Start a Blink animation which sets the brightness of the LED alternating between a low and high brightness setting.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Leds/IPwmLed.cs#L22)
```csharp title="Declaration"
Task StartBlink(float highBrightness, float lowBrightness)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Single` | *highBrightness* | The maximum brightness of the animation |
| `System.Single` | *lowBrightness* | The minimum brightness of the animation |

### StartBlink(TimeSpan, TimeSpan, float, float)
Start the Blink animation which sets the brightness of the LED alternating between a low and high brightness setting, using the durations provided.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Leds/IPwmLed.cs#L31)
```csharp title="Declaration"
Task StartBlink(TimeSpan highBrightnessDuration, TimeSpan lowBrightnessDuration, float highBrightness = 1, float lowBrightness = 0)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.TimeSpan` | *highBrightnessDuration* | The duration the LED stays in high brightness |
| `System.TimeSpan` | *lowBrightnessDuration* | The duration the LED stays in low brightness |
| `System.Single` | *highBrightness* | The maximum brightness of the animation |
| `System.Single` | *lowBrightness* | The minimum brightness of the animation |

### StartPulse(float, float)
Start the Pulse animation which gradually alternates the brightness of the LED between a low and high brightness setting.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Leds/IPwmLed.cs#L38)
```csharp title="Declaration"
Task StartPulse(float highBrightness = 1, float lowBrightness = 0.15)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Single` | *highBrightness* | The maximum brightness of the animation |
| `System.Single` | *lowBrightness* | The minimum brightness of the animation |

### StartPulse(TimeSpan, float, float)
Start the Pulse animation which gradually alternates the brightness of the LED between a low and high brightness setting, using the durations provided.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Leds/IPwmLed.cs#L46)
```csharp title="Declaration"
Task StartPulse(TimeSpan pulseDuration, float highBrightness = 1, float lowBrightness = 0.15)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.TimeSpan` | *pulseDuration* | The pulse animation duration |
| `System.Single` | *highBrightness* | The maximum brightness of the animation |
| `System.Single` | *lowBrightness* | The minimum brightness of the animation |

### SetBrightness(float)
Set the LED brightness
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Leds/IPwmLed.cs#L52)
```csharp title="Declaration"
void SetBrightness(float brightness)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Single` | *brightness* | Valid values are from 0 to 1, inclusive |

