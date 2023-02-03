---
uid: Meadow.Foundation.RTCs.Ds323x
remarks: *content
---

| Ds323x | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/RTCs.Ds323x) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/RTCs.Ds323x/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.RTCs.Ds323x/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.RTCs.Ds323x.svg?label=Meadow.Foundation.RTCs.Ds323x" alt="NuGet Gallery for Meadow.Foundation.RTCs.Ds323x" /></a> |

The **DS323x** is a low-cost and accurate real-time clock with a temperature compensation crystal oscillator. This range of chips offers the following functionality:

* Temperature compensation
* Battery backup
* I2C (DS3231) and SPI (DS3234) interfaces.
* Two programmable alarms
* 32.768 KHz square wave output

### Code Example

```csharp
Ds3231 sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    sensor = new Ds3231(Device, Device.CreateI2cBus(), Device.Pins.D06);
    sensor.OnAlarm1Raised += Sensor_OnAlarm1Raised;

    return base.Initialize();
}

public override Task Run()
{
    sensor.CurrentDateTime = new DateTime(2020, 1, 1);

    Resolver.Log.Info($"Current time: {sensor.CurrentDateTime}");
    Resolver.Log.Info($"Temperature: {sensor.Temperature}");

    sensor.ClearInterrupt(Ds323x.Alarm.BothAlarmsRaised);

    sensor.SetAlarm(Ds323x.Alarm.Alarm1Raised,
        new DateTime(2020, 1, 1, 1, 0, 0),
        Ds323x.AlarmType.WhenSecondsMatch);

    sensor.DisplayRegisters();

    return base.Run();
}

private void Sensor_OnAlarm1Raised(object sender)
{
    var rtc = (Ds3231)sender;
    Resolver.Log.Info("Alarm 1 has been activated: " + rtc.CurrentDateTime.ToString("dd MMM yyyy HH:mm:ss"));
    rtc.ClearInterrupt(Ds323x.Alarm.Alarm1Raised);
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/RTCs.Ds323x/Samples/Ds323x_Sample)

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




