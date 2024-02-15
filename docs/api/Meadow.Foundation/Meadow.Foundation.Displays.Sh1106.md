---
uid: Meadow.Foundation.Displays.Sh1106
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Sh1106
---

| Sh1106 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Sh110x) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Sh110x/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.Sh1106/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.Sh1106.svg?label=Meadow.Foundation.Displays.Sh1106" alt="NuGet Gallery for Meadow.Foundation.Displays.Sh1106" /></a> |

### Code Example

```csharp
MicroGraphics graphics;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    var sh1106 = new Sh1106
    (
        spiBus: Device.CreateSpiBus(),
        chipSelectPin: Device.Pins.D02,
        dcPin: Device.Pins.D01,
        resetPin: Device.Pins.D00
    );

    graphics = new MicroGraphics(sh1106);
    graphics.CurrentFont = new Font8x8();
    graphics.Rotation = RotationType._180Degrees;

    return base.Initialize();
}

public override Task Run()
{
    graphics.Clear();
    graphics.DrawRectangle(0, 0, 128, 64, false);
    graphics.DrawTriangle(10, 10, 50, 50, 10, 50, false);
    graphics.DrawRectangle(20, 15, 40, 20, true);
    graphics.DrawText(5, 5, "SH1106");
    graphics.Show();

    return base.Run();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Sh110x/Samples/Sh1106_Sample)


# Class Sh1106
Represents the Sh1106 family of displays (up to 132 x 64)

###### **Assembly**: Sh110x.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Sh110x/Driver/Drivers/Sh1106.cs#L9)
```csharp title="Declaration"
public class Sh1106 : Sh110x, IGraphicsDisplay, ISpiPeripheral, II2cPeripheral, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Displays.Sh110x](../Sh110x)

**Implements:**  
[Meadow.Foundation.Graphics.IGraphicsDisplay](../IGraphicsDisplay), `Meadow.Hardware.ISpiPeripheral`, `Meadow.Hardware.II2cPeripheral`, `System.IDisposable`

## Methods
### Initialize()
Initialize the Sh1106
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Sh110x/Driver/Drivers/Sh1106.cs#L56)
```csharp title="Declaration"
protected override void Initialize()
```
### SetDisplayOffsets(byte, byte)
This varies between manufacturers 
If the display is misaligned horizontally, try offset values like 0x00, 0x20, 0x40, etc.
If the display is misaligned vertically, try offset values like 0x00, 0x20, 0x40, etc.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Sh110x/Driver/Drivers/Sh1106.cs#L94)
```csharp title="Declaration"
public override void SetDisplayOffsets(byte startLine = 0, byte offset = 0)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *startLine* | Line number in display RAM to display at the top of the screen |
| `System.Byte` | *offset* | Column number in display RAM to offset the screen |


## Implements

* [Meadow.Foundation.Graphics.IGraphicsDisplay](../IGraphicsDisplay)
* `Meadow.Hardware.ISpiPeripheral`
* `Meadow.Hardware.II2cPeripheral`
* `System.IDisposable`
