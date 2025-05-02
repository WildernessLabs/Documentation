---
title: Class PlatformOsMessage
sidebar_label: PlatformOsMessage
description: A message passed from the Meadow host OS to the Meadow stack during startup
slug: /docs/api/Meadow/Meadow/PlatformOsMessage
---
# Class PlatformOsMessage
A message passed from the Meadow host OS to the Meadow stack during startup

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Platform OS/PlatformOsMessage.cs#L8)
```csharp title="Declaration"
public record PlatformOsMessage : IEquatable<PlatformOsMessage>
```
**Implements:**  
`System.IEquatable<Meadow.PlatformOsMessage>`

## Properties
### Priority
A prioritization for the message
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Platform OS/PlatformOsMessage.cs#L13)
```csharp title="Declaration"
public MessagePriority Priority { get; set; }
```
### Timestamp
The timestamp when the message was generated.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Platform OS/PlatformOsMessage.cs#L20)
```csharp title="Declaration"
public DateTime Timestamp { get; set; }
```
### Message
The message being passed from the host OS
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Platform OS/PlatformOsMessage.cs#L24)
```csharp title="Declaration"
public string Message { get; set; }
```

## Implements

* `System.IEquatable<Meadow.PlatformOsMessage>`
