---
uid: Meadow.Foundation.mikroBUS.Sensors.Gnss.CGNSS5
slug: >-
  /docs/api/Meadow.Foundation.mikroBUS/Meadow.Foundation.mikroBUS.Sensors.Gnss.CGNSS5
---

| CGNSS5 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.MikroBus/tree/main/Source/CGNSS5) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.mikroBUS.Sensors.Gnss.CGNSS5/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.mikroBUS.Sensors.Gnss.CGNSS5.svg?label=Meadow.Foundation.mikroBUS.Sensors.Gnss.CGNSS5" alt="NuGet Gallery for Meadow.Foundation.mikroBUS.Sensors.Gnss.CGNSS5" /></a> |

### Code Example

```csharp
CGNSS5 gps;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing ...");

    //gps = new CGNSS5(Device.PlatformOS.GetSerialPortName("COM1"), Device.Pins.D09, Device.Pins.D11);

    gps = new CGNSS5(Device.CreateI2cBus(), resetPin: Device.Pins.D09, ppsPin: Device.Pins.D11);

    gps.GgaReceived += (object sender, GnssPositionInfo location) =>
    {
        Resolver.Log.Info("*********************************************");
        Resolver.Log.Info($"{location}");
        Resolver.Log.Info("*********************************************");
    };
    // GLL
    gps.GllReceived += (object sender, GnssPositionInfo location) =>
    {
        Resolver.Log.Info("*********************************************");
        Resolver.Log.Info($"{location}");
        Resolver.Log.Info("*********************************************");
    };
    // GSA
    gps.GsaReceived += (object sender, ActiveSatellites activeSatellites) =>
    {
        Resolver.Log.Info("*********************************************");
        Resolver.Log.Info($"{activeSatellites}");
        Resolver.Log.Info("*********************************************");
    };
    // RMC (recommended minimum)
    gps.RmcReceived += (object sender, GnssPositionInfo positionCourseAndTime) =>
    {
        Resolver.Log.Info("*********************************************");
        Resolver.Log.Info($"{positionCourseAndTime}");
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

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.MikroBus/tree/main/Source/CGNSS5/Sample/CGNSS5_Sample)

