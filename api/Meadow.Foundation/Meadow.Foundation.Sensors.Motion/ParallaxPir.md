---
title: Class ParallaxPir
sidebar_label: ParallaxPir
description: "Represents a Parallax Passive Infrared (PIR) motion sensor."
---
# Class ParallaxPir
Represents a Parallax Passive Infrared (PIR) motion sensor.

###### **Assembly**: ParallaxPir.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.ParallaxPir/Driver/ParallaxPir.cs#L9)
```csharp title="Declaration"
public class ParallaxPir : IDisposable
```
**Implements:**  
`System.IDisposable`

## Properties
### IsDisposed
Gets a value indicating whether the object is disposed.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.ParallaxPir/Driver/ParallaxPir.cs#L34)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.ParallaxPir/Driver/ParallaxPir.cs#L100)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Disposes of the object and releases any associated resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.ParallaxPir/Driver/ParallaxPir.cs#L110)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | A value indicating whether the object is being disposed. |

## Events
### OnMotionStart
Event raised when motion is detected.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.ParallaxPir/Driver/ParallaxPir.cs#L24)
```csharp title="Declaration"
public event ParallaxPir.MotionChange OnMotionStart
```
##### Event Type
[Meadow.Foundation.Sensors.Motion.ParallaxPir.MotionChange](../Meadow.Foundation.Sensors.Motion/ParallaxPir.MotionChange)
### OnMotionEnd
Event raised when the PIR sensor indicates that there is no longer any motion.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.ParallaxPir/Driver/ParallaxPir.cs#L29)
```csharp title="Declaration"
public event ParallaxPir.MotionChange OnMotionEnd
```
##### Event Type
[Meadow.Foundation.Sensors.Motion.ParallaxPir.MotionChange](../Meadow.Foundation.Sensors.Motion/ParallaxPir.MotionChange)

## Implements

* `System.IDisposable`
