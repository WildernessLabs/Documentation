---
uid: Meadow.Foundation.RTCs.Ds323x
remarks: *content
---

| DS323x        |               |
|---------------|---------------|
| Status        | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/RTCs.DS323x) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.RTCs.Ds323x/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.RTCs.Ds323x.svg?label=Meadow.Foundation.RTCs.Ds323x" style="width: auto; height: -webkit-fill-available;" /></a> |

The **DS323x** is a low-cost and accurate real-time clock with a temperature compensation crystal oscillator. This range of chips offers the following functionality:

* Temperature compensation
* Battery backup
* I2C (DS3231) and SPI (DS3234) interfaces.
* Two programmable alarms
* 32.768 KHz square wave output

### Code Example

The following application sets an alarm to trigger at when the current second is equal to 15.  The interrupt routine displays the time and then clears the interrupt flag:

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    Ds3231 sensor;

    public MeadowApp()
    {
        sensor = new Ds3231(Device, Device.CreateI2cBus(), null);

        sensor.CurrentDateTime = new DateTime(2020, 1, 1);

        Console.WriteLine("Read from sensor");

        Console.WriteLine($"Current time: {sensor.CurrentDateTime}");
        Console.WriteLine($"Temperature: {sensor.Temperature}");

        sensor.ClearInterrupt(Ds323x.Alarm.BothAlarmsRaised);
        sensor.DisplayRegisters();

        sensor.DisplayRegisters();
        sensor.SetAlarm(Ds323x.Alarm.Alarm1Raised, new DateTime(2020, 1, 1, 1, 0, 0),
                        Ds323x.AlarmType.WhenSecondsMatch);

        sensor.OnAlarm1Raised += SensorOnAlarm1Raised;
        sensor.DisplayRegisters();
    }

    void SensorOnAlarm1Raised(object sender)
    {
        var rtc = (Ds3231)sender;
        Console.WriteLine("Alarm 1 has been activated: " + rtc.CurrentDateTime.ToString("dd MMM yyyy HH:mm:ss"));
        rtc.ClearInterrupt(Ds323x.Alarm.Alarm1Raised);
    }
}
```
[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/RTCs.DS323x/Samples/RTCs.DS323x_Sample) 

### Wiring Example

The DS3231 real time clock module (see image below) requires only four (for simple timekeeping) or five (for alarms) connections

| DS323x    | Meadow Pin |
|-----------|------------|
| VCC       | 3.3V       |
| GND       | GND        |
| SCK       | SC         |
| SDA       | SD         |
| Interrupt | SQW        |

It should look like the following diagram:

<img src="../../API_Assets/Meadow.Foundation.RTCs.DS323x/DS323x_Fritzing.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />

The 32K pin outputs the 32,768 Hz clock signal from the module.  This signal is only available when power is supplied by V<sub>cc</sub>, it is not available when the module is on battery power.

The orange wire is only required if the alarms are being used to interrupt the Meadow.