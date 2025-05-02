---
title: Class CloudLog
sidebar_label: CloudLog
description: A log message sent to Meadow.Cloud
slug: /docs/api/Meadow/Meadow.Cloud/CloudLog
---
# Class CloudLog
A log message sent to Meadow.Cloud

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Cloud/CloudLog.cs#L8)
```csharp title="Declaration"
public class CloudLog
```
## Properties
### Severity
The message's severity
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Cloud/CloudLog.cs#L13)
```csharp title="Declaration"
public string Severity { get; set; }
```
### Message
The message's text
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Cloud/CloudLog.cs#L17)
```csharp title="Declaration"
public string Message { get; set; }
```
### Timestamp
The timestamp of the message
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Cloud/CloudLog.cs#L21)
```csharp title="Declaration"
public DateTime Timestamp { get; set; }
```
### Exception
Exception body of the message
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Cloud/CloudLog.cs#L25)
```csharp title="Declaration"
public string Exception { get; set; }
```
