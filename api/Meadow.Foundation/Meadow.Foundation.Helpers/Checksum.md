---
title: Class Checksum
sidebar_label: Checksum
description: "Provide CRC and checksum methods"
---
# Class Checksum
Provide CRC and checksum methods

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Helpers/Checksum.cs#L9)
```csharp title="Declaration"
public class Checksum
```
## Methods
### XOR(string)
Calculate a checksum for the string by XORing the bytes in the string.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Helpers/Checksum.cs#L34)
```csharp title="Declaration"
public static byte XOR(string data)
```

##### Returns

`System.Byte`: XOR checksum for the sting.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *data* | String to calculate the checksum for. |

### XOR(byte[])
Generate a checksum by XORing all of the data in the array.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Helpers/Checksum.cs#L44)
```csharp title="Declaration"
public static byte XOR(byte[] data)
```

##### Returns

`System.Byte`: XOR Checksum of the array of bytes.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte[]` | *data* | Data to calculate the checksum for. |

### PolynomialCRC(byte[], byte)
Calculate the 8-bit CRC using the specified polynomial.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Helpers/Checksum.cs#L87)
```csharp title="Declaration"
public static byte PolynomialCRC(byte[] data, byte polynomial)
```

##### Returns

`System.Byte`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte[]` | *data* | Data bytes to generate a CRC for. |
| `System.Byte` | *polynomial* | Polynomial byte to use in the CRC calculation. |

