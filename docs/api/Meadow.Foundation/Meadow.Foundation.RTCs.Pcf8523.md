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

public override Task Run()
{
    var dateTime = new DateTimeOffset();
    var running = rtc.IsRunning;

    Resolver.Log.Info($"{(running ? "is running" : "is not running")}");

    if (!running)
    {
        Resolver.Log.Info(" Starting RTC...");
        rtc.IsRunning = true;
    }

    dateTime = rtc.GetTime();
    Resolver.Log.Info($" RTC current time is: {dateTime.ToString("MM/dd/yy HH:mm:ss")}");

    Resolver.Log.Info($" Setting RTC to : {dateTime.ToString("MM/dd/yy HH:mm:ss")}");
    dateTime = new DateTime(2030, 2, 15);
    rtc.SetTime(dateTime);

    dateTime = rtc.GetTime();
    Resolver.Log.Info($" RTC current time is: {dateTime.ToString("MM/dd/yy HH:mm:ss")}");

    return base.Run();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/RTCs.Pcf8523/Samples/Pcf8523_Sample)

