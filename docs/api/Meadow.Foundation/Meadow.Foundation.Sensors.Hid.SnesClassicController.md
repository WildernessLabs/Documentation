---
uid: Meadow.Foundation.Sensors.Hid.SnesClassicController
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid.SnesClassicController
---

| SnesClassicController | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Hid.WiiExtensionControllers/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Hid.WiiExtensionControllers.svg?label=Meadow.Foundation.Sensors.Hid.WiiExtensionControllers" alt="NuGet Gallery for Meadow.Foundation.Sensors.Hid.WiiExtensionControllers" /></a> |

### Code Example

```csharp
SnesClassicController snesController;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    var i2cBus = Device.CreateI2cBus(SnesClassicController.DefaultI2cSpeed);

    snesController = new SnesClassicController(i2cBus: i2cBus);

    //onetime update - could be used in a game loop
    snesController.Update();

    //check the state of a button
    Resolver.Log.Info("X Button is " + (snesController.XButton.State == true ? "pressed" : "not pressed"));

    //.NET events
    snesController.AButton.Clicked += (s, e) => Resolver.Log.Info("A button clicked");
    snesController.BButton.Clicked += (s, e) => Resolver.Log.Info("B button clicked");
    snesController.XButton.Clicked += (s, e) => Resolver.Log.Info("X button clicked");
    snesController.YButton.Clicked += (s, e) => Resolver.Log.Info("Y button clicked");

    snesController.LButton.Clicked += (s, e) => Resolver.Log.Info("L button clicked");
    snesController.RButton.Clicked += (s, e) => Resolver.Log.Info("R button clicked");

    snesController.StartButton.Clicked += (s, e) => Resolver.Log.Info("+ button clicked");
    snesController.SelectButton.Clicked += (s, e) => Resolver.Log.Info("- button clicked");

    snesController.DPad.Updated += (s, e) => Resolver.Log.Info($"DPad {e.New}");

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

# Class SnesClassicController
Represents a Nintendo SNES Classic Mini controller

###### **Assembly**: WiiExtensionControllers.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/SnesClassicController.cs#L10)
```csharp title="Declaration"
public class SnesClassicController : WiiClassicControllerBase, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Sensors.Hid.WiiExtensionControllerBase](../WiiClassicControllerBase)

**Implements:**  
`Meadow.Hardware.II2cPeripheral`

## Properties
### DPad
D-pad
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/SnesClassicController.cs#L15)
```csharp title="Declaration"
public IDigitalJoystick DPad { get; }
```
### XButton
X Button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/SnesClassicController.cs#L20)
```csharp title="Declaration"
public IButton XButton { get; }
```
### YButton
Y Button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/SnesClassicController.cs#L24)
```csharp title="Declaration"
public IButton YButton { get; }
```
### AButton
A Button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/SnesClassicController.cs#L28)
```csharp title="Declaration"
public IButton AButton { get; }
```
### BButton
B Button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/SnesClassicController.cs#L32)
```csharp title="Declaration"
public IButton BButton { get; }
```
### LButton
L Button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/SnesClassicController.cs#L37)
```csharp title="Declaration"
public IButton LButton { get; }
```
### RButton
R Button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/SnesClassicController.cs#L41)
```csharp title="Declaration"
public IButton RButton { get; }
```
### StartButton
+ Button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/SnesClassicController.cs#L46)
```csharp title="Declaration"
public IButton StartButton { get; }
```
### SelectButton
- Button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/SnesClassicController.cs#L50)
```csharp title="Declaration"
public IButton SelectButton { get; }
```
## Methods
### Update()
Get the latest sensor data from the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/SnesClassicController.cs#L63)
```csharp title="Declaration"
public override void Update()
```

## Implements

* `Meadow.Hardware.II2cPeripheral`
