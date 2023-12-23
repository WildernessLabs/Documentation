---
uid: Meadow.Foundation.Grove.Displays.4-DigitDisplay

---

| 4-DigitDisplay | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/4-DigitDisplay) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Grove.Displays.4DigitDisplay/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Grove.Displays.4DigitDisplay.svg?label=Meadow.Foundation.Grove.Displays.4DigitDisplay" alt="NuGet Gallery for Meadow.Foundation.Grove.Displays.4DigitDisplay" /></a> |

### Code Example

```csharp
FourDigitDisplay display;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing ...");

    display = new FourDigitDisplay(
        pinClock: Device.Pins.D02,
        pinData: Device.Pins.D01)
    {
        Brightness = 7,
        ScreenOn = true
    };

    return Task.CompletedTask;
}

public override Task Run()
{
    display.Clear();

    var chars = new Character[] { Character.A, Character.B, Character.C, Character.D };

    display.Show(chars);

    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/4-DigitDisplay/Sample/4-DigitDisplay_Sample)

