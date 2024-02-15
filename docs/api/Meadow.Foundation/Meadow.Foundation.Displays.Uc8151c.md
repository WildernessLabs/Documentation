---
uid: Meadow.Foundation.Displays.Uc8151c
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Uc8151c
---

| Uc8151c | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.ePaper) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Datasheets) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.ePaper/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.ePaper.svg?label=Meadow.Foundation.Displays.ePaper" alt="NuGet Gallery for Meadow.Foundation.Displays.ePaper" /></a> |

### Code Example

```csharp
MicroGraphics graphics;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize ...");

    var display = new Uc8151c(
        spiBus: Device.CreateSpiBus(),
        chipSelectPin: Device.Pins.D03,
        dcPin: Device.Pins.D02,
        resetPin: Device.Pins.D01,
        busyPin: Device.Pins.D00,
        width: 152,
        height: 152);

    graphics = new MicroGraphics(display);

    return Task.CompletedTask;
}

public override Task Run()
{
    Resolver.Log.Info("Run");

    for (int i = 0; i < 100; i++)
    {
        graphics.DrawPixel(i, i, Color.Black);
    }

    graphics.DrawRectangle(10, 40, 120, 60, Color.Black, true);
    graphics.DrawRectangle(20, 80, 120, 90, Color.Red, true);

    graphics.CurrentFont = new Font12x16();
    graphics.DrawText(2, 20, "Meadow F7", Color.Black);
    graphics.DrawText(30, 50, "Color", Color.Red);
    graphics.DrawText(50, 90, "Black", Color.Black);
    graphics.DrawText(50, 120, "White", Color.White);

    graphics.Show();

    Resolver.Log.Info("Run complete");

    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Samples/UC8151C_Sample)


# Class Uc8151c
Represents an Uc8151c ePaper color display
Commonly a 152x152, 1.54inch E-Ink three-color display, SPI interface

###### **Assembly**: EPaper.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Drivers/Uc8151c.cs#L9)
```csharp title="Declaration"
public class Uc8151c : EPaperTriColorBase, ISpiPeripheral, IDisposable, IGraphicsDisplay
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Displays.EPaperBase](../EPaperTriColorBase)

**Implements:**  
`Meadow.Hardware.ISpiPeripheral`, `System.IDisposable`, [Meadow.Foundation.Graphics.IGraphicsDisplay](../IGraphicsDisplay)

## Properties
### IsBlackInverted
Is black inverted on this display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Drivers/Uc8151c.cs#L49)
```csharp title="Declaration"
protected override bool IsBlackInverted { get; }
```
### IsColorInverted
Is color inverted on this display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Drivers/Uc8151c.cs#L54)
```csharp title="Declaration"
protected override bool IsColorInverted { get; }
```
## Methods
### Initialize()
Initialize the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Drivers/Uc8151c.cs#L59)
```csharp title="Declaration"
protected override void Initialize()
```
### SetPartialWindow(byte[], byte[], int, int, int, int)
Set partial window for display updates
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Drivers/Uc8151c.cs#L102)
```csharp title="Declaration"
protected void SetPartialWindow(byte[] bufferBlack, byte[] bufferColor, int x, int y, int width, int height)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte[]` | *bufferBlack* | The buffer with black pixel data |
| `System.Byte[]` | *bufferColor* | The buffer with color pixel data |
| `System.Int32` | *x* | The x start position in pixels |
| `System.Int32` | *y* | The y start position in pixels |
| `System.Int32` | *width* | The width to update in pixels |
| `System.Int32` | *height* | The height to update in pixels |

### SetPartialWindowBlack(byte[], int, int, int, int)
Set partial window for display updates
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Drivers/Uc8151c.cs#L163)
```csharp title="Declaration"
protected void SetPartialWindowBlack(byte[] bufferBlack, int x, int y, int width, int height)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte[]` | *bufferBlack* | The buffer with black pixel data |
| `System.Int32` | *x* | The x start position in pixels |
| `System.Int32` | *y* | The y start position in pixels |
| `System.Int32` | *width* | The width to update in pixels |
| `System.Int32` | *height* | The height to update in pixels |

### SetPartialWindowColor(byte[], int, int, int, int)
Set partial window for display updates
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Drivers/Uc8151c.cs#L204)
```csharp title="Declaration"
protected void SetPartialWindowColor(byte[] bufferColor, int x, int y, int width, int height)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte[]` | *bufferColor* | The buffer with color pixel data |
| `System.Int32` | *x* | The x start position in pixels |
| `System.Int32` | *y* | The y start position in pixels |
| `System.Int32` | *width* | The width to update in pixels |
| `System.Int32` | *height* | The height to update in pixels |

### Show(int, int, int, int)
Update a region of the display from the offscreen buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Drivers/Uc8151c.cs#L244)
```csharp title="Declaration"
public override void Show(int left, int top, int right, int bottom)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *left* | Left bounds in pixels |
| `System.Int32` | *top* | Top bounds in pixels |
| `System.Int32` | *right* | Right bounds in pixels |
| `System.Int32` | *bottom* | Bottom bounds in pixels |

### Show()
Update the display from the offscreen buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Drivers/Uc8151c.cs#L255)
```csharp title="Declaration"
public override void Show()
```
### ClearFrame()
Clears the SRAM on the display controller
Doesn't update the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Drivers/Uc8151c.cs#L264)
```csharp title="Declaration"
protected void ClearFrame()
```
### DisplayFrame()
Display data from the display controller SRAM
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Drivers/Uc8151c.cs#L309)
```csharp title="Declaration"
public void DisplayFrame()
```
### Sleep()
Set the sensor to sleep state
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Drivers/Uc8151c.cs#L318)
```csharp title="Declaration"
protected virtual void Sleep()
```

## Implements

* `Meadow.Hardware.ISpiPeripheral`
* `System.IDisposable`
* [Meadow.Foundation.Graphics.IGraphicsDisplay](../IGraphicsDisplay)
