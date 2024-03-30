---
uid: Meadow.Foundation.Sensors.Camera.PersonSensor
slug: /docs/api/Meadow.Foundation.CompositeDevices/Meadow.Foundation.Sensors.Camera.PersonSensor
---

| PersonSensor | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/wildernesslabs/meadow.foundation.compositedevices/tree/main/Source/Sensors.Camera.UsefulSensors.PersonSensor) |
| Datasheet(s) | [GitHub](https://github.com/wildernesslabs/meadow.foundation.compositedevices/tree/main/Source/Sensors.Camera.UsefulSensors.PersonSensor/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Camera.UsefulSensors.PersonSensor/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Camera.UsefulSensors.PersonSensor.svg?label=Meadow.Foundation.Sensors.Camera.UsefulSensors.PersonSensor" alt="NuGet Gallery for Meadow.Foundation.Sensors.Camera.UsefulSensors.PersonSensor" /></a> |
### Code Example

```csharp
PersonSensor personSensor;


public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    personSensor = new PersonSensor(Device.CreateI2cBus());


    return Task.CompletedTask;
}

public override Task Run()
{
    while (true)
    {
        var sensorData = personSensor.GetSensorData();
        DisplaySensorData(sensorData);

        Thread.Sleep(1500);
    }
}

private void DisplaySensorData(PersonSensorResults sensorData)
{
    if (sensorData.NumberOfFaces == 0)
    {
        Resolver.Log.Info("No faces found");
        return;
    }

    for (int i = 0; i < sensorData.NumberOfFaces; ++i)
    {
        var face = sensorData.FaceData[i];
        Resolver.Log.Info($"Face #{i}: {face.BoxConfidence} confidence, ({face.BoxLeft}, {face.BoxTop}), ({face.BoxRight}, {face.BoxBottom}), facing: {face.IsFacing}");
    }
}

```

[Sample project(s) available on GitHub](https://github.com/wildernesslabs/meadow.foundation.compositedevices/tree/main/Source/Sensors.Camera.UsefulSensors.PersonSensor/Samples/PersonSensor_Sample)

