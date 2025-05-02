---
title: Class PwmLed
sidebar_label: PwmLed
description: Represents an LED whose voltage is limited by the duty-cycle of a PWM signal.
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Leds/PwmLed
---
# Class PwmLed
Represents an LED whose voltage is limited by the duty-cycle of a PWM
signal.

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/PwmLed.cs#L12)
```csharp title="Declaration"
public class PwmLed : IPwmLed, ILed, IDisposable
```
**Implements:**  
`Meadow.Peripherals.Leds.IPwmLed`, `Meadow.Peripherals.Leds.ILed`, `System.IDisposable`

## Properties
### MAX_FORWARD_VOLTAGE
Maximum forward voltage (3.3 Volts)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/PwmLed.cs#L21)
```csharp title="Declaration"
public Voltage MAX_FORWARD_VOLTAGE { get; }
```
### MIN_FORWARD_VOLTAGE
Minimum forward voltage (0 Volts)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/PwmLed.cs#L26)
```csharp title="Declaration"
public Voltage MIN_FORWARD_VOLTAGE { get; }
```
### IsOn
Gets or sets a value indicating whether the LED is on.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/PwmLed.cs#L29)
```csharp title="Declaration"
public bool IsOn { get; set; }
```
### Port
Gets the PwmPort
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/PwmLed.cs#L43)
```csharp title="Declaration"
protected IPwmPort Port { get; set; }
```
### ForwardVoltage
Gets the forward voltage value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/PwmLed.cs#L48)
```csharp title="Declaration"
public Voltage ForwardVoltage { get; protected set; }
```
### Brightness
Gets the brightness of the LED, controlled by a PWM signal
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/PwmLed.cs#L51)
```csharp title="Declaration"
public float Brightness { get; protected set; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/PwmLed.cs#L56)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### StopAnimation()
Stops blink animation.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/PwmLed.Animations.cs#L15)
```csharp title="Declaration"
public Task StopAnimation()
```

##### Returns

`System.Threading.Tasks.Task`
### StartBlink()
Blink animation that turns the LED on (500ms) and off (500ms)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/PwmLed.Animations.cs#L27)
```csharp title="Declaration"
public Task StartBlink()
```

##### Returns

`System.Threading.Tasks.Task`
### StartBlink(TimeSpan, TimeSpan)
Blink animation that turns the LED on and off based on the OnDuration and offDuration values in ms
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/PwmLed.Animations.cs#L33)
```csharp title="Declaration"
public Task StartBlink(TimeSpan onDuration, TimeSpan offDuration)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.TimeSpan` | *onDuration* |
| `System.TimeSpan` | *offDuration* |

### StartBlink(float, float)
Start a Blink animation which sets the brightness of the LED alternating between a low and high brightness setting.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/PwmLed.Animations.cs#L39)
```csharp title="Declaration"
public Task StartBlink(float highBrightness, float lowBrightness)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/PwmLed.Animations.cs#L49)
```csharp title="Declaration"
public Task StartBlink(TimeSpan highBrightnessDuration, TimeSpan lowBrightnessDuration, float highBrightness = 1, float lowBrightness = 0)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/PwmLed.Animations.cs#L80)
```csharp title="Declaration"
public Task StartPulse(float highBrightness = 1, float lowBrightness = 0.15)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/PwmLed.Animations.cs#L90)
```csharp title="Declaration"
public Task StartPulse(TimeSpan pulseDuration, float highBrightness = 1, float lowBrightness = 0.15)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.TimeSpan` | *pulseDuration* | The pulse animation duration |
| `System.Single` | *highBrightness* | The maximum brightness of the animation |
| `System.Single` | *lowBrightness* | The minimum brightness of the animation |

### ValidateBrightness(float, float)
Validates LED brightness to ensure they're within the range 0 (off) - 1 (full brightness)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/PwmLed.Animations.cs#L148)
```csharp title="Declaration"
protected void ValidateBrightness(float highBrightness, float lowBrightness)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Single` | *highBrightness* | The maximum brightness of the animation |
| `System.Single` | *lowBrightness* | The minimum brightness of the animation |

### ValidateForwardVoltages(Voltage)
Validates forward voltages to ensure they're within the range MIN_FORWARD_VOLTAGE to MAX_FORWARD_VOLTAGE
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/PwmLed.cs#L106)
```csharp title="Declaration"
protected void ValidateForwardVoltages(Voltage forwardVoltage)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Units.Voltage` | *forwardVoltage* | The forward voltage for the LED |

### SetBrightness(float)
Set the LED brightness
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/PwmLed.cs#L115)
```csharp title="Declaration"
public void SetBrightness(float brightness)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Single` | *brightness* | Valid values are from 0 to 1, inclusive |

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/PwmLed.cs#L133)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/PwmLed.cs#L143)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |


## Implements

* `Meadow.Peripherals.Leds.IPwmLed`
* `Meadow.Peripherals.Leds.ILed`
* `System.IDisposable`
