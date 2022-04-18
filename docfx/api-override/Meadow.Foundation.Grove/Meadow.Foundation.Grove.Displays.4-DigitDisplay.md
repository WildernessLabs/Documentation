---
uid: Meadow.Foundation.Grove.Displays.FourDigitDisplay
remarks: *content
---

| 4-DigitDisplay | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/4-DigitDisplay) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Grove.Displays.4-DigitDisplay/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Grove.Displays.4-DigitDisplay.svg?label=Meadow.Foundation.Grove.Displays.4-DigitDisplay" /></a> |

### Code Example

```csharp
FourDigitDisplay display;

public MeadowApp()
{
    Console.WriteLine("Initializing ...");

    display = new FourDigitDisplay(Device, Device.Pins.D02, Device.Pins.D01);

    display.Brightness = 7;
    display.ScreenOn = true;

    display.Clear();

    var chars = new Character[] { Character.A, Character.B, Character.C, Character.D };

    display.Show(chars);
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/4-DigitDisplay/Sample/4-DigitDisplay_Sample)

### Wiring Example

| FourDigitDisplay | Meadow Pin |
|--------|------------|
| GND    | GND        |
| VCC    | 3.3V       |
| RX     | D01        |
| TX     | D00        |

