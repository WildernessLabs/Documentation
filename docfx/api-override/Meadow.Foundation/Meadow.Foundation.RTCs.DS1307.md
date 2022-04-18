---
uid: Meadow.Foundation.RTCs.Ds1307
remarks: *content
---

| Ds1307 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/RTCs.Ds1307) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.RTCs.Ds1307/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.RTCs.Ds1307.svg?label=Meadow.Foundation.RTCs.Ds1307" /></a> |

The **DS1307** is a low-power realtime clock (RTC) controlled via I2C.

### Code Example

```csharp
public MeadowApp()
{
    Console.WriteLine("Initializing...");

    var rtc = new Ds1307(Device.CreateI2cBus());

    var dateTime = new DateTime();
    var running = rtc.IsRunning;

    Console.WriteLine($"{(running ? "is running" : "is not running")}");

    if (!running)
    {
        Console.WriteLine(" Starting RTC...");
        rtc.IsRunning = true;
    }
  
    dateTime = rtc.GetTime();
    Console.WriteLine($" RTC current time is: {dateTime.ToString("MM/dd/yy HH:mm:ss")}");

    Console.WriteLine($" Setting RTC to : {dateTime.ToString("MM/dd/yy HH:mm:ss")}");
    dateTime = new DateTime(2030, 2, 15);
    rtc.SetTime(dateTime);

    dateTime = rtc.GetTime();
    Console.WriteLine($" RTC current time is: {dateTime.ToString("MM/dd/yy HH:mm:ss")}");

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

<img src="../../API_Assets/Meadow.Foundation.RTCs.DS1307/DS1307_Fritzing.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />





