---
title: Class NetworkException
sidebar_label: NetworkException
description: Represents a general network exception.
slug: /docs/api/Meadow/Meadow/NetworkException
---
# Class NetworkException
Represents a general network exception.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Exceptions/NetworkException.cs#L8)
```csharp title="Declaration"
public class NetworkException : Exception, ISerializable
```
**Inheritance:** `System.Object` -> `System.Exception`

**Derived:**  
[Meadow.NetworkAuthenticationException](../Meadow/NetworkAuthenticationException), [Meadow.NetworkNotFoundException](../Meadow/NetworkNotFoundException)

**Implements:**  
`System.Runtime.Serialization.ISerializable`

## Properties
### StatusCode
Gets the status code associated with the network exception.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Exceptions/NetworkException.cs#L13)
```csharp title="Declaration"
public int StatusCode { get; }
```

## Implements

* `System.Runtime.Serialization.ISerializable`
