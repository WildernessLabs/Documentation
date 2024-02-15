---
uid: Meadow.Foundation.Sensors.Radio.Rfid.IDxxLA
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Radio.Rfid.IDxxLA
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


# Class IDxxLA
RFID reader for ID-2LA, ID-12LA and ID-20LA serial readers.

###### **Assembly**: IDxxLA.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Radio.Rfid.IDxxLA/Driver/IDxxLA.cs#L16)
```csharp title="Declaration"
public class IDxxLA : IRfidReader, IObservable<byte[]>, IDisposable
```
**Implements:**  
[Meadow.Foundation.Sensors.Radio.Rfid.IRfidReader](../IRfidReader), `System.IObservable<System.Byte[]>`, `System.IDisposable`

## Properties
### LastRead
A cached copy of the last successfully read RFID tag.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Radio.Rfid.IDxxLA/Driver/IDxxLA.cs#L77)
```csharp title="Declaration"
public byte[]? LastRead { get; }
```
## Fields
### BaudRate
The baud rate (9600)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Radio.Rfid.IDxxLA/Driver/IDxxLA.cs#L21)
```csharp title="Declaration"
public const int BaudRate = 9600
```
### DataBits
Data bits (7)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Radio.Rfid.IDxxLA/Driver/IDxxLA.cs#L26)
```csharp title="Declaration"
public const int DataBits = 7
```
## Methods
### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Radio.Rfid.IDxxLA/Driver/IDxxLA.cs#L80)
```csharp title="Declaration"
public void Dispose()
```
### StartReading()
Start reading for RFID tags.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Radio.Rfid.IDxxLA/Driver/IDxxLA.cs#L95)
```csharp title="Declaration"
public void StartReading()
```
### StopReading()
Stop reading for RFID tags.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Radio.Rfid.IDxxLA/Driver/IDxxLA.cs#L101)
```csharp title="Declaration"
public void StopReading()
```
### Subscribe(IObserver&lt;byte[]&gt;)
Subscribe to RFID tag reads.
Observer will only receive valid reads, with invalid reads triggering an OnError call.
OnComplete will be called if this instance is disposed.
This call is thread-safe.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Radio.Rfid.IDxxLA/Driver/IDxxLA.cs#L114)
```csharp title="Declaration"
public IDisposable Subscribe(IObserver<byte[]> observer)
```

##### Returns

`System.IDisposable`: Disposable unsubscriber
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.IObserver<System.Byte[]>` | *observer* | The observer to subscribe |

## Events
### RfidRead
Event fired when an RFID tag is read.
Check the read status to see if the read was successful.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Radio.Rfid.IDxxLA/Driver/IDxxLA.cs#L36)
```csharp title="Declaration"
public event RfidReadEventHandler RfidRead
```
##### Event Type
[Meadow.Foundation.Sensors.Radio.Rfid.RfidReadEventHandler](../RfidReadEventHandler)

## Implements

* [Meadow.Foundation.Sensors.Radio.Rfid.IRfidReader](../IRfidReader)
* `System.IObservable<System.Byte[]>`
* `System.IDisposable`
