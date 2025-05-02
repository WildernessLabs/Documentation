---
title: Class NtpClientBase
sidebar_label: NtpClientBase
description: base Client for Network Time Protocol
slug: /docs/api/Meadow/Meadow/NtpClientBase
---
# Class NtpClientBase
base Client for Network Time Protocol

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/NtpClientBase.cs#L13)
```csharp title="Declaration"
public abstract class NtpClientBase : INtpClient
```
**Implements:**  
[Meadow.INtpClient](../Meadow/INtpClient)

## Properties
### Enabled
Gets a value indicating whether the NTP client is enabled.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/NtpClientBase.cs#L21)
```csharp title="Declaration"
public abstract bool Enabled { get; }
```
### PollPeriod
Gets or sets the poll period for NTP synchronization.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/NtpClientBase.cs#L23)
```csharp title="Declaration"
public abstract TimeSpan PollPeriod { get; set; }
```
## Methods
### RaiseTimeChanged(DateTime)
Raises the TimeChanged event with a given time
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/NtpClientBase.cs#L29)
```csharp title="Declaration"
protected void RaiseTimeChanged(DateTime utcTime)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.DateTime` | *utcTime* | The new time |

### Synchronize(string?)
Start an NTP time synchronization
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/NtpClientBase.cs#L32)
```csharp title="Declaration"
public Task<bool> Synchronize(string? ntpServer = null)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/NtpClientBase.cs#L18)
```csharp title="Declaration"
public event TimeChangedEventHandler TimeChanged
```
##### Event Type
[Meadow.TimeChangedEventHandler](../Meadow/TimeChangedEventHandler)

## Implements

* [Meadow.INtpClient](../Meadow/INtpClient)
