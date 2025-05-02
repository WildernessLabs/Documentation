---
title: Class RgbPwmLed
sidebar_label: RgbPwmLed
description: Utility functions to provide blinking and pulsing for RgbPwmLed
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Leds/RgbPwmLed
---
# Class RgbPwmLed
Utility functions to provide blinking and pulsing for RgbPwmLed

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.cs#L11)
```csharp title="Declaration"
public class RgbPwmLed : IRgbPwmLed, IPwmLed, IRgbLed, ILed, IDisposable
```
**Implements:**  
`Meadow.Peripherals.Leds.IRgbPwmLed`, `Meadow.Peripherals.Leds.IPwmLed`, `Meadow.Peripherals.Leds.IRgbLed`, `Meadow.Peripherals.Leds.ILed`, `System.IDisposable`

## Properties
### MAX_FORWARD_VOLTAGE
Maximum forward voltage (3.3 Volts)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.cs#L23)
```csharp title="Declaration"
public Voltage MAX_FORWARD_VOLTAGE { get; }
```
### MIN_FORWARD_VOLTAGE
Minimum forward voltage (0 Volts)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.cs#L28)
```csharp title="Declaration"
public Voltage MIN_FORWARD_VOLTAGE { get; }
```
### IsOn
Gets or sets a value indicating whether the LED is on.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.cs#L31)
```csharp title="Declaration"
public bool IsOn { get; set; }
```
### Color
The current LED color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.cs#L46)
```csharp title="Declaration"
public Color Color { get; protected set; }
```
### Brightness
Gets the brightness of the LED, controlled by a PWM signal
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.cs#L49)
```csharp title="Declaration"
public float Brightness { get; protected set; }
```
### RedPwm
The red LED port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.cs#L54)
```csharp title="Declaration"
protected IPwmPort RedPwm { get; set; }
```
### BluePwm
The blue LED port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.cs#L59)
```csharp title="Declaration"
protected IPwmPort BluePwm { get; set; }
```
### GreenPwm
The green LED port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.cs#L64)
```csharp title="Declaration"
protected IPwmPort GreenPwm { get; set; }
```
### Common
The common type (common anode or common cathode)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.cs#L69)
```csharp title="Declaration"
public CommonType Common { get; protected set; }
```
### RedForwardVoltage
The red LED forward voltage
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.cs#L74)
```csharp title="Declaration"
public Voltage RedForwardVoltage { get; protected set; }
```
### GreenForwardVoltage
The green LED forward voltage
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.cs#L79)
```csharp title="Declaration"
public Voltage GreenForwardVoltage { get; protected set; }
```
### BlueForwardVoltage
The blue LED forward voltage
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.cs#L84)
```csharp title="Declaration"
public Voltage BlueForwardVoltage { get; protected set; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.cs#L89)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### StopAnimation()
Stops blink animation.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.Animations.cs#L19)
```csharp title="Declaration"
public Task StopAnimation()
```

##### Returns

`System.Threading.Tasks.Task`
### StartBlink()
Blink animation that turns the LED on (500ms) and off (500ms)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.Animations.cs#L31)
```csharp title="Declaration"
public Task StartBlink()
```

##### Returns

`System.Threading.Tasks.Task`
### StartBlink(RgbLedColors)
Start the Blink animation which sets turns the LED on and off on an interval of 1 second (500ms on, 500ms off)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.Animations.cs#L37)
```csharp title="Declaration"
public Task StartBlink(RgbLedColors color)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Peripherals.Leds.RgbLedColors` | *color* | The LED color |

### StartBlink(TimeSpan, TimeSpan)
Blink animation that turns the LED on and off based on the OnDuration and offDuration values in ms
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.Animations.cs#L43)
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

### StartBlink(RgbLedColors, TimeSpan, TimeSpan)
Start the Blink animation which sets turns the LED on and off with the specified durations and color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.Animations.cs#L49)
```csharp title="Declaration"
public Task StartBlink(RgbLedColors color, TimeSpan onDuration, TimeSpan offDuration)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Peripherals.Leds.RgbLedColors` | *color* | The LED color |
| `System.TimeSpan` | *onDuration* | The duration the LED stays on |
| `System.TimeSpan` | *offDuration* | The duration the LED stays off |

### StartBlink(float, float)
Start a Blink animation which sets the brightness of the LED alternating between a low and high brightness setting.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.Animations.cs#L55)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.Animations.cs#L61)
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
Start the Blink animation which sets the brightness of the LED alternating between a low and high brightness setting, using the durations provided.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.Animations.cs#L70)
```csharp title="Declaration"
public Task StartBlink(TimeSpan onDuration, TimeSpan offDuration, float highBrightness = 1, float lowBrightness = 0)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.TimeSpan` | *onDuration* |  |
| `System.TimeSpan` | *offDuration* |  |
| `System.Single` | *highBrightness* | The maximum brightness of the animation |
| `System.Single` | *lowBrightness* | The minimum brightness of the animation |

### StartBlink(Color, TimeSpan, TimeSpan, float, float)
Start the Blink animation which sets the brightness of the LED alternating 
between a low and high brightness setting, using the durations provided
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.Animations.cs#L101)
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
Start the Pulse animation which gradually alternates the brightness of the LED between a low and high brightness setting.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.Animations.cs#L118)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.Animations.cs#L124)
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
and specified color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.Animations.cs#L133)
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
Start the Pulse animation which gradually alternates the brightness of the LED between a low and high brightness setting, using the durations provided.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.Animations.cs#L149)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.Animations.cs#L207)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.cs#L216)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.cs#L239)
```csharp title="Declaration"
protected void ResetPwmPorts()
```
### SetBrightness(float)
Set the led brightness
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.cs#L256)
```csharp title="Declaration"
public void SetBrightness(float brightness)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Single` | *brightness* | Valid values are from 0 to 1, inclusive |

### SetColor(Color, float)
Sets the current color of the LED
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.cs#L267)
```csharp title="Declaration"
public void SetColor(Color color, float brightness = 1)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Color` | *color* | The LED color |
| `System.Single` | *brightness* | Valid values are from 0 to 1, inclusive |

### SetColor(RgbLedColors)
Sets the current color of the LED.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.cs#L283)
```csharp title="Declaration"
public void SetColor(RgbLedColors color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Peripherals.Leds.RgbLedColors` | *color* | The color value |

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.cs#L289)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbPwmLed.cs#L299)
```csharp title="Declaration"
public virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |


## Implements

* `Meadow.Peripherals.Leds.IRgbPwmLed`
* `Meadow.Peripherals.Leds.IPwmLed`
* `Meadow.Peripherals.Leds.IRgbLed`
* `Meadow.Peripherals.Leds.ILed`
* `System.IDisposable`
