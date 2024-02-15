---
uid: Meadow.Foundation.Sensors.Motion.ParallaxPir
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.ParallaxPir
---

| ParallaxPir | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.ParallaxPir) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.ParallaxPir/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Motion.ParallaxPir/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Motion.ParallaxPir.svg?label=Meadow.Foundation.Sensors.Motion.ParallaxPir" alt="NuGet Gallery for Meadow.Foundation.Sensors.Motion.ParallaxPir" /></a> |

The Parallax PIR detects motion via infrared. It emits a high signal over the data pin when motion is detected. The pin returns to a low state when motion stops.

### Code Example

```csharp
private ParallaxPir parallaxPir;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    parallaxPir = new ParallaxPir(Device.CreateDigitalInterruptPort(Device.Pins.D05, InterruptMode.EdgeBoth, ResistorMode.Disabled));

    parallaxPir.OnMotionStart += (sender) => Resolver.Log.Info($"Motion start  {DateTime.Now}");
    parallaxPir.OnMotionEnd += (sender) => Resolver.Log.Info($"Motion end  {DateTime.Now}");

    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.ParallaxPir/Samples/ParallaxPir_Sample)

### Wiring Example

The Parallax PIR sensor requires only three connections, power, ground and motion detection signal:

<img src="/API_Assets/Meadow.Foundation.Sensors.Motion.ParallaxPir/ParallaxPIR_Fritzing.svg" />

# Class ParallaxPir
Represents a Parallax Passive Infrared (PIR) motion sensor.

###### **Assembly**: ParallaxPir.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.ParallaxPir/Driver/ParallaxPir.cs#L9)
```csharp title="Declaration"
public class ParallaxPir : IDisposable
```
**Implements:**  
`System.IDisposable`

## Properties
### IsDisposed
Gets a value indicating whether the object is disposed.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.ParallaxPir/Driver/ParallaxPir.cs#L34)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.ParallaxPir/Driver/ParallaxPir.cs#L100)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Disposes of the object and releases any associated resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.ParallaxPir/Driver/ParallaxPir.cs#L110)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.ParallaxPir/Driver/ParallaxPir.cs#L24)
```csharp title="Declaration"
public event ParallaxPir.MotionChange OnMotionStart
```
##### Event Type
[Meadow.Foundation.Sensors.Motion.ParallaxPir.MotionChange](../ParallaxPir.MotionChange)
### OnMotionEnd
Event raised when the PIR sensor indicates that there is no longer any motion.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.ParallaxPir/Driver/ParallaxPir.cs#L29)
```csharp title="Declaration"
public event ParallaxPir.MotionChange OnMotionEnd
```
##### Event Type
[Meadow.Foundation.Sensors.Motion.ParallaxPir.MotionChange](../ParallaxPir.MotionChange)

## Implements

* `System.IDisposable`
