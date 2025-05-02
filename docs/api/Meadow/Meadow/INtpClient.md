---
title: Interface INtpClient
sidebar_label: INtpClient
description: Interface for a Network Time Protocol (NTP) client object.
slug: /docs/api/Meadow/Meadow/INtpClient
---
# Interface INtpClient
Interface for a Network Time Protocol (NTP) client object.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/INtpClient.cs#L15)
```csharp title="Declaration"
public interface INtpClient
```
## Properties
### Enabled
Gets a value indicating whether the NTP client is enabled.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/INtpClient.cs#L25)
```csharp title="Declaration"
bool Enabled { get; }
```
### PollPeriod
Gets or sets the poll period for NTP synchronization.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/INtpClient.cs#L30)
```csharp title="Declaration"
TimeSpan PollPeriod { get; set; }
```
## Methods
### Synchronize(string?)
Start an NTP time synchronization
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/INtpClient.cs#L37)
```csharp title="Declaration"
Task<bool> Synchronize(string? ntpServer = null)
```

##### Returns

`System.Threading.Tasks.Task<System.Boolean>`: &lt;b&gt;true&lt;/b&gt; if successful, otherwise &lt;b&gt;false&lt;/b&gt;
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *ntpServer* | An optional NTP server address.  If null, the device will use the platform-configured NTP server address |

## Events
### TimeChanged
Event called when the time is changed.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/INtpClient.cs#L20)
```csharp title="Declaration"
event TimeChangedEventHandler TimeChanged
```
##### Event Type
[Meadow.TimeChangedEventHandler](../Meadow/TimeChangedEventHandler)
