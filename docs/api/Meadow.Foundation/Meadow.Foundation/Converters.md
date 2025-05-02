---
title: Class Converters
sidebar_label: Converters
description: Provide a mechanism to convert from on type to another .NET type
slug: /docs/api/Meadow.Foundation/Meadow.Foundation/Converters
---
# Class Converters
Provide a mechanism to convert from on type to another .NET type

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Helpers/Converters.cs#L8)
```csharp title="Declaration"
public class Converters
```
## Methods
### BCDToByte(byte)
Convert a BCD value in a byte into a decimal representation
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Helpers/Converters.cs#L15)
```csharp title="Declaration"
public static byte BCDToByte(byte bcd)
```

##### Returns

`System.Byte`: Decimal version of the BCD value
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *bcd* | BCD value to decode |

### ByteToBCD(byte)
Convert a byte to BCD
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Helpers/Converters.cs#L27)
```csharp title="Declaration"
public static byte ByteToBCD(byte v)
```

##### Returns

`System.Byte`: BCD encoded version of the byte value
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *v* | Byte value to encode |

