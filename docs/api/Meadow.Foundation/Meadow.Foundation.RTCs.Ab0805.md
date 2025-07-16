---
uid: Meadow.Foundation.RTCs.Ab0805
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.RTCs.Ab0805
---

| Ab0805 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/RTCs.Ab0805) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/RTCs.Ab0805/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.RTCs.Ab0805/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.RTCs.Ab0805.svg?label=Meadow.Foundation.RTCs.Ab0805" alt="NuGet Gallery for Meadow.Foundation.RTCs.Ab0805" /></a> |
### Code Example

```csharp
private Ab0805 rtc;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    rtc = new Ab0805(Device.CreateI2cBus());

    return base.Initialize();
}

public override async Task Run()
{
    // Test basic RTC functionality
    await TestBasicRTC();

    // Test countdown timers
    await TestCountdownTimers();
}

private async Task TestBasicRTC()
{
    Resolver.Log.Info("=== Testing Basic RTC Functionality ===");

    var running = rtc.IsRunning;
    Resolver.Log.Info($"RTC {(running ? "is running" : "is not running")}");

    if (!running)
    {
        Resolver.Log.Info("Starting RTC...");
        rtc.IsRunning = true;
    }

    var currentTime = rtc.GetTime();
    Resolver.Log.Info($"RTC current time: {currentTime:MM/dd/yy HH:mm:ss}");

    // Set RTC to a known time for testing
    var testTime = new DateTime(2025, 6, 15, 14, 30, 0);
    Resolver.Log.Info($"Setting RTC to: {testTime:MM/dd/yy HH:mm:ss}");
    rtc.SetTime(testTime);

    currentTime = rtc.GetTime();
    Resolver.Log.Info($"RTC time after setting: {currentTime:MM/dd/yy HH:mm:ss}");

    await Task.Delay(2000);

    currentTime = rtc.GetTime();
    Resolver.Log.Info($"RTC time after 2 second delay: {currentTime:MM/dd/yy HH:mm:ss}");
}

private async Task TestCountdownTimers()
{
    Resolver.Log.Info("\n=== Testing Countdown Timer Functionality ===");

    await TestAlarm();
    await Task.Delay(1000);
    await TestBasicTimer();
}

private async Task TestBasicTimer()
{
    Resolver.Log.Info("\n--- Test 1: Basic 2-second countdown timer ---");

    rtc.ResetTimer();

    Resolver.Log.Info("Starting 2-second countdown timer...");
    rtc.StartTimer(5, Ab0805.DelayTimeUnit.Seconds);

    var startTime = DateTime.Now;
    TimeSpan elapsed;

    while (rtc.HasTimerEnded == false)
    {
        elapsed = DateTime.Now - startTime;
        Resolver.Log.Info($"Elapsed: {elapsed.TotalSeconds:F1}s");

        await Task.Delay(1000);
    }

    elapsed = DateTime.Now - startTime;
    Resolver.Log.Info($"✓ Timer completed! Interrupt fired after {elapsed.TotalSeconds:F1}s");
    rtc.ResetTimer();
}

private async Task TestAlarm()
{
    Resolver.Log.Info("\n--- Test 2: Alarm 5 seconds in the future ---");

    DateTimeOffset alarmTime = rtc.GetTime().AddSeconds(5);

    Resolver.Log.Info("Monitoring alarm...");
    rtc.SetAlarm(alarmTime);

    var startTime = DateTime.Now;
    TimeSpan elapsed;

    while (rtc.HasAlarmTriggered == false)
    {
        elapsed = DateTime.Now - startTime;
        Resolver.Log.Info($"Elapsed: {elapsed.TotalSeconds:F1}s");

        await Task.Delay(1000);
    }

    elapsed = DateTime.Now - startTime;
    Resolver.Log.Info($"✓ Alarm triggered! Interrupt fired after {elapsed.TotalSeconds:F1}s");

    await Task.Delay(5000);
    rtc.ResetAlarm();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/RTCs.Ab0805/Samples/Ab0805_Sample)


