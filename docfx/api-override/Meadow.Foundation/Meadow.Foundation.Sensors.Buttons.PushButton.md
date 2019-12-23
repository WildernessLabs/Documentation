---
uid: Meadow.Foundation.Sensors.Buttons.PushButton
remarks: *content
---

| PushButton    |             |
|---------------|-------------|
| Status        | Working     |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Core/Sensors/Buttons/) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.svg?label=Meadow.Foundation" style="width: auto; height: -webkit-fill-available;" /></a> |

The **PushButton** class represents a simple push button, such as a tactile momentary button. To get notified when it’s clicked, subscribe to the Clicked event. If you need to know when the button is held down, subscribe to the PressStarted and PressEnded events.

### Code Example

```csharp
public class Program
{
    public static void Main()
    {
        var pushButton = new PushButton(
            Device.Pins.D08, 
            Meadow.Foundation.CircuitTerminationType.High
        );
        pushButton.PressStarted += PushButtonPressStarted;
        pushButton.PressEnded += PushButtonPressEnded;

        Thread.Sleep(Timeout.Infinite);
    }

    private void PushButtonPressStarted(object sender, EventArgs e)
    {
        Console.WriteLine("Press Started..."); 
    }

    private void PushButtonPressEnded(object sender, EventArgs e)
    {
        Console.WriteLine("Press Ended...");
    }
    
}
```

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Core.Samples) 

### Wiring Example

![](../../API_Assets/Meadow.Foundation.Sensors.Buttons.PushButton/PushButton.svg)