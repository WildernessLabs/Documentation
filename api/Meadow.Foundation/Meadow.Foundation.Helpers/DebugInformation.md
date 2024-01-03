---
title: Class DebugInformation
sidebar_label: DebugInformation
description: "This class provides static helper methods used for debugging"
---
# Class DebugInformation
This class provides static helper methods used for debugging

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Helpers/DebugInformation.cs#L8)
```csharp title="Declaration"
public class DebugInformation
```
## Methods
### Hexadecimal(byte[])
Convert a byte array to a series of hexadecimal numbers
separated by a minus sign.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Helpers/DebugInformation.cs#L18)
```csharp title="Declaration"
public static string Hexadecimal(byte[] bytes)
```

##### Returns

`System.String`: series of hexadecimal bytes in the format xx-yy-zz
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte[]` | *bytes* | Array of bytes to convert. |

### Hexadecimal(byte)
Convert a byte into hexadecimal including the "0x" prefix.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Helpers/DebugInformation.cs#L50)
```csharp title="Declaration"
public static string Hexadecimal(byte b)
```

##### Returns

`System.String`: Hexadecimal string including the 0x prefix.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *b* | Value to convert. |

### Hexadecimal(ushort)
Convert an unsigned short into hexadecimal.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Helpers/DebugInformation.cs#L60)
```csharp title="Declaration"
public static string Hexadecimal(ushort us)
```

##### Returns

`System.String`: Hexadecimal representation of the unsigned short.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.UInt16` | *us* | Unsigned short value to convert. |

### Hexadecimal(int)
Convert an integer into hexadecimal.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Helpers/DebugInformation.cs#L70)
```csharp title="Declaration"
public static string Hexadecimal(int i)
```

##### Returns

`System.String`: Hexadecimal representation of the unsigned short.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *i* | Integer to convert to hexadecimal. |

### DisplayRegisters(byte, Span&lt;byte&gt;)
Dump the array of bytes to the debug output in hexadecimal.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Helpers/DebugInformation.cs#L81)
```csharp title="Declaration"
public static void DisplayRegisters(byte startAddress, Span<byte> registers)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *startAddress* | Starting address of the register. |
| `System.Span<System.Byte>` | *registers* | Byte array of the register contents. |

