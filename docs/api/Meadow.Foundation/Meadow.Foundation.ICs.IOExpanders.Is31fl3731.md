---
uid: Meadow.Foundation.ICs.IOExpanders.Is31fl3731
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Is31fl3731
---

| Is31fl3731 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Is31fl3731) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Is31fl3731/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.ICs.IOExpanders.Is31fl3731/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.ICs.IOExpanders.Is31fl3731.svg?label=Meadow.Foundation.ICs.IOExpanders.Is31fl3731" alt="NuGet Gallery for Meadow.Foundation.ICs.IOExpanders.Is31fl3731" /></a> |

### Code Example

```csharp
Is31fl3731 iS31FL3731;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");
    iS31FL3731 = new Is31fl3731(Device.CreateI2cBus());
    iS31FL3731.Initialize();

    return base.Initialize();
}

public override Task Run()
{
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

    return base.Run();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Is31fl3731/Samples/Is31fl3731_Sample)

### Wiring Example

To wire a Is31fl3731 to your Meadow board, connect the following:

<img src="/API_Assets/Meadow.Foundation.ICs.IOExpanders.Is31fl3731/Is31fl3731_Fritzing.png" />

