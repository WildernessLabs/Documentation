---
uid: Meadow.Foundation.mikroBUS.Sensors.Hid.CJoystick

---

| CJoystick | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.MikroBus/tree/main/Source/CJoystick) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.mikroBUS.Sensors.Hid.CJoystick/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.mikroBUS.Sensors.Hid.CJoystick.svg?label=Meadow.Foundation.mikroBUS.Sensors.Hid.CJoystick" alt="NuGet Gallery for Meadow.Foundation.mikroBUS.Sensors.Hid.CJoystick" /></a> |

### Code Example

```csharp
CJoystick joystick;

public MeadowApp()
{
    Console.WriteLine("Initializing ...");

    joystick = new CJoystick(Device.Pins.A02, Device.CreateI2cBus());

    //loop and read digital position 
    for (int i = 0; i < 100; i++)
    {
        Console.WriteLine($"Position: {joystick.DigitalPosition}");
        Console.WriteLine($"Pressed: {joystick.State}");

        Thread.Sleep(50);
    }

    //start continous reading
    joystick.StartUpdating(TimeSpan.FromMilliseconds(100));

    //classic events
    joystick.Updated += Joystick_Updated;
    joystick.Clicked += Joystick_Clicked;
}

private void Joystick_Clicked(object sender, EventArgs e)
{
    Console.WriteLine("Center clicked");
}

private void Joystick_Updated(object sender, IChangeResult<Meadow.Peripherals.Sensors.Hid.AnalogJoystickPosition> e)
{
    Console.WriteLine($"{e.New.Horizontal}, {e.New.Vertical}");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.MikroBus/tree/main/Source/CJoystick/Sample/CJoystick_Sample)

