---
uid: Meadow.Foundation.Sensors.Distance.Hcsr04
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Distance.Hcsr04
---

| Hcsr04 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/InProgress-yellow" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: in-progress" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Hcsr04) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Hcsr04/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Distance.Hcsr04/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Distance.Hcsr04.svg?label=Meadow.Foundation.Sensors.Distance.Hcsr04" alt="NuGet Gallery for Meadow.Foundation.Sensors.Distance.Hcsr04" /></a> |

The **HC-SR04** ultrasonic sensor uses sonar to determine distance to an object (like bats). It offers excellent non-contact range detection with high accuracy and stable readings in an easy-to-use package.

### Code Example

```csharp
Hcsr04 hCSR04;

public override Task Initialize()
{
    Resolver.Log.Info($"Hello HC-SR04 sample");

    hCSR04 = new Hcsr04(
        triggerPin: Device.Pins.D05,
        echoPin: Device.Pins.D06);
    hCSR04.DistanceUpdated += HCSR04_DistanceUpdated;

    return Task.CompletedTask;
}

public override Task Run()
{
    while (true)
    {
        // Sends a trigger signal
        hCSR04.MeasureDistance();
        Thread.Sleep(2000);
    }
}

private void HCSR04_DistanceUpdated(object sender, IChangeResult<Meadow.Units.Length> e)
{
    Resolver.Log.Info($"Distance (cm): {e.New.Centimeters}");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Hcsr04/Samples/Hcsr04_Sample)

### Wiring Example

<img src="/API_Assets/Meadow.Foundation.Sensors.Distance.HCSR04/HCSR04_Fritzing.svg" />

# Class Hcsr04
HCSR04 Distance Sensor - driver not complete

###### **Assembly**: Hcsr04.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Hcsr04/Driver/Hcsr04.cs#L13)
```csharp title="Declaration"
public class Hcsr04 : SamplingSensorBase<Length>, IObservable<IChangeResult<Length>>, IRangeFinder, ISamplingSensor<Length>, ISensor<Length>, ISensor, ISamplingSensor, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../SamplingSensorBase`UNIT`)

**Derived:**  
[Meadow.Foundation.ICs.IOExpanders.SerialWombatBase.Hcsr04](../SerialWombatBase.Hcsr04)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.Length>>`, `Meadow.Peripherals.Sensors.Distance.IRangeFinder`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Length>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Length>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `System.IDisposable`

## Properties
### Distance
Returns current distance
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Hcsr04/Driver/Hcsr04.cs#L18)
```csharp title="Declaration"
public Length? Distance { get; protected set; }
```
### MinimumDistance
Minimum valid distance in cm
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Hcsr04/Driver/Hcsr04.cs#L23)
```csharp title="Declaration"
public double MinimumDistance { get; }
```
### MaximumDistance
Maximum valid distance in cm
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Hcsr04/Driver/Hcsr04.cs#L28)
```csharp title="Declaration"
public double MaximumDistance { get; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Hcsr04/Driver/Hcsr04.cs#L43)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Fields
### triggerPort
Port for trigger Pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Hcsr04/Driver/Hcsr04.cs#L33)
```csharp title="Declaration"
protected IDigitalOutputPort? triggerPort
```
### echoPort
Port for echo Pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Hcsr04/Driver/Hcsr04.cs#L38)
```csharp title="Declaration"
protected IDigitalInterruptPort? echoPort
```
## Methods
### MeasureDistance()
Sends a trigger signal
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Hcsr04/Driver/Hcsr04.cs#L86)
```csharp title="Declaration"
public virtual void MeasureDistance()
```
### ReadSensor()
Reads data from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Hcsr04/Driver/Hcsr04.cs#L135)
```csharp title="Declaration"
protected override Task<Length> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Length>`: The latest sensor reading### StartUpdating(TimeSpan?)
Starts continuously sampling the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Hcsr04/Driver/Hcsr04.cs#L144)
```csharp title="Declaration"
public override void StartUpdating(TimeSpan? updateInterval = null)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Nullable<System.TimeSpan>` | *updateInterval* |

### StopUpdating()
Stops sampling the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Hcsr04/Driver/Hcsr04.cs#L153)
```csharp title="Declaration"
public override void StopUpdating()
```
### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Hcsr04/Driver/Hcsr04.cs#L159)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Hcsr04/Driver/Hcsr04.cs#L169)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |


## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Units.Length>>`
* `Meadow.Peripherals.Sensors.Distance.IRangeFinder`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Length>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Length>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `System.IDisposable`
