---
uid: Meadow.Foundation.Sensors.Distance.A02yyuw
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Distance.A02yyuw
---

| A02yyuw | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.A02yyuw) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.A02yyuw/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Distance.A02yyuw/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Distance.A02yyuw.svg?label=Meadow.Foundation.Sensors.Distance.A02yyuw" alt="NuGet Gallery for Meadow.Foundation.Sensors.Distance.A02yyuw" /></a> |

### Code Example

```csharp
A02yyuw a02yyuw;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    a02yyuw = new A02yyuw(Device, Device.PlatformOS.GetSerialPortName("COM1"));

    var consumer = A02yyuw.CreateObserver(
        handler: result =>
        {
            Resolver.Log.Info($"Observer: Distance changed by threshold; new distance: {result.New.Centimeters:N1}cm, old: {result.Old?.Centimeters:N1}cm");
        },
        filter: result =>
        {
            if (result.Old is { } old)
            {
                return Math.Abs((result.New - old).Centimeters) > 0.5;
            }
            return false;
        }
    );
    a02yyuw.Subscribe(consumer);

    a02yyuw.DistanceUpdated += A02yyuw_DistanceUpdated;

    return Task.CompletedTask;
}

public override async Task Run()
{
    Resolver.Log.Info("Run...");

    var distance = await a02yyuw.Read();
    Resolver.Log.Info($"Initial distance is: {distance.Centimeters:N1}cm / {distance.Inches:N1}in");

    a02yyuw.StartUpdating(TimeSpan.FromSeconds(2));
}

private void A02yyuw_DistanceUpdated(object sender, IChangeResult<Length> e)
{
    Resolver.Log.Info($"Distance: {e.New.Centimeters:N1}cm / {e.New.Inches:N1}in");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.A02yyuw/Samples/A02yyuw_Sample)


# Class A02yyuw
Represents the A02YYUW serial distance sensor

###### **Assembly**: A02yyuw.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.A02yyuw/Driver/A02yyuw.cs#L13)
```csharp title="Declaration"
public class A02yyuw : PollingSensorBase<Length>, IObservable<IChangeResult<Length>>, IRangeFinder, ISamplingSensor<Length>, ISensor<Length>, ISensor, ISamplingSensor, ISleepAwarePeripheral, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../PollingSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.Length>>`, `Meadow.Peripherals.Sensors.Distance.IRangeFinder`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Length>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Length>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.ISleepAwarePeripheral`, `System.IDisposable`

## Properties
### Distance
Distance from sensor to object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.A02yyuw/Driver/A02yyuw.cs#L18)
```csharp title="Declaration"
public Length? Distance { get; protected set; }
```
### OutOfRangeValue
Value returned when the sensor cannot determine the distance
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.A02yyuw/Driver/A02yyuw.cs#L23)
```csharp title="Declaration"
public Length OutOfRangeValue { get; }
```
### SensorReadTimeOut
The maximum time to wait for a sensor reading
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.A02yyuw/Driver/A02yyuw.cs#L28)
```csharp title="Declaration"
public TimeSpan SensorReadTimeOut { get; set; }
```
## Methods
### MeasureDistance()
Start a distance measurement
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.A02yyuw/Driver/A02yyuw.cs#L71)
```csharp title="Declaration"
public void MeasureDistance()
```
### Read()
Convenience method to get the current sensor reading
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.A02yyuw/Driver/A02yyuw.cs#L79)
```csharp title="Declaration"
public override Task<Length> Read()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Length>`
### ReadSensor()
Read the distance from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.A02yyuw/Driver/A02yyuw.cs#L88)
```csharp title="Declaration"
protected override Task<Length> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Length>`
### StartUpdating(TimeSpan?)
Start updating distances
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.A02yyuw/Driver/A02yyuw.cs#L97)
```csharp title="Declaration"
public override void StartUpdating(TimeSpan? updateInterval)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Nullable<System.TimeSpan>` | *updateInterval* | The interval used to notify external subscribers |

### StopUpdating()
Stop sampling
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.A02yyuw/Driver/A02yyuw.cs#L108)
```csharp title="Declaration"
public override void StopUpdating()
```
### BeforeSleep(CancellationToken)
Called before the platform goes into Sleep state
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.A02yyuw/Driver/A02yyuw.cs#L184)
```csharp title="Declaration"
public Task BeforeSleep(CancellationToken cancellationToken)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Threading.CancellationToken` | *cancellationToken* |

### AfterWake(CancellationToken)
Called after the platform returns to Wake state
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.A02yyuw/Driver/A02yyuw.cs#L198)
```csharp title="Declaration"
public Task AfterWake(CancellationToken cancellationToken)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Threading.CancellationToken` | *cancellationToken* |

### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.A02yyuw/Driver/A02yyuw.cs#L207)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.A02yyuw/Driver/A02yyuw.cs#L228)
```csharp title="Declaration"
public void Dispose()
```

## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Units.Length>>`
* `Meadow.Peripherals.Sensors.Distance.IRangeFinder`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Length>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Length>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `Meadow.ISleepAwarePeripheral`
* `System.IDisposable`
