---
title: Interface IStorageInformation
sidebar_label: IStorageInformation
description: Information about available storage devices
slug: /docs/api/Meadow/Meadow/IStorageInformation
---
# Interface IStorageInformation
Information about available storage devices

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Platform OS/IStorageInformation.cs#L8)
```csharp title="Declaration"
public interface IStorageInformation
```
## Properties
### Name
The store name
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Platform OS/IStorageInformation.cs#L13)
```csharp title="Declaration"
string Name { get; }
```
### SpaceAvailable
The space available in the store
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Platform OS/IStorageInformation.cs#L17)
```csharp title="Declaration"
DigitalStorage SpaceAvailable { get; }
```
### Size
The total size of the store
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Platform OS/IStorageInformation.cs#L21)
```csharp title="Declaration"
DigitalStorage Size { get; }
```
