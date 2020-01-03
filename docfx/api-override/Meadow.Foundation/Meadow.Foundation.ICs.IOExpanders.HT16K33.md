---
uid: Meadow.Foundation.ICs.IOExpanders.Ht16K33
remarks: *content
---

| HT16K33       |             |
|---------------|-------------|
| Status        | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.HT16K33) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.ICs.IOExpanders.HT16K33/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.ICs.IOExpanders.Ht16K33.svg?label=Meadow.Foundation.ICs.IOExpanders.Ht16K33" style="width: auto; height: -webkit-fill-available;" /></a> |

The **HT16K33** is an LED driver and key scanner. It can be used to drive up to 128 leds and is often found pre-assembled with 14-segment led displays. The HT16K33 is controlled via I2C.

### Code Example

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    HT16K33 ht16k33;

    public MeadowApp()
    {
        ht16k33 = new HT16K33(Device.CreateI2cBus());

        TestHT16K33();
    }

    void TestHT16K33() 
    {
        int index = 0;
        bool on = true;

        while (true)
        {
            ht16k33.ToggleLed((byte)index, on);
            ht16k33.UpdateDisplay();
            index++;

            if (index >= 128)
            {
                index = 0;
                on = !on;
            }

            Thread.Sleep(100);
        }
    }
}
```

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.HT16K33Samples) 

### Wiring Example

 To wire a TM1637 to your Meadow board, connect the following:

| TM1637  | Meadow Pin    |
|---------|---------------|
| GND     | GND           |
| VCC     | 3V3           |
| SCL     | D08 (SCL Pin) |
| SDA     | D07 (SDA Pin) |

<img src="../../API_Assets/Meadow.Foundation.ICs.IOExpanders.HT16K33/Ht16K33_Fritzing.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />