---
title: Class SerialTextFile
sidebar_label: SerialTextFile
description: "Provide a mechanism for reading lines of text from a SerialPort."
---
# Class SerialTextFile
Provide a mechanism for reading lines of text from a SerialPort.

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Communications/SerialTextFile.cs#L9)
```csharp title="Declaration"
public class SerialTextFile
```
## Methods
### Open()
Open the serial port and start processing the data from the serial port.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Communications/SerialTextFile.cs#L123)
```csharp title="Declaration"
public void Open()
```
### Close()
Close the serial port and stop processing data.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Communications/SerialTextFile.cs#L140)
```csharp title="Declaration"
public void Close()
```
## Events
### OnLineReceived
A complete line of text has been read, send this to the event subscriber.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Communications/SerialTextFile.cs#L57)
```csharp title="Declaration"
public event SerialTextFile.LineReceived OnLineReceived
```
##### Event Type
[Meadow.Foundation.Communications.SerialTextFile.LineReceived](../Meadow.Foundation.Communications/SerialTextFile.LineReceived)
