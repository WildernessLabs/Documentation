---
uid: Meadow.Foundation.Sensors.Gnss.NeoM8
remarks: *content
---

| NeoM8 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.NeoM8) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.NeoM8/Datasheets) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Gnss.NeoM8/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Gnss.NeoM8.svg?label=Meadow.Foundation.Sensors.Gnss.NeoM8" alt="NuGet Gallery for Meadow.Foundation.Sensors.Gnss.NeoM8" /></a> |
### Code Example

```csharp
NeoM8 gps;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing ...");

    //SPI
    //gps = new NeoM8(Device.CreateSpiBus(), Device.CreateDigitalOutputPort(Device.Pins.D14), null);

    //I2C
    //gps = new NeoM8(Device.CreateI2cBus());

    //Serial
    gps = new NeoM8(Device, Device.PlatformOS.GetSerialPortName("COM1"), Device.Pins.D09, Device.Pins.D11);

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

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.NeoM8/Samples/NeoM8_Sample)

