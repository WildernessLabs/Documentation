---
uid: Meadow.Foundation.Grove.RTCs.RTC

---

| RTC | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/RTC) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Grove.RTCs.RTC/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Grove.RTCs.RTC.svg?label=Meadow.Foundation.Grove.RTCs.RTC" alt="NuGet Gallery for Meadow.Foundation.Grove.RTCs.RTC" /></a> |

### Code Example

```csharp
RTC rtc;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    rtc = new RTC(Device.CreateI2cBus());

    return Task.CompletedTask;
}

public override Task Run()
{
    var running = rtc.IsRunning;

    Resolver.Log.Info($"{(running ? "is running" : "is not running")}");

    if (!running)
    {
        Resolver.Log.Info(" Starting RTC...");
        rtc.IsRunning = true;
    }

    var dateTime = rtc.GetTime();
    Resolver.Log.Info($" RTC current time is: {dateTime:MM/dd/yy HH:mm:ss}");

    Resolver.Log.Info($" Setting RTC to : {dateTime:MM/dd/yy HH:mm:ss}");
    dateTime = new DateTime(2030, 2, 15);
    rtc.SetTime(dateTime);

    dateTime = rtc.GetTime();
    Resolver.Log.Info($" RTC current time is: {dateTime:MM/dd/yy HH:mm:ss}");

    var rand = new Random();

    var data = new byte[56];

    for (int i = 0; i < 56; i++)
    {
        data[i] = (byte)rand.Next(256);
    }

    Resolver.Log.Info($" Writing to RTC RAM   : {BitConverter.ToString(data)}");
    rtc.WriteRAM(0, data);
    Resolver.Log.Info($" Reading from RTC RAM : ");
    data = rtc.ReadRAM(0, 56);
    Resolver.Log.Info(BitConverter.ToString(data));

    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/RTC/Sample/RTC_Sample)

### Wiring Example

| RTC | Meadow Pin |
|--------|------------|
| GND    | GND        |
| VCC    | 3.3V       |
| RX     | D01        |
| TX     | D00        |

