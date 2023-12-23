---
uid: Meadow.Foundation.Sensors.Hid.Mpr121

---

| Mpr121 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Mpr121) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Mpr121/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Hid.Mpr121/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Hid.Mpr121.svg?label=Meadow.Foundation.Sensors.Hid.Mpr121" alt="NuGet Gallery for Meadow.Foundation.Sensors.Hid.Mpr121" /></a> |

### Code Example

```csharp
public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    var sensor = new Mpr121(Device.CreateI2cBus(Meadow.Hardware.I2cBusSpeed.Standard), 90, 100);
    sensor.ChannelStatusesChanged += Sensor_ChannelStatusesChanged;

    return Task.CompletedTask;
}

private void Sensor_ChannelStatusesChanged(object sender, ChannelStatusChangedEventArgs e)
{
    string pads = string.Empty;

    for (int i = 0; i < e.ChannelStatus.Count; i++)
    {
        if (e.ChannelStatus[(Mpr121.Channels)i] == true)
        {
            pads += i + ", ";
        }
    }

    var msg = string.IsNullOrEmpty(pads) ? "none" : (pads + "touched");
    Resolver.Log.Info(msg);
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Mpr121/Samples/Mpr121_Sample)

### Wiring Example

To wire a Mpr121 to your Meadow board, connect the following:

| Mpr121  | Meadow Pin  |
|---------|-------------|
| GND     | GND         |
| SCL     | D08 (SCL)   |
| SDA     | D07 (SDA)   |
| VCC     | 3V3         |

It should look like the following diagram:

<img src="../../API_Assets/Meadow.Foundation.Sensors.Hid.Mpr121/Mpr121_Fritzing.png" />




