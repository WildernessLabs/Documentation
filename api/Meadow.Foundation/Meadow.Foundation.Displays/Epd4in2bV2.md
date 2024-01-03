---
title: Class Epd4in2bV2
sidebar_label: Epd4in2bV2
description: "Represents an WaveShare Epd4in2b V2 ePaper color display
400x300, 4.2inch e-Ink three-color display, SPI interface"
---
# Class Epd4in2bV2
Represents an WaveShare Epd4in2b V2 ePaper color display
400x300, 4.2inch e-Ink three-color display, SPI interface

###### **Assembly**: ePaperWaveShare.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd4in2bV2.cs#L10)
```csharp title="Declaration"
public class Epd4in2bV2 : EPaperTriColorBase, ISpiPeripheral, IDisposable, IGraphicsDisplay
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Displays.EPaperBase](../Meadow.Foundation.Displays/EPaperBase) -> [Meadow.Foundation.Displays.EPaperTriColorBase](../Meadow.Foundation.Displays/EPaperTriColorBase)

**Implements:**  
`Meadow.Hardware.ISpiPeripheral`, `System.IDisposable`, [Meadow.Foundation.Graphics.IGraphicsDisplay](../Meadow.Foundation.Graphics/IGraphicsDisplay)

## Properties
### IsBlackInverted
Does the display invert data for black pixels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd4in2bV2.cs#L44)
```csharp title="Declaration"
protected override bool IsBlackInverted { get; }
```
### IsColorInverted
Does the display invert data for color pixels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd4in2bV2.cs#L50)
```csharp title="Declaration"
protected override bool IsColorInverted { get; }
```
## Methods
### Initialize()
Initialize the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd4in2bV2.cs#L55)
```csharp title="Declaration"
protected override void Initialize()
```
### Reset()
Reset the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd4in2bV2.cs#L68)
```csharp title="Declaration"
protected override void Reset()
```
### SetPartialWindow(byte[], byte[], int, int, int, int)
Set partial window for display updates
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd4in2bV2.cs#L90)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd4in2bV2.cs#L137)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd4in2bV2.cs#L173)
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
Copy the display buffer to the display for a set region
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd4in2bV2.cs#L208)
```csharp title="Declaration"
public override void Show(int left, int top, int right, int bottom)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *left* | left bounds of region in pixels |
| `System.Int32` | *top* | top bounds of region in pixels |
| `System.Int32` | *right* | right bounds of region in pixels |
| `System.Int32` | *bottom* | bottom bounds of region in pixels |

### Show()
Copy the display buffer to the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd4in2bV2.cs#L219)
```csharp title="Declaration"
public override void Show()
```
### ClearFrame()
Clear the frame data from the SRAM, this doesn't update the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd4in2bV2.cs#L227)
```csharp title="Declaration"
protected virtual void ClearFrame()
```
### DisplayFrame()
Send a refresh command to the display 
Does not transfer new data
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd4in2bV2.cs#L278)
```csharp title="Declaration"
public void DisplayFrame()
```
### Sleep()
Set the device to low power mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd4in2bV2.cs#L287)
```csharp title="Declaration"
protected virtual void Sleep()
```

## Implements

* `Meadow.Hardware.ISpiPeripheral`
* `System.IDisposable`
* [Meadow.Foundation.Graphics.IGraphicsDisplay](../Meadow.Foundation.Graphics/IGraphicsDisplay)
