---
uid: Meadow.Foundation.FeatherWings.GPSWing
remarks: *content
---

| GPSWing | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings/tree/main/Source/GPSWing) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.FeatherWings.GPSWing/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.FeatherWings.GPSWing.svg?label=Meadow.Foundation.FeatherWings.GPSWing" alt="NuGet Gallery for GPSWing" /></a> |

### Code Example

```csharp
GPSWing gps;

public MeadowApp()
{
    Console.WriteLine("Initializing ...");

    ISerialMessagePort serial = Device.CreateSerialMessagePort(
        Device.SerialPortNames.Com4,
        suffixDelimiter: Encoding.ASCII.GetBytes("\r\n"),
        preserveDelimiter: true,
        baudRate: 9600);

    gps = new GPSWing(serial);

    Subscribe();

    gps.StartUpdating();
}

void Subscribe()
{
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
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings/tree/main/Source/GPSWing/Samples/GPSWing_Sample)

