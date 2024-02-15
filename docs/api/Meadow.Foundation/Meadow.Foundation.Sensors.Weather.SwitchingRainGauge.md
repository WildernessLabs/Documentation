---
uid: Meadow.Foundation.Sensors.Weather.SwitchingRainGauge
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Weather.SwitchingRainGauge
---

| SwitchingRainGauge | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Weather.SwitchingRainGauge) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Weather.SwitchingRainGauge/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Weather.SwitchingRainGauge/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Weather.SwitchingRainGauge.svg?label=Meadow.Foundation.Sensors.Weather.SwitchingRainGauge" alt="NuGet Gallery for Meadow.Foundation.Sensors.Weather.SwitchingRainGauge" /></a> |

### Code Example

```csharp
SwitchingRainGauge rainGauge;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    // initialize the rain gauge driver
    rainGauge = new SwitchingRainGauge(Device.Pins.D14);

    //==== Classic event example:
    rainGauge.Updated += (sender, result) => Resolver.Log.Info($"Updated event {result.New.Millimeters}mm");

    //==== IObservable Pattern
    var observer = SwitchingRainGauge.CreateObserver(
        handler: result => Resolver.Log.Info($"Rain depth: {result.New.Millimeters}mm"),
        filter: null
    );
    rainGauge.Subscribe(observer);

    return Task.CompletedTask;
}

public override async Task Run()
{
    // get initial reading, just to test the API - should be 0
    Length rainFall = await rainGauge.Read();
    Resolver.Log.Info($"Initial depth: {rainFall.Millimeters}mm");

    // start the sensor
    rainGauge.StartUpdating();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Weather.SwitchingRainGauge/Samples/SwitchingRainGauge_Sample)


# Class SwitchingRainGauge
Represents a simple switching rain gauge

###### **Assembly**: RainGauge.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Weather.SwitchingRainGauge/Driver/SwitchingRainGauge.cs#L11)
```csharp title="Declaration"
public class SwitchingRainGauge : SamplingSensorBase<Length>, IObservable<IChangeResult<Length>>, ISamplingSensor<Length>, ISensor<Length>, ISensor, ISamplingSensor, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../SamplingSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.Length>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Length>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Length>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `System.IDisposable`

## Properties
### ClickCount
The number of times the rain tilt sensor has triggered
This count is multiplied by the depth per click to
calculate the rain depth
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Weather.SwitchingRainGauge/Driver/SwitchingRainGauge.cs#L21)
```csharp title="Declaration"
public int ClickCount { get; protected set; }
```
### RainDepth
The total accumulated rain depth
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Weather.SwitchingRainGauge/Driver/SwitchingRainGauge.cs#L26)
```csharp title="Declaration"
public Length RainDepth { get; }
```
### DepthPerClick
The amount of rain recorded per rain-gauge event
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Weather.SwitchingRainGauge/Driver/SwitchingRainGauge.cs#L31)
```csharp title="Declaration"
public Length DepthPerClick { get; set; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Weather.SwitchingRainGauge/Driver/SwitchingRainGauge.cs#L36)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### Reset()
Reset the rain height
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Weather.SwitchingRainGauge/Driver/SwitchingRainGauge.cs#L78)
```csharp title="Declaration"
public void Reset()
```
### StartUpdating(TimeSpan?)
Start the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Weather.SwitchingRainGauge/Driver/SwitchingRainGauge.cs#L103)
```csharp title="Declaration"
public override void StartUpdating(TimeSpan? updateInterval = null)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Nullable<System.TimeSpan>` | *updateInterval* |

### StopUpdating()
Stops sampling the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Weather.SwitchingRainGauge/Driver/SwitchingRainGauge.cs#L117)
```csharp title="Declaration"
public override void StopUpdating()
```
### ReadSensor()
Convenience method to get the current rain depth
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Weather.SwitchingRainGauge/Driver/SwitchingRainGauge.cs#L131)
```csharp title="Declaration"
protected override Task<Length> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Length>`
### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Weather.SwitchingRainGauge/Driver/SwitchingRainGauge.cs#L141)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Weather.SwitchingRainGauge/Driver/SwitchingRainGauge.cs#L151)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |


## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Units.Length>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Length>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Length>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `System.IDisposable`
