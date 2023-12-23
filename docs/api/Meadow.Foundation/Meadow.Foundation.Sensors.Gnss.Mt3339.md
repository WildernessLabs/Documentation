---
uid: Meadow.Foundation.Sensors.Gnss.Mt3339

---

| Mt3339 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
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

