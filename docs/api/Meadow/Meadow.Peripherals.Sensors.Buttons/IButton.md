---
title: Interface IButton
sidebar_label: IButton
description: Interface describing button classes.
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors.Buttons/IButton
---
# Interface IButton
Interface describing button classes.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Buttons/IButton.cs#L8)
```csharp title="Declaration"
public interface IButton : ISensor<bool>, ISensor
```
## Properties
### LongClickedThreshold
The minimum duration for a long press.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Buttons/IButton.cs#L33)
```csharp title="Declaration"
TimeSpan LongClickedThreshold { get; set; }
```
### State
Returns the current raw state of the switch. If the switch 
is pressed (connected), returns true, otherwise false.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Buttons/IButton.cs#L39)
```csharp title="Declaration"
bool State { get; }
```
## Events
### PressStarted
Raised when a press starts (the button is pushed down; circuit is closed).
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Buttons/IButton.cs#L13)
```csharp title="Declaration"
event EventHandler PressStarted
```
##### Event Type
`System.EventHandler`
### PressEnded
Raised when a press ends (the button is released; circuit is opened).
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Buttons/IButton.cs#L18)
```csharp title="Declaration"
event EventHandler PressEnded
```
##### Event Type
`System.EventHandler`
### Clicked
Raised when the button circuit is re-opened after it has been closed (at the end of a “press”.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Buttons/IButton.cs#L23)
```csharp title="Declaration"
event EventHandler Clicked
```
##### Event Type
`System.EventHandler`
### LongClicked
Raised when the button circuit is pressed for at least LongClickedThreshold.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Buttons/IButton.cs#L28)
```csharp title="Declaration"
event EventHandler LongClicked
```
##### Event Type
`System.EventHandler`
