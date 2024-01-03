---
title: Class PushButton
sidebar_label: PushButton
description: "Represents a momentary push button with two states that uses interrupts to detect state change"
---
# Class PushButton
Represents a momentary push button with two states that uses interrupts to detect state change

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Buttons/PushButton.cs#L10)
```csharp title="Declaration"
public class PushButton : PushButtonBase, IButton, ISensor<bool>, ISensor, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Sensors.Buttons.PushButtonBase](../Meadow.Foundation.Sensors.Buttons/PushButtonBase)

**Implements:**  
`Meadow.Peripherals.Sensors.Buttons.IButton`, `Meadow.Peripherals.Sensors.ISensor<System.Boolean>`, `Meadow.Peripherals.Sensors.ISensor`, `System.IDisposable`

## Properties
### DebounceDuration
This duration controls the debounce filter. It also has the effect
of rate limiting clicks. Decrease this time to allow users to click
more quickly.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Buttons/PushButton.cs#L27)
```csharp title="Declaration"
public TimeSpan DebounceDuration { get; set; }
```
### DigitalIn
Returns digital input port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Buttons/PushButton.cs#L36)
```csharp title="Declaration"
protected IDigitalInterruptPort DigitalIn { get; set; }
```
## Fields
### DefaultDebounceDuration
Default Debounce used on the PushButton Input if an InputPort is auto-created
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Buttons/PushButton.cs#L15)
```csharp title="Declaration"
public static readonly TimeSpan DefaultDebounceDuration
```
### DefaultGlitchDuration
Default Glitch Filter used on the PushButton Input if an InputPort is auto-created
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Buttons/PushButton.cs#L20)
```csharp title="Declaration"
public static readonly TimeSpan DefaultGlitchDuration
```

## Implements

* `Meadow.Peripherals.Sensors.Buttons.IButton`
* `Meadow.Peripherals.Sensors.ISensor<System.Boolean>`
* `Meadow.Peripherals.Sensors.ISensor`
* `System.IDisposable`
