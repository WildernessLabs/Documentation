---
uid: Meadow.Foundation.Sensors.Hid.NesClassicController
remarks: *content
---

| NesClassicController | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Hid.WiiExtensionControllers/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Hid.WiiExtensionControllers.svg?label=Meadow.Foundation.Sensors.Hid.WiiExtensionControllers" alt="NuGet Gallery for Meadow.Foundation.Sensors.Hid.WiiExtensionControllers" /></a> |

### Code Example

```csharp
NesClassicController nesController;

public override Task Initialize()
{
    Console.WriteLine("Initialize...");

    var i2cBus = Device.CreateI2cBus(NesClassicController.DefaultSpeed);

    nesController = new NesClassicController(i2cBus: i2cBus);

    //onetime update - could be used in a game loop
    nesController.Update();

    //check the state of a button
    Console.WriteLine("X Button is " + (nesController.AButton.State == true ? "pressed" : "not pressed"));

    //.NET events
    nesController.AButton.Clicked += (s, e) => Console.WriteLine("A button clicked");
    nesController.BButton.Clicked += (s, e) => Console.WriteLine("B button clicked");

    nesController.StartButton.Clicked += (s, e) => Console.WriteLine("+ button clicked");
    nesController.SelectButton.Clicked += (s, e) => Console.WriteLine("- button clicked");

    nesController.DPad.Updated += (s, e) => Console.WriteLine($"DPad {e.New}");

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
