---
uid: Meadow.Foundation.ICs.IOExpanders.Tca9548a

---

| Tca9548a | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.TCA9548A) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.TCA9548A/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.ICs.IOExpanders.Tca9548a/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.ICs.IOExpanders.Tca9548a.svg?label=Meadow.Foundation.ICs.IOExpanders.Tca9548a" alt="NuGet Gallery for Meadow.Foundation.ICs.IOExpanders.Tca9548a" /></a> |

[Explanation of the peripheral]

### Code Example

```csharp
IDigitalOutputPort bus0Port0;
IDigitalOutputPort bus1Port0;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    var i2cBus = Device.CreateI2cBus(I2cBusSpeed.Standard);
    var tca9548a = new Tca9548a(i2cBus, 0x70);
    var mcp0 = new Mcp23008(tca9548a.Bus0);
    var mcp1 = new Mcp23008(tca9548a.Bus1);

    bus0Port0 = mcp0.CreateDigitalOutputPort(mcp0.Pins.GP0);
    bus1Port0 = mcp1.CreateDigitalOutputPort(mcp1.Pins.GP0);

    return base.Initialize();
}

public override async Task Run()
{
    while (true)
    {
        bus0Port0.State = true;
        bus1Port0.State = false;

        await Task.Delay(1000);

        bus0Port0.State = false;
        bus1Port0.State = true;

        await Task.Delay(1000);
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.TCA9548A/Samples/Tca9548a_Sample)

### Wiring Example

To wire a Tca9548a to your Meadow board, connect the following:

| Tca9548a | Meadow Pin  |
|----------|-------------|
| GND      | GND         |
| SCL      | D08 (SCL)   |
| SDA      | D07 (SDA)   |
| VCC      | 3V3         |

It should look like the following diagram:

ToDo: Fritzing diagram here





