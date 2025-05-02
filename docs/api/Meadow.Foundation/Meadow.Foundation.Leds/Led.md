---
title: Class Led
sidebar_label: Led
description: Utility functions to provide blinking for Led
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Leds/Led
---
# Class Led
Utility functions to provide blinking for Led

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/Led.cs#L10)
```csharp title="Declaration"
public class Led : ILed, IDisposable
```
**Implements:**  
`Meadow.Peripherals.Leds.ILed`, `System.IDisposable`

## Properties
### IsOn
Gets or sets a value indicating whether the LED is on.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/Led.cs#L15)
```csharp title="Declaration"
public bool IsOn { get; set; }
```
### Port
Gets the port that is driving the LED
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/Led.cs#L29)
```csharp title="Declaration"
protected IDigitalOutputPort Port { get; set; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/Led.cs#L34)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### StopAnimation()
Stops blink animation.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/Led.Animations.cs#L19)
```csharp title="Declaration"
public Task StopAnimation()
```

##### Returns

`System.Threading.Tasks.Task`
### StartBlink()
Blink animation that turns the LED on (500ms) and off (500ms)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/Led.Animations.cs#L31)
```csharp title="Declaration"
public Task StartBlink()
```

##### Returns

`System.Threading.Tasks.Task`
### StartBlink(TimeSpan, TimeSpan)
Blink animation that turns the LED on and off based on the OnDuration and offDuration values in ms
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/Led.Animations.cs#L37)
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

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/Led.cs#L56)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/Led.cs#L66)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |


## Implements

* `Meadow.Peripherals.Leds.ILed`
* `System.IDisposable`
