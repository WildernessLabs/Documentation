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

public override Task Run()
{
    if (!camera.SetCaptureResolution(Vc0706.ImageResolution._160x120))
    {
        Resolver.Log.Info("Set resolution failed");
    }

    _ = TakePicture();

    return Task.CompletedTask;
}

async Task TakePicture()
{
    Resolver.Log.Info($"Image size is {camera.GetCaptureResolution()}");

    camera.CapturePhoto();

    using var jpegStream = await camera.GetPhotoStream();

    var jpeg = new JpegImage(jpegStream);
    Resolver.Log.Info($"Image decoded - width:{jpeg.Width}, height:{jpeg.Height}");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Vc0706/Samples/Vc0706_Sample)


# Class Vc0706
Class that represents a VC0706 serial VGA camera

###### **Assembly**: Vc0706.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Vc0706/Driver/Vc0706.Enums.cs#L3)
```csharp title="Declaration"
public class Vc0706 : ICamera, IDisposable
```
**Implements:**  
`Meadow.Peripherals.Sensors.Cameras.ICamera`, `System.IDisposable`

## Properties
### SerialNumber
The camera serial number
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Vc0706/Driver/Vc0706.cs#L19)
```csharp title="Declaration"
public byte SerialNumber { get; }
```
### BytesAvailable
Number of bytes available in the camera buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Vc0706/Driver/Vc0706.cs#L31)
```csharp title="Declaration"
public byte BytesAvailable { get; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Vc0706/Driver/Vc0706.cs#L36)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### IsMotionDetected()
Check if camera has detected recent motion
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Vc0706/Driver/Vc0706.cs#L80)
```csharp title="Declaration"
public bool IsMotionDetected()
```

##### Returns

`System.Boolean`
### SetMotionStatus(byte, byte, byte)
Set the motion detection mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Vc0706/Driver/Vc0706.cs#L101)
```csharp title="Declaration"
public bool SetMotionStatus(byte x, byte d1, byte d2)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Byte` | *x* |
| `System.Byte` | *d1* |
| `System.Byte` | *d2* |

### GetMotionStatus(byte)
Get the motion detection mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Vc0706/Driver/Vc0706.cs#L113)
```csharp title="Declaration"
public bool GetMotionStatus(byte x)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Byte` | *x* |

### SetMotionDetect(bool)
Enable or disable motion detection
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Vc0706/Driver/Vc0706.cs#L125)
```csharp title="Declaration"
public bool SetMotionDetect(bool enable)
```

##### Returns

`System.Boolean`: true if successful
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *enable* | true to enable |

### GetMotionDetectMode()
Get the motion detection mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Vc0706/Driver/Vc0706.cs#L139)
```csharp title="Declaration"
public bool GetMotionDetectMode()
```

##### Returns

`System.Boolean`: true if enabled, false if not enabled or command failed### GetCaptureResolution()
Get the current image capture resolution
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Vc0706/Driver/Vc0706.cs#L155)
```csharp title="Declaration"
public Vc0706.ImageResolution GetCaptureResolution()
```

##### Returns

[Meadow.Foundation.Sensors.Camera.Vc0706.ImageResolution](../Vc0706.ImageResolution): the image resolution as an ImageResolution enum### SetCaptureResolution(ImageResolution)
Set the image resolution
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Vc0706/Driver/Vc0706.cs#L171)
```csharp title="Declaration"
public bool SetCaptureResolution(Vc0706.ImageResolution resolution)
```

##### Returns

`System.Boolean`: true if successful
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Sensors.Camera.Vc0706.ImageResolution](../Vc0706.ImageResolution) | *resolution* | the new image capture resolution |

### GetDownsize()
Get the downsize value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Vc0706/Driver/Vc0706.cs#L184)
```csharp title="Declaration"
public byte GetDownsize()
```

##### Returns

`System.Byte`
### SetDownsize(byte)
Set downsize
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Vc0706/Driver/Vc0706.cs#L200)
```csharp title="Declaration"
public bool SetDownsize(byte downsize)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Byte` | *downsize* |

### GetVersion()
Get the camera version
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Vc0706/Driver/Vc0706.cs#L211)
```csharp title="Declaration"
public string GetVersion()
```

##### Returns

`System.String`: the version as a string### SetOnScreenDisplay(byte, byte, string)
Enable onscreen display for composite output (may not work)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Vc0706/Driver/Vc0706.cs#L259)
```csharp title="Declaration"
public void SetOnScreenDisplay(byte x, byte y, string message)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *x* | x location of display in pixels |
| `System.Byte` | *y* | y location of display in pixels |
| `System.String` | *message* | text to display |

### SetCompression(byte)
Set compression (0-255)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Vc0706/Driver/Vc0706.cs#L299)
```csharp title="Declaration"
public bool SetCompression(byte compression)
```

##### Returns

`System.Boolean`: true if successful
##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Byte` | *compression* |

### GetCompression()
Get compression (0-255)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Vc0706/Driver/Vc0706.cs#L309)
```csharp title="Declaration"
public byte GetCompression()
```

##### Returns

`System.Byte`: compression value### SetPanTiltZoom(ushort, ushort, ushort, ushort)
Set Pan, tilt and zoom
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Vc0706/Driver/Vc0706.cs#L324)
```csharp title="Declaration"
public bool SetPanTiltZoom(ushort horizontalZoom, ushort verticalZoom, ushort pan, ushort tilt)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.UInt16` | *horizontalZoom* |
| `System.UInt16` | *verticalZoom* |
| `System.UInt16` | *pan* |
| `System.UInt16` | *tilt* |

### GetPanTiltZoom()
Get Pan, Tilt and Zoom values
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Vc0706/Driver/Vc0706.cs#L339)
```csharp title="Declaration"
public (ushort width, ushort height, ushort horizonalZoom, ushort verticalZoom, ushort pan, ushort tilt) GetPanTiltZoom()
```

##### Returns

`System.ValueTuple<System.UInt16,System.UInt16,System.UInt16,System.UInt16,System.UInt16,System.UInt16>`
### CapturePhoto()
Capture a new image
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Vc0706/Driver/Vc0706.cs#L377)
```csharp title="Declaration"
public bool CapturePhoto()
```

##### Returns

`System.Boolean`: true if successful### IsPhotoAvailable()
Check if there is picture data on the camera
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Vc0706/Driver/Vc0706.cs#L387)
```csharp title="Declaration"
public bool IsPhotoAvailable()
```

##### Returns

`System.Boolean`: true is data is available### GetPhotoStream()
Retrieve the image data from the camera
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Vc0706/Driver/Vc0706.cs#L396)
```csharp title="Declaration"
public Task<MemoryStream?> GetPhotoStream()
```

##### Returns

`System.Threading.Tasks.Task<System.IO.MemoryStream>`: The image data as a jpeg in a MemoryStream### GetPhotoData()
Retrieve the image data from the camera
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Vc0706/Driver/Vc0706.cs#L434)
```csharp title="Declaration"
public Task<byte[]> GetPhotoData()
```

##### Returns

`System.Threading.Tasks.Task<System.Byte[]>`: The image data as a jpeg in a byte array### ResumeVideo()
Resume live video over composite
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Vc0706/Driver/Vc0706.cs#L444)
```csharp title="Declaration"
public bool ResumeVideo()
```

##### Returns

`System.Boolean`
### TvOn()
Enable TV output over composite
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Vc0706/Driver/Vc0706.cs#L453)
```csharp title="Declaration"
public bool TvOn()
```

##### Returns

`System.Boolean`
### TvOff()
Disable TV output over composite
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Vc0706/Driver/Vc0706.cs#L463)
```csharp title="Declaration"
public bool TvOff()
```

##### Returns

`System.Boolean`
### GetColorMode()
Get the current camera color mode (Color, Black and White, automatic)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Vc0706/Driver/Vc0706.cs#L473)
```csharp title="Declaration"
public Vc0706.ColorMode GetColorMode()
```

##### Returns

[Meadow.Foundation.Sensors.Camera.Vc0706.ColorMode](../Vc0706.ColorMode)
### SetColorMode(ColorMode)
Set the camera color mode (Color, Black and White, automatic)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Vc0706/Driver/Vc0706.cs#L484)
```csharp title="Declaration"
public void SetColorMode(Vc0706.ColorMode colorControl)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Foundation.Sensors.Camera.Vc0706.ColorMode](../Vc0706.ColorMode) | *colorControl* |

### GetFrameLength()
Get the length of the current frame
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Vc0706/Driver/Vc0706.cs#L499)
```csharp title="Declaration"
public uint GetFrameLength()
```

##### Returns

`System.UInt32`
### ReadPicture(byte)
Read bytes from the camera buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Vc0706/Driver/Vc0706.cs#L536)
```csharp title="Declaration"
public byte[] ReadPicture(byte length)
```

##### Returns

`System.Byte[]`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Byte` | *length* |

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Vc0706/Driver/Vc0706.cs#L628)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Vc0706/Driver/Vc0706.cs#L638)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |


## Implements

* `Meadow.Peripherals.Sensors.Cameras.ICamera`
* `System.IDisposable`
