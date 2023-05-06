---
uid: Meadow.Foundation.Sensors.Hid.WiiNunchuck
remarks: *content
---

| WiiNunchuck | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Hid.WiiExtensionControllers/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Hid.WiiExtensionControllers.svg?label=Meadow.Foundation.Sensors.Hid.WiiExtensionControllers" alt="NuGet Gallery for Meadow.Foundation.Sensors.Hid.WiiExtensionControllers" /></a> |

### Code Example

```csharp
WiiNunchuck nunchuck;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    nunchuck = new WiiNunchuck(Device.CreateI2cBus(WiiNunchuck.DefaultI2cSpeed));

    nunchuck.GetIdentification();

    Resolver.Log.Info("Update");

    //onetime update - could be used in a game loop
    nunchuck.Update();

    //check the state of a button
    Resolver.Log.Info("C Button is " + (nunchuck.CButton.State == true ? "pressed" : "not pressed"));

    //.NET events
    nunchuck.CButton.Clicked += (s, e) => Resolver.Log.Info("C button clicked");
    nunchuck.ZButton.Clicked += (s, e) => Resolver.Log.Info("Z button clicked");

    nunchuck.AnalogStick.Updated += (s, e) => Resolver.Log.Info($"Analog Stick {e.New.Horizontal}, {e.New.Vertical}");

    return Task.CompletedTask;
}

public override Task Run()
{
    nunchuck.StartUpdating(TimeSpan.FromMilliseconds(200));
    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Samples/WiiNunchuck_Sample)

### Wiring Example

To wire a WiiNunchuck to your Meadow board, connect the following:

| WiiNunchuck  | Meadow Pin  |
|---------|-------------|
| GND     | GND         |
| SCL     | D08 (SCL)   |
| SDA     | D07 (SDA)   |
| VCC     | 3V3         |
