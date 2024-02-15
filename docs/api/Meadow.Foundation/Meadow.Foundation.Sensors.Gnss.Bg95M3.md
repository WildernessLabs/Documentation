---
uid: Meadow.Foundation.Sensors.Gnss.Bg95M3
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Gnss.Bg95M3
---

| Bg95M3 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Bg95M3) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Gnss/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Gnss.svg?label=Meadow.Foundation.Sensors.Gnss" alt="NuGet Gallery for Meadow.Foundation.Sensors.Gnss" /></a> |

### Code Example

```csharp
Bg95M3 bg95M3;

void ProcessGnssPosition(object sender, IGnssResult location)
{
    Resolver.Log.Info("*********************************************");
    Resolver.Log.Info(location.ToString());
    Resolver.Log.Info("*********************************************");  
}

public override Task Initialize()
{
    Resolver.Log.Info("Initializing ...");

    var cellAdapter = Device.NetworkAdapters.Primary<ICellNetworkAdapter>();

    IGnssResult[] resultTypes = new IGnssResult[]
    {
        new GnssPositionInfo(),
        new ActiveSatellites(),
        new CourseOverGround(),
        new SatellitesInView(new Satellite[0])
    };

    bg95M3 = new Bg95M3(cellAdapter, TimeSpan.FromMinutes(30), resultTypes);

    bg95M3.GnssDataReceived += ProcessGnssPosition;

    return Task.CompletedTask;
}

public override Task Run()
{
    bg95M3.StartUpdating();

    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Bg95M3/Samples/Bg95M3_Sample)


# Class Bg95M3
Represents a BG95-M3 Cellular/GNSS module

###### **Assembly**: Bg95M3.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Bg95M3/Driver/Bg95M3.cs#L14)
```csharp title="Declaration"
public class Bg95M3 : IGnssSensor
```
**Implements:**  
`Meadow.Peripherals.Sensors.Location.Gnss.IGnssSensor`

## Properties
### SupportedResultTypes
Supported GNSS result types
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Bg95M3/Driver/Bg95M3.cs#L111)
```csharp title="Declaration"
public IGnssResult[] SupportedResultTypes { get; }
```
## Methods
### StartUpdating()
Start updating
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Bg95M3/Driver/Bg95M3.cs#L145)
```csharp title="Declaration"
public void StartUpdating()
```
### StopUpdating()
Stop updating GNSS data
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Bg95M3/Driver/Bg95M3.cs#L170)
```csharp title="Declaration"
public void StopUpdating()
```
## Events
### GnssDataReceived
Raised when new GNSS data is available
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Bg95M3/Driver/Bg95M3.cs#L116)
```csharp title="Declaration"
public event EventHandler<IGnssResult> GnssDataReceived
```
##### Event Type
`System.EventHandler<Meadow.Peripherals.Sensors.Location.Gnss.IGnssResult>`

## Implements

* `Meadow.Peripherals.Sensors.Location.Gnss.IGnssSensor`
