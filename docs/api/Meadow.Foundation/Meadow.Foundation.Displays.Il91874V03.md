---
uid: Meadow.Foundation.Displays.Il91874V03
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Il91874V03
---

| Il91874V03 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.ePaper) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Datasheets) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.ePaper/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.ePaper.svg?label=Meadow.Foundation.Displays.ePaper" alt="NuGet Gallery for Meadow.Foundation.Displays.ePaper" /></a> |

The **IL91874V3** is a tri-color display controller for ePaper displays. Data is sent to the controller via SPI and supports partial screen updates.

The IL91874V3 is paired with a wide range of three color ePaper display sizes and resolutions.

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Samples)

### Code Example

```csharp
MicroGraphics graphics;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize ...");

    var display = new Il91874V03(
        spiBus: Device.CreateSpiBus(),
        chipSelectPin: Device.Pins.D02,
        dcPin: Device.Pins.D01,
        resetPin: Device.Pins.D00,
        busyPin: Device.Pins.D03,
        width: 176,
        height: 264);

    graphics = new MicroGraphics(display);

    return base.Initialize();
}

public override Task Run()
{
    graphics.DrawRectangle(1, 1, 126, 32, Meadow.Foundation.Color.Red, false);

    graphics.CurrentFont = new Font8x12();
    graphics.DrawText(2, 2, "IL91874V03", Meadow.Foundation.Color.Black);
    graphics.DrawText(2, 20, "Meadow F7", Meadow.Foundation.Color.Black);

    graphics.Show();

    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Samples/IL91874V03_Sample)

### Wiring Example

 To control a IL91874V3 from Meadow, connect the following:

| Il91874V03 | Meadow Pin |
|-----------|------------|
| BUSY      | D15        |
| RST       | D14        |
| DC        | D13        |
| CS        | D12        |
| CLK       | SCK        |
| DIN       | MOSI       |
| GND       | GND        |
| 3V3       | 3V3        |

If your display does not include any of the above pins, they can be omitted. Pass `NULL` into the constructor for the missing pin(s).

<img src="/API_Assets/Meadow.Foundation.Displays.ePaper.Il91874V03/ePaper_Fritzing.png" />

# Class Il91874V03
Represents the older v0.3 Il91874V03 ePaper color displays
264x176, 2.7inch tri color e-Ink display / SPI interface

###### **Assembly**: EPaper.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Drivers/Il91874V03.cs#L12)
```csharp title="Declaration"
public class Il91874V03 : EPaperMonoBase, ISpiPeripheral, IDisposable, IGraphicsDisplay
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Displays.EPaperBase](../EPaperMonoBase)

**Implements:**  
`Meadow.Hardware.ISpiPeripheral`, `System.IDisposable`, [Meadow.Foundation.Graphics.IGraphicsDisplay](../IGraphicsDisplay)

## Methods
### Initialize()
Initialize the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Drivers/Il91874V03.cs#L52)
```csharp title="Declaration"
protected override void Initialize()
```
### SetFrameMemory(byte[])
Set frame buffer memory of display (full screen)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Drivers/Il91874V03.cs#L145)
```csharp title="Declaration"
public override void SetFrameMemory(byte[] buffer)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte[]` | *buffer* | The image buffer |

### SetFrameMemory(byte[], int, int, int, int)
Set frame buffer memory of display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Drivers/Il91874V03.cs#L158)
```csharp title="Declaration"
public override void SetFrameMemory(byte[] buffer, int x, int y, int width, int height)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte[]` | *buffer* | buffer |
| `System.Int32` | *x* | x location |
| `System.Int32` | *y* | y location |
| `System.Int32` | *width* | width in pixels |
| `System.Int32` | *height* | height in pixels |

### DisplayFrame()
Display data from the display controller SRAM
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Drivers/Il91874V03.cs#L229)
```csharp title="Declaration"
public override void DisplayFrame()
```
### ClearFrame()
Clears the SRAM on the display controller
Doesn't update the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Drivers/Il91874V03.cs#L239)
```csharp title="Declaration"
public void ClearFrame()
```

## Implements

* `Meadow.Hardware.ISpiPeripheral`
* `System.IDisposable`
* [Meadow.Foundation.Graphics.IGraphicsDisplay](../IGraphicsDisplay)
