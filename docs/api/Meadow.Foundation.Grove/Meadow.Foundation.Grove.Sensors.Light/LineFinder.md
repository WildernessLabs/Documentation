---
title: Class LineFinder
sidebar_label: LineFinder
description: Represents a line finder sensor
slug: >-
  /docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Light/LineFinder
---
# Class LineFinder
Represents a line finder sensor

###### **Assembly**: LineFinder.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.Grove.git/blob/develop/Source/LineFinder/Driver/LineFinder.cs#L9)
```csharp title="Declaration"
public class LineFinder
```
## Properties
### Color
Last state of the Line Finder
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.Grove.git/blob/develop/Source/LineFinder/Driver/LineFinder.cs#L31)
```csharp title="Declaration"
public LineFinder.LineColor Color { get; }
```
## Events
### ColorChanged
Event when line color changed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.Grove.git/blob/develop/Source/LineFinder/Driver/LineFinder.cs#L36)
```csharp title="Declaration"
public event EventHandler<LineFinder.LineColor> ColorChanged
```
##### Event Type
`System.EventHandler<Meadow.Foundation.Grove.Sensors.Light.LineFinder.LineColor>`
