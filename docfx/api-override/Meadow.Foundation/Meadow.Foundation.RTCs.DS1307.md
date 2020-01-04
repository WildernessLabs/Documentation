---
uid: Meadow.Foundation.RTCs.Ds1307
remarks: *content
---

| DS1307        |             |
|---------------|-------------|
| Status        | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/RTCs.DS1307) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.RTCs.Ds1307/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.RTCs.Ds1307.svg?label=Meadow.Foundation.RTCs.Ds1307" style="width: auto; height: -webkit-fill-available;" /></a> |

The **DS1307** is a low-power realtime clock (RTC) controlled via I2C.

### Code Example

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    protected Ds1307 ds1307;

    public DS1307App()
    {
        ds1307 = new Ds1307(Device.CreateI2cBus());

        if (ds1307.IsRunning == false)
        {
            Console.WriteLine("Starting RTC...");
            dSs1307.IsRunning = true;
        }

        while (true)
        {
            for (int i = 0; i < 3; i++)
            {
                var now = ds1307.GetTime();
                Console.WriteLine($"Current time: {now.ToString("MM/dd/yy HH:mm:ss")}");
                Thread.Sleep(1000);
            }

            var rand = new Random();

            if (now.Year < 2019)
            {
                now = DateTime.Now;
            }
            else
            {
                now = now.AddSeconds(rand.Next(1, 30));
            }

            var data = new byte[56];
            for (int i = 0; i < 56; i++)
            {
                data[i] = (byte)rand.Next(256);
            }

            Console.WriteLine($"Writing to RTC RAM   : {BitConverter.ToString(data)}");
            ds1307.WriteRAM(0, data);
            Console.Write($"Reading from RTC RAM : ");
            data = ds1307.ReadRAM(0, 56);
            Console.WriteLine(BitConverter.ToString(data));
        }
    }
}
```

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/RTCs.DS1307/Samples/)

### Circuit Example

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
