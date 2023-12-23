---
uid: Meadow.Foundation.RTCs.Ds1307

---

| Ds1307 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/RTCs.Ds1307) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/RTCs.Ds1307/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.RTCs.Ds1307/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.RTCs.Ds1307.svg?label=Meadow.Foundation.RTCs.Ds1307" alt="NuGet Gallery for Meadow.Foundation.RTCs.Ds1307" /></a> |

The **DS1307** is a low-power realtime clock (RTC) controlled via I2C.

### Code Example

```csharp
Ds1307 rtc;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    rtc = new Ds1307(Device.CreateI2cBus());

    return base.Initialize();
}

public override Task Run()
{
    var dateTime = new DateTime();
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

    return base.Run();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/RTCs.Ds1307/Samples/Ds1307_Sample)

### Wiring Example

The DS3231 real time clock module (see image below) requires only four (for simple timekeeping) or five (for alarms) connections

| DS3231 | Meadow Pin    |
|---------|---------------|
| GND     | GND           |
| VCC     | 3V3           |
| SCL     | D08 (SCL Pin) |
| SDA     | D07 (SDA Pin) |

The 32K pin outputs the 32,768 Hz clock signal from the module.  This signal is only available when power is supplied by V<sub>cc</sub>, it is not available when the module is on battery power.

<img src="../../API_Assets/Meadow.Foundation.RTCs.DS1307/DS1307_Fritzing.png" />





