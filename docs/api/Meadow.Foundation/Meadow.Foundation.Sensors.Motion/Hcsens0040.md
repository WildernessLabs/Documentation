---
title: Class Hcsens0040
sidebar_label: Hcsens0040
description: Create a new Hscens0040 object
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion/Hcsens0040
---
# Class Hcsens0040
Create a new Hscens0040 object

###### **Assembly**: Hcsens0040.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Hcsens0040/Driver/Hcsens0040.cs#L9)
```csharp title="Declaration"
public class Hcsens0040 : IDisposable
```
**Implements:**  
`System.IDisposable`

## Properties
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Hcsens0040/Driver/Hcsens0040.cs#L29)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Hcsens0040/Driver/Hcsens0040.cs#L75)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Hcsens0040/Driver/Hcsens0040.cs#L85)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |

## Events
### OnMotionDetected
Event raised when motion is detected
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Hcsens0040/Driver/Hcsens0040.cs#L24)
```csharp title="Declaration"
public event Hcsens0040.MotionChange OnMotionDetected
```
##### Event Type
[Meadow.Foundation.Sensors.Motion.Hcsens0040.MotionChange](../Meadow.Foundation.Sensors.Motion/Hcsens0040.MotionChange)

## Implements

* `System.IDisposable`
