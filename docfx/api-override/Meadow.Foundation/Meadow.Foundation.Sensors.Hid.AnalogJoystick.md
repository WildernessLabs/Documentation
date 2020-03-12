---
uid: Meadow.Foundation.Sensors.Hid.AnalogJoystick
remarks: *content
---

| AnalogJoystick |             |
|----------------|-------------|
| Status         | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code    | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Core/Sensors/Hid)  |
| NuGet package  | <a href="https://www.nuget.org/packages/Meadow.Foundation/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.svg?label=Meadow.Foundation" style="width: auto; height: -webkit-fill-available;" /></a> |

### Code Example

The following example prints horizontal and vertical values ranging from -1 to 1, 0 being the center position:

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    public MeadowApp()
    {
        AnalogJoystick joystick;

        public MeadowApp()
        {
            joystick = new AnalogJoystick(
                Device.CreateAnalogInputPort(Device.Pins.A01), 
                Device.CreateAnalogInputPort(Device.Pins.A00),
                null, false);

            joystick.SetCenterPosition(); //fire and forget 
            joystick.Updated += JoystickUpdated;
            joystick.StartUpdating();
        }

        void JoystickUpdated(object sender, Meadow.Peripherals.Sensors.Hid.JoystickPositionChangeResult e)
        {
            Console.WriteLine($"({e.New.HorizontalValue}, {e.New.VerticalValue})");
        }
    }
}
```

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Core.Samples) 

### Wiring Example

<img src="../../API_Assets/Meadow.Foundation.Sensors.Hid.AnalogJoystick/AnalogJoystick_Fritzing.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />