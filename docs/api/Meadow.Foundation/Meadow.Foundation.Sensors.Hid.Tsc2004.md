---
uid: Meadow.Foundation.Sensors.Hid.Tsc2004
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid.Tsc2004
---

| Tsc2004 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Tsc2004) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Tsc2004/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Hid.Tsc2004/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Hid.Tsc2004.svg?label=Meadow.Foundation.Sensors.Hid.Tsc2004" alt="NuGet Gallery for Meadow.Foundation.Sensors.Hid.Tsc2004" /></a> |

### Code Example

```csharp
Tsc2004 touchScreen;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    var i2cBus = Device.CreateI2cBus(I2cBusSpeed.Fast);

    touchScreen = new Tsc2004(i2cBus)
    {
        DisplayWidth = 240,
        DisplayHeight = 320,
        XMin = 260,
        XMax = 3803,
        YMin = 195,
        YMax = 3852,
        Rotation = RotationType._90Degrees
    };

    return Task.CompletedTask;
}

public override Task Run()
{
    return Task.Run(() =>
    {
        Point3d pt;

        while (true)
        {
            if (touchScreen.IsTouched())
            {
                pt = touchScreen.GetPoint();
                Resolver.Log.Info($"Location: X:{pt.X}, Y:{pt.Y}, Z:{pt.Z}");
            }

            Thread.Sleep(0);
        }
    });
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Tsc2004/Samples/Tsc2004_Sample)

### Wiring Example

To wire a Tsc2004 to your Meadow board, connect the following:

| Tsc2004  | Meadow Pin  |
|---------|-------------|
| GND     | GND         |
| SCL     | D08 (SCL)   |
| SDA     | D07 (SDA)   |
| VCC     | 3V3         |

# Class Tsc2004
Represents a TSC2004 4-wire touch screen controller

###### **Assembly**: Tsc2004.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Tsc2004/Driver/Tsc2004.Registers.cs#L3)
```csharp title="Declaration"
public class Tsc2004 : II2cPeripheral
```
**Implements:**  
`Meadow.Hardware.II2cPeripheral`

## Properties
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Tsc2004/Driver/Tsc2004.cs#L16)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
### XMin
Minimum X value of touchscreen (defaults to 366)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Tsc2004/Driver/Tsc2004.cs#L26)
```csharp title="Declaration"
public int XMin { get; set; }
```
### XMax
Maximum X value of touchscreen (defaults to 3567)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Tsc2004/Driver/Tsc2004.cs#L31)
```csharp title="Declaration"
public int XMax { get; set; }
```
### YMin
Minimum Y value of touchscreen (defaults to 334)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Tsc2004/Driver/Tsc2004.cs#L36)
```csharp title="Declaration"
public int YMin { get; set; }
```
### YMax
Maximum Y value of touchscreen (defaults to 3787)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Tsc2004/Driver/Tsc2004.cs#L41)
```csharp title="Declaration"
public int YMax { get; set; }
```
### DisplayWidth
Width of display in pixels at default rotation
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Tsc2004/Driver/Tsc2004.cs#L46)
```csharp title="Declaration"
public int DisplayWidth { get; set; }
```
### DisplayHeight
Height of display in pixels at default rotation
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Tsc2004/Driver/Tsc2004.cs#L51)
```csharp title="Declaration"
public int DisplayHeight { get; set; }
```
### Rotation
Touchscreen rotation
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Tsc2004/Driver/Tsc2004.cs#L56)
```csharp title="Declaration"
public RotationType Rotation { get; set; }
```
## Fields
### i2cComms
I2C Communication bus used to communicate with the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Tsc2004/Driver/Tsc2004.cs#L21)
```csharp title="Declaration"
protected readonly II2cCommunications i2cComms
```
## Methods
### GetPoint()
Get the current scaled touch location
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Tsc2004/Driver/Tsc2004.cs#L95)
```csharp title="Declaration"
public Point3d GetPoint()
```

##### Returns

[Meadow.Foundation.Graphics.Point3d](../Point3d)
### GetPointRaw()
Get the current raw touch location
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Tsc2004/Driver/Tsc2004.cs#L113)
```csharp title="Declaration"
public Point3d GetPointRaw()
```

##### Returns

[Meadow.Foundation.Graphics.Point3d](../Point3d)
### IsTouched()
Does the screen detect an active touch
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Tsc2004/Driver/Tsc2004.cs#L151)
```csharp title="Declaration"
public bool IsTouched()
```

##### Returns

`System.Boolean`: True if touched### IsBufferEmpty()
Is the touch buffer empty
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Tsc2004/Driver/Tsc2004.cs#L159)
```csharp title="Declaration"
public bool IsBufferEmpty()
```

##### Returns

`System.Boolean`: True if empty
## Implements

* `Meadow.Hardware.II2cPeripheral`
