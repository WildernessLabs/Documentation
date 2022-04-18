---
uid: Meadow.Foundation.Sensors.Radio.Rfid.IDxxLA
remarks: *content
---

| IDxxLA | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Radio.Rfid.IDxxLA) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Radio.Rfid.IDxxLA/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Radio.Rfid.IDxxLA.svg?label=Meadow.Foundation.Sensors.Radio.Rfid.IDxxLA" /></a> |

### Code Example

```csharp
readonly IRfidReader rfidReader;

public MeadowApp()
{
    Console.WriteLine("Initialize hardware...");

    rfidReader = new IDxxLA(Device, Device.SerialPortNames.Com1);

    // subscribe to event
    rfidReader.RfidRead += RfidReaderOnTagRead;

    // subscribe to IObservable
    rfidReader.Subscribe(new RfidObserver());

    rfidReader.StartReading();

    Console.WriteLine("Ready...");
}

private void RfidReaderOnTagRead(object sender, RfidReadResult e)
{
    if (e.Status == RfidValidationStatus.Ok) {
        Console.WriteLine($"From event - Tag value is {DebugInformation.Hexadecimal(e.RfidTag)}");
        return;
    }

    Console.WriteLine($"From event - Error {e.Status}");
}

private class RfidObserver : IObserver<byte[]>
{
    public void OnCompleted()
    {
        Console.WriteLine("From IObserver - RfidReader has terminated, no more events will be emitted.");
    }
     
    public void OnError(Exception error)
    {
        Console.WriteLine($"From IObserver - {error}");
    }

    public void OnNext(byte[] value)
    {
        Console.WriteLine($"From IObserver - Tag value is {DebugInformation.Hexadecimal(value)}");
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Radio.Rfid.IDxxLA/Samples/IDxxLA_Sample)

