---
uid: Meadow.Foundation.Audio.Radio.Tea5767

---

| Tea5767 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Audio.Radio.Tea5767) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Audio.Radio.Tea5767/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Audio.Radio.Tea5767/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Audio.Radio.Tea5767.svg?label=Meadow.Foundation.Audio.Radio.Tea5767" alt="NuGet Gallery for Meadow.Foundation.Audio.Radio.Tea5767" /></a> |

The **TEA5767** FM module is based on the TEA5767GH which is a single-chip, electronically tuned, FM stereo radio for low-voltage applications with fully integrated Intermediate Frequency (IF) selectivity and demodulation. 

The TEA5767 is controlled via I2C. It comes with two 1/4" jacks, one for connection to a headphone/speaker and one to connect an antenna (often sold with the module).

![TEA5767 FM module](/API_Assets/Meadow.Foundation.Audio.Radio.Tea5767/TEA5767.png)

### Code Example

```csharp
Tea5767 radio;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    radio = new Tea5767(Device.CreateI2cBus());

    return Task.CompletedTask;
}

public async override Task Run()
{
    //scan through available stations
    for (int i = 0; i < 8; i++)
    {
        await Task.Delay(1000);

        radio.SearchNextSilent();

        Resolver.Log.Info($"Current frequency: {radio.GetFrequency()}");
    }

    //set a known station
    radio.SelectFrequency(new Frequency(94.5, Frequency.UnitType.Megahertz));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Audio.Radio.Tea5767/Samples/Tea5767_Sample)

### Wiring Example

To wire a TEA5767 to your Meadow board, connect the following:

| TEA5767 | Meadow Pin  |
|---------|-------------|
| GND     | GND         |
| SCL     | D08 (SCL)   |
| SDA     | D07 (SDA)   |
| VCC     | 3V3         |

It should look like the following diagram:

![Wiring a Tea5767 to a Meadow F7](/API_Assets/Meadow.Foundation.Audio.Radio.Tea5767/TEA5767_Fritzing.png)
