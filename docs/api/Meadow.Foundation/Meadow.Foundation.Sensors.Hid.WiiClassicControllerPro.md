---
uid: Meadow.Foundation.Sensors.Hid.WiiClassicControllerPro
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid.WiiClassicControllerPro
---

| WiiClassicControllerPro | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Hid.WiiExtensionControllers/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Hid.WiiExtensionControllers.svg?label=Meadow.Foundation.Sensors.Hid.WiiExtensionControllers" alt="NuGet Gallery for Meadow.Foundation.Sensors.Hid.WiiExtensionControllers" /></a> |

### Code Example

```csharp
WiiClassicControllerPro classicControllerPro;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    var i2cBus = Device.CreateI2cBus(WiiClassicControllerPro.DefaultI2cSpeed);

    classicControllerPro = new WiiClassicControllerPro(i2cBus: i2cBus,
                                                 useHighResolutionMode: true);

    //onetime update - could be used in a game loop
    classicControllerPro.Update();

    //check the state of a button
    Resolver.Log.Info("X Button is " + (classicControllerPro.XButton.State == true ? "pressed" : "not pressed"));

    //.NET events
    classicControllerPro.AButton.Clicked += (s, e) => Resolver.Log.Info("A button clicked");
    classicControllerPro.BButton.Clicked += (s, e) => Resolver.Log.Info("B button clicked");
    classicControllerPro.XButton.Clicked += (s, e) => Resolver.Log.Info("X button clicked");
    classicControllerPro.YButton.Clicked += (s, e) => Resolver.Log.Info("Y button clicked");

    classicControllerPro.LButton.Clicked += (s, e) => Resolver.Log.Info("L button clicked");
    classicControllerPro.RButton.Clicked += (s, e) => Resolver.Log.Info("R button clicked");
    classicControllerPro.ZLButton.Clicked += (s, e) => Resolver.Log.Info("ZL button clicked");
    classicControllerPro.ZRButton.Clicked += (s, e) => Resolver.Log.Info("ZR button clicked");

    classicControllerPro.PlusButton.Clicked += (s, e) => Resolver.Log.Info("+ button clicked");
    classicControllerPro.MinusButton.Clicked += (s, e) => Resolver.Log.Info("- button clicked");
    classicControllerPro.HomeButton.Clicked += (s, e) => Resolver.Log.Info("Home button clicked");

    classicControllerPro.DPad.Updated += (s, e) => Resolver.Log.Info($"DPad {e.New}");

    classicControllerPro.LeftAnalogStick.Updated += (s, e) => Resolver.Log.Info($"Left Analog Stick {e.New.Horizontal}, {e.New.Vertical}");
    classicControllerPro.RightAnalogStick.Updated += (s, e) => Resolver.Log.Info($"Right Analog Stick {e.New.Horizontal}, {e.New.Vertical}");

    return Task.CompletedTask;
}

public override Task Run()
{
    classicControllerPro.StartUpdating(TimeSpan.FromMilliseconds(200));
    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Samples/WiiClassicControllerPro_Sample)

### Wiring Example

To wire a WiiClassicControllerPro to your Meadow board, connect the following:

| WiiClassicControllerPro  | Meadow Pin  |
|---------|-------------|
| GND     | GND         |
| SCL     | D08 (SCL)   |
| SDA     | D07 (SDA)   |
| VCC     | 3V3         |
