---
uid: Meadow.Foundation.Sensors.Distance.Mb10x0
remarks: *content
---

| Mb10x0 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/InProgress-yellow" style="width: auto; height: -webkit-fill-available;" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Mb10x0) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Distance.Mb10x0/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Distance.Mb10x0.svg?label=Meadow.Foundation.Sensors.Distance.Mb10x0" /></a> |

```csharp
Mb10x0 sensor;

public MeadowApp()
{
    Console.WriteLine("Initialize hardware...");

    sensor = new Mb10x0(Device, Device.SerialPortNames.Com4);

    while (true)
    {
        sensor.ReadSerial();

        Thread.Sleep(500);
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Mb10x0/Samples/Sensors.Distance.Mb10x0_Sample)

|### Code Example

```csharp
Mb10x0 sensor;

public MeadowApp()
{
    Console.WriteLine("Initialize hardware...");

    sensor = new Mb10x0(Device, Device.SerialPortNames.Com4);

    while (true)
    {
        sensor.ReadSerial();

        Thread.Sleep(500);
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Mb10x0/Samples/Mb10x0_Sample)

