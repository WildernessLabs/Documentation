---
title: Class SerialEventPoller
sidebar_label: SerialEventPoller
description: >-
  Helper class to fake events for a serial port by using polling behind the
  scenes. Useful until events are fully supported for
  `Meadow.Hardware.ISerialPort`.
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Radio.Rfid.Serial.Helpers/SerialEventPoller
---
# Class SerialEventPoller
Helper class to fake events for a serial port by using polling behind the scenes.
Useful until events are fully supported for `Meadow.Hardware.ISerialPort`.

###### **Assembly**: IDxxLA.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Radio.Rfid.IDxxLA/Driver/Serial.Helpers/SerialEventPoller.cs#L12)
```csharp title="Declaration"
public class SerialEventPoller : IDisposable
```
**Implements:**  
`System.IDisposable`

## Properties
### SerialPort
The currently used `Meadow.Hardware.ISerialPort`.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Radio.Rfid.IDxxLA/Driver/Serial.Helpers/SerialEventPoller.cs#L34)
```csharp title="Declaration"
public ISerialPort SerialPort { get; }
```
## Methods
### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Radio.Rfid.IDxxLA/Driver/Serial.Helpers/SerialEventPoller.cs#L37)
```csharp title="Declaration"
public void Dispose()
```
### Start(int)
Start polling the `Meadow.Hardware.ISerialPort` buffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Radio.Rfid.IDxxLA/Driver/Serial.Helpers/SerialEventPoller.cs#L47)
```csharp title="Declaration"
public void Start(int pollingIntervalMs = 100)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *pollingIntervalMs* | The interval between polling calls. Defaults to 100ms. |

### Stop()
Stop polling the `Meadow.Hardware.ISerialPort` buffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Radio.Rfid.IDxxLA/Driver/Serial.Helpers/SerialEventPoller.cs#L64)
```csharp title="Declaration"
public void Stop()
```
## Events
### DataReceived
Event for if there is data in the serial port buffer to read.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Radio.Rfid.IDxxLA/Driver/Serial.Helpers/SerialEventPoller.cs#L19)
```csharp title="Declaration"
public event DataReceivedEventHandler DataReceived
```
##### Event Type
[Meadow.Foundation.Sensors.Radio.Rfid.Serial.Helpers.DataReceivedEventHandler](../Meadow.Foundation.Sensors.Radio.Rfid.Serial.Helpers/DataReceivedEventHandler)

## Implements

* `System.IDisposable`
