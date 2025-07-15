---
uid: Meadow.Foundation.RTCs.Pcf8523
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.RTCs.Pcf8523
---

| Pcf8523 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/RTCs.Pcf8523) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/RTCs.Pcf8523/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.RTCs.Pcf8523/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.RTCs.Pcf8523.svg?label=Meadow.Foundation.RTCs.Pcf8523" alt="NuGet Gallery for Meadow.Foundation.RTCs.Pcf8523" /></a> |
### Code Example

```csharp
private Pcf8523 rtc;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    rtc = new Pcf8523(Device.CreateI2cBus());

    return base.Initialize();
}

public override async Task Run()
{
    DateTimeOffset dateTime;
    var running = rtc.IsRunning;

    Resolver.Log.Info($"{(running ? "is running" : "is not running")}");

    if (!running)
    {
        Resolver.Log.Info(" Starting RTC...");
        rtc.IsRunning = true;
    }

    dateTime = rtc.GetTime();
    Resolver.Log.Info($" RTC current time is: {dateTime:MM/dd/yy HH:mm:ss}");

    dateTime = new DateTime(2030, 2, 15);
    Resolver.Log.Info($" Setting RTC to : {dateTime:MM/dd/yy HH:mm:ss}");
    rtc.SetTime(dateTime);

    dateTime = rtc.GetTime();
    Resolver.Log.Info($" RTC current time is: {dateTime:MM/dd/yy HH:mm:ss}");

    // Test Timer A
    Resolver.Log.Info("Setting Timer A for 5 seconds...");
    rtc.SetTimerA(5, DelayTimeUnit.Seconds);

    // Test Timer B
    Resolver.Log.Info("Setting Timer B for 2 seconds...");
    rtc.SetTimerB(2, DelayTimeUnit.Seconds);

    await Task.Delay(2000);

    if (rtc.HasTimerAInterruptTriggered)
    {
        Resolver.Log.Info("Timer A SUCCESS");
    }
    else
    {
        Resolver.Log.Info("Timer A FAILED");
    }

    if (rtc.HasTimerBInterruptTriggered)
    {
        Resolver.Log.Info("Timer B SUCCESS");
    }
    else
    {
        Resolver.Log.Info("Timer B FAILED");
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/RTCs.Pcf8523/Samples/Pcf8523_Sample)

