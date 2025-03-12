---
uid: Meadow.Foundation.Sensors.Camera.Vc0706
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Camera.Vc0706
---

| Vc0706 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Vc0706) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Vc0706/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Camera.Vc0706/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Camera.Vc0706.svg?label=Meadow.Foundation.Sensors.Camera.Vc0706" alt="NuGet Gallery for Meadow.Foundation.Sensors.Camera.Vc0706" /></a> |

```csharp
Vc0706 camera;

//Uses SimpleJpegDecoder package for jpeg decoding
public MeadowApp()
{
    Console.WriteLine("Initialize hardware...");

    camera = new Vc0706(Device, Device.SerialPortNames.Com4, 38400);

    camera.SetImageSize(Vc0706.ImageSize._320x240);
    Console.WriteLine($"Image size is {camera.GetImageSize()}");

    camera.TakePicture();

    uint frameLen = camera.GetFrameLength();
    Console.WriteLine($"Frame length: {frameLen}");

    byte bytesToRead;
    byte[] jpg;

    var decoder = new JpegDecoder();

    using (var stream = new MemoryStream())
    {
        Console.WriteLine($"Decode jpeg - this operation may take serveral seconds");

        while (frameLen > 0)
        {
            bytesToRead = (byte)Math.Min(32, frameLen);

            var buffer = camera.ReadPicture(bytesToRead);

            stream.Write(buffer, 0, bytesToRead);
            frameLen -= bytesToRead;
        }
        jpg = decoder.DecodeJpeg(stream.ToArray());
    }

    Console.WriteLine($"Jpeg data length: {jpg.Length}");

    Console.WriteLine($"Jpeg decoded is {decoder.ImageSize} bytes");
    Console.WriteLine($"Width {decoder.Width}");
    Console.WriteLine($"Height {decoder.Height}");
    Console.WriteLine($"IsColor {decoder.IsColor}");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Vc0706/Samples/Sensors.Camera.Vc0706_Sample)

|
### Code Example

```csharp
Vc0706 camera;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    camera = new Vc0706(Device, Device.PlatformOS.GetSerialPortName("COM4"), 38400);

    return Task.CompletedTask;
}

public async override Task Run()
{
    if (!camera.SetCaptureResolution(Vc0706.ImageResolution._160x120))
    {
        Resolver.Log.Info("Set resolution failed");
    }

    var jpegData = await camera.CapturePhoto();

    if (jpegData.Length > 0)
    {
        var decoder = new JpegDecoder();
        var jpg = decoder.DecodeJpeg(jpegData);
        Console.WriteLine($"Jpeg decoded is {jpg.Length} bytes, W: {decoder.Width}, H: {decoder.Height}");
    }
    else
    {
        Console.WriteLine("Image capture failed");
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Vc0706/Samples/Vc0706_Sample)

