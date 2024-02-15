---
uid: Meadow.Foundation.Displays.Epd4in2
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Epd4in2
---

| Epd4in2 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.ePaperWaveShare/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.ePaperWaveShare.svg?label=Meadow.Foundation.Displays.ePaperWaveShare" alt="NuGet Gallery for Meadow.Foundation.Displays.ePaperWaveShare" /></a> |


# Class Epd4in2
Represents an WaveShare Epd4in2 ePaper display
400x300, 4.2inch e-Ink display, SPI interface

###### **Assembly**: ePaperWaveShare.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd4in2.cs#L9)
```csharp title="Declaration"
public class Epd4in2 : EPaperMonoBase, ISpiPeripheral, IDisposable, IGraphicsDisplay
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Displays.EPaperBase](../EPaperMonoBase)

**Implements:**  
`Meadow.Hardware.ISpiPeripheral`, `System.IDisposable`, [Meadow.Foundation.Graphics.IGraphicsDisplay](../IGraphicsDisplay)

## Methods
### Initialize()
Initialize the display driver
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd4in2.cs#L42)
```csharp title="Declaration"
protected override void Initialize()
```
### Reset()
Reset the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd4in2.cs#L154)
```csharp title="Declaration"
protected override void Reset()
```
### SetPartialWindow(byte[], int, int, int, int)
Set partial address window to update display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd4in2.cs#L181)
```csharp title="Declaration"
protected void SetPartialWindow(byte[] buffer, int x, int y, int width, int height)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte[]` | *buffer* | The internal display buffer |
| `System.Int32` | *x* | X start position in pixels |
| `System.Int32` | *y* | Y start position in pixels |
| `System.Int32` | *width* | Width in pixels |
| `System.Int32` | *height* | Height in pixels |

### Show(int, int, int, int)
Copy the display buffer to the display for a set region
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd4in2.cs#L222)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd4in2.cs#L232)
```csharp title="Declaration"
public override void Show()
```
### ClearFrame()
Clear the frame data from the SRAM, this doesn't update the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd4in2.cs#L240)
```csharp title="Declaration"
protected virtual void ClearFrame()
```
### DisplayFrame()
Send a refresh command to the display 
Does not transfer new data
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd4in2.cs#L302)
```csharp title="Declaration"
public override void DisplayFrame()
```
### Sleep()
Set the device to low power mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd4in2.cs#L312)
```csharp title="Declaration"
protected override void Sleep()
```

## Implements

* `Meadow.Hardware.ISpiPeripheral`
* `System.IDisposable`
* [Meadow.Foundation.Graphics.IGraphicsDisplay](../IGraphicsDisplay)
