---
title: Class NativeException
sidebar_label: NativeException
description: Encapsulates a native hardware exception
slug: /docs/api/Meadow/Meadow/NativeException
---
# Class NativeException
Encapsulates a native hardware exception

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Exceptions/NativeException.cs#L8)
```csharp title="Declaration"
public class NativeException : Exception, ISerializable
```
**Inheritance:** `System.Object` -> `System.Exception`

**Implements:**  
`System.Runtime.Serialization.ISerializable`

## Properties
### ErrorCode
Optional Error Code information from the underlying OS
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Exceptions/NativeException.cs#L13)
```csharp title="Declaration"
public int? ErrorCode { get; }
```

## Implements

* `System.Runtime.Serialization.ISerializable`
