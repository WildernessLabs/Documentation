---
uid: Meadow.Foundation.Sensors.Camera.TinyCodeReader
remarks: *content
---

| TinyCodeReader | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/wildernesslabs/meadow.foundation.compositedevices/tree/main/Source/Sensors.Camera.UsefulSensors.TinyCodeReader) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Camera.UsefulSensors.TinyCodeReader/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Camera.UsefulSensors.TinyCodeReader.svg?label=Meadow.Foundation.Sensors.Camera.UsefulSensors.TinyCodeReader" alt="NuGet Gallery for Meadow.Foundation.Sensors.Camera.UsefulSensors.TinyCodeReader" /></a> |
### Code Example

```csharp
TinyCodeReader tinyCodeReader;


public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    tinyCodeReader = new TinyCodeReader(Device.CreateI2cBus());


    return Task.CompletedTask;
}

public override Task Run()
{
    //one time read 
    var qrCode = tinyCodeReader.ReadCode();

    if (qrCode != null)
    {
        Resolver.Log.Info($"QR Code: {qrCode}");
    }
    else
    {
        Resolver.Log.Info("No QR Code Found");
    }

    //continuous read
    tinyCodeReader.CodeRead += TinyCodeReader_CodeRead;
    tinyCodeReader.StartUpdating(TimeSpan.FromSeconds(1));

    return Task.CompletedTask;
}

private void TinyCodeReader_CodeRead(object sender, string e)
{
    Resolver.Log.Info($"QRCode message: {e} ({DateTime.Now})");
}

```

[Sample project(s) available on GitHub](https://github.com/wildernesslabs/meadow.foundation.compositedevices/tree/main/Source/Sensors.Camera.UsefulSensors.TinyCodeReader/Samples/TinyCodeReader_Sample)

