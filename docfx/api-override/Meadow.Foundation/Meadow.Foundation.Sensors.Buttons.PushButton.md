---
uid: Meadow.Foundation.Sensors.Buttons.PushButton
remarks: *content
---

| PushButton    |             |
|---------------|-------------|
| Status        | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Core/Sensors/Buttons/) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.svg?label=Meadow.Foundation" style="width: auto; height: -webkit-fill-available;" /></a> |

The **PushButton** class represents a simple push button, such as a tactile momentary button. To get notified when it’s clicked, subscribe to the Clicked event. If you need to know when the button is held down, subscribe to the PressStarted and PressEnded events.

### Code Example

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    public MeadowApp()
    {
        PushButton pushButton;

        // Initialize by passing a IDigitalInputPort
        //IDigitalInputPort digitalInputPort = Device.CreateDigitalInputPort(
        //    Device.Pins.D08, 
        //    InterruptMode.EdgeBoth, 
        //    ResistorMode.PullUp, 20);
        //pushButton = new PushButton(digitalInputPort);

        // Initialize by sending Device and Pins
        pushButton = new PushButton(
            Device,
            Device.Pins.D08,
            ResistorMode.PullUp
        );

        pushButton.PressStarted += PushButtonPressStarted;
        pushButton.PressEnded += PushButtonPressEnded;
    }

    void PushButtonPressStarted(object sender, EventArgs e)
    {
        Console.WriteLine("Press Started...");
    }

    void PushButtonPressEnded(object sender, EventArgs e)
    {
        Console.WriteLine("Press Ended...");
    }
}
```

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Core.Samples) 

### Wiring Example

<img src="../../API_Assets/Meadow.Foundation.Sensors.Buttons.PushButton/PushButton.svg" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />