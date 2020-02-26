---
uid: Meadow.Foundation.ICs.IOExpanders.x74595
remarks: *content
---

| x74595        |               |
|---------------|---------------|
| Status        | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" />   |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.x74595) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.ICs.IOExpanders.x74595/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.ICs.IOExpanders.x74595.svg?label=Meadow.Foundation.ICs.IOExpanders.x74595" style="width: auto; height: -webkit-fill-available;" /></a> |

Shift registers offer the ability to increase the number of outputs on a microcontroller by using I2C or SPI interfaces. In the case of the 74xx595 series of shift registers, the SPI interface is used to output a series of bits that are then latched to the output pins of the chip.

This class allows Meadow to control the output pins on a 74HCT595 shift register using the SPI interface.

Note that when using this chip, care should be taken to ensure that the total output load of the chip does not exceed the current and thermal dissipation properties for the specific shift register being used.

### Code Example

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    x74595 shiftRegister;

    public MeadowApp()
    {
        shiftRegister =new x74595(Device, Device.CreateSpiBus(), Device.Pins.D03, 8);

        shiftRegister.Clear(true);

        Console.WriteLine("Set Pin 3 to high");
        shiftRegister.WriteToPin(shiftRegister.Pins.GP3, true);

        TestX74595();
    }

    void TestX74595()
    {
        while (true)
        {
            shiftRegister.Clear();
            foreach (var pin in shiftRegister.Pins.AllPins)
            {
                shiftRegister.WriteToPin(pin, true);
                Thread.Sleep(50);
            }
        }
    }
}
```

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.x74595) 

### Wiring Example

To wire a 74HCT595 to your Meadow board, connect the following:

<img src="../../API_Assets/Meadow.Foundation.ICs.IOExpanders.x74595/x74595.svg" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />