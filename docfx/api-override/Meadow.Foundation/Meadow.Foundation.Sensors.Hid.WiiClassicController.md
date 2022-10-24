---
uid: Meadow.Foundation.Sensors.Hid.WiiClassicController
remarks: *content
---

| WiiClassicController | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Hid.WiiExtensionControllers/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Hid.WiiExtensionControllers.svg?label=Meadow.Foundation.Sensors.Hid.WiiExtensionControllers" alt="NuGet Gallery for Meadow.Foundation.Sensors.Hid.WiiExtensionControllers" /></a> |

### Code Example

```csharp
WiiClassicController classicController;

public override Task Initialize()
{
    Console.WriteLine("Initialize...");

    var i2cBus = Device.CreateI2cBus(WiiClassicController.DefaultSpeed);

    classicController = new WiiClassicController(i2cBus: i2cBus, 
                                                 useHighResolutionMode: true);

    //onetime update - could be used in a game loop
    classicController.Update();

    //check the state of a button
    Console.WriteLine("X Button is " + (classicController.XButton.State == true ? "pressed" : "not pressed"));

    //.NET events
    classicController.AButton.Clicked += (s, e) => Console.WriteLine("A button clicked");
    classicController.BButton.Clicked += (s, e) => Console.WriteLine("B button clicked");
    classicController.XButton.Clicked += (s, e) => Console.WriteLine("X button clicked");
    classicController.YButton.Clicked += (s, e) => Console.WriteLine("Y button clicked");

    classicController.LButton.Clicked += (s, e) => Console.WriteLine("L button clicked");
    classicController.RButton.Clicked += (s, e) => Console.WriteLine("R button clicked");
    classicController.ZLButton.Clicked += (s, e) => Console.WriteLine("ZL button clicked");
    classicController.ZRButton.Clicked += (s, e) => Console.WriteLine("ZR button clicked");

    classicController.PlusButton.Clicked += (s, e) => Console.WriteLine("+ button clicked");
    classicController.MinusButton.Clicked += (s, e) => Console.WriteLine("- button clicked");
    classicController.HomeButton.Clicked += (s, e) => Console.WriteLine("Home button clicked");

    classicController.DPad.Updated += (s, e) => Console.WriteLine($"DPad {e.New}");

    classicController.LeftTrigger.Updated += (s, e) => Console.WriteLine($"Left Trigger {e.New}");
    classicController.RightTrigger.Updated += (s, e) => Console.WriteLine($"Left Trigger {e.New}");

    classicController.LeftAnalogStick.Updated += (s, e) => Console.WriteLine($"Left Analog Stick {e.New.Horizontal}, {e.New.Vertical}");
    classicController.RightAnalogStick.Updated += (s, e) => Console.WriteLine($"Right Analog Stick {e.New.Horizontal}, {e.New.Vertical}");

    return Task.CompletedTask;
}

public override Task Run()
{
    classicController.StartUpdating(TimeSpan.FromMilliseconds(200));
    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Samples/WiiClassicController_Sample)

### Wiring Example

To wire a WiiClassicController to your Meadow board, connect the following:

| WiiClassicController  | Meadow Pin  |
|---------|-------------|
| GND     | GND         |
| SCL     | D08 (SCL)   |
| SDA     | D07 (SDA)   |
| VCC     | 3V3         |
