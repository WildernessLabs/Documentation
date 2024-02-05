---
uid: Meadow.Foundation.Displays.Tm1637
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Tm1637
---

| Tm1637 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Tm1637) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Tm1637/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.Tm1637/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.Tm1637.svg?label=Meadow.Foundation.Displays.Tm1637" alt="NuGet Gallery for Meadow.Foundation.Displays.Tm1637" /></a> |

The **TM1637** is a led driver and keyboard scan interface. However, this chip is almost exclusively found pre-assembled with with 4 7-segment displays.

### Purchasing

* [HALJIA 0.91 128x32 pixel OLED Display](https://www.amazon.co.uk/gp/product/B071Z18R1M/ref=oh_aui_detailpage_o03_s00?ie=UTF8&psc=1)

### Code Example

```csharp
Tm1637 display;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    display = new Tm1637(Device.Pins.D02, Device.Pins.D01);

    display.Brightness = 7;
    display.ScreenOn = true;

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

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Tm1637/Samples/Tm1637_Sample)

### Wiring Example

 To wire a TM1637 to your Meadow board, connect the following:

| TM1637  | Meadow Pin    |
|---------|---------------|
| GND     | GND           |
| VCC     | 3V3           |
| SCL     | D08 (SCL Pin) |
| SDA     | D07 (SDA Pin) |

![Wiring a TM1637 to a Meadow F7](/API_Assets/Meadow.Foundation.Displays.Tm1637/Tm1637_Fritzing.png)
