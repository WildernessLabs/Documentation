---
uid: Meadow.Foundation.Leds.Ws2812
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Leds.Ws2812
---

| Ws2812 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Leds.Ws2812) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Leds.Ws2812/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Leds.Ws2812/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Leds.Ws2812.svg?label=Meadow.Foundation.Leds.Ws2812" alt="NuGet Gallery for Meadow.Foundation.Leds.Ws2812" /></a> |


# Class Ws2812
Represents WS2812/Neopixel Led(s)

###### **Assembly**: Ws2812.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Leds.Ws2812/Driver/Ws2812.cs#L11)
```csharp title="Declaration"
public class Ws2812 : ISpiPeripheral, IDisposable
```
**Implements:**  
`Meadow.Hardware.ISpiPeripheral`, `System.IDisposable`

## Properties
### DefaultSpiBusSpeed
The default SPI bus speed for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Leds.Ws2812/Driver/Ws2812.cs#L16)
```csharp title="Declaration"
public Frequency DefaultSpiBusSpeed { get; }
```
### SpiBusSpeed
The SPI bus speed for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Leds.Ws2812/Driver/Ws2812.cs#L21)
```csharp title="Declaration"
public Frequency SpiBusSpeed { get; set; }
```
### DefaultSpiBusMode
The default SPI bus mode for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Leds.Ws2812/Driver/Ws2812.cs#L30)
```csharp title="Declaration"
public SpiClockConfiguration.Mode DefaultSpiBusMode { get; }
```
### SpiBusMode
The SPI bus mode for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Leds.Ws2812/Driver/Ws2812.cs#L35)
```csharp title="Declaration"
public SpiClockConfiguration.Mode SpiBusMode { get; set; }
```
### NumberOfLeds
Total number of leds
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Leds.Ws2812/Driver/Ws2812.cs#L44)
```csharp title="Declaration"
public int NumberOfLeds { get; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Leds.Ws2812/Driver/Ws2812.cs#L49)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Fields
### spiComms
SPI Communication bus used to communicate with the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Leds.Ws2812/Driver/Ws2812.cs#L62)
```csharp title="Declaration"
protected ISpiCommunications spiComms
```
## Methods
### SetLed(int, Color)
Set the color of the specified LED
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Leds.Ws2812/Driver/Ws2812.cs#L100)
```csharp title="Declaration"
public void SetLed(int index, Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *index* | Index of the LED to change |
| `Meadow.Color` | *color* | The color |

### SetLed(int, byte[])
Set the color of the specified LED
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Leds.Ws2812/Driver/Ws2812.cs#L119)
```csharp title="Declaration"
public void SetLed(int index, byte[] rgb)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *index* | Index of the LED to change |
| `System.Byte[]` | *rgb* | Byte array representing the color RGB values. byte[0] = Red, byte[1] = Green, byte[2] = Blue |

### Show()
Transmit the buffer to the LEDs
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Leds.Ws2812/Driver/Ws2812.cs#L147)
```csharp title="Declaration"
public void Show()
```
### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Leds.Ws2812/Driver/Ws2812.cs#L153)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Leds.Ws2812/Driver/Ws2812.cs#L163)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |


## Implements

* `Meadow.Hardware.ISpiPeripheral`
* `System.IDisposable`
