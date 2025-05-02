---
title: Class Output
sidebar_label: Output
description: Provides utility methods for outputting debug information.
slug: /docs/api/Meadow/Meadow.Devices/Output
---
# Class Output
Provides utility methods for outputting debug information.

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Utilities/Output.cs#L9)
```csharp title="Declaration"
public static class Output
```
## Methods
### WriteIf(bool, string)
Writes the specified string to the log if the test condition is true (conditional debug output).
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Utilities/Output.cs#L21)
```csharp title="Declaration"
[Conditional("DEBUG")]
public static void WriteIf(bool test, string value)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *test* | The condition to test. |
| `System.String` | *value* | The value to write to the log. |

### WriteLineIf(bool, string)
Writes the specified string followed by a line terminator to the log if the test condition is true (conditional debug output).
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Utilities/Output.cs#L35)
```csharp title="Declaration"
[Conditional("DEBUG")]
public static void WriteLineIf(bool test, string value)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *test* | The condition to test. |
| `System.String` | *value* | The value to write to the log. |

### Write(string)
Writes the specified string to the log (conditional debug output).
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Utilities/Output.cs#L48)
```csharp title="Declaration"
[Conditional("DEBUG")]
public static void Write(string value)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *value* | The value to write to the log. |

### WriteLine(string)
Writes the specified string followed by a line terminator to the log (conditional debug output).
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Utilities/Output.cs#L58)
```csharp title="Declaration"
[Conditional("DEBUG")]
public static void WriteLine(string value)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *value* | The value to write to the log. |

### BufferIf(bool, byte[])
Output the buffer in hexadecimal if the condition is met.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Utilities/Output.cs#L169)
```csharp title="Declaration"
public static void BufferIf(bool test, byte[] buffer)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *test* | Determine if the method should generate any output. |
| `System.Byte[]` | *buffer* | Byte array of the buffer to be converted to printable format. |

### BufferIf(bool, byte[], int, int)
Output the buffer in hexadecimal if the condition is met.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Utilities/Output.cs#L181)
```csharp title="Declaration"
public static void BufferIf(bool test, byte[] buffer, int offset, int length)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *test* | Determine if the method should generate any output. |
| `System.Byte[]` | *buffer* | Byte array of the buffer to be converted to printable format. |
| `System.Int32` | *offset* | Offset into the buffer to start the data display. |
| `System.Int32` | *length* | Amount of data to display. |

### Buffer(byte[])
Output the buffer in hexadecimal.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Utilities/Output.cs#L197)
```csharp title="Declaration"
public static void Buffer(byte[] buffer)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte[]` | *buffer* | Byte array of the buffer to be converted to printable format. |

