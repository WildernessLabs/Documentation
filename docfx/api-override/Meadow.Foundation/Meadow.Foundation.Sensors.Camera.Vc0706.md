---
uid: Meadow.Foundation.Sensors.Camera.Vc0706
remarks: *content
---

| Vc0706        |             |
|---------------|-------------|
| Status        | Not Working |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Camera.VC0706) |
| NuGet package | Not Published ### Code Example

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

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Vc0706/Samples/Sensors.Camera.Vc0706_Sample)

|