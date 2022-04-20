---
uid: Meadow.Foundation.Sensors.Camera.ArducamMini
remarks: *content
---

| ArducamMini | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/InProgress-yellow" style="width: auto; height: -webkit-fill-available;" alt="Status badge: in-progress" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.ArducamMini) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Camera.ArducamMini/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Camera.ArducamMini.svg?label=Meadow.Foundation.Sensors.Camera.ArducamMini" alt="NuGet Gallery for ArducamMini" /></a> |

```csharp
public MeadowApp()
{
    Console.WriteLine("Creating output ports...");

    var camera = new ArducamMini(Device, Device.CreateSpiBus(), Device.Pins.D00, Device.CreateI2cBus());

    Thread.Sleep(1000);

    Console.WriteLine("Attempting single capture");
    camera.FlushFifo();
    camera.ClearFifoFlag();
    camera.StartCapture();

    Console.WriteLine("Capture started");

    Thread.Sleep(1000);

    if(camera.IsCaptureComplete())
    {
        Console.WriteLine("Capture complete");

        var data = camera.GetImageData();

        Console.WriteLine($"Jpeg captured {data.Length}");
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Camera.ArducamMini/Samples/Sensors.Camera.ArducamMini_Sample)

|
### Code Example

```csharp
public MeadowApp()
{
    Console.WriteLine("Creating output ports...");

    var camera = new ArducamMini(Device, Device.CreateSpiBus(), Device.Pins.D00, Device.CreateI2cBus());

    Thread.Sleep(1000);

    Console.WriteLine("Attempting single capture");
    camera.FlushFifo();
    camera.ClearFifoFlag();
    camera.StartCapture();

    Console.WriteLine("Capture started");

    Thread.Sleep(1000);

    if(camera.IsCaptureComplete())
    {
        Console.WriteLine("Capture complete");

        var data = camera.GetImageData();

        Console.WriteLine($"Jpeg captured {data.Length}");
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.ArducamMini/Samples/ArducamMini_Sample)

