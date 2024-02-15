---
uid: Meadow.Foundation.Sensors.Buttons.PushButton
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Buttons.PushButton
---

| PushButton | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core/Sensors/Buttons) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.svg?label=Meadow.Foundation" alt="NuGet Gallery for Meadow.Foundation" /></a> |

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
        //    ResistorMode.InternalPullUp, 20);
        //pushButton = new PushButton(digitalInputPort);

        // Initialize by sending Device and Pins
        pushButton = new PushButton(
            Device,
            Device.Pins.D08,
            ResistorMode.InternalPullUp
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

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core.Samples) 

### Wiring Example

<img src="/API_Assets/Meadow.Foundation.Sensors.Buttons.PushButton/PushButton_Fritzing.svg" />

# Class PushButton
Represents a momentary push button with two states that uses interrupts to detect state change

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Buttons/PushButton.cs#L10)
```csharp title="Declaration"
public class PushButton : PushButtonBase, IButton, ISensor<bool>, ISensor, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Sensors.Buttons.PushButtonBase](../PushButtonBase)

**Implements:**  
`Meadow.Peripherals.Sensors.Buttons.IButton`, `Meadow.Peripherals.Sensors.ISensor<System.Boolean>`, `Meadow.Peripherals.Sensors.ISensor`, `System.IDisposable`

## Properties
### DebounceDuration
This duration controls the debounce filter. It also has the effect
of rate limiting clicks. Decrease this time to allow users to click
more quickly.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Buttons/PushButton.cs#L27)
```csharp title="Declaration"
public TimeSpan DebounceDuration { get; set; }
```
### DigitalIn
Returns digital input port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Buttons/PushButton.cs#L36)
```csharp title="Declaration"
protected IDigitalInterruptPort DigitalIn { get; set; }
```
## Fields
### DefaultDebounceDuration
Default Debounce used on the PushButton Input if an InputPort is auto-created
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Buttons/PushButton.cs#L15)
```csharp title="Declaration"
public static readonly TimeSpan DefaultDebounceDuration
```
### DefaultGlitchDuration
Default Glitch Filter used on the PushButton Input if an InputPort is auto-created
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Buttons/PushButton.cs#L20)
```csharp title="Declaration"
public static readonly TimeSpan DefaultGlitchDuration
```

## Implements

* `Meadow.Peripherals.Sensors.Buttons.IButton`
* `Meadow.Peripherals.Sensors.ISensor<System.Boolean>`
* `Meadow.Peripherals.Sensors.ISensor`
* `System.IDisposable`
