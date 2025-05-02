---
title: Class UnsupportedPlatformException
sidebar_label: UnsupportedPlatformException
description: >-
  Represents an exception that is thrown when an unsupported platform is
  encountered.
slug: /docs/api/Meadow/Meadow/UnsupportedPlatformException
---
# Class UnsupportedPlatformException
Represents an exception that is thrown when an unsupported platform is encountered.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/UnsupportedPlatformException.cs#L9)
```csharp title="Declaration"
public class UnsupportedPlatformException : Exception, ISerializable
```
**Inheritance:** `System.Object` -> `System.Exception`

**Implements:**  
`System.Runtime.Serialization.ISerializable`

## Properties
### CurrentPlatform
Gets the current Meadow platform that caused the exception.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/UnsupportedPlatformException.cs#L14)
```csharp title="Declaration"
public MeadowPlatform CurrentPlatform { get; }
```

## Implements

* `System.Runtime.Serialization.ISerializable`
