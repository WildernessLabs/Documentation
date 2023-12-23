---
uid: Meadow.Foundation.Sensors.Camera.ArducamMini

---

| ArducamMini | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/InProgress-yellow" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: in-progress" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.ArducamMini) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.ArducamMini/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Camera.ArducamMini/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Camera.ArducamMini.svg?label=Meadow.Foundation.Sensors.Camera.ArducamMini" alt="NuGet Gallery for Meadow.Foundation.Sensors.Camera.ArducamMini" /></a> |

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

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.ArducamMini/Samples/Sensors.Camera.ArducamMini_Sample)

|
### Code Example

```csharp
ArducamMini camera;

public override async Task Initialize()
{
    Console.WriteLine("Initialize...");

    var spiBus = Device.CreateSpiBus(new Meadow.Units.Frequency(8, Meadow.Units.Frequency.UnitType.Megahertz));
    camera = new ArducamMini(Device, spiBus, Device.Pins.D00, Device.CreateI2cBus());

    await Task.Delay(1000);
}

public override Task Run()
{
    Console.WriteLine("Attempting single capture");
    camera.FlushFifo();
    camera.FlushFifo();
    camera.CapturePhoto();

    Console.WriteLine("Capture started");

    Thread.Sleep(1000);

    if (camera.IsPhotoAvaliable())
    {
        Console.WriteLine("Capture complete");

        var data = camera.GetImageData();

        Console.WriteLine($"Jpeg captured {data.Length}");
    }

    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.ArducamMini/Samples/ArducamMini_Sample)

