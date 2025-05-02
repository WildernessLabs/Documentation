---
title: Class InterruptGroupInUseException
sidebar_label: InterruptGroupInUseException
description: >-
  Exception thrown when attempting to use an interrupt group that is already in
  use.
slug: /docs/api/Meadow/Meadow.Hardware/InterruptGroupInUseException
---
# Class InterruptGroupInUseException
Exception thrown when attempting to use an interrupt group that is already in use.

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Exceptions/InterruptGroupInUseException.cs#L8)
```csharp title="Declaration"
public class InterruptGroupInUseException : Exception, ISerializable
```
**Inheritance:** `System.Object` -> `System.Exception`

**Implements:**  
`System.Runtime.Serialization.ISerializable`

## Properties
### Group
Gets the interrupt group that is already in use.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Exceptions/InterruptGroupInUseException.cs#L13)
```csharp title="Declaration"
public int Group { get; }
```

## Implements

* `System.Runtime.Serialization.ISerializable`
