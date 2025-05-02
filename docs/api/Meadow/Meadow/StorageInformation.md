---
title: Class StorageInformation
sidebar_label: StorageInformation
description: Information about available storage devices
slug: /docs/api/Meadow/Meadow/StorageInformation
---
# Class StorageInformation
Information about available storage devices

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/StorageInformation.cs#L8)
```csharp title="Declaration"
public abstract class StorageInformation : IStorageInformation
```
**Implements:**  
[Meadow.IStorageInformation](../Meadow/IStorageInformation)

## Properties
### Name
The store name
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/StorageInformation.cs#L24)
```csharp title="Declaration"
public string Name { get; protected set; }
```
### SpaceAvailable
The space available in the store
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/StorageInformation.cs#L27)
```csharp title="Declaration"
public DigitalStorage SpaceAvailable { get; protected set; }
```
### Size
The total size of the store
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/StorageInformation.cs#L30)
```csharp title="Declaration"
public DigitalStorage Size { get; protected set; }
```

## Implements

* [Meadow.IStorageInformation](../Meadow/IStorageInformation)
