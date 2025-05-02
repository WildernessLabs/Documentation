---
title: Class UpdateInfo
sidebar_label: UpdateInfo
description: Represents information about a specific Meadow Update package
slug: /docs/api/Meadow/Meadow.Update/UpdateInfo
---
# Class UpdateInfo
Represents information about a specific Meadow Update package

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Update/UpdateInfo.cs#L8)
```csharp title="Declaration"
public class UpdateInfo
```
**Derived:**  
[Meadow.Update.UpdateMessage](../Meadow.Update/UpdateMessage)

## Properties
### PublishedOn
Date and time when the update was published
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Update/UpdateInfo.cs#L13)
```csharp title="Declaration"
public DateTime PublishedOn { get; set; }
```
### ID
A unique identifier for the Update
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Update/UpdateInfo.cs#L17)
```csharp title="Declaration"
public string ID { get; protected set; }
```
### Name
Metadata for the package
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Update/UpdateInfo.cs#L21)
```csharp title="Declaration"
public string? Name { get; set; }
```
### UpdateType
The type of the Update
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Update/UpdateInfo.cs#L25)
```csharp title="Declaration"
public UpdateType UpdateType { get; set; }
```
### Version
Version information for the Update
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Update/UpdateInfo.cs#L29)
```csharp title="Declaration"
public string Version { get; set; }
```
### DownloadProgress
Download progress (in Bytes) of the Update
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Update/UpdateInfo.cs#L33)
```csharp title="Declaration"
public long DownloadProgress { get; set; }
```
### FileSize
The size, in bytes, of the Update
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Update/UpdateInfo.cs#L37)
```csharp title="Declaration"
public long FileSize { get; set; }
```
### Summary
An optional, human-readable summary of the Update
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Update/UpdateInfo.cs#L41)
```csharp title="Declaration"
public string? Summary { get; set; }
```
### Detail
An optional, human-readable detail of the Update
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Update/UpdateInfo.cs#L45)
```csharp title="Declaration"
public string? Detail { get; set; }
```
### Retrieved
Indicates if the Update has been retrieved
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Update/UpdateInfo.cs#L49)
```csharp title="Declaration"
public bool Retrieved { get; set; }
```
### Applied
Indicates if the Update has been applied
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Update/UpdateInfo.cs#L53)
```csharp title="Declaration"
public bool Applied { get; set; }
```
### Crc
The expected Hash of the Update package
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Update/UpdateInfo.cs#L57)
```csharp title="Declaration"
public string Crc { get; set; }
```
### Metadata
Metadata for the package
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Update/UpdateInfo.cs#L61)
```csharp title="Declaration"
public string? Metadata { get; set; }
```
