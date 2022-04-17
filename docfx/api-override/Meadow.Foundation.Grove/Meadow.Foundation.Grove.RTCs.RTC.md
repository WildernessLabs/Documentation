---
uid: Meadow.Foundation.Grove.RTCs.RTC
remarks: *content
---

| RTC | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/RTC) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Grove.RTCs.RTC/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Grove.RTCs.RTC.svg?label=Meadow.Foundation.Grove.RTCs.RTC" /></a> |

### Code Example

```csharp
public MeadowApp()
{
    Console.WriteLine("Initializing...");

    var rtc = new RTC(Device.CreateI2cBus());

    Console.WriteLine("rtc created");

    var running = rtc.IsRunning;

    Console.WriteLine($"{(running ? "is running" : "is not running")}");

    if (!running)
    {
        Console.WriteLine(" Starting RTC...");
        rtc.IsRunning = true;
    }

    var dateTime = rtc.GetTime();
    Console.WriteLine($" RTC current time is: {dateTime:MM/dd/yy HH:mm:ss}");

    Console.WriteLine($" Setting RTC to : {dateTime:MM/dd/yy HH:mm:ss}");
    dateTime = new DateTime(2030, 2, 15);
    rtc.SetTime(dateTime);

    dateTime = rtc.GetTime();
    Console.WriteLine($" RTC current time is: {dateTime:MM/dd/yy HH:mm:ss}");

    Random rand = new Random();

    var data = new byte[56];

    for (int i = 0; i < 56; i++)
    {
        data[i] = (byte)rand.Next(256);
    }

    Console.WriteLine($" Writing to RTC RAM   : {BitConverter.ToString(data)}");
    rtc.WriteRAM(0, data);
    Console.Write($" Reading from RTC RAM : ");
    data = rtc.ReadRAM(0, 56);
    Console.WriteLine(BitConverter.ToString(data));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/RTC)

### Wiring Example

| RTC | Meadow Pin |
|--------|------------|
| GND    | GND        |
| VCC    | 3.3V       |
| RX     | D01        |
| TX     | D00        |


















