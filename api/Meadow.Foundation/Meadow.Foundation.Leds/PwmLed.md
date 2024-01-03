---
title: Class PwmLed
sidebar_label: PwmLed
description: "Represents an LED whose voltage is limited by the duty-cycle of a PWM
signal."
---
# Class PwmLed
Represents an LED whose voltage is limited by the duty-cycle of a PWM
signal.

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/PwmLed.cs#L12)
```csharp title="Declaration"
public class PwmLed : IPwmLed, IDisposable
```
**Implements:**  
`Meadow.Peripherals.Leds.IPwmLed`, `System.IDisposable`

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
Turns on LED with current color or turns it off
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/PwmLed.cs#L31)
```csharp title="Declaration"
public bool IsOn { get; set; }
```
### Port
Gets the PwmPort
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/PwmLed.cs#L45)
```csharp title="Declaration"
protected IPwmPort Port { get; set; }
```
### ForwardVoltage
Gets the forward voltage value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/PwmLed.cs#L50)
```csharp title="Declaration"
public Voltage ForwardVoltage { get; protected set; }
```
### Brightness
The brightness value assigned to the LED
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/PwmLed.cs#L55)
```csharp title="Declaration"
public float Brightness { get; protected set; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/PwmLed.cs#L60)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### StopAnimation()
Stops any running animations.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/PwmLed.Animations.cs#L17)
```csharp title="Declaration"
public Task StopAnimation()
```

##### Returns

`System.Threading.Tasks.Task`
### StartBlink(float, float)
Start a Blink animation which sets the brightness of the LED alternating between a low and high brightness setting.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/PwmLed.Animations.cs#L33)
```csharp title="Declaration"
public Task StartBlink(float highBrightness = 1, float lowBrightness = 0)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/PwmLed.Animations.cs#L84)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/PwmLed.Animations.cs#L99)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/PwmLed.Animations.cs#L157)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/PwmLed.cs#L110)
```csharp title="Declaration"
protected void ValidateForwardVoltages(Voltage forwardVoltage)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Units.Voltage` | *forwardVoltage* | The forward voltage for the LED |

### SetBrightness(float)
Sets the LED to a specific brightness.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/PwmLed.cs#L122)
```csharp title="Declaration"
public void SetBrightness(float brightness)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Single` | *brightness* | Valid values are from 0 to 1, inclusive |

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/PwmLed.cs#L140)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/PwmLed.cs#L150)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |


## Implements

* `Meadow.Peripherals.Leds.IPwmLed`
* `System.IDisposable`
