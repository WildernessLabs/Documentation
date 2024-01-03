---
title: Class IDxxLA
sidebar_label: IDxxLA
description: "RFID reader for ID-2LA, ID-12LA and ID-20LA serial readers."
---
# Class IDxxLA
RFID reader for ID-2LA, ID-12LA and ID-20LA serial readers.

###### **Assembly**: IDxxLA.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Radio.Rfid.IDxxLA/Driver/IDxxLA.cs#L16)
```csharp title="Declaration"
public class IDxxLA : IRfidReader, IObservable<byte[]>, IDisposable
```
**Implements:**  
[Meadow.Foundation.Sensors.Radio.Rfid.IRfidReader](../Meadow.Foundation.Sensors.Radio.Rfid/IRfidReader), `System.IObservable<System.Byte[]>`, `System.IDisposable`

## Properties
### LastRead
A cached copy of the last successfully read RFID tag.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Radio.Rfid.IDxxLA/Driver/IDxxLA.cs#L77)
```csharp title="Declaration"
public byte[]? LastRead { get; }
```
## Fields
### BaudRate
The baud rate (9600)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Radio.Rfid.IDxxLA/Driver/IDxxLA.cs#L21)
```csharp title="Declaration"
public const int BaudRate = 9600
```
### DataBits
Data bits (7)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Radio.Rfid.IDxxLA/Driver/IDxxLA.cs#L26)
```csharp title="Declaration"
public const int DataBits = 7
```
## Methods
### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Radio.Rfid.IDxxLA/Driver/IDxxLA.cs#L80)
```csharp title="Declaration"
public void Dispose()
```
### StartReading()
Start reading for RFID tags.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Radio.Rfid.IDxxLA/Driver/IDxxLA.cs#L95)
```csharp title="Declaration"
public void StartReading()
```
### StopReading()
Stop reading for RFID tags.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Radio.Rfid.IDxxLA/Driver/IDxxLA.cs#L101)
```csharp title="Declaration"
public void StopReading()
```
### Subscribe(IObserver&lt;byte[]&gt;)
Subscribe to RFID tag reads.
Observer will only receive valid reads, with invalid reads triggering an OnError call.
OnComplete will be called if this instance is disposed.
This call is thread-safe.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Radio.Rfid.IDxxLA/Driver/IDxxLA.cs#L114)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Radio.Rfid.IDxxLA/Driver/IDxxLA.cs#L36)
```csharp title="Declaration"
public event RfidReadEventHandler RfidRead
```
##### Event Type
[Meadow.Foundation.Sensors.Radio.Rfid.RfidReadEventHandler](../Meadow.Foundation.Sensors.Radio.Rfid/RfidReadEventHandler)

## Implements

* [Meadow.Foundation.Sensors.Radio.Rfid.IRfidReader](../Meadow.Foundation.Sensors.Radio.Rfid/IRfidReader)
* `System.IObservable<System.Byte[]>`
* `System.IDisposable`
