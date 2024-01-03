---
title: Class Led
sidebar_label: Led
description: "Utility functions to provide blinking for Led"
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
Turns on LED with current color or turns it off
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/Led.cs#L17)
```csharp title="Declaration"
public bool IsOn { get; set; }
```
### Port
Gets the port that is driving the LED
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/Led.cs#L31)
```csharp title="Declaration"
protected IDigitalOutputPort Port { get; set; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/Led.cs#L36)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### StopAnimation()
Stops the current LED animation
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/Led.Animations.cs#L21)
```csharp title="Declaration"
public Task StopAnimation()
```

##### Returns

`System.Threading.Tasks.Task`
### StartBlink()
Start the Blink animation which sets turns the LED on and off on an interval of 1 second (500ms on, 500ms off)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/Led.Animations.cs#L35)
```csharp title="Declaration"
public Task StartBlink()
```

##### Returns

`System.Threading.Tasks.Task`
### StartBlink(TimeSpan, TimeSpan)
Start the Blink animation which sets turns the LED on and off with the specified durations
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/Led.Animations.cs#L45)
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

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/Led.cs#L58)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/Led.cs#L68)
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
