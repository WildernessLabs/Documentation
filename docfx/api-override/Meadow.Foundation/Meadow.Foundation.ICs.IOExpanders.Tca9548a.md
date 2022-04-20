---
uid: Meadow.Foundation.ICs.IOExpanders.Tca9548a
remarks: *content
---

| Tca9548a | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.TCA9548A) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.ICs.IOExpanders.Tca9548a/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.ICs.IOExpanders.Tca9548a.svg?label=Meadow.Foundation.ICs.IOExpanders.Tca9548a" alt="NuGet Gallery for Tca9548a" /></a> |

[Explanation of the peripheral]

### Code Example

```csharp
public MeadowApp()
{
    Console.WriteLine("Initialize hardware...");

    var i2cBus = Device.CreateI2cBus(I2cBusSpeed.Standard);
    var tca9548a = new Tca9548a(i2cBus, 0x70);
    var mcp0 = new Mcp23x08(tca9548a.Bus0);
    var mcp1 = new Mcp23x08(tca9548a.Bus1);
  
    var bus0Port0 = mcp0.CreateDigitalOutputPort(mcp0.Pins.GP0);
    var bus1Port0 = mcp1.CreateDigitalOutputPort(mcp1.Pins.GP0);

    while (true)
    {
        bus0Port0.State = true;
        bus1Port0.State = false;
        Thread.Sleep(1000);
        bus0Port0.State = false;
        bus1Port0.State = true;
        Thread.Sleep(1000);
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





