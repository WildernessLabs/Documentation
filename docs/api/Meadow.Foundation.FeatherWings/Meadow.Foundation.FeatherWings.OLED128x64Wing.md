---
uid: Meadow.Foundation.FeatherWings.OLED128x64Wing
slug: /docs/api/Meadow.Foundation.FeatherWings/Meadow.Foundation.FeatherWings.OLED128x64Wing
---

| OLED128x64Wing | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings/tree/main/Source/OLED128x64Wing) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings/tree/main/Source/OLED128x64Wing/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.FeatherWings.OLED128x64Wing/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.FeatherWings.OLED128x64Wing.svg?label=Meadow.Foundation.FeatherWings.OLED128x64Wing" alt="NuGet Gallery for Meadow.Foundation.FeatherWings.OLED128x64Wing" /></a> |
### Code Example

```csharp
OLED128x64Wing oledWing;
MicroGraphics graphics;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");
    var i2cBus = Device.CreateI2cBus(I2cBusSpeed.FastPlus);

    oledWing = new OLED128x64Wing(i2cBus, Device.Pins.D11, Device.Pins.D10, Device.Pins.D09);

    graphics = new MicroGraphics(oledWing.Display);
    // Use RotationType.Default for "native" screen orientation or RotationType._90Degrees for "wide" orientation.
    graphics.Rotation = RotationType._90Degrees;
    graphics.CurrentFont = new Font8x8();

    oledWing.ButtonA.Clicked += (sender, e) => UpdateDisplay("A Clicked");
    oledWing.ButtonB.Clicked += (sender, e) => UpdateDisplay("B Clicked");
    oledWing.ButtonC.Clicked += (sender, e) => UpdateDisplay("C Clicked");

    UpdateDisplay("Ready");
    return Task.CompletedTask;
}

void UpdateDisplay(string message)
{
    graphics.Clear();
    graphics.DrawText(x: 0, y: 8, message);
    graphics.Show();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings/tree/main/Source/OLED128x64Wing/Sample/OLED128x64Wing_Sample)

