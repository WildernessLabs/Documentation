---
uid: Meadow.Foundation.Sensors.Hid.Tsc2004

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
