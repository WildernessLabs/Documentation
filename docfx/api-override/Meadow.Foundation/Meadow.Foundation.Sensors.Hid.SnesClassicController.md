---
uid: Meadow.Foundation.Sensors.Hid.SnesClassicController
remarks: *content
---

| SnesClassicController | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Hid.WiiExtensionControllers/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Hid.WiiExtensionControllers.svg?label=Meadow.Foundation.Sensors.Hid.WiiExtensionControllers" alt="NuGet Gallery for Meadow.Foundation.Sensors.Hid.WiiExtensionControllers" /></a> |

### Code Example

```csharp
SnesClassicController snesController;

public override Task Initialize()
{
    Console.WriteLine("Initialize...");

    var i2cBus = Device.CreateI2cBus(SnesClassicController.DefaultSpeed);

    snesController = new SnesClassicController(i2cBus: i2cBus);

    //onetime update - could be used in a game loop
    snesController.Update();

    //check the state of a button
    Console.WriteLine("X Button is " + (snesController.XButton.State == true ? "pressed" : "not pressed"));

    //.NET events
    snesController.AButton.Clicked += (s, e) => Console.WriteLine("A button clicked");
    snesController.BButton.Clicked += (s, e) => Console.WriteLine("B button clicked");
    snesController.XButton.Clicked += (s, e) => Console.WriteLine("X button clicked");
    snesController.YButton.Clicked += (s, e) => Console.WriteLine("Y button clicked");

    snesController.LButton.Clicked += (s, e) => Console.WriteLine("L button clicked");
    snesController.RButton.Clicked += (s, e) => Console.WriteLine("R button clicked");

    snesController.StartButton.Clicked += (s, e) => Console.WriteLine("+ button clicked");
    snesController.SelectButton.Clicked += (s, e) => Console.WriteLine("- button clicked");

    snesController.DPad.Updated += (s, e) => Console.WriteLine($"DPad {e.New}");

    return Task.CompletedTask;
}

public override Task Run()
{
    snesController.StartUpdating(TimeSpan.FromMilliseconds(200));
    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Samples/SnesClassicController_Sample)

### Wiring Example

To wire a SnesClassicController to your Meadow board, connect the following:

| SnesClassicController  | Meadow Pin  |
|---------|-------------|
| GND     | GND         |
| SCL     | D08 (SCL)   |
| SDA     | D07 (SDA)   |
| VCC     | 3V3         |
