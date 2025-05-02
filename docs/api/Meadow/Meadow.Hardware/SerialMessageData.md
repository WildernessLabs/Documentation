---
title: Class SerialMessageData
sidebar_label: SerialMessageData
description: >-
  Represents a `SerialMessagePort` message consisting of a `byte[]` of the
  actual message data.
slug: /docs/api/Meadow/Meadow.Hardware/SerialMessageData
---
# Class SerialMessageData
Represents a `SerialMessagePort` message consisting of a `byte[]` of the
actual message data.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/SerialMessageData.cs#L10)
```csharp title="Declaration"
public class SerialMessageData : EventArgs
```
**Inheritance:** `System.Object` -> `System.EventArgs`

## Properties
### Message
A `byte[]` of the actual message data.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/SerialMessageData.cs#L15)
```csharp title="Declaration"
public byte[] Message { get; set; }
```
## Methods
### GetMessageString(Encoding)
Returns a decoded version of the [Meadow.Hardware.SerialMessageData.Message](../Meadow.Hardware/SerialMessageData#message) based on the specified &lt;code class="paramref"&gt;encoding&lt;/code&gt;.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/SerialMessageData.cs#L22)
```csharp title="Declaration"
public string GetMessageString(Encoding encoding)
```

##### Returns

`System.String`: A string that contains the results of decoding the [Meadow.Hardware.SerialMessageData.Message](../Meadow.Hardware/SerialMessageData#message) bytes.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Text.Encoding` | *encoding* | The character encoding used to interpret the message. (Usually `System.Text.Encoding.ASCII`) |

### FromString(string, Encoding)
Returns a [Meadow.Hardware.SerialMessageData](../Meadow.Hardware/SerialMessageData) that represents &lt;code class="paramref"&gt;message&lt;/code&gt; encoded as bytes.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/SerialMessageData.cs#L32)
```csharp title="Declaration"
public static SerialMessageData FromString(string message, Encoding encoding)
```

##### Returns

[Meadow.Hardware.SerialMessageData](../Meadow.Hardware/SerialMessageData)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *message* | The message to be encoded |
| `System.Text.Encoding` | *encoding* | The character encoding used to get the underlying bytes. (Usually `System.Text.Encoding.ASCII`) |

