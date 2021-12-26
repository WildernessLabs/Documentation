---
layout: Meadow
title: Real Time Clock
subtitle: Use Meadow's onboard RTC module to keep the time for logging or other use cases.
---

The STM32F7 is equipped with a real-time clock (RTC), which, when set, will retain the system time as long as the the board has power. 

# Using

To use Meadow's RTC module, simply set the time with the *SetClock* method:

```csharp
Device.SetClock(new DateTime(
    year: 2021, 
    month: 04, 
    day: 05, 
    hour: 15, 
    minute: 33, 
    second: 25));
```

Once set, you can use DateTime.Now to retrieve the current local date and time.

```csharp
DateTime clock = DateTime.Now;
```