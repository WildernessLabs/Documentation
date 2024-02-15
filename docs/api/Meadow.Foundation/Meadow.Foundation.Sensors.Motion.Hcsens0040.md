---
uid: Meadow.Foundation.Sensors.Motion.Hcsens0040
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Hcsens0040
---

| Hcsens0040 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Hcsens0040) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Hcsens0040/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Motion.Hcsens0040/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Motion.Hcsens0040.svg?label=Meadow.Foundation.Sensors.Motion.Hcsens0040" alt="NuGet Gallery for Meadow.Foundation.Sensors.Motion.Hcsens0040" /></a> |

The HCSENS0040 is a microwave motion detector commonly found on the RCWL-0516 board. It detects relative motion using the doppler effect. It uses a single GPIO pin to notify Meadow when motion is detected.

### Code Example

```csharp
private Hcsens0040 sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    sensor = new Hcsens0040(Device.CreateDigitalInterruptPort(Device.Pins.D05, Meadow.Hardware.InterruptMode.EdgeBoth));
    sensor.OnMotionDetected += Sensor_OnMotionDetected;

    return Task.CompletedTask;
}

private void Sensor_OnMotionDetected(object sender)
{
    Resolver.Log.Info($"Motion detected {DateTime.Now}");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Hcsens0040/Samples/Hcsens0040_Sample)

### Wiring Example

To wire a Hcsens0040 to your Meadow board, connect the following:

| Hcsens0040 | Meadow Pin  |
|------------|-------------|
| GND        | GND         |
| TriggerOut | D05         |
| VCC        | 3V3         |






# Class Hcsens0040
Create a new Hscens0040 object

###### **Assembly**: Hcsens0040.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Hcsens0040/Driver/Hcsens0040.cs#L9)
```csharp title="Declaration"
public class Hcsens0040 : IDisposable
```
**Implements:**  
`System.IDisposable`

## Properties
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Hcsens0040/Driver/Hcsens0040.cs#L29)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Hcsens0040/Driver/Hcsens0040.cs#L75)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Hcsens0040/Driver/Hcsens0040.cs#L85)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Hcsens0040/Driver/Hcsens0040.cs#L24)
```csharp title="Declaration"
public event Hcsens0040.MotionChange OnMotionDetected
```
##### Event Type
[Meadow.Foundation.Sensors.Motion.Hcsens0040.MotionChange](../Hcsens0040.MotionChange)

## Implements

* `System.IDisposable`
