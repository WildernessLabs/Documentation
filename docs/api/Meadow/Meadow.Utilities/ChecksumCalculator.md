---
title: Class ChecksumCalculator
sidebar_label: ChecksumCalculator
description: Provides CRC and checksum methods
slug: /docs/api/Meadow/Meadow.Utilities/ChecksumCalculator
---
# Class ChecksumCalculator
Provides CRC and checksum methods

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/ChecksumCalculator.cs#L9)
```csharp title="Declaration"
public static class ChecksumCalculator
```
## Methods
### XOR(string)
Calculate a checksum for the string by XORing the bytes in the string.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/ChecksumCalculator.cs#L29)
```csharp title="Declaration"
public static byte XOR(string data)
```

##### Returns

`System.Byte`: XOR checksum for the string.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *data* | String to calculate the checksum for. |

### XOR(byte[])
Generate a checksum by XORing all of the data in the array.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/ChecksumCalculator.cs#L41)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/ChecksumCalculator.cs#L82)
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

