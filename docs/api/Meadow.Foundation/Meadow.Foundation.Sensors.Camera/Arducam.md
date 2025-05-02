---
title: Class Arducam
sidebar_label: Arducam
description: Base class for the Arducam family of cameras
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Camera/Arducam
---
# Class Arducam
Base class for the Arducam family of cameras

###### **Assembly**: Arducam.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Arducam/Driver/Arducam.Registers.cs#L3)
```csharp title="Declaration"
public abstract class Arducam : IPhotoCamera, ISpiPeripheral, II2cPeripheral
```
**Derived:**  
[Meadow.Foundation.Sensors.Camera.ArducamMini2MP](../Meadow.Foundation.Sensors.Camera/ArducamMini2MP)

**Implements:**  
`Meadow.Peripherals.Sensors.Cameras.IPhotoCamera`, `Meadow.Hardware.ISpiPeripheral`, `Meadow.Hardware.II2cPeripheral`

## Properties
### CurrentImageFormat
The current image format for capturing photos
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Arducam/Driver/Arducam.cs#L18)
```csharp title="Declaration"
protected Arducam.ImageFormat CurrentImageFormat { get; set; }
```
### MAX_FIFO_SIZE
The maximum amount of data that can be read from the camera memory
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Arducam/Driver/Arducam.cs#L23)
```csharp title="Declaration"
protected virtual uint MAX_FIFO_SIZE { get; }
```
### DefaultSpiBusSpeed
The default SPI bus speed for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Arducam/Driver/Arducam.cs#L28)
```csharp title="Declaration"
public Frequency DefaultSpiBusSpeed { get; }
```
### SpiBusSpeed
The SPI bus speed for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Arducam/Driver/Arducam.cs#L33)
```csharp title="Declaration"
public Frequency SpiBusSpeed { get; set; }
```
### DefaultSpiBusMode
The default SPI bus mode for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Arducam/Driver/Arducam.cs#L42)
```csharp title="Declaration"
public SpiClockConfiguration.Mode DefaultSpiBusMode { get; }
```
### SpiBusMode
The SPI bus mode for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Arducam/Driver/Arducam.cs#L47)
```csharp title="Declaration"
public SpiClockConfiguration.Mode SpiBusMode { get; set; }
```
### DefaultI2cAddress
The default I2C bus for the camera
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Arducam/Driver/Arducam.cs#L56)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
## Fields
### spiComms
SPI Communication bus used to communicate with the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Arducam/Driver/Arducam.cs#L61)
```csharp title="Declaration"
protected readonly ISpiCommunications spiComms
```
### i2cComms
I2C Communication bus used to communicate with the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Arducam/Driver/Arducam.cs#L66)
```csharp title="Declaration"
protected readonly II2cCommunications i2cComms
```
### ARDUCHIP_TEST1
The camera test register
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Arducam/Driver/Arducam.Registers.cs#L38)
```csharp title="Declaration"
protected const byte ARDUCHIP_TEST1 = 0
```
### ARDUCHIP_FRAMES
The number of frames to capture (0 based)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Arducam/Driver/Arducam.Registers.cs#L42)
```csharp title="Declaration"
protected const byte ARDUCHIP_FRAMES = 1
```
## Methods
### Initialize()
Initializes the camera module
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Arducam/Driver/Arducam.cs#L92)
```csharp title="Declaration"
protected abstract Task Initialize()
```

##### Returns

`System.Threading.Tasks.Task`
### Reset()
Resets the camera
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Arducam/Driver/Arducam.cs#L97)
```csharp title="Declaration"
protected void Reset()
```
### Validate()
Validates the camera connection
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Arducam/Driver/Arducam.cs#L108)
```csharp title="Declaration"
protected abstract Task Validate()
```

##### Returns

`System.Threading.Tasks.Task`
### CapturePhoto()
Captures a photo and returns the image data
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Arducam/Driver/Arducam.cs#L113)
```csharp title="Declaration"
public Task<byte[]> CapturePhoto()
```

##### Returns

`System.Threading.Tasks.Task<System.Byte[]>`
### FlushFifo()
Clears the FIFO buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Arducam/Driver/Arducam.cs#L155)
```csharp title="Declaration"
protected void FlushFifo()
```
### ClearFifoFlag()
Clears the FIFO buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Arducam/Driver/Arducam.cs#L163)
```csharp title="Declaration"
protected void ClearFifoFlag()
```
### ReadRegister(byte)
Read an SPI register
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Arducam/Driver/Arducam.cs#L259)
```csharp title="Declaration"
protected byte ReadRegister(byte address)
```

##### Returns

`System.Byte`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Byte` | *address* |

### GetBit(byte, byte)
Get the value of a single bit from a byte
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Arducam/Driver/Arducam.cs#L270)
```csharp title="Declaration"
protected byte GetBit(byte address, byte bit)
```

##### Returns

`System.Byte`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Byte` | *address* |
| `System.Byte` | *bit* |

### SetMode(byte)
Set the camera mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Arducam/Driver/Arducam.cs#L282)
```csharp title="Declaration"
protected void SetMode(byte mode)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Byte` | *mode* |

### SetJpegSize(ImageSize)
Set the jpeg capture resolution
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Arducam/Driver/Arducam.cs#L306)
```csharp title="Declaration"
public abstract Task SetJpegSize(Arducam.ImageSize size)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Foundation.Sensors.Camera.Arducam.ImageSize](../Meadow.Foundation.Sensors.Camera/Arducam.ImageSize) | *size* |

### SetImageFormat(ImageFormat)
Set the capture image format
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Arducam/Driver/Arducam.cs#L312)
```csharp title="Declaration"
protected void SetImageFormat(Arducam.ImageFormat format)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Foundation.Sensors.Camera.Arducam.ImageFormat](../Meadow.Foundation.Sensors.Camera/Arducam.ImageFormat) | *format* |

### WriteRegister(byte, byte)
Write an SPI register
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Arducam/Driver/Arducam.cs#L322)
```csharp title="Declaration"
protected void WriteRegister(byte address, byte data)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Byte` | *address* |
| `System.Byte` | *data* |

### ReadSensorRegister(byte)
Read an I2C register
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Arducam/Driver/Arducam.cs#L337)
```csharp title="Declaration"
protected byte ReadSensorRegister(byte regID)
```

##### Returns

`System.Byte`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Byte` | *regID* |

### WriteSensorRegister(byte, byte)
Write an I2C register
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Arducam/Driver/Arducam.cs#L351)
```csharp title="Declaration"
protected void WriteSensorRegister(byte register, byte value)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Byte` | *register* |
| `System.Byte` | *value* |

### WriteSensorRegisters(SensorReg[])
Write an array of I2C registers
Used for camera configuration
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Arducam/Driver/Arducam.cs#L361)
```csharp title="Declaration"
protected void WriteSensorRegisters(Arducam.SensorReg[] registerList)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `Meadow.Foundation.Sensors.Camera.Arducam.SensorReg[]` | *registerList* |


## Implements

* `Meadow.Peripherals.Sensors.Cameras.IPhotoCamera`
* `Meadow.Hardware.ISpiPeripheral`
* `Meadow.Hardware.II2cPeripheral`
