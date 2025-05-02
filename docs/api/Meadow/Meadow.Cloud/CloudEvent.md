---
title: Class CloudEvent
sidebar_label: CloudEvent
description: An event message set to Meadow.Cloud
slug: /docs/api/Meadow/Meadow.Cloud/CloudEvent
---
# Class CloudEvent
An event message set to Meadow.Cloud

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Cloud/CloudEvent.cs#L9)
```csharp title="Declaration"
public class CloudEvent
```
## Properties
### EventId
Gets or sets the CloudEvent's unique identifier
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Cloud/CloudEvent.cs#L14)
```csharp title="Declaration"
public int EventId { get; set; }
```
### Description
Gets or sets the CloudEvent's Description
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Cloud/CloudEvent.cs#L18)
```csharp title="Declaration"
public string Description { get; set; }
```
### Measurements
Gets or set the list of measurements associated with the CloudEvent
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Cloud/CloudEvent.cs#L22)
```csharp title="Declaration"
public Dictionary<string, object> Measurements { get; set; }
```
### Timestamp
Gets or set the UTC timestamp when the CloudEvent was generated
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Cloud/CloudEvent.cs#L26)
```csharp title="Declaration"
public DateTimeOffset Timestamp { get; set; }
```
