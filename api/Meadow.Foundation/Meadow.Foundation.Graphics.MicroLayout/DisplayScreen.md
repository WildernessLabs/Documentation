---
title: Class DisplayScreen
sidebar_label: DisplayScreen
description: "An abstraction of a physical screen"
---
# Class DisplayScreen
An abstraction of a physical screen

###### **Assembly**: MicroLayout.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/DisplayScreen.cs#L10)
```csharp title="Declaration"
public class DisplayScreen
```
## Properties
### Controls
Gets the collection of controls on the display screen.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/DisplayScreen.cs#L20)
```csharp title="Declaration"
public ControlsCollection Controls { get; }
```
### BackgroundColor
Gets or sets the background color of the display screen.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/DisplayScreen.cs#L25)
```csharp title="Declaration"
public Color BackgroundColor { get; set; }
```
### Width
Gets the width of the display screen.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/DisplayScreen.cs#L30)
```csharp title="Declaration"
public int Width { get; }
```
### Height
Gets the height of the display screen.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/DisplayScreen.cs#L35)
```csharp title="Declaration"
public int Height { get; }
```
## Methods
### Invalidate()
Invalidates the entire screen, causing all controls to redraw
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/DisplayScreen.cs#L113)
```csharp title="Declaration"
public void Invalidate()
```
### BeginUpdate()
Begins an update process for the display screen, indicating that no drawing should take place until EndUpdate is called
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/DisplayScreen.cs#L135)
```csharp title="Declaration"
public void BeginUpdate()
```
### EndUpdate()
End an update process for the display screen, indicating that drawing should resume and invalidating the DisplayScreen
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/DisplayScreen.cs#L143)
```csharp title="Declaration"
public void EndUpdate()
```
