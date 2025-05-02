---
title: Interface IUpdateService
sidebar_label: IUpdateService
description: Provides an abstraction for the Meadow Update Service
slug: /docs/api/Meadow/Meadow.Update/IUpdateService
---
# Interface IUpdateService
Provides an abstraction for the Meadow Update Service

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Update/IUpdateService.cs#L15)
```csharp title="Declaration"
public interface IUpdateService
```
## Properties
### CanUpdate
Returns the update service's current ability to apply an update
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Update/IUpdateService.cs#L44)
```csharp title="Declaration"
bool CanUpdate { get; }
```
### State
Gets the current state of the service
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Update/IUpdateService.cs#L48)
```csharp title="Declaration"
UpdateState State { get; }
```
## Methods
### RetrieveUpdate(UpdateInfo)
Retrieves an update package from the defined update server with the provided parameters
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Update/IUpdateService.cs#L53)
```csharp title="Declaration"
void RetrieveUpdate(UpdateInfo updateInfo)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Update.UpdateInfo](../Meadow.Update/UpdateInfo) | *updateInfo* | The UpdateInfo describing the update to retrieve |

### ApplyUpdate(UpdateInfo)
Applies an already-retrieved update package with the provided parameters
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Update/IUpdateService.cs#L58)
```csharp title="Declaration"
void ApplyUpdate(UpdateInfo updateInfo)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Update.UpdateInfo](../Meadow.Update/UpdateInfo) | *updateInfo* | The UpdateInfo describing the update to apply |

### ClearUpdates()
Clears all locally stored update package information
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Update/IUpdateService.cs#L62)
```csharp title="Declaration"
void ClearUpdates()
```
### Stop()
Stops the service
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Update/IUpdateService.cs#L66)
```csharp title="Declaration"
void Stop()
```
## Events
### StateChanged
Event raised when an the state of the Update service changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Update/IUpdateService.cs#L20)
```csharp title="Declaration"
event EventHandler<UpdateState> StateChanged
```
##### Event Type
`System.EventHandler<Meadow.UpdateState>`
### UpdateAvailable
Event raised when an update is available on the defined Update server
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Update/IUpdateService.cs#L24)
```csharp title="Declaration"
event UpdateEventHandler UpdateAvailable
```
##### Event Type
[Meadow.Update.UpdateEventHandler](../Meadow.Update/UpdateEventHandler)
### RetrieveProgress
Event raised during update file retrieval progress
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Update/IUpdateService.cs#L28)
```csharp title="Declaration"
event UpdateEventHandler RetrieveProgress
```
##### Event Type
[Meadow.Update.UpdateEventHandler](../Meadow.Update/UpdateEventHandler)
### UpdateRetrieved
Event raised after an update package has been retrieved from the defined Update server
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Update/IUpdateService.cs#L32)
```csharp title="Declaration"
event UpdateEventHandler UpdateRetrieved
```
##### Event Type
[Meadow.Update.UpdateEventHandler](../Meadow.Update/UpdateEventHandler)
### UpdateSuccess
Event raised after an update package has been successfully applied
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Update/IUpdateService.cs#L36)
```csharp title="Declaration"
event UpdateEventHandler UpdateSuccess
```
##### Event Type
[Meadow.Update.UpdateEventHandler](../Meadow.Update/UpdateEventHandler)
### UpdateFailure
Event raised if a failure occurs in an attempt to apply an update package
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Update/IUpdateService.cs#L40)
```csharp title="Declaration"
event UpdateEventHandler UpdateFailure
```
##### Event Type
[Meadow.Update.UpdateEventHandler](../Meadow.Update/UpdateEventHandler)
