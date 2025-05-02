---
title: Class SwitchingRainGauge
sidebar_label: SwitchingRainGauge
description: Represents a simple switching rain gauge
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Weather/SwitchingRainGauge
---
# Class SwitchingRainGauge
Represents a simple switching rain gauge

###### **Assembly**: RainGauge.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Weather.SwitchingRainGauge/Driver/SwitchingRainGauge.cs#L12)
```csharp title="Declaration"
public class SwitchingRainGauge : SamplingSensorBase<Length>, IObservable<IChangeResult<Length>>, IRainGauge, ISamplingSensor<Length>, ISensor<Length>, ISensor, ISamplingSensor, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.Length>>`, `Meadow.Peripherals.Sensors.Weather.IRainGauge`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Length>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Length>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `System.IDisposable`

## Properties
### ClickCount
The number of times the rain tilt sensor has triggered
This count is multiplied by the depth per click to
calculate the rain depth
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Weather.SwitchingRainGauge/Driver/SwitchingRainGauge.cs#L22)
```csharp title="Declaration"
public int ClickCount { get; protected set; }
```
### RainDepth
The total accumulated rain depth
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Weather.SwitchingRainGauge/Driver/SwitchingRainGauge.cs#L27)
```csharp title="Declaration"
public Length RainDepth { get; }
```
### DepthPerClick
The amount of rain recorded per rain-gauge event
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Weather.SwitchingRainGauge/Driver/SwitchingRainGauge.cs#L32)
```csharp title="Declaration"
public Length DepthPerClick { get; set; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Weather.SwitchingRainGauge/Driver/SwitchingRainGauge.cs#L37)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### Reset()
Reset the rain height
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Weather.SwitchingRainGauge/Driver/SwitchingRainGauge.cs#L79)
```csharp title="Declaration"
public void Reset()
```
### StartUpdating(TimeSpan?)
Start the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Weather.SwitchingRainGauge/Driver/SwitchingRainGauge.cs#L104)
```csharp title="Declaration"
public override void StartUpdating(TimeSpan? updateInterval = null)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Nullable<System.TimeSpan>` | *updateInterval* |

### StopUpdating()
Stops sampling the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Weather.SwitchingRainGauge/Driver/SwitchingRainGauge.cs#L118)
```csharp title="Declaration"
public override void StopUpdating()
```
### ReadSensor()
Convenience method to get the current rain depth
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Weather.SwitchingRainGauge/Driver/SwitchingRainGauge.cs#L132)
```csharp title="Declaration"
protected override Task<Length> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Length>`
### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Weather.SwitchingRainGauge/Driver/SwitchingRainGauge.cs#L142)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Weather.SwitchingRainGauge/Driver/SwitchingRainGauge.cs#L152)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |


## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Units.Length>>`
* `Meadow.Peripherals.Sensors.Weather.IRainGauge`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Length>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Length>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `System.IDisposable`
