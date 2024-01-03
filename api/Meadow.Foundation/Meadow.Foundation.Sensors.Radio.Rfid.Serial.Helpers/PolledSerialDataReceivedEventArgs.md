---
title: Class PolledSerialDataReceivedEventArgs
sidebar_label: PolledSerialDataReceivedEventArgs
description: "Polled Serial Data Received Event Args class"
---
# Class PolledSerialDataReceivedEventArgs
Polled Serial Data Received Event Args class

###### **Assembly**: IDxxLA.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Radio.Rfid.IDxxLA/Driver/Serial.Helpers/SerialEventPoller.cs#L91)
```csharp title="Declaration"
public class PolledSerialDataReceivedEventArgs : EventArgs
```
**Inheritance:** `System.Object` -> `System.EventArgs`

## Properties
### SerialPort
The serial port with data in it's buffer.
You should check there is still data in the buffer before consuming.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Radio.Rfid.IDxxLA/Driver/Serial.Helpers/SerialEventPoller.cs#L97)
```csharp title="Declaration"
public ISerialPort? SerialPort { get; set; }
```
