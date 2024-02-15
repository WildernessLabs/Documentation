---
uid: Meadow.Foundation.Sensors.Hid.WiiClassicController
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid.WiiClassicController
---

| WiiClassicController | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Hid.WiiExtensionControllers/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Hid.WiiExtensionControllers.svg?label=Meadow.Foundation.Sensors.Hid.WiiExtensionControllers" alt="NuGet Gallery for Meadow.Foundation.Sensors.Hid.WiiExtensionControllers" /></a> |

### Code Example

```csharp
WiiClassicController classicController;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    var i2cBus = Device.CreateI2cBus(WiiClassicController.DefaultI2cSpeed);

    classicController = new WiiClassicController(i2cBus: i2cBus,
                                                 useHighResolutionMode: true);

    //onetime update - could be used in a game loop
    classicController.Update();

    //check the state of a button
    Resolver.Log.Info("X Button is " + (classicController.XButton.State == true ? "pressed" : "not pressed"));

    //.NET events
    classicController.AButton.Clicked += (s, e) => Resolver.Log.Info("A button clicked");
    classicController.BButton.Clicked += (s, e) => Resolver.Log.Info("B button clicked");
    classicController.XButton.Clicked += (s, e) => Resolver.Log.Info("X button clicked");
    classicController.YButton.Clicked += (s, e) => Resolver.Log.Info("Y button clicked");

    classicController.LButton.Clicked += (s, e) => Resolver.Log.Info("L button clicked");
    classicController.RButton.Clicked += (s, e) => Resolver.Log.Info("R button clicked");
    classicController.ZLButton.Clicked += (s, e) => Resolver.Log.Info("ZL button clicked");
    classicController.ZRButton.Clicked += (s, e) => Resolver.Log.Info("ZR button clicked");

    classicController.PlusButton.Clicked += (s, e) => Resolver.Log.Info("+ button clicked");
    classicController.MinusButton.Clicked += (s, e) => Resolver.Log.Info("- button clicked");
    classicController.HomeButton.Clicked += (s, e) => Resolver.Log.Info("Home button clicked");

    classicController.DPad.Updated += (s, e) => Resolver.Log.Info($"DPad {e.New}");

    classicController.LeftTrigger.Updated += (s, e) => Resolver.Log.Info($"Left Trigger {e.New}");
    classicController.RightTrigger.Updated += (s, e) => Resolver.Log.Info($"Left Trigger {e.New}");

    classicController.LeftAnalogStick.Updated += (s, e) => Resolver.Log.Info($"Left Analog Stick {e.New.Horizontal}, {e.New.Vertical}");
    classicController.RightAnalogStick.Updated += (s, e) => Resolver.Log.Info($"Right Analog Stick {e.New.Horizontal}, {e.New.Vertical}");

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

# Class WiiClassicController
Represents a Nintendo Wii I2C Classic Controller

###### **Assembly**: WiiExtensionControllers.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicController.cs#L10)
```csharp title="Declaration"
public class WiiClassicController : WiiClassicControllerBase, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Sensors.Hid.WiiExtensionControllerBase](../WiiClassicControllerBase)

**Implements:**  
`Meadow.Hardware.II2cPeripheral`

## Properties
### DPad
D-pad
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicController.cs#L15)
```csharp title="Declaration"
public IDigitalJoystick DPad { get; }
```
### XButton
X Button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicController.cs#L20)
```csharp title="Declaration"
public IButton XButton { get; }
```
### YButton
Y Button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicController.cs#L24)
```csharp title="Declaration"
public IButton YButton { get; }
```
### AButton
A Button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicController.cs#L28)
```csharp title="Declaration"
public IButton AButton { get; }
```
### BButton
B Button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicController.cs#L32)
```csharp title="Declaration"
public IButton BButton { get; }
```
### LButton
L Button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicController.cs#L37)
```csharp title="Declaration"
public IButton LButton { get; }
```
### RButton
R Button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicController.cs#L41)
```csharp title="Declaration"
public IButton RButton { get; }
```
### ZLButton
ZL Button (at bottom of trigger)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicController.cs#L45)
```csharp title="Declaration"
public IButton ZLButton { get; }
```
### ZRButton
ZR Button (at bottom of trigger)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicController.cs#L49)
```csharp title="Declaration"
public IButton ZRButton { get; }
```
### PlusButton
+ Button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicController.cs#L54)
```csharp title="Declaration"
public IButton PlusButton { get; }
```
### MinusButton
- Button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicController.cs#L58)
```csharp title="Declaration"
public IButton MinusButton { get; }
```
### HomeButton
Home Button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicController.cs#L62)
```csharp title="Declaration"
public IButton HomeButton { get; }
```
### LeftAnalogStick
Left analog joystick (6 or 8 bits of precision)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicController.cs#L67)
```csharp title="Declaration"
public IAnalogJoystick LeftAnalogStick { get; }
```
### RightAnalogStick
Right analog joystick (5 or 8 bits of precision)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicController.cs#L72)
```csharp title="Declaration"
public IAnalogJoystick RightAnalogStick { get; }
```
### LeftTrigger
Left analog trigger (5 or 8 bits of precision)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicController.cs#L77)
```csharp title="Declaration"
public IAnalogTrigger LeftTrigger { get; }
```
### RightTrigger
Right analog trigger (5 or 8 bits of precision)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicController.cs#L81)
```csharp title="Declaration"
public IAnalogTrigger RightTrigger { get; }
```
## Methods
### Update()
Get the latest sensor data from the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicController.cs#L101)
```csharp title="Declaration"
public override void Update()
```

## Implements

* `Meadow.Hardware.II2cPeripheral`
