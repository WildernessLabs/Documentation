---
title: Interface IRealTimeClock
sidebar_label: IRealTimeClock
description: Abstraction for Real-time clock devices
slug: /docs/api/Meadow/Meadow.Hardware/IRealTimeClock
---
# Interface IRealTimeClock
Abstraction for Real-time clock devices

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/IRealTimeClock.cs#L8)
```csharp title="Declaration"
public interface IRealTimeClock
```
## Properties
### IsRunning
Stops or starts the clock oscillator
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/IRealTimeClock.cs#L13)
```csharp title="Declaration"
bool IsRunning { get; set; }
```
## Methods
### GetTime()
Reads the RTC time
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/IRealTimeClock.cs#L19)
```csharp title="Declaration"
DateTimeOffset GetTime()
```

##### Returns

`System.DateTimeOffset`
### SetTime(DateTimeOffset)
Sets the RTC time
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/IRealTimeClock.cs#L24)
```csharp title="Declaration"
void SetTime(DateTimeOffset time)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.DateTimeOffset` | *time* |

