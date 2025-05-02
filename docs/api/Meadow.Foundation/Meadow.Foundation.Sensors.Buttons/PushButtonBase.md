---
title: Class PushButtonBase
sidebar_label: PushButtonBase
description: Contains common push button logic
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Buttons/PushButtonBase
---
# Class PushButtonBase
Contains common push button logic

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Buttons/PushButtonBase.cs#L11)
```csharp title="Declaration"
public abstract class PushButtonBase : IButton, ISensor<bool>, ISensor, IDisposable
```
**Derived:**  
[Meadow.Foundation.Sensors.Buttons.PollingPushButton](../Meadow.Foundation.Sensors.Buttons/PollingPushButton), [Meadow.Foundation.Sensors.Buttons.PushButton](../Meadow.Foundation.Sensors.Buttons/PushButton)

**Implements:**  
`Meadow.Peripherals.Sensors.Buttons.IButton`, `Meadow.Peripherals.Sensors.ISensor<System.Boolean>`, `Meadow.Peripherals.Sensors.ISensor`, `System.IDisposable`

## Properties
### ShouldDisposeInput
Track if we created the input port in the PushButton instance (true)
or was it passed in via the ctor (false)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Buttons/PushButtonBase.cs#L115)
```csharp title="Declaration"
protected bool ShouldDisposeInput { get; set; }
```
### ButtonPressStart
The date/time when the last button press occurred and the button hasn't been released
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Buttons/PushButtonBase.cs#L120)
```csharp title="Declaration"
protected DateTime ButtonPressStart { get; set; }
```
### DigitalIn
The digital input port used by the button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Buttons/PushButtonBase.cs#L125)
```csharp title="Declaration"
protected IDigitalInputPort DigitalIn { get; }
```
### LongClickedThreshold
The minimum duration for a long press. Defaults to
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Buttons/PushButtonBase.cs#L130)
```csharp title="Declaration"
public TimeSpan LongClickedThreshold { get; set; }
```
### State
Returns the sanitized state of the button
If pressed, return true, otherwise false
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Buttons/PushButtonBase.cs#L145)
```csharp title="Declaration"
public bool State { get; }
```
## Fields
### DefaultLongClickThreshold
Default threshold for LongClicked events
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Buttons/PushButtonBase.cs#L21)
```csharp title="Declaration"
public static readonly TimeSpan DefaultLongClickThreshold
```
## Methods
### GetNormalizedState(bool)
Returns the sanitized state of the button
Inverts the state when using a pull-up resistor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Buttons/PushButtonBase.cs#L151)
```csharp title="Declaration"
protected virtual bool GetNormalizedState(bool state)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Boolean` | *state* |

### UpdateEvents(bool)
Raises the proper button events based on current and previous states
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Buttons/PushButtonBase.cs#L164)
```csharp title="Declaration"
protected void UpdateEvents(bool state)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Boolean` | *state* |

### RaiseClicked()
Raised when the button circuit is re-opened after it has been closed (at the end of a �press�).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Buttons/PushButtonBase.cs#L196)
```csharp title="Declaration"
protected virtual void RaiseClicked()
```
### RaisePressStarted()
Raised when a press starts (the button is pushed down; circuit is closed).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Buttons/PushButtonBase.cs#L204)
```csharp title="Declaration"
protected virtual void RaisePressStarted()
```
### RaisePressEnded()
Raised when a press ends (the button is released; circuit is opened).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Buttons/PushButtonBase.cs#L212)
```csharp title="Declaration"
protected virtual void RaisePressEnded()
```
### RaiseLongClicked()
Raised when the button circuit is pressed for at least 500ms.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Buttons/PushButtonBase.cs#L220)
```csharp title="Declaration"
protected virtual void RaiseLongClicked()
```
### Read()
Convenience method to get the current sensor reading
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Buttons/PushButtonBase.cs#L228)
```csharp title="Declaration"
public Task<bool> Read()
```

##### Returns

`System.Threading.Tasks.Task<System.Boolean>`
### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Buttons/PushButtonBase.cs#L231)
```csharp title="Declaration"
public virtual void Dispose()
```
## Events
### PressStarted
Raised when a press starts
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Buttons/PushButtonBase.cs#L26)
```csharp title="Declaration"
public event EventHandler? PressStarted
```
##### Event Type
`System.EventHandler`
### PressEnded
Raised when a press ends
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Buttons/PushButtonBase.cs#L54)
```csharp title="Declaration"
public event EventHandler PressEnded
```
##### Event Type
`System.EventHandler`
### Clicked
Raised when the button is released after being pressed (for shorter than LongClickedThreshold, if set)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Buttons/PushButtonBase.cs#L81)
```csharp title="Declaration"
public event EventHandler Clicked
```
##### Event Type
`System.EventHandler`
### LongClicked
Raised when the button is released after being pressed for longer than LongClickedThreshold
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Buttons/PushButtonBase.cs#L109)
```csharp title="Declaration"
public event EventHandler LongClicked
```
##### Event Type
`System.EventHandler`

## Implements

* `Meadow.Peripherals.Sensors.Buttons.IButton`
* `Meadow.Peripherals.Sensors.ISensor<System.Boolean>`
* `Meadow.Peripherals.Sensors.ISensor`
* `System.IDisposable`
