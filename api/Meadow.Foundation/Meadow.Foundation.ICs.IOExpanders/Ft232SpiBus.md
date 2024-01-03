---
title: Class Ft232SpiBus
sidebar_label: Ft232SpiBus
description: "Represents an SPI bus using the FT232H USB to SPI bridge."
---
# Class Ft232SpiBus
Represents an SPI bus using the FT232H USB to SPI bridge.

###### **Assembly**: Ft232h.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ft232h/Driver/Ft232SpiBus.cs#L13)
```csharp title="Declaration"
public sealed class Ft232SpiBus : ISpiBus, IDisposable
```
**Implements:**  
`Meadow.Hardware.ISpiBus`, `System.IDisposable`

## Properties
### Handle
Gets the handle for the FT232H SPI bus.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ft232h/Driver/Ft232SpiBus.cs#L30)
```csharp title="Declaration"
public IntPtr Handle { get; }
```
### GpioDirectionMask
Gets or sets the GPIO direction mask for the FT232H SPI bus.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ft232h/Driver/Ft232SpiBus.cs#L35)
```csharp title="Declaration"
public byte GpioDirectionMask { get; set; }
```
### GpioState
Gets or sets the GPIO state for the FT232H SPI bus.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ft232h/Driver/Ft232SpiBus.cs#L40)
```csharp title="Declaration"
public byte GpioState { get; set; }
```
### SupportedSpeeds
Gets the supported SPI bus speeds for the FT232H SPI bus.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ft232h/Driver/Ft232SpiBus.cs#L49)
```csharp title="Declaration"
public Frequency[] SupportedSpeeds { get; }
```
### Configuration
Gets or sets the SPI bus configuration.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ft232h/Driver/Ft232SpiBus.cs#L233)
```csharp title="Declaration"
public SpiClockConfiguration Configuration { get; set; }
```
## Fields
### DefaultClockRate
The default clock rate for the FT232 SPI bus.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ft232h/Driver/Ft232SpiBus.cs#L18)
```csharp title="Declaration"
public const uint DefaultClockRate = 25000000
```
## Methods
### ~Ft232SpiBus()
Finalizes an instance of the [Meadow.Foundation.ICs.IOExpanders.Ft232SpiBus](../Meadow.Foundation.ICs.IOExpanders/Ft232SpiBus) class.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ft232h/Driver/Ft232SpiBus.cs#L70)
```csharp title="Declaration"
protected ~Ft232SpiBus()
```
### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ft232h/Driver/Ft232SpiBus.cs#L79)
```csharp title="Declaration"
public void Dispose()
```
### Read(IDigitalOutputPort, Span&lt;byte&gt;, ChipSelectMode)
Reads data from a device on the SPI bus.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ft232h/Driver/Ft232SpiBus.cs#L159)
```csharp title="Declaration"
public void Read(IDigitalOutputPort chipSelect, Span<byte> readBuffer, ChipSelectMode csMode = ChipSelectMode.ActiveLow)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.IDigitalOutputPort` | *chipSelect* | The digital output port representing the chip select line. |
| `System.Span<System.Byte>` | *readBuffer* | The buffer to store the read data. |
| `Meadow.Hardware.ChipSelectMode` | *csMode* | The chip select mode (active low or active high). |

### Write(IDigitalOutputPort, Span&lt;byte&gt;, ChipSelectMode)
Writes data to a device on the SPI bus.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ft232h/Driver/Ft232SpiBus.cs#L184)
```csharp title="Declaration"
public void Write(IDigitalOutputPort chipSelect, Span<byte> writeBuffer, ChipSelectMode csMode = ChipSelectMode.ActiveLow)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.IDigitalOutputPort` | *chipSelect* | The digital output port representing the chip select line. |
| `System.Span<System.Byte>` | *writeBuffer* | The data to write to the device. |
| `Meadow.Hardware.ChipSelectMode` | *csMode* | The chip select mode (active low or active high). |

### Exchange(IDigitalOutputPort, Span&lt;byte&gt;, Span&lt;byte&gt;, ChipSelectMode)
Exchanges data with a device on the SPI bus.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ft232h/Driver/Ft232SpiBus.cs#L210)
```csharp title="Declaration"
public void Exchange(IDigitalOutputPort chipSelect, Span<byte> writeBuffer, Span<byte> readBuffer, ChipSelectMode csMode = ChipSelectMode.ActiveLow)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.IDigitalOutputPort` | *chipSelect* | The digital output port representing the chip select line. |
| `System.Span<System.Byte>` | *writeBuffer* | The data to write to the device. |
| `System.Span<System.Byte>` | *readBuffer* | The buffer to store the read data. |
| `Meadow.Hardware.ChipSelectMode` | *csMode* | The chip select mode (active low or active high). |


## Implements

* `Meadow.Hardware.ISpiBus`
* `System.IDisposable`
