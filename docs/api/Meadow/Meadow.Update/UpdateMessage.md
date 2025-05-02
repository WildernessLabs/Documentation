---
title: Class UpdateMessage
sidebar_label: UpdateMessage
description: Represents an update message.
slug: /docs/api/Meadow/Meadow.Update/UpdateMessage
---
# Class UpdateMessage
Represents an update message.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Update/UpdateMessage.cs#L6)
```csharp title="Declaration"
public class UpdateMessage : UpdateInfo
```
**Inheritance:** `System.Object` -> [Meadow.Update.UpdateInfo](../Meadow.Update/UpdateInfo)

## Properties
### MpakID
Gets or sets the ID of the MPak.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Update/UpdateMessage.cs#L11)
```csharp title="Declaration"
public string MpakID { get; set; }
```
### MpakDownloadUrl
Gets or sets the download URL of the MPak.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Update/UpdateMessage.cs#L20)
```csharp title="Declaration"
public string MpakDownloadUrl { get; set; }
```
### MpakWithOsDownloadUrl
Gets or sets the download URL of the MPak including OS.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Update/UpdateMessage.cs#L25)
```csharp title="Declaration"
public string MpakWithOsDownloadUrl { get; set; }
```
### OsVersion
Target OS Version for the update.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Update/UpdateMessage.cs#L30)
```csharp title="Declaration"
public string OsVersion { get; set; }
```
