---
title: Class WiiExtensionControllerBase
sidebar_label: WiiExtensionControllerBase
description: >-
  Abstract base class that represents  Nintendo Wiimote I2C extension
  controllers
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid/WiiExtensionControllerBase
---
# Class WiiExtensionControllerBase
Abstract base class that represents 
Nintendo Wiimote I2C extension controllers

###### **Assembly**: WiiExtensionControllers.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/WiiExtensionControllerBase.Enums.cs#L3)
```csharp title="Declaration"
public abstract class WiiExtensionControllerBase : II2cPeripheral
```
**Derived:**  
[Meadow.Foundation.Sensors.Hid.WiiClassicControllerBase](../Meadow.Foundation.Sensors.Hid/WiiClassicControllerBase), [Meadow.Foundation.Sensors.Hid.WiiNunchuck](../Meadow.Foundation.Sensors.Hid/WiiNunchuck)

**Implements:**  
`Meadow.Hardware.II2cPeripheral`

## Properties
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/WiiExtensionControllerBase.cs#L17)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
### DefaultI2cSpeed
Default I2C bus speed (400kHz)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/WiiExtensionControllerBase.cs#L22)
```csharp title="Declaration"
public static I2cBusSpeed DefaultI2cSpeed { get; }
```
### ReadBuffer
Data buffer returned by the controller
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/WiiExtensionControllerBase.cs#L32)
```csharp title="Declaration"
protected Span<byte> ReadBuffer { get; }
```
### SamplingTokenSource
Sampling cancellation token source
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/WiiExtensionControllerBase.cs#L43)
```csharp title="Declaration"
protected CancellationTokenSource? SamplingTokenSource { get; set; }
```
### IsSampling
Are we actively reading data from the extension controller
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/WiiExtensionControllerBase.cs#L48)
```csharp title="Declaration"
public bool IsSampling { get; protected set; }
```
## Fields
### i2cComms
I2C Communication bus used to communicate with the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/WiiExtensionControllerBase.cs#L27)
```csharp title="Declaration"
protected readonly II2cCommunications i2cComms
```
### samplingLock
Lock for sampling
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/WiiExtensionControllerBase.cs#L38)
```csharp title="Declaration"
protected object samplingLock
```
## Methods
### Initialize()
Initialize the extension controller
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/WiiExtensionControllerBase.cs#L65)
```csharp title="Declaration"
protected virtual void Initialize()
```
### Update()
Get the latest sensor data from the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/WiiExtensionControllerBase.cs#L75)
```csharp title="Declaration"
public virtual void Update()
```
### GetIdentification()
Gets the device ID
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/WiiExtensionControllerBase.cs#L86)
```csharp title="Declaration"
public byte[] GetIdentification()
```

##### Returns

`System.Byte[]`: The ID as a byte### StartUpdating(TimeSpan)
Starts continuously sampling the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/WiiExtensionControllerBase.cs#L100)
```csharp title="Declaration"
public void StartUpdating(TimeSpan updateInterval)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.TimeSpan` | *updateInterval* | interval between samples |

### StopUpdating()
Stops sampling the extension controller
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/WiiExtensionControllerBase.cs#L125)
```csharp title="Declaration"
public void StopUpdating()
```

## Implements

* `Meadow.Hardware.II2cPeripheral`
