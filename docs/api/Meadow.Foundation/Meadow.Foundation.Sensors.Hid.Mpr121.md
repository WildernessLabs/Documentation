---
uid: Meadow.Foundation.Sensors.Hid.Mpr121
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid.Mpr121
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

<img src="/API_Assets/Meadow.Foundation.Sensors.Hid.Mpr121/Mpr121_Fritzing.png" />





# Class Mpr121
Represents the MPR121 12-Key Capacitive Touch Sensor

###### **Assembly**: Mpr121.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Mpr121/Driver/Mpr121.enums.cs#L3)
```csharp title="Declaration"
public class Mpr121 : II2cPeripheral
```
**Implements:**  
`Meadow.Hardware.II2cPeripheral`

## Properties
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Mpr121/Driver/Mpr121.cs#L17)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
### RefreshPeriod
Gets or sets the period in milliseconds to refresh the channels statuses.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Mpr121/Driver/Mpr121.cs#L44)
```csharp title="Declaration"
public int RefreshPeriod { get; set; }
```
## Fields
### i2cComms
I2C Communication bus used to communicate with the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Mpr121/Driver/Mpr121.cs#L22)
```csharp title="Declaration"
protected readonly II2cCommunications i2cComms
```
## Methods
### ReadChannelStatus(Channels)
Reads the channel status of MPR121 controller.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Mpr121/Driver/Mpr121.cs#L100)
```csharp title="Declaration"
public bool ReadChannelStatus(Mpr121.Channels channel)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Sensors.Hid.Mpr121.Channels](../Mpr121.Channels) | *channel* | The channel to read status. |

### ReadChannelStatuses()
Reads the channel statuses of MPR121 controller.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Mpr121/Driver/Mpr121.cs#L110)
```csharp title="Declaration"
public IReadOnlyDictionary<Mpr121.Channels, bool> ReadChannelStatuses()
```

##### Returns

`System.Collections.Generic.IReadOnlyDictionary<Meadow.Foundation.Sensors.Hid.Mpr121.Channels,System.Boolean>`
## Events
### ChannelStatusesChanged
Notifies about a the channel statuses have been changed.
Refresh period can be changed by setting PeriodRefresh property.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Mpr121/Driver/Mpr121.cs#L34)
```csharp title="Declaration"
public event EventHandler<ChannelStatusChangedEventArgs> ChannelStatusesChanged
```
##### Event Type
`System.EventHandler<Meadow.Foundation.Sensors.Hid.ChannelStatusChangedEventArgs>`

## Implements

* `Meadow.Hardware.II2cPeripheral`
