---
title: Interface IRfidReader
sidebar_label: IRfidReader
description: "RFID reader abstraction"
---
# Interface IRfidReader
RFID reader abstraction

###### **Assembly**: IDxxLA.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Radio.Rfid.IDxxLA/Driver/IRfidReader.cs#L8)
```csharp title="Declaration"
public interface IRfidReader : IObservable<byte[]>, IDisposable
```
## Properties
### LastRead
A cached copy of the last successfully read RFID tag.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Radio.Rfid.IDxxLA/Driver/IRfidReader.cs#L22)
```csharp title="Declaration"
byte[]? LastRead { get; }
```
## Methods
### StartReading()
Start reading for RFID tags.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Radio.Rfid.IDxxLA/Driver/IRfidReader.cs#L27)
```csharp title="Declaration"
void StartReading()
```
### StopReading()
Stop reading for RFID tags.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Radio.Rfid.IDxxLA/Driver/IRfidReader.cs#L32)
```csharp title="Declaration"
void StopReading()
```
## Events
### RfidRead
Event fired when an RFID tag is read.
Check the read status to see if the read was successful.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Radio.Rfid.IDxxLA/Driver/IRfidReader.cs#L14)
```csharp title="Declaration"
event RfidReadEventHandler RfidRead
```
##### Event Type
[Meadow.Foundation.Sensors.Radio.Rfid.RfidReadEventHandler](../Meadow.Foundation.Sensors.Radio.Rfid/RfidReadEventHandler)
