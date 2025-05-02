---
title: Interface ITouchScreen
sidebar_label: ITouchScreen
description: Represents a touch screen device
slug: /docs/api/Meadow/Meadow.Hardware/ITouchScreen
---
# Interface ITouchScreen
Represents a touch screen device

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Touchscreen/ITouchScreen.cs#L13)
```csharp title="Declaration"
public interface ITouchScreen
```
## Properties
### IsTouched
Returns &lt;b&gt;true&lt;/b&gt; if the touchscreen is currently being touched, otherwise &lt;b&gt;false&lt;/b&gt;
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Touchscreen/ITouchScreen.cs#L35)
```csharp title="Declaration"
bool IsTouched { get; }
```
### Rotation
Gets the current rotation of the touchscreen
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Touchscreen/ITouchScreen.cs#L39)
```csharp title="Declaration"
RotationType Rotation { get; }
```
## Events
### TouchDown
Event raised when the touchscreen is pressed
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Touchscreen/ITouchScreen.cs#L18)
```csharp title="Declaration"
event TouchEventHandler TouchDown
```
##### Event Type
[Meadow.Hardware.TouchEventHandler](../Meadow.Hardware/TouchEventHandler)
### TouchUp
Event raised when the touchscreen is released
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Touchscreen/ITouchScreen.cs#L22)
```csharp title="Declaration"
event TouchEventHandler TouchUp
```
##### Event Type
[Meadow.Hardware.TouchEventHandler](../Meadow.Hardware/TouchEventHandler)
### TouchClick
Event raised when a cycle of press and release has occurred
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Touchscreen/ITouchScreen.cs#L26)
```csharp title="Declaration"
event TouchEventHandler TouchClick
```
##### Event Type
[Meadow.Hardware.TouchEventHandler](../Meadow.Hardware/TouchEventHandler)
### TouchMoved
Event raised when a cycle of press and release has occurred
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Touchscreen/ITouchScreen.cs#L30)
```csharp title="Declaration"
event TouchEventHandler TouchMoved
```
##### Event Type
[Meadow.Hardware.TouchEventHandler](../Meadow.Hardware/TouchEventHandler)
