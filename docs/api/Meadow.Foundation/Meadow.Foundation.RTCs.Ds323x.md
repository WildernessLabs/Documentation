---
uid: Meadow.Foundation.RTCs.Ds323x
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.RTCs.Ds323x
---

| Ds323x | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
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

    sensor = new Ds3231(Device.CreateI2cBus(), Device.Pins.D06);
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

<img src="/API_Assets/Meadow.Foundation.RTCs.DS323x/DS323x_Fritzing.png" />

The 32K pin outputs the 32,768 Hz clock signal from the module.  This signal is only available when power is supplied by V<sub>cc</sub>, it is not available when the module is on battery power.

The orange wire is only required if the alarms are being used to interrupt the Meadow.





# Class Ds323x
DS323X real-time clock

###### **Assembly**: Ds323x.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/RTCs.Ds323x/Driver/Ds323x.Registers.cs#L3)
```csharp title="Declaration"
public class Ds323x : II2cPeripheral, IDisposable
```
**Derived:**  
[Meadow.Foundation.RTCs.Ds3231](../Ds3231)

**Implements:**  
`Meadow.Hardware.II2cPeripheral`, `System.IDisposable`

## Properties
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/RTCs.Ds323x/Driver/Ds323x.cs#L15)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/RTCs.Ds323x/Driver/Ds323x.cs#L20)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
### CurrentDateTime
Get / Set the current date and time.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/RTCs.Ds323x/Driver/Ds323x.cs#L191)
```csharp title="Declaration"
public DateTime CurrentDateTime { get; set; }
```
### Temperature
Get the current die temperature.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/RTCs.Ds323x/Driver/Ds323x.cs#L208)
```csharp title="Declaration"
public Temperature Temperature { get; }
```
### InterruptPort
Interrupt port attached to the DS323x RTC module.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/RTCs.Ds323x/Driver/Ds323x.cs#L227)
```csharp title="Declaration"
protected IDigitalInterruptPort? InterruptPort { get; }
```
### ControlRegister
Control register.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/RTCs.Ds323x/Driver/Ds323x.cs#L236)
```csharp title="Declaration"
protected byte ControlRegister { get; set; }
```
### ControlStatusRegister
Control and status register.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/RTCs.Ds323x/Driver/Ds323x.cs#L249)
```csharp title="Declaration"
protected byte ControlStatusRegister { get; set; }
```
### WhichAlarm
Determine which alarm has been raised.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/RTCs.Ds323x/Driver/Ds323x.cs#L258)
```csharp title="Declaration"
protected Ds323x.Alarm WhichAlarm { get; }
```
## Fields
### i2cComms
I2C Communication bus used to communicate with the i2cComms
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/RTCs.Ds323x/Driver/Ds323x.cs#L222)
```csharp title="Declaration"
protected II2cCommunications i2cComms
```
## Methods
### DecodeDateTimeRegisters(Span&lt;byte&gt;)
Decode the register contents and create a DateTime version of the
register contents.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/RTCs.Ds323x/Driver/Ds323x.cs#L287)
```csharp title="Declaration"
protected DateTime DecodeDateTimeRegisters(Span<byte> data)
```

##### Returns

`System.DateTime`: DateTime object version of the data.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Span<System.Byte>` | *data* | Register contents. |

### EncodeDateTimeRegisters(DateTime)
Encode the a DateTime object into the format used by the DS323x chips.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/RTCs.Ds323x/Driver/Ds323x.cs#L321)
```csharp title="Declaration"
protected byte[] EncodeDateTimeRegisters(DateTime dt)
```

##### Returns

`System.Byte[]`: Bytes to send to the DS323x chip.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.DateTime` | *dt* | DateTime object to encode. |

### DayOfWeekToByte(DayOfWeek)
Convert the day of the week to a byte.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/RTCs.Ds323x/Driver/Ds323x.cs#L348)
```csharp title="Declaration"
protected byte DayOfWeekToByte(DayOfWeek day)
```

##### Returns

`System.Byte`: Byte representation of the day of the week (Sunday = 1).
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.DayOfWeek` | *day* | Day of the week |

### SetAlarm(Alarm, DateTime, AlarmType)
Set one of the two alarms on the DS323x module.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/RTCs.Ds323x/Driver/Ds323x.cs#L384)
```csharp title="Declaration"
public void SetAlarm(Ds323x.Alarm alarm, DateTime time, Ds323x.AlarmType type)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.RTCs.Ds323x.Alarm](../Ds323x.Alarm) | *alarm* | Define the alarm to be set. |
| `System.DateTime` | *time* | Date and time for the alarm. |
| [Meadow.Foundation.RTCs.Ds323x.AlarmType](../Ds323x.AlarmType) | *type* | Type of alarm to set. |

### EnableDisableAlarm(Alarm, bool)
Enable or disable the specified alarm.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/RTCs.Ds323x/Driver/Ds323x.cs#L480)
```csharp title="Declaration"
public void EnableDisableAlarm(Ds323x.Alarm alarm, bool enable)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.RTCs.Ds323x.Alarm](../Ds323x.Alarm) | *alarm* | Alarm to enable / disable. |
| `System.Boolean` | *enable* | Alarm state, true = on, false = off. |

### ClearInterrupt(Alarm)
Clear the alarm interrupt flag for the specified alarm.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/RTCs.Ds323x/Driver/Ds323x.cs#L512)
```csharp title="Declaration"
public void ClearInterrupt(Ds323x.Alarm alarm)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.RTCs.Ds323x.Alarm](../Ds323x.Alarm) | *alarm* | Alarm to clear. |

### DisplayRegisters()
Display the registers.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/RTCs.Ds323x/Driver/Ds323x.cs#L534)
```csharp title="Declaration"
public void DisplayRegisters()
```
### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/RTCs.Ds323x/Driver/Ds323x.cs#L542)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/RTCs.Ds323x/Driver/Ds323x.cs#L552)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |

## Events
### OnAlarm1Raised
Event raised when Alarm1 is triggered.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/RTCs.Ds323x/Driver/Ds323x.cs#L147)
```csharp title="Declaration"
public event Ds323x.AlarmRaised OnAlarm1Raised
```
##### Event Type
[Meadow.Foundation.RTCs.Ds323x.AlarmRaised](../Ds323x.AlarmRaised)
### OnAlarm2Raised
Event raised when Alarm2 is triggered.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/RTCs.Ds323x/Driver/Ds323x.cs#L169)
```csharp title="Declaration"
public event Ds323x.AlarmRaised OnAlarm2Raised
```
##### Event Type
[Meadow.Foundation.RTCs.Ds323x.AlarmRaised](../Ds323x.AlarmRaised)

## Implements

* `Meadow.Hardware.II2cPeripheral`
* `System.IDisposable`
