---
uid: Meadow.Foundation.Displays.Sh1107
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Sh1107
---

| Sh1107 | |
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

    var sh1107 = new Sh1107
    (
        i2cBus: Device.CreateI2cBus(),
        address: (byte)Addresses.Address_0x3C,
        width: 128,
        height: 128
    );

    graphics = new MicroGraphics(sh1107)
    {
        CurrentFont = new Font12x16(),
        Rotation = RotationType._180Degrees
    };

    return base.Initialize();
}

public override Task Run()
{
    graphics.Clear();
    graphics.DrawRectangle(0, 0, graphics.Width, graphics.Height, false);
    graphics.DrawTriangle(10, 10, 50, 50, 10, 50, false);
    graphics.DrawRectangle(20, 15, 40, 20, true);
    graphics.DrawText(5, 5, "SH1107");
    graphics.Show();

    return base.Run();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Sh110x/Samples/Sh1107_Sample)


# Class Sh1107
Represents the Sh1107 family of displays (up to 128x128)

###### **Assembly**: Sh110x.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Sh110x/Driver/Drivers/Sh1107.cs#L9)
```csharp title="Declaration"
public class Sh1107 : Sh110x, IGraphicsDisplay, ISpiPeripheral, II2cPeripheral, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Displays.Sh110x](../Sh110x)

**Implements:**  
[Meadow.Foundation.Graphics.IGraphicsDisplay](../IGraphicsDisplay), `Meadow.Hardware.ISpiPeripheral`, `Meadow.Hardware.II2cPeripheral`, `System.IDisposable`

## Methods
### Initialize()
Initialize the Sh1107
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Sh110x/Driver/Drivers/Sh1107.cs#L56)
```csharp title="Declaration"
protected override void Initialize()
```
### SetDisplayOffsets(byte, byte)
This varies between manufacturers 
If the display is misaligned horizontally, try offset values like 0x00, 0x20, 0x40, etc.
If the display is misaligned vertically, try offset values like 0x00, 0x20, 0x40, etc.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Sh110x/Driver/Drivers/Sh1107.cs#L96)
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
