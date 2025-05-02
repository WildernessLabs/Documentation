---
title: Class RotaryEncoderWithButton
sidebar_label: RotaryEncoderWithButton
description: >-
  Digital rotary encoder that uses two-bit Gray Code to encode rotation and has
  an integrated push button
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Rotary/RotaryEncoderWithButton
---
# Class RotaryEncoderWithButton
Digital rotary encoder that uses two-bit Gray Code to encode rotation and has an integrated push button

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Rotary/RotaryEncoderWithButton.cs#L12)
```csharp title="Declaration"
public class RotaryEncoderWithButton : RotaryEncoder, IDisposable, IRotaryEncoderWithButton, IRotaryEncoder, IButton, ISensor<bool>, ISensor
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Sensors.Rotary.RotaryEncoder](../Meadow.Foundation.Sensors.Rotary/RotaryEncoder)

**Implements:**  
`System.IDisposable`, `Meadow.Peripherals.Sensors.Rotary.IRotaryEncoderWithButton`, `Meadow.Peripherals.Sensors.Rotary.IRotaryEncoder`, `Meadow.Peripherals.Sensors.Buttons.IButton`, `Meadow.Peripherals.Sensors.ISensor<System.Boolean>`, `Meadow.Peripherals.Sensors.ISensor`

## Properties
### Button
Returns the PushButton that represents the integrated button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Rotary/RotaryEncoderWithButton.cs#L17)
```csharp title="Declaration"
public PushButton Button { get; }
```
### State
Returns the push button's state
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Rotary/RotaryEncoderWithButton.cs#L22)
```csharp title="Declaration"
public bool State { get; }
```
### LongClickedThreshold
The minimum duration for a long press
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Rotary/RotaryEncoderWithButton.cs#L47)
```csharp title="Declaration"
public TimeSpan LongClickedThreshold { get; set; }
```
## Methods
### ButtonClicked(object, EventArgs)
Method when button is clicked (down then up)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Rotary/RotaryEncoderWithButton.cs#L81)
```csharp title="Declaration"
protected void ButtonClicked(object sender, EventArgs e)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Object` | *sender* | sender object |
| `System.EventArgs` | *e* | event arguments |

### ButtonPressEnded(object, EventArgs)
Method called when button press is started (up state)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Rotary/RotaryEncoderWithButton.cs#L91)
```csharp title="Declaration"
protected void ButtonPressEnded(object sender, EventArgs e)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Object` | *sender* | sender object |
| `System.EventArgs` | *e* | event arguments |

### ButtonPressStarted(object, EventArgs)
Method called when button press is started (down state)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Rotary/RotaryEncoderWithButton.cs#L101)
```csharp title="Declaration"
protected void ButtonPressStarted(object sender, EventArgs e)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Object` | *sender* | sender object |
| `System.EventArgs` | *e* | event arguments |

### Read()
Convenience method to get the current sensor reading
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Rotary/RotaryEncoderWithButton.cs#L109)
```csharp title="Declaration"
public Task<bool> Read()
```

##### Returns

`System.Threading.Tasks.Task<System.Boolean>`
## Events
### Clicked
Raised when the button circuit is re-opened after it has been closed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Rotary/RotaryEncoderWithButton.cs#L27)
```csharp title="Declaration"
public event EventHandler? Clicked
```
##### Event Type
`System.EventHandler`
### PressEnded
Raised when a press ends
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Rotary/RotaryEncoderWithButton.cs#L32)
```csharp title="Declaration"
public event EventHandler? PressEnded
```
##### Event Type
`System.EventHandler`
### PressStarted
Raised when a press starts
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Rotary/RotaryEncoderWithButton.cs#L37)
```csharp title="Declaration"
public event EventHandler? PressStarted
```
##### Event Type
`System.EventHandler`
### LongClicked
Raised when the button circuit is pressed for LongPressDuration
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Rotary/RotaryEncoderWithButton.cs#L42)
```csharp title="Declaration"
public event EventHandler? LongClicked
```
##### Event Type
`System.EventHandler`

## Implements

* `System.IDisposable`
* `Meadow.Peripherals.Sensors.Rotary.IRotaryEncoderWithButton`
* `Meadow.Peripherals.Sensors.Rotary.IRotaryEncoder`
* `Meadow.Peripherals.Sensors.Buttons.IButton`
* `Meadow.Peripherals.Sensors.ISensor<System.Boolean>`
* `Meadow.Peripherals.Sensors.ISensor`
