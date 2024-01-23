---
layout: Meadow
title: Meadow Application Sleep
subtitle: Reduce power consumption by putting Meadow into a sleep state.
---

Meadow can be put into a power-saving sleep state. In this state, your code stops executing and reduces the power draw to only what is required to recover from being in a sleep state. After resuming from a sleep state, your code will resume executing where it left off.

To put the Meadow into sleep mode, call `Sleep` on the current platform OS object and providing either a `TimeSpan` or a `DateTime`. If you provide a `TimeSpan`, Meadow will sleep for that duration.

```csharp
// Put Meadow to sleep for 5 seconds.
Device.PlatformOS.Sleep(TimeSpan.FromSeconds(5));
```

If you provide a `DateTime`, Meadow will sleep until that time.

In order for this to work properly, you must [set the current date](../../Meadow.OS/RTC) via the `Device.PlatformOS.SetClock` method.

```csharp
Device.PlatformOS.SetClock(new DateTime(2022, 10, 19, 21, 58, 27));
...
// Put Meadow to sleep until this time tomorrow.
Device.PlatformOS.Sleep(DateTime.Now.AddDays(1));
```

## Sleep-related events

Additionally, you can respond to the sleep state changes in [application lifecycle events](../Lifecycle_Events), specifically `BeforeSleep` and `AfterWake`. `BeforeSleep` is called right before your application goes into sleep mode. And `AfterWake` is called right after Meadow resumes from sleep but before your code resumes. `AfterWake` receives, as a parameter, the source of the wake (eitehr `Timer` or `Interrupt`).

These are exposed as events on the `Device.PlatformOS` object and can have event handlers added to them like any standard .NET event.

```csharp
Device.PlatformOS.BeforeSleep += () => {...};

Device.PlatformOS.AfterWake += (sender, wakeSource) => {...};
```
