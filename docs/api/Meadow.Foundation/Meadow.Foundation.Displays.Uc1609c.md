---
uid: Meadow.Foundation.Displays.Uc1609c
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Uc1609c
---

| Uc1609c | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Uc1609c) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Uc1609c/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.Uc1609c/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.Uc1609c.svg?label=Meadow.Foundation.Displays.Uc1609c" alt="NuGet Gallery for Meadow.Foundation.Displays.Uc1609c" /></a> |

### Code Example

```csharp
MicroGraphics graphics;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    var uc1609c = new Uc1609c
    (
        spiBus: Device.CreateSpiBus(),
        chipSelectPin: Device.Pins.A03,
        dcPin: Device.Pins.A04,
        resetPin: Device.Pins.A05,
        width: 192,
        height: 64
    );

    graphics = new MicroGraphics(uc1609c)
    {
        CurrentFont = new Font8x8()
    };

    return base.Initialize();
}

public override Task Run()
{
    graphics.Clear();
    graphics.DrawTriangle(10, 10, 50, 50, 10, 50, false);
    graphics.DrawRectangle(20, 15, 40, 20, true);
    graphics.DrawText(5, 5, "UC1609C");
    graphics.DrawCircle(96, 32, 16);
    graphics.Show();

    Resolver.Log.Info("Run complete");

    return base.Run();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Uc1609c/Samples/Uc1609c_Sample)


# Class Uc1609c
Represents a UC1609C single color LCD display

###### **Assembly**: Uc1609c.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Uc1609c/Driver/Uc1609c.Registers.cs#L3)
```csharp title="Declaration"
public class Uc1609c : IGraphicsDisplay, ISpiPeripheral, IDisposable
```
**Implements:**  
[Meadow.Foundation.Graphics.IGraphicsDisplay](../IGraphicsDisplay), `Meadow.Hardware.ISpiPeripheral`, `System.IDisposable`

## Properties
### ColorMode
The display color mode - 1 bit per pixel monochrome
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Uc1609c/Driver/Uc1609c.cs#L18)
```csharp title="Declaration"
public ColorMode ColorMode { get; }
```
### SupportedColorModes
The Color mode supported by the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Uc1609c/Driver/Uc1609c.cs#L23)
```csharp title="Declaration"
public ColorMode SupportedColorModes { get; }
```
### Width
The display width in pixels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Uc1609c/Driver/Uc1609c.cs#L28)
```csharp title="Declaration"
public int Width { get; }
```
### Height
The display height in pixels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Uc1609c/Driver/Uc1609c.cs#L33)
```csharp title="Declaration"
public int Height { get; }
```
### PixelBuffer
The buffer the holds the pixel data for the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Uc1609c/Driver/Uc1609c.cs#L38)
```csharp title="Declaration"
public IPixelBuffer PixelBuffer { get; }
```
### DefaultSpiBusSpeed
The default SPI bus speed for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Uc1609c/Driver/Uc1609c.cs#L43)
```csharp title="Declaration"
public Frequency DefaultSpiBusSpeed { get; }
```
### SpiBusSpeed
The SPI bus speed for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Uc1609c/Driver/Uc1609c.cs#L48)
```csharp title="Declaration"
public Frequency SpiBusSpeed { get; set; }
```
### DefaultSpiBusMode
The default SPI bus mode for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Uc1609c/Driver/Uc1609c.cs#L57)
```csharp title="Declaration"
public SpiClockConfiguration.Mode DefaultSpiBusMode { get; }
```
### SpiBusMode
The SPI bus mode for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Uc1609c/Driver/Uc1609c.cs#L62)
```csharp title="Declaration"
public SpiClockConfiguration.Mode SpiBusMode { get; set; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Uc1609c/Driver/Uc1609c.cs#L71)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Fields
### spiComms
SPI Communication bus used to communicate with the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Uc1609c/Driver/Uc1609c.cs#L81)
```csharp title="Declaration"
protected readonly ISpiCommunications spiComms
```
## Methods
### SendData(byte)
Send a command to the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Uc1609c/Driver/Uc1609c.cs#L168)
```csharp title="Declaration"
protected void SendData(byte data)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *data* | Command byte to send to the display |

### Reset()
Reset the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Uc1609c/Driver/Uc1609c.cs#L176)
```csharp title="Declaration"
protected void Reset()
```
### Clear(bool)
Clear the display buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Uc1609c/Driver/Uc1609c.cs#L188)
```csharp title="Declaration"
public void Clear(bool updateDisplay = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *updateDisplay* | Immediately update the display when true |

### DrawPixel(int, int, Color)
Draw pixel at a location
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Uc1609c/Driver/Uc1609c.cs#L201)
```csharp title="Declaration"
public void DrawPixel(int x, int y, Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | Abscissa of the pixel to the set / reset |
| `System.Int32` | *y* | Ordinate of the pixel to the set / reset |
| `Meadow.Color` | *color* | Any color = turn on pixel, black = turn off pixel |

### DrawPixel(int, int, bool)
Draw pixel at a location
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Uc1609c/Driver/Uc1609c.cs#L212)
```csharp title="Declaration"
public void DrawPixel(int x, int y, bool enabled)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | Abscissa of the pixel to the set / reset |
| `System.Int32` | *y* | Ordinate of the pixel to the set / reset |
| `System.Boolean` | *enabled* | True = turn on pixel, false = turn off pixel |

### InvertPixel(int, int)
Invert a pixel at a location
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Uc1609c/Driver/Uc1609c.cs#L222)
```csharp title="Declaration"
public void InvertPixel(int x, int y)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | Abscissa of the pixel to the set / reset |
| `System.Int32` | *y* | Ordinate of the pixel to the set / reset |

### Fill(Color, bool)
Fill display buffer with a color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Uc1609c/Driver/Uc1609c.cs#L232)
```csharp title="Declaration"
public void Fill(Color clearColor, bool updateDisplay = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Color` | *clearColor* | The fill color |
| `System.Boolean` | *updateDisplay* | If true, update display |

### Fill(int, int, int, int, Color)
Fill with a color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Uc1609c/Driver/Uc1609c.cs#L247)
```csharp title="Declaration"
public void Fill(int x, int y, int width, int height, Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | X start position in pixels |
| `System.Int32` | *y* | Y start position in pixels |
| `System.Int32` | *width* | Width in pixels |
| `System.Int32` | *height* | Height in pixels |
| `Meadow.Color` | *color* | The fill color |

### WriteBuffer(int, int, IPixelBuffer)
Write a buffer to the display offscreen buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Uc1609c/Driver/Uc1609c.cs#L258)
```csharp title="Declaration"
public void WriteBuffer(int x, int y, IPixelBuffer displayBuffer)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | The x position in pixels to write the buffer |
| `System.Int32` | *y* | The y position in pixels to write the buffer |
| [Meadow.Foundation.Graphics.Buffers.IPixelBuffer](../IPixelBuffer) | *displayBuffer* | The buffer to write |

### Show()
Send the internal pixel buffer to display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Uc1609c/Driver/Uc1609c.cs#L266)
```csharp title="Declaration"
public void Show()
```
### Show(int, int, int, int)
Send a region of the internal pixel buffer to display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Uc1609c/Driver/Uc1609c.cs#L274)
```csharp title="Declaration"
public void Show(int left, int top, int right, int bottom)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *left* |
| `System.Int32` | *top* |
| `System.Int32` | *right* |
| `System.Int32` | *bottom* |

### Scroll(byte)
Scroll the display by 0 to 64 rows
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Uc1609c/Driver/Uc1609c.cs#L284)
```csharp title="Declaration"
public void Scroll(byte scrollValue)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Byte` | *scrollValue* |


##### Exceptions

`System.ArgumentException`  

### InvertDisplay(bool)
Invert the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Uc1609c/Driver/Uc1609c.cs#L297)
```csharp title="Declaration"
public void InvertDisplay(bool invert)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *invert* | True for inverted, False for normal |

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Uc1609c/Driver/Uc1609c.cs#L303)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Uc1609c/Driver/Uc1609c.cs#L313)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |


## Implements

* [Meadow.Foundation.Graphics.IGraphicsDisplay](../IGraphicsDisplay)
* `Meadow.Hardware.ISpiPeripheral`
* `System.IDisposable`
