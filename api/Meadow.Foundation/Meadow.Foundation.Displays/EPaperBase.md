---
title: Class EPaperBase
sidebar_label: EPaperBase
description: "Represents a base ePaper display driver"
---
# Class EPaperBase
Represents a base ePaper display driver

###### **Assembly**: EPaper.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/ePaperBase.cs#L11)
```csharp title="Declaration"
public abstract class EPaperBase : ISpiPeripheral, IDisposable
```
**Derived:**  
[Meadow.Foundation.Displays.EPaperMonoBase](../Meadow.Foundation.Displays/EPaperMonoBase), [Meadow.Foundation.Displays.EPaperTriColorBase](../Meadow.Foundation.Displays/EPaperTriColorBase), [Meadow.Foundation.Displays.Epd5in65f](../Meadow.Foundation.Displays/Epd5in65f)

**Implements:**  
`Meadow.Hardware.ISpiPeripheral`, `System.IDisposable`

## Properties
### DefaultSpiBusSpeed
The default SPI bus speed for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/ePaperBase.cs#L16)
```csharp title="Declaration"
public Frequency DefaultSpiBusSpeed { get; }
```
### SpiBusSpeed
The SPI bus speed for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/ePaperBase.cs#L21)
```csharp title="Declaration"
public Frequency SpiBusSpeed { get; set; }
```
### DefaultSpiBusMode
The default SPI bus mode for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/ePaperBase.cs#L30)
```csharp title="Declaration"
public SpiClockConfiguration.Mode DefaultSpiBusMode { get; }
```
### SpiBusMode
The SPI bus mode for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/ePaperBase.cs#L35)
```csharp title="Declaration"
public SpiClockConfiguration.Mode SpiBusMode { get; set; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/ePaperBase.cs#L44)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Fields
### commandBuffer
The command buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/ePaperBase.cs#L49)
```csharp title="Declaration"
protected readonly byte[] commandBuffer
```
### dataCommandPort
Data command port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/ePaperBase.cs#L54)
```csharp title="Declaration"
protected IDigitalOutputPort? dataCommandPort
```
### resetPort
Reset port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/ePaperBase.cs#L59)
```csharp title="Declaration"
protected IDigitalOutputPort? resetPort
```
### chipSelectPort
Chip select port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/ePaperBase.cs#L64)
```csharp title="Declaration"
protected IDigitalOutputPort? chipSelectPort
```
### busyPort
Busy indicator port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/ePaperBase.cs#L69)
```csharp title="Declaration"
protected IDigitalInputPort? busyPort
```
### spiComms
SPI Communication bus used to communicate with the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/ePaperBase.cs#L74)
```csharp title="Declaration"
protected ISpiCommunications? spiComms
```
### DataState
Const bool representing the data state
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/ePaperBase.cs#L79)
```csharp title="Declaration"
protected const bool DataState = true
```
### CommandState
Const bool representing the command state
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/ePaperBase.cs#L84)
```csharp title="Declaration"
protected const bool CommandState = false
```
### createdPorts
Did we create the port(s) used by the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/ePaperBase.cs#L89)
```csharp title="Declaration"
protected bool createdPorts
```
## Methods
### Write(byte)
Write a value to the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/ePaperBase.cs#L95)
```csharp title="Declaration"
protected void Write(byte value)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *value* | The value as a byte |

### Reset()
Reset the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/ePaperBase.cs#L104)
```csharp title="Declaration"
protected virtual void Reset()
```
### DelayMs(int)
Delay for a specified amount of time
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/ePaperBase.cs#L119)
```csharp title="Declaration"
protected void DelayMs(int millseconds)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *millseconds* | The time in milliseconds |

### SendCommand(byte)
Send a command to the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/ePaperBase.cs#L128)
```csharp title="Declaration"
protected void SendCommand(byte command)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *command* | The command value |

### SendData(int)
Send data to the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/ePaperBase.cs#L138)
```csharp title="Declaration"
protected void SendData(int data)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *data* | The data (is cast to a byte) |

### SendData(byte)
Send data to the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/ePaperBase.cs#L147)
```csharp title="Declaration"
protected void SendData(byte data)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *data* | The data |

### SendData(byte[])
Send data to the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/ePaperBase.cs#L157)
```csharp title="Declaration"
protected void SendData(byte[] data)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte[]` | *data* | The data |

### WaitUntilIdle()
Wait until the display is idle (not busy)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/ePaperBase.cs#L166)
```csharp title="Declaration"
protected virtual void WaitUntilIdle()
```
### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/ePaperBase.cs#L184)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/ePaperBase.cs#L194)
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
