---
uid: Meadow.Foundation.Sensors.Camera.ArducamMini
remarks: *content
---

| ArducamMini   |             |
|---------------|-------------|
| Status        | Not Working |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Camera.ArducamMini) |
| NuGet package | Not Published ### Code Example

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