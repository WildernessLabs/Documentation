---
title: Class BitHelpers
sidebar_label: BitHelpers
description: A static class with methods to help with bit operations
slug: /docs/api/Meadow/Meadow.Utilities/BitHelpers
---
# Class BitHelpers
A static class with methods to help with bit operations

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/BitHelpers.cs#L6)
```csharp title="Declaration"
public static class BitHelpers
```
## Methods
### SetBit(byte, byte, byte)
Returns a new byte mask based on the input mask, with a single 
bit set. To the passed in value.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/BitHelpers.cs#L15)
```csharp title="Declaration"
public static byte SetBit(byte mask, byte bitIndex, byte value)
```

##### Returns

`System.Byte`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *mask* | The original byte mask value. |
| `System.Byte` | *bitIndex* | The index of the bit to set. |
| `System.Byte` | *value* | The value to set the bit. Should be 0 or 1. |

### SetBit(byte, byte, bool)
Returns a new byte mask based on the input mask, with a single 
bit set. To the passed in value.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/BitHelpers.cs#L28)
```csharp title="Declaration"
public static byte SetBit(byte mask, byte bitIndex, bool value)
```

##### Returns

`System.Byte`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *mask* | The original byte mask value. |
| `System.Byte` | *bitIndex* | The index of the bit to set. |
| `System.Boolean` | *value* | The value to set the bit. true for 1, false for 0. |

### SetBit(short, byte, bool)
Returns a new 16-bit short with the single bit set or cleared
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/BitHelpers.cs#L51)
```csharp title="Declaration"
public static short SetBit(short mask, byte bitIndex, bool value)
```

##### Returns

`System.Int16`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int16` | *mask* | The original value |
| `System.Byte` | *bitIndex* | The index of the bit to affect |
| `System.Boolean` | *value* | True to set, False to clear |

### GetBitValue(byte, byte)
Returns the value of the mask at the given ordinal.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/BitHelpers.cs#L67)
```csharp title="Declaration"
public static bool GetBitValue(byte mask, byte bitIndex)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Byte` | *mask* |
| `System.Byte` | *bitIndex* |

### GetBitValue(short, byte)
Determines if a specified bit in a 16-bit short is set
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/BitHelpers.cs#L79)
```csharp title="Declaration"
public static bool GetBitValue(short mask, byte bitIndex)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int16` | *mask* | The value to check |
| `System.Byte` | *bitIndex* | The index of the bit to check |

### ToInt16(byte[])
Converts the first 2 bytes of an array to a little-endian 16-bit short
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/BitHelpers.cs#L93)
```csharp title="Declaration"
public static short ToInt16(byte[] data)
```

##### Returns

`System.Int16`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Byte[]` | *data* |

