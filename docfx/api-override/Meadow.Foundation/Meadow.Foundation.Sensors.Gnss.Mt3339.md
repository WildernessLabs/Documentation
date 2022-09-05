---
uid: Meadow.Foundation.Sensors.Gnss.Mt3339
remarks: *content
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
    Console.WriteLine("Initializing ...");

    gps = new Mt3339(Device, Device.SerialPortNames.Com4);

    gps.GgaReceived += (object sender, GnssPositionInfo location) => {
        Console.WriteLine("*********************************************");
        Console.WriteLine(location);
        Console.WriteLine("*********************************************");
    };
    // GLL
    gps.GllReceived += (object sender, GnssPositionInfo location) => {
        Console.WriteLine("*********************************************");
        Console.WriteLine(location);
        Console.WriteLine("*********************************************");
    };
    // GSA
    gps.GsaReceived += (object sender, ActiveSatellites activeSatellites) => {
        Console.WriteLine("*********************************************");
        Console.WriteLine(activeSatellites);
        Console.WriteLine("*********************************************");
    };
    // RMC (recommended minimum)
    gps.RmcReceived += (object sender, GnssPositionInfo positionCourseAndTime) => {
        Console.WriteLine("*********************************************");
        Console.WriteLine(positionCourseAndTime);
        Console.WriteLine("*********************************************");

    };
    // VTG (course made good)
    gps.VtgReceived += (object sender, CourseOverGround courseAndVelocity) => {
        Console.WriteLine("*********************************************");
        Console.WriteLine($"{courseAndVelocity}");
        Console.WriteLine("*********************************************");
    };
    // GSV (satellites in view)
    gps.GsvReceived += (object sender, SatellitesInView satellites) => {
        Console.WriteLine("*********************************************");
        Console.WriteLine($"{satellites}");
        Console.WriteLine("*********************************************");
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

