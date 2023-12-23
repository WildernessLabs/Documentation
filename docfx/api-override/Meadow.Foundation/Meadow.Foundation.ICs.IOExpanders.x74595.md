---
uid: Meadow.Foundation.ICs.IOExpanders.x74595

---

| x74595 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.x74595) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.x74595/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.ICs.IOExpanders.x74595/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.ICs.IOExpanders.x74595.svg?label=Meadow.Foundation.ICs.IOExpanders.x74595" alt="NuGet Gallery for Meadow.Foundation.ICs.IOExpanders.x74595" /></a> |

Shift registers offer the ability to increase the number of outputs on a microcontroller by using I2C or SPI interfaces. In the case of the 74xx595 series of shift registers, the SPI interface is used to output a series of bits that are then latched to the output pins of the chip.

This class allows Meadow to control the output pins on a 74HCT595 shift register using the SPI interface.

Note that when using this chip, care should be taken to ensure that the total output load of the chip does not exceed the current and thermal dissipation properties for the specific shift register being used.

### Code Example

```csharp
x74595 shiftRegister;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    shiftRegister = new x74595(Device.CreateSpiBus(), Device.Pins.D00, 8);

    return base.Initialize();
}

public override async Task Run()
{
    shiftRegister.Clear(true);

    Resolver.Log.Info("Set Pin 3 to high");
    //turn on pin 3
    shiftRegister.WriteToPin(shiftRegister.Pins.GP3, true);

    Resolver.Log.Info("Set Pin 4 to high");

    //get the port for Pin4
    var port4 = shiftRegister.CreateDigitalOutputPort(shiftRegister.Pins.GP4, true, Meadow.Hardware.OutputType.OpenDrain);

    Resolver.Log.Info("Toggle pin 4");

    await Task.Delay(1000);
    port4.State = false;
    await Task.Delay(1000);
    port4.State = true;
    await Task.Delay(1000);

    Resolver.Log.Info("Raise all pins to high");
    while (true)
    {
        shiftRegister.Clear();

        foreach (var pin in shiftRegister.Pins.AllPins)
        {
            shiftRegister.WriteToPin(pin, true);
            await Task.Delay(50);
        }
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.x74595/Samples/x74595_Sample)

### Wiring Example

To wire a 74HCT595 to your Meadow board, connect the following:

<img src="../../API_Assets/Meadow.Foundation.ICs.IOExpanders.x74595/x74595_Fritzing.svg" />




