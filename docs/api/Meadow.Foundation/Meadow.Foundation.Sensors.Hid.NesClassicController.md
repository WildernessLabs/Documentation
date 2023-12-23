---
uid: Meadow.Foundation.Sensors.Hid.NesClassicController

---

| NesClassicController | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Hid.WiiExtensionControllers/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Hid.WiiExtensionControllers.svg?label=Meadow.Foundation.Sensors.Hid.WiiExtensionControllers" alt="NuGet Gallery for Meadow.Foundation.Sensors.Hid.WiiExtensionControllers" /></a> |

### Code Example

```csharp
NesClassicController nesController;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    var i2cBus = Device.CreateI2cBus(NesClassicController.DefaultI2cSpeed);

    nesController = new NesClassicController(i2cBus: i2cBus);

    //onetime update - could be used in a game loop
    nesController.Update();

    //check the state of a button
    Resolver.Log.Info("X Button is " + (nesController.AButton.State == true ? "pressed" : "not pressed"));

    //.NET events
    nesController.AButton.Clicked += (s, e) => Resolver.Log.Info("A button clicked");
    nesController.BButton.Clicked += (s, e) => Resolver.Log.Info("B button clicked");

    nesController.StartButton.Clicked += (s, e) => Resolver.Log.Info("+ button clicked");
    nesController.SelectButton.Clicked += (s, e) => Resolver.Log.Info("- button clicked");

    nesController.DPad.Updated += (s, e) => Resolver.Log.Info($"DPad {e.New}");

    return Task.CompletedTask;
}

public override Task Run()
{
    nesController.StartUpdating(TimeSpan.FromMilliseconds(200));
    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Samples/NesClassicController_Sample)

### Wiring Example

To wire a NesClassicController to your Meadow board, connect the following:

| NesClassicController  | Meadow Pin  |
|---------|-------------|
| GND     | GND         |
| SCL     | D08 (SCL)   |
| SDA     | D07 (SDA)   |
| VCC     | 3V3         |
