---
title: Class RgbLed
sidebar_label: RgbLed
description: "Utility functions to provide blinking and pulsing for RgbLed"
---
# Class RgbLed
Utility functions to provide blinking and pulsing for RgbLed

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbLed.cs#L10)
```csharp title="Declaration"
public class RgbLed : IRgbLed, IDisposable
```
**Implements:**  
`Meadow.Peripherals.Leds.IRgbLed`, `System.IDisposable`

## Properties
### Color
The current LED color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbLed.cs#L17)
```csharp title="Declaration"
public RgbLedColors Color { get; protected set; }
```
### RedPort
The red LED port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbLed.cs#L22)
```csharp title="Declaration"
protected IDigitalOutputPort RedPort { get; set; }
```
### GreenPort
The green LED port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbLed.cs#L27)
```csharp title="Declaration"
protected IDigitalOutputPort GreenPort { get; set; }
```
### BluePort
The blue LED port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbLed.cs#L32)
```csharp title="Declaration"
protected IDigitalOutputPort BluePort { get; set; }
```
### Common
The common type (common anode or common cathode)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbLed.cs#L37)
```csharp title="Declaration"
public CommonType Common { get; protected set; }
```
### IsOn
Turns on LED with current color or turns it off
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbLed.cs#L42)
```csharp title="Declaration"
public bool IsOn { get; set; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbLed.cs#L52)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### StopAnimation()
Stops the current LED animation
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbLed.Animations.cs#L19)
```csharp title="Declaration"
public Task StopAnimation()
```

##### Returns

`System.Threading.Tasks.Task`
### StartBlink()
Start the Blink animation which sets turns the LED on and off on an interval of 1 second (500ms on, 500ms off)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbLed.Animations.cs#L31)
```csharp title="Declaration"
public Task StartBlink()
```

##### Returns

`System.Threading.Tasks.Task`
### StartBlink(RgbLedColors)
Start the Blink animation which sets turns the LED on and off on an interval of 1 second (500ms on, 500ms off)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbLed.Animations.cs#L37)
```csharp title="Declaration"
public Task StartBlink(RgbLedColors color)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Peripherals.Leds.RgbLedColors` | *color* | The LED color |

### StartBlink(RgbLedColors, TimeSpan, TimeSpan)
Start the Blink animation which sets turns the LED on and off with the specified durations and color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbLed.Animations.cs#L43)
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

### StartBlink(TimeSpan, TimeSpan)
Start the Blink animation which sets turns the LED on and off with the specified durations and current color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbLed.Animations.cs#L56)
```csharp title="Declaration"
public Task StartBlink(TimeSpan onDuration, TimeSpan offDuration)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.TimeSpan` | *onDuration* | The duration the LED stays on |
| `System.TimeSpan` | *offDuration* | The duration the LED stays off |

### SetColor(RgbLedColors)
Sets the current color of the LED.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbLed.cs#L95)
```csharp title="Declaration"
public void SetColor(RgbLedColors color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Peripherals.Leds.RgbLedColors` | *color* | The color value |

### UpdateLed(bool)
Turns on LED with current color or LED off
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbLed.cs#L106)
```csharp title="Declaration"
protected void UpdateLed(bool isOn)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *isOn* | True for on, False for off |

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbLed.cs#L160)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/RgbLed.cs#L170)
```csharp title="Declaration"
public virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |


## Implements

* `Meadow.Peripherals.Leds.IRgbLed`
* `System.IDisposable`
