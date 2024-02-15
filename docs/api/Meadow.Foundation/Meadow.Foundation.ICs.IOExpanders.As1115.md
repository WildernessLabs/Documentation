---
uid: Meadow.Foundation.ICs.IOExpanders.As1115
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.As1115
---

| As1115 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.ICs.IOExpanders.As1115/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.ICs.IOExpanders.As1115.svg?label=Meadow.Foundation.ICs.IOExpanders.As1115" alt="NuGet Gallery for Meadow.Foundation.ICs.IOExpanders.As1115" /></a> |

### Code Example

```csharp
As1115 as1115;
MicroGraphics graphics;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");
    as1115 = new As1115(Device.CreateI2cBus(), Device.Pins.D03);

    //general key scan events - will raise for all buttons
    as1115.KeyScanPressStarted += KeyScanPressStarted;

    //or access buttons as IButtons individually
    as1115.KeyScanButtons[KeyScanButtonType.Button1].LongClickedThreshold = TimeSpan.FromSeconds(1);
    as1115.KeyScanButtons[KeyScanButtonType.Button1].Clicked += Button1_Clicked;
    as1115.KeyScanButtons[KeyScanButtonType.Button1].LongClicked += Button1_LongClicked; ;

    graphics = new MicroGraphics(as1115);

    return base.Initialize();
}

private void Button1_LongClicked(object sender, EventArgs e)
{
    Resolver.Log.Info("Button 1 long press");
}

private void Button1_Clicked(object sender, EventArgs e)
{
    Resolver.Log.Info("Button 1 clicked");
}

private void KeyScanPressStarted(object sender, KeyScanEventArgs e)
{
    Resolver.Log.Info($"{e.Button} pressed");
}

public override Task Run()
{
    graphics.Clear();
    graphics.DrawLine(0, 0, 7, 7, true);
    graphics.DrawLine(0, 7, 7, 0, true);

    graphics.Show();

    return base.Run();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Samples/As1115_Sample)

### Wiring Example

To wire a Ads1115 to your Meadow board, connect the following:

| Ads1115  | Meadow Pin    |
|---------|---------------|
| GND     | GND           |
| VCC     | 3V3           |
| SCL     | D08 (SCL Pin) |
| SDA     | D07 (SDA Pin) |

# Class As1115
Represents an As1115 led driver and key scanner

###### **Assembly**: As1115.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Driver/As1115.Registers.cs#L3)
```csharp title="Declaration"
public class As1115 : IGraphicsDisplay, II2cPeripheral, IDisposable
```
**Implements:**  
[Meadow.Foundation.Graphics.IGraphicsDisplay](../IGraphicsDisplay), `Meadow.Hardware.II2cPeripheral`, `System.IDisposable`

## Properties
### KeyScanButtons
Readonly collection that contains all 16 key scan button objects
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Driver/As1115.cs#L29)
```csharp title="Declaration"
public ReadOnlyDictionary<As1115.KeyScanButtonType, KeyScanButton>? KeyScanButtons { get; protected set; }
```
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Driver/As1115.cs#L51)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
### ColorMode
The display color mode (1 bit per pixel)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Driver/As1115.cs#L56)
```csharp title="Declaration"
public ColorMode ColorMode { get; }
```
### SupportedColorModes
The Color mode supported by the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Driver/As1115.cs#L61)
```csharp title="Declaration"
public ColorMode SupportedColorModes { get; }
```
### Width
Display width in pixels for 8x8 matrix displays
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Driver/As1115.cs#L66)
```csharp title="Declaration"
public int Width { get; }
```
### Height
Display height in pixels for 8x8 matrix displays
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Driver/As1115.cs#L71)
```csharp title="Declaration"
public int Height { get; }
```
### PixelBuffer
The buffer that holds the pixel data for 8x8 matrix displays
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Driver/As1115.cs#L76)
```csharp title="Declaration"
public IPixelBuffer PixelBuffer { get; }
```
### DecodeMode
The display decode mode 
BCD character / Hex character / Pixel
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Driver/As1115.cs#L87)
```csharp title="Declaration"
public As1115.DecodeType DecodeMode { get; }
```
### IsDisposed
Is the peripheral disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Driver/As1115.cs#L92)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Fields
### i2cComms
I2C Communication bus used to communicate with the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Driver/As1115.cs#L46)
```csharp title="Declaration"
protected readonly II2cCommunications i2cComms
```
## Methods
### GetButton(KeyScanButtonType)
Helper method to get IButton object references for keyscan buttons
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Driver/As1115.cs#L36)
```csharp title="Declaration"
public IButton GetButton(As1115.KeyScanButtonType buttonType)
```

##### Returns

`Meadow.Peripherals.Sensors.Buttons.IButton`: The button object reference
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.ICs.IOExpanders.As1115.KeyScanButtonType](../As1115.KeyScanButtonType) | *buttonType* | The button type |

### EnableBlink(bool, bool)
Enable or disable display blinking
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Driver/As1115.cs#L212)
```csharp title="Declaration"
public void EnableBlink(bool isEnabled, bool fastBlink = true)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *isEnabled* | Display will blink if true |
| `System.Boolean` | *fastBlink* | True for fast blink (period of 1s), False for slow blink (period of 2s) |

### SetNumber(int)
Set number to display (left aligned)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Driver/As1115.cs#L265)
```csharp title="Declaration"
public void SetNumber(int value)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *value* | the number to display |


##### Exceptions

`System.ArgumentOutOfRangeException`  

### SetCharacter(BcdCharacterType, int, bool)
Set a single character
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Driver/As1115.cs#L299)
```csharp title="Declaration"
public void SetCharacter(As1115.BcdCharacterType character, int digit, bool showDecimal = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.ICs.IOExpanders.As1115.BcdCharacterType](../As1115.BcdCharacterType) | *character* | the character to display |
| `System.Int32` | *digit* | the digit index starting from the left |
| `System.Boolean` | *showDecimal* | show the decimal with the character |

### SetCharacter(HexCharacterType, int, bool)
Set a single character
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Driver/As1115.cs#L317)
```csharp title="Declaration"
public void SetCharacter(As1115.HexCharacterType character, int digit, bool showDecimal = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.ICs.IOExpanders.As1115.HexCharacterType](../As1115.HexCharacterType) | *character* | the character to display |
| `System.Int32` | *digit* | the digit index starting from the left |
| `System.Boolean` | *showDecimal* | show the decimal with the character |

### SetIntensity(byte)
Set display intensity (0-15)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Driver/As1115.cs#L333)
```csharp title="Declaration"
public void SetIntensity(byte intensity)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *intensity* | Intensity from 0-15 (clamps above 15) |

### TestMode(bool)
Enable/disable test mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Driver/As1115.cs#L344)
```csharp title="Declaration"
public void TestMode(bool testOn)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *testOn* | True to enable, false to disable |

### Show()
Update the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Driver/As1115.cs#L352)
```csharp title="Declaration"
public void Show()
```
### Show(int, int, int, int)
Update the display from the display buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Driver/As1115.cs#L371)
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

### Clear(bool)
Clear the display buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Driver/As1115.cs#L380)
```csharp title="Declaration"
public void Clear(bool updateDisplay = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *updateDisplay* | If true, update the display |

### Fill(Color, bool)
Fill the display buffer with a color
Black will clear the display, any other color will turn on all leds
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Driver/As1115.cs#L392)
```csharp title="Declaration"
public void Fill(Color fillColor, bool updateDisplay = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Color` | *fillColor* | The color to fill |
| `System.Boolean` | *updateDisplay* | Update the display |

### Fill(int, int, int, int, Color)
Fill a region of the display buffer with a color
Black will clear the display, any other color will turn on all leds
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Driver/As1115.cs#L407)
```csharp title="Declaration"
public void Fill(int x, int y, int width, int height, Color fillColor)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | X position in pixels |
| `System.Int32` | *y* | Y position in pixels |
| `System.Int32` | *width* | Width in pixels |
| `System.Int32` | *height* | Height in pixels |
| `Meadow.Color` | *fillColor* | Color to fill - Black will turn pixels off, any color will turn pixels on |

### DrawPixel(int, int, Color)
Draw a pixel at a given location
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Driver/As1115.cs#L418)
```csharp title="Declaration"
public void DrawPixel(int x, int y, Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | X position in pixels |
| `System.Int32` | *y* | Y position in pixels |
| `Meadow.Color` | *color* | Color to draw - Black will turn pixels off, any color will turn pixels on |

### DrawPixel(int, int, bool)
Draw a pixel at a given location
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Driver/As1115.cs#L429)
```csharp title="Declaration"
public void DrawPixel(int x, int y, bool enabled)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | X position in pixels |
| `System.Int32` | *y* | Y position in pixels |
| `System.Boolean` | *enabled* | If true, turn led on at location |

### InvertPixel(int, int)
Invert pixel at location (switch on/off)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Driver/As1115.cs#L439)
```csharp title="Declaration"
public void InvertPixel(int x, int y)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | X position in pixels |
| `System.Int32` | *y* | Y position in pixels |

### WriteBuffer(int, int, IPixelBuffer)
Write a pixel buffer to the display buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Driver/As1115.cs#L450)
```csharp title="Declaration"
public void WriteBuffer(int x, int y, IPixelBuffer displayBuffer)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | X position in pixels |
| `System.Int32` | *y* | Y position in pixels |
| [Meadow.Foundation.Graphics.Buffers.IPixelBuffer](../IPixelBuffer) | *displayBuffer* | Display buffer to write |

### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Driver/As1115.cs#L459)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Driver/As1115.cs#L472)
```csharp title="Declaration"
public void Dispose()
```
## Events
### KeyScanPressStarted
Event raised when any key scan button is pressed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Driver/As1115.cs#L19)
```csharp title="Declaration"
public event EventHandler<KeyScanEventArgs> KeyScanPressStarted
```
##### Event Type
`System.EventHandler<Meadow.Foundation.ICs.IOExpanders.KeyScanEventArgs>`
### KeyScanPressEnded
Event raised when any key scan button is released
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Driver/As1115.cs#L24)
```csharp title="Declaration"
public event EventHandler<KeyScanEventArgs> KeyScanPressEnded
```
##### Event Type
`System.EventHandler<Meadow.Foundation.ICs.IOExpanders.KeyScanEventArgs>`

## Implements

* [Meadow.Foundation.Graphics.IGraphicsDisplay](../IGraphicsDisplay)
* `Meadow.Hardware.II2cPeripheral`
* `System.IDisposable`
