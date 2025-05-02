---
title: Class SerialMessageProcessor
sidebar_label: SerialMessageProcessor
description: >-
  A serial message processor class to accept data, parse and raise notifications
  when complete messages are received
slug: /docs/api/Meadow/Meadow.Hardware/SerialMessageProcessor
---
# Class SerialMessageProcessor
A serial message processor class to accept data, parse and raise notifications when complete messages are received

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/SerialMessageProcessor.cs#L8)
```csharp title="Declaration"
public class SerialMessageProcessor
```
**Derived:**  
[Meadow.Hardware.SerialMessagePort](../Meadow.Hardware/SerialMessagePort)

## Properties
### ReceiveBufferSize
The buffer size, in bytes
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/SerialMessageProcessor.cs#L13)
```csharp title="Declaration"
public virtual int ReceiveBufferSize { get; protected set; }
```
### NullDataValue
Optional null data value 
Value will be removed from data before being added to the buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/SerialMessageProcessor.cs#L19)
```csharp title="Declaration"
public byte? NullDataValue { get; set; }
```
## Fields
### messageMode
The current message mode used by the SerialMessageProcessor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/SerialMessageProcessor.cs#L29)
```csharp title="Declaration"
protected SerialMessageProcessor.SerialMessageMode messageMode
```
### messageDelimiterTokens
The tokens used as delimiters to identify the end of a message.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/SerialMessageProcessor.cs#L34)
```csharp title="Declaration"
protected byte[] messageDelimiterTokens
```
### messageLength
The expected length of each message.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/SerialMessageProcessor.cs#L39)
```csharp title="Declaration"
protected int messageLength
```
### preserveDelimiter
Indicates whether the delimiter should be preserved in the received message.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/SerialMessageProcessor.cs#L44)
```csharp title="Declaration"
protected bool preserveDelimiter
```
### readBuffer
The read buffer used by the SerialMessageProcessor to store received data.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/SerialMessageProcessor.cs#L49)
```csharp title="Declaration"
protected CircularBuffer<byte> readBuffer
```
### msgParseLock
The lock object used for thread synchronization during message parsing.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/SerialMessageProcessor.cs#L54)
```csharp title="Declaration"
protected object msgParseLock
```
## Methods
### Process(byte[])

###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/SerialMessageProcessor.cs#L99)
```csharp title="Declaration"
public void Process(byte[] data)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte[]` | *data* | returns true if end of stream (suffix delimiter found at end, or prefix found without new prefix) |

### RaiseMessageReceivedAndNotify(SerialMessageData)
Raise message received notification to subscribers
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/SerialMessageProcessor.cs#L216)
```csharp title="Declaration"
protected void RaiseMessageReceivedAndNotify(SerialMessageData messageData)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Hardware.SerialMessageData](../Meadow.Hardware/SerialMessageData) | *messageData* |

## Events
### MessageReceived
Raised when a message, as defined in the constructor, arrives.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/SerialMessageProcessor.cs#L24)
```csharp title="Declaration"
public event EventHandler<SerialMessageData> MessageReceived
```
##### Event Type
`System.EventHandler<Meadow.Hardware.SerialMessageData>`
