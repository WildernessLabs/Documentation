---
uid: Meadow.Foundation.Displays.Gc9a01
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Gc9a01
---

| Gc9a01 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.TftSpi/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.TftSpi.svg?label=Meadow.Foundation.Displays.TftSpi" alt="NuGet Gallery for Meadow.Foundation.Displays.TftSpi" /></a> |

### Code Example

```csharp
MicroGraphics graphics;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing ...");

    var spiBus = Device.CreateSpiBus();

    Resolver.Log.Info("Create display driver instance");

    var display = new Gc9a01
    (
        spiBus: spiBus,
        chipSelectPin: Device.Pins.A02,
        dcPin: Device.Pins.D01,
        resetPin: Device.Pins.D00
    );

    graphics = new MicroGraphics(display)
    {
        IgnoreOutOfBoundsPixels = true,
        CurrentFont = new Font12x20(),
        Rotation = RotationType._180Degrees
    };

    return base.Initialize();
}

public override Task Run()
{
    graphics.Clear();
    graphics.DrawCircle(120, 120, 100, Meadow.Foundation.Color.Cyan, false);
    graphics.DrawRoundedRectangle(50, 50, 140, 140, 50, Meadow.Foundation.Color.BlueViolet, false);
    graphics.DrawText(120, 120, "Meadow F7", alignmentH: HorizontalAlignment.Center, alignmentV: VerticalAlignment.Center);
    graphics.Show();

    return base.Run();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Samples/Gc9a01_Sample)

### Wiring Example

 To wire a Gc9a01 to your Meadow board, connect the following:

| Gc9a01 | Meadow Pin |
|--------|------------|
| GND    | GND        |
| VCC    | 3V3        |
| SCL    | SCK        |
| SDA    | MOSI       |
| CS     | D02        |
| DC     | D01        |
| RESET  | D00        |

It should look like the following diagram:

![Wiring a Gc9a01 to a Meadow F7](/API_Assets/Meadow.Foundation.Displays.Tft.Gc9a01/Gc9a01_Fritzing.png)

# Class Gc9a01
Represents a Gc9a01 TFT color display

###### **Assembly**: TftSpi.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/Drivers/Gc9a01.cs#L9)
```csharp title="Declaration"
public class Gc9a01 : TftSpiBase, IGraphicsDisplay, ISpiPeripheral, IDisposable, IRotatableDisplay
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Displays.TftSpiBase](../TftSpiBase)

**Implements:**  
[Meadow.Foundation.Graphics.IGraphicsDisplay](../IRotatableDisplay)

## Properties
### DefaultColorMode
The display default color mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/Drivers/Gc9a01.cs#L14)
```csharp title="Declaration"
public override ColorMode DefaultColorMode { get; }
```
### SupportedColorModes
The color modes supported by the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/Drivers/Gc9a01.cs#L19)
```csharp title="Declaration"
public override ColorMode SupportedColorModes { get; }
```
## Methods
### Initialize()
Initialize the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/Drivers/Gc9a01.cs#L57)
```csharp title="Declaration"
protected override void Initialize()
```
### SetRotation(RotationType)
Set the rotation of the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/Drivers/Gc9a01.cs#L301)
```csharp title="Declaration"
public void SetRotation(RotationType rotation)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.RotationType](../RotationType) | *rotation* | The rotation |


## Implements

* [Meadow.Foundation.Graphics.IGraphicsDisplay](../IGraphicsDisplay)
* `Meadow.Hardware.ISpiPeripheral`
* `System.IDisposable`
* [Meadow.Foundation.Graphics.IRotatableDisplay](../IRotatableDisplay)
