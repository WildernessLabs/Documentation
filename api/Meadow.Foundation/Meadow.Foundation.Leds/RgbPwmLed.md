---
title: Class RgbPwmLed
sidebar_label: RgbPwmLed
description: "Utility functions to provide blinking and pulsing for RgbPwmLed"
---
# Class RgbPwmLed
Utility functions to provide blinking and pulsing for RgbPwmLed

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.cs#L11)
```csharp title="Declaration"
public class RgbPwmLed : IRgbPwmLed, IDisposable
```
**Implements:**  
`Meadow.Peripherals.Leds.IRgbPwmLed`, `System.IDisposable`

## Properties
### MAX_FORWARD_VOLTAGE
Maximum forward voltage (3.3 Volts)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.cs#L26)
```csharp title="Declaration"
public Voltage MAX_FORWARD_VOLTAGE { get; }
```
### MIN_FORWARD_VOLTAGE
Minimum forward voltage (0 Volts)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.cs#L31)
```csharp title="Declaration"
public Voltage MIN_FORWARD_VOLTAGE { get; }
```
### IsOn
Gets or sets a value indicating whether the LED is on.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.cs#L34)
```csharp title="Declaration"
public bool IsOn { get; set; }
```
### Color
The current LED color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.cs#L48)
```csharp title="Declaration"
public Color Color { get; protected set; }
```
### Brightness
The brightness value assigned to the LED
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.cs#L51)
```csharp title="Declaration"
public float Brightness { get; protected set; }
```
### RedPwm
The red LED port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.cs#L56)
```csharp title="Declaration"
protected IPwmPort RedPwm { get; set; }
```
### BluePwm
The blue LED port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.cs#L61)
```csharp title="Declaration"
protected IPwmPort BluePwm { get; set; }
```
### GreenPwm
The green LED port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.cs#L66)
```csharp title="Declaration"
protected IPwmPort GreenPwm { get; set; }
```
### Common
The common type (common anode or common cathode)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.cs#L71)
```csharp title="Declaration"
public CommonType Common { get; protected set; }
```
### RedForwardVoltage
The red LED forward voltage
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.cs#L76)
```csharp title="Declaration"
public Voltage RedForwardVoltage { get; protected set; }
```
### GreenForwardVoltage
The green LED forward voltage
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.cs#L81)
```csharp title="Declaration"
public Voltage GreenForwardVoltage { get; protected set; }
```
### BlueForwardVoltage
The blue LED forward voltage
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.cs#L86)
```csharp title="Declaration"
public Voltage BlueForwardVoltage { get; protected set; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.cs#L91)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### StopAnimation()
Stops the current LED animation
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.Animations.cs#L18)
```csharp title="Declaration"
public Task StopAnimation()
```

##### Returns

`System.Threading.Tasks.Task`
### StartBlink(float, float)
Start the Blink animation which sets the brightness of the LED 
alternating between a low and high brightness on an interval of 1 second (500ms on, 500ms off)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.Animations.cs#L30)
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

### StartBlink(Color, float, float)
Start the Blink animation which sets the brightness of the LED alternating
between a low and high brightness on an interval of 1 second (500ms on, 500ms off)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.Animations.cs#L36)
```csharp title="Declaration"
public Task StartBlink(Color color, float highBrightness = 1, float lowBrightness = 0)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Color` | *color* | The LED color |
| `System.Single` | *highBrightness* | The maximum brightness of the animation |
| `System.Single` | *lowBrightness* | The minimum brightness of the animation |

### StartBlink(TimeSpan, TimeSpan, float, float)
Start the Blink animation which sets the brightness of the LED 
alternating between a low and high brightness setting, using the durations provided.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.Animations.cs#L45)
```csharp title="Declaration"
public Task StartBlink(TimeSpan onDuration, TimeSpan offDuration, float highBrightness = 1, float lowBrightness = 0)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.TimeSpan` | *onDuration* | The duration the LED stays on |
| `System.TimeSpan` | *offDuration* | The duration the LED stays off |
| `System.Single` | *highBrightness* | The maximum brightness of the animation |
| `System.Single` | *lowBrightness* | The minimum brightness of the animation |

### StartBlink(Color, TimeSpan, TimeSpan, float, float)
Start the Blink animation which sets the brightness of the LED alternating 
between a low and high brightness setting, using the durations provided
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.Animations.cs#L76)
```csharp title="Declaration"
public Task StartBlink(Color color, TimeSpan onDuration, TimeSpan offDuration, float highBrightness = 1, float lowBrightness = 0)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Color` | *color* | The LED color |
| `System.TimeSpan` | *onDuration* | The duration the LED stays on |
| `System.TimeSpan` | *offDuration* | The duration the LED stays off |
| `System.Single` | *highBrightness* | The maximum brightness of the animation |
| `System.Single` | *lowBrightness* | The minimum brightness of the animation |

### StartPulse(float, float)
Start the Pulse animation which gradually alternates the brightness of 
the LED between a low and high brightness setting
with a cycle time of 600ms
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.Animations.cs#L93)
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

### StartPulse(Color, float, float)
Start the Pulse animation which gradually alternates the brightness of 
the LED between a low and high brightness setting with a cycle time of 600ms
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.Animations.cs#L99)
```csharp title="Declaration"
public Task StartPulse(Color color, float highBrightness = 1, float lowBrightness = 0.15)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Color` | *color* | The LED color |
| `System.Single` | *highBrightness* | The maximum brightness of the animation |
| `System.Single` | *lowBrightness* | The minimum brightness of the animation |

### StartPulse(Color, TimeSpan, float, float)
Start the Pulse animation which gradually alternates the brightness of the 
LED between a low and high brightness setting, using the duration provided
and especified color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.Animations.cs#L108)
```csharp title="Declaration"
public Task StartPulse(Color color, TimeSpan pulseDuration, float highBrightness = 1, float lowBrightness = 0.15)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Color` | *color* | The LED color |
| `System.TimeSpan` | *pulseDuration* | The pulse animation duration |
| `System.Single` | *highBrightness* | The maximum brightness of the animation |
| `System.Single` | *lowBrightness* | The minimum brightness of the animation |

### StartPulse(TimeSpan, float, float)
Start the Pulse animation which gradually alternates the brightness of the 
LED between a low and high brightness setting, using the duration provided
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.Animations.cs#L124)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.Animations.cs#L182)
```csharp title="Declaration"
protected void ValidateBrightness(float highBrightness, float lowBrightness)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Single` | *highBrightness* | The maximum brightness of the animation |
| `System.Single` | *lowBrightness* | The minimum brightness of the animation |

### ValidateForwardVoltages(Voltage, Voltage, Voltage)
Validates forward voltages to ensure they're within the range MIN_FORWARD_VOLTAGE to MAX_FORWARD_VOLTAGE
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.cs#L218)
```csharp title="Declaration"
protected void ValidateForwardVoltages(Voltage redLedForwardVoltage, Voltage greenLedForwardVoltage, Voltage blueLedForwardVoltage)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Units.Voltage` | *redLedForwardVoltage* | The forward voltage for the red LED |
| `Meadow.Units.Voltage` | *greenLedForwardVoltage* | The forward voltage for the green LED |
| `Meadow.Units.Voltage` | *blueLedForwardVoltage* | The forward voltage for the blue LED |

### ResetPwmPorts()
Resets all PWM ports
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.cs#L241)
```csharp title="Declaration"
protected void ResetPwmPorts()
```
### SetBrightness(float)
Set the led brightness
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.cs#L258)
```csharp title="Declaration"
public void SetBrightness(float brightness)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Single` | *brightness* | Valid values are from 0 to 1, inclusive |

### SetColor(Color, float)
Sets the current color of the LED
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.cs#L269)
```csharp title="Declaration"
public void SetColor(Color color, float brightness = 1)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Color` | *color* | The LED color |
| `System.Single` | *brightness* | Valid values are from 0 to 1, inclusive |

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.cs#L285)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.cs#L295)
```csharp title="Declaration"
public virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |


## Implements

* `Meadow.Peripherals.Leds.IRgbPwmLed`
* `System.IDisposable`
