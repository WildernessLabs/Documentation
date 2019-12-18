---
uid: Meadow.Foundation.ICs.IOExpanders.HT16K33
remarks: *content
---

| Max7219       |             |
|---------------|-------------|
| Status        | Working     |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.HT16K33) |
| NuGet package | ![NuGet](https://img.shields.io/nuget/v/Meadow.Foundation.ICs.IOExpanders.HT16K33.svg?label=NuGet) |
| | |

### Code Example

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    HT16K33 ht16k33;

    public MeadowApp()
    {
        Console.WriteLine("Initialize...");
        ht16k33 = new HT16K33(Device.CreateI2cBus());

        TestHT16K33();
    }

    void TestHT16K33() 
    {
        Console.WriteLine("TestHT16K33...");

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