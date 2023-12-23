---
uid: Meadow.Foundation.Sensors.Radio.Rfid.IDxxLA

---

| IDxxLA | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Radio.Rfid.IDxxLA) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Radio.Rfid.IDxxLA/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Radio.Rfid.IDxxLA/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Radio.Rfid.IDxxLA.svg?label=Meadow.Foundation.Sensors.Radio.Rfid.IDxxLA" alt="NuGet Gallery for Meadow.Foundation.Sensors.Radio.Rfid.IDxxLA" /></a> |

### Code Example

```csharp
IRfidReader rfidReader;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    rfidReader = new IDxxLA(Device, Device.PlatformOS.GetSerialPortName("COM1"));

    // subscribe to event
    rfidReader.RfidRead += RfidReaderOnTagRead;

    // subscribe to IObservable
    rfidReader.Subscribe(new RfidObserver());

    return Task.CompletedTask;
}

public override Task Run()
{
    rfidReader.StartReading();

    return Task.CompletedTask;
}

private void RfidReaderOnTagRead(object sender, RfidReadResult e)
{
    if (e.Status == RfidValidationStatus.Ok)
    {
        Resolver.Log.Info($"From event - Tag value is {DebugInformation.Hexadecimal(e.RfidTag)}");
        return;
    }

    Resolver.Log.Error($"From event - Error {e.Status}");
}

private class RfidObserver : IObserver<byte[]>
{
    public void OnCompleted()
    {
        Resolver.Log.Info("From IObserver - RfidReader has terminated, no more events will be emitted.");
    }

    public void OnError(Exception error)
    {
        Resolver.Log.Error($"From IObserver - {error}");
    }

    public void OnNext(byte[] value)
    {
        Resolver.Log.Info($"From IObserver - Tag value is {DebugInformation.Hexadecimal(value)}");
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Radio.Rfid.IDxxLA/Samples/IDxxLA_Sample)

