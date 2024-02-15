---
uid: Meadow.Foundation.Sensors.Gnss.Mt3339
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Gnss.Mt3339
---

| Mt3339 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Datasheets) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Gnss.Mt3339/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Gnss.Mt3339.svg?label=Meadow.Foundation.Sensors.Gnss.Mt3339" alt="NuGet Gallery for Meadow.Foundation.Sensors.Gnss.Mt3339" /></a> |

### Code Example

```csharp
Mt3339 gps;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing ...");

    gps = new Mt3339(Device, Device.PlatformOS.GetSerialPortName("COM4"));

    gps.GgaReceived += (object sender, GnssPositionInfo location) =>
    {
        Resolver.Log.Info("*********************************************");
        Resolver.Log.Info(location.ToString());
        Resolver.Log.Info("*********************************************");
    };
    // GLL
    gps.GllReceived += (object sender, GnssPositionInfo location) =>
    {
        Resolver.Log.Info("*********************************************");
        Resolver.Log.Info(location.ToString());
        Resolver.Log.Info("*********************************************");
    };
    // GSA
    gps.GsaReceived += (object sender, ActiveSatellites activeSatellites) =>
    {
        Resolver.Log.Info("*********************************************");
        Resolver.Log.Info(activeSatellites.ToString());
        Resolver.Log.Info("*********************************************");
    };
    // RMC (recommended minimum)
    gps.RmcReceived += (object sender, GnssPositionInfo positionCourseAndTime) =>
    {
        Resolver.Log.Info("*********************************************");
        Resolver.Log.Info(positionCourseAndTime.ToString());
        Resolver.Log.Info("*********************************************");

    };
    // VTG (course made good)
    gps.VtgReceived += (object sender, CourseOverGround courseAndVelocity) =>
    {
        Resolver.Log.Info("*********************************************");
        Resolver.Log.Info($"{courseAndVelocity}");
        Resolver.Log.Info("*********************************************");
    };
    // GSV (satellites in view)
    gps.GsvReceived += (object sender, SatellitesInView satellites) =>
    {
        Resolver.Log.Info("*********************************************");
        Resolver.Log.Info($"{satellites}");
        Resolver.Log.Info("*********************************************");
    };

    return Task.CompletedTask;
}

public override Task Run()
{
    gps.StartUpdating();

    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Samples/Mt3339_Sample)


# Class Mt3339
Represents MT3339 MediaTek high-performance, single-chip, multi-GNSS solution

###### **Assembly**: Mt3339.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Mt3339.cs#L12)
```csharp title="Declaration"
public class Mt3339 : IGnssSensor
```
**Implements:**  
`Meadow.Peripherals.Sensors.Location.Gnss.IGnssSensor`

## Properties
### SupportedResultTypes
Supported GNSS result types
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Mt3339.cs#L20)
```csharp title="Declaration"
public IGnssResult[] SupportedResultTypes { get; }
```
## Methods
### Initialize()
Initialize the GPS
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Mt3339.cs#L91)
```csharp title="Declaration"
protected void Initialize()
```
### StartUpdating()
Start updating GNSS data
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Mt3339.cs#L101)
```csharp title="Declaration"
public void StartUpdating()
```
### StopUpdating()
Stop updating GNSS data
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Mt3339.cs#L115)
```csharp title="Declaration"
public void StopUpdating()
```
### InitDecoders()
Initialize decoders
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Mt3339.cs#L126)
```csharp title="Declaration"
protected void InitDecoders()
```
## Events
### GnssDataReceived
Raised when GNSS data is received
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Mt3339.cs#L30)
```csharp title="Declaration"
public event EventHandler<IGnssResult> GnssDataReceived
```
##### Event Type
`System.EventHandler<Meadow.Peripherals.Sensors.Location.Gnss.IGnssResult>`
### GgaReceived
Raised when GGA data is received
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Mt3339.cs#L35)
```csharp title="Declaration"
public event EventHandler<GnssPositionInfo> GgaReceived
```
##### Event Type
`System.EventHandler<Meadow.Peripherals.Sensors.Location.Gnss.GnssPositionInfo>`
### GllReceived
Raised when GLL data is received
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Mt3339.cs#L40)
```csharp title="Declaration"
public event EventHandler<GnssPositionInfo> GllReceived
```
##### Event Type
`System.EventHandler<Meadow.Peripherals.Sensors.Location.Gnss.GnssPositionInfo>`
### GsaReceived
Raised when GSA data is received
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Mt3339.cs#L45)
```csharp title="Declaration"
public event EventHandler<ActiveSatellites> GsaReceived
```
##### Event Type
`System.EventHandler<Meadow.Peripherals.Sensors.Location.Gnss.ActiveSatellites>`
### RmcReceived
Raised when RMC data is received
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Mt3339.cs#L50)
```csharp title="Declaration"
public event EventHandler<GnssPositionInfo> RmcReceived
```
##### Event Type
`System.EventHandler<Meadow.Peripherals.Sensors.Location.Gnss.GnssPositionInfo>`
### VtgReceived
Raised when VTG data is received
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Mt3339.cs#L55)
```csharp title="Declaration"
public event EventHandler<CourseOverGround> VtgReceived
```
##### Event Type
`System.EventHandler<Meadow.Peripherals.Sensors.Location.Gnss.CourseOverGround>`
### GsvReceived
Raised when GSV data is received
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Mt3339.cs#L60)
```csharp title="Declaration"
public event EventHandler<SatellitesInView> GsvReceived
```
##### Event Type
`System.EventHandler<Meadow.Peripherals.Sensors.Location.Gnss.SatellitesInView>`

## Implements

* `Meadow.Peripherals.Sensors.Location.Gnss.IGnssSensor`
