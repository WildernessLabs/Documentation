---
title: Class KeyScanButton
sidebar_label: KeyScanButton
description: "Represents a AS1115 key scan button"
---
# Class KeyScanButton
Represents a AS1115 key scan button

###### **Assembly**: As1115.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Driver/KeyScanButton.cs#L10)
```csharp title="Declaration"
public class KeyScanButton : IButton, ISensor<bool>, ISensor
```
**Implements:**  
`Meadow.Peripherals.Sensors.Buttons.IButton`, `Meadow.Peripherals.Sensors.ISensor<System.Boolean>`, `Meadow.Peripherals.Sensors.ISensor`

## Properties
### LongClickedThreshold
Get or set the long click threshold
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Driver/KeyScanButton.cs#L15)
```csharp title="Declaration"
public TimeSpan LongClickedThreshold { get; set; }
```
### State
Get current button state
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Driver/KeyScanButton.cs#L20)
```csharp title="Declaration"
public bool State { get; }
```
## Fields
### buttonPressStart
Maximum DateTime value when the button was just pushed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Driver/KeyScanButton.cs#L45)
```csharp title="Declaration"
protected DateTime buttonPressStart
```
## Methods
### Update(bool)
Update the button state
true for pressed, false for released
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Driver/KeyScanButton.cs#L52)
```csharp title="Declaration"
public void Update(bool state)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Boolean` | *state* |

### RaiseClicked()
Raised when the button circuit is re-opened after it has been closed (at the end of a �press�).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Driver/KeyScanButton.cs#L89)
```csharp title="Declaration"
protected virtual void RaiseClicked()
```
### RaisePressStarted()
Raised when a press starts (the button is pushed down; circuit is closed).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Driver/KeyScanButton.cs#L97)
```csharp title="Declaration"
protected virtual void RaisePressStarted()
```
### RaisePressEnded()
Raised when a press ends (the button is released; circuit is opened).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Driver/KeyScanButton.cs#L105)
```csharp title="Declaration"
protected virtual void RaisePressEnded()
```
### RaiseLongClicked()
Raised when the button circuit is pressed for at least 500ms.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Driver/KeyScanButton.cs#L113)
```csharp title="Declaration"
protected virtual void RaiseLongClicked()
```
### Read()
Convenience method to get the current sensor reading
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Driver/KeyScanButton.cs#L121)
```csharp title="Declaration"
public Task<bool> Read()
```

##### Returns

`System.Threading.Tasks.Task<System.Boolean>`
## Events
### PressStarted
Raised when a press starts (the button is pushed down)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Driver/KeyScanButton.cs#L25)
```csharp title="Declaration"
public event EventHandler PressStarted
```
##### Event Type
`System.EventHandler`
### PressEnded
Raised when a press ends (the button is released)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Driver/KeyScanButton.cs#L30)
```csharp title="Declaration"
public event EventHandler PressEnded
```
##### Event Type
`System.EventHandler`
### Clicked
Raised when the button circuit is re-opened after it has been closed (at the end of a press)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Driver/KeyScanButton.cs#L35)
```csharp title="Declaration"
public event EventHandler Clicked
```
##### Event Type
`System.EventHandler`
### LongClicked
Raised when the button circuit is pressed for LongPressDuration
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Driver/KeyScanButton.cs#L40)
```csharp title="Declaration"
public event EventHandler LongClicked
```
##### Event Type
`System.EventHandler`

## Implements

* `Meadow.Peripherals.Sensors.Buttons.IButton`
* `Meadow.Peripherals.Sensors.ISensor<System.Boolean>`
* `Meadow.Peripherals.Sensors.ISensor`
