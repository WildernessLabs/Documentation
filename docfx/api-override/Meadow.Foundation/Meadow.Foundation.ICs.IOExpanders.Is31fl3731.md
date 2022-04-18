---
uid: Meadow.Foundation.ICs.IOExpanders.Is31fl3731
remarks: *content
---

| Is31fl3731 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Is31fl3731) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.ICs.IOExpanders.Is31fl3731/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.ICs.IOExpanders.Is31fl3731.svg?label=Meadow.Foundation.ICs.IOExpanders.Is31fl3731" /></a> |

### Code Example

```csharp
Is31fl3731 iS31FL3731;
public MeadowApp()
{
    Console.WriteLine("Initialize hardware...");

    iS31FL3731 = new Is31fl3731(Device.CreateI2cBus());
    iS31FL3731.Initialize();

    iS31FL3731.ClearAllFrames();
    iS31FL3731.SetFrame(frame: 0);
    iS31FL3731.DisplayFrame(frame: 0);

    //Turn on all LEDs in frame
    for (byte i = 0; i <= 144; i++)
    {
        iS31FL3731.SetLedPwm(
            frame: 0, 
            ledIndex: i, 
            brightness: 128);

        Thread.Sleep(50);
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Is31fl3731/Samples/Is31fl3731_Sample)

### Wiring Example

To wire a Is31fl3731 to your Meadow board, connect the following:

<img src="../../API_Assets/Meadow.Foundation.ICs.IOExpanders.Is31fl3731/Is31fl3731_Fritzing.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />

