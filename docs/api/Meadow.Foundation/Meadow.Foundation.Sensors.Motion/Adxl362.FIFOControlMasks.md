---
title: Class Adxl362.FIFOControlMasks
sidebar_label: Adxl362.FIFOControlMasks
description: FIFO control bits.
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion/Adxl362.FIFOControlMasks
---
# Class Adxl362.FIFOControlMasks
FIFO control bits.

###### **Assembly**: Adxl3xx.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.FIFOControlMasks.cs#L8)
```csharp title="Declaration"
protected static class Adxl362.FIFOControlMasks
```
## Fields
### FIFO_DISABLED
Disable FIFO mode.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.FIFOControlMasks.cs#L13)
```csharp title="Declaration"
public const byte FIFO_DISABLED = 0
```
### FIFO_OLDEST_SAVED_FIRST
Enable FiFO oldest saved first mode.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.FIFOControlMasks.cs#L18)
```csharp title="Declaration"
public const byte FIFO_OLDEST_SAVED_FIRST = 1
```
### FIFO_STREAM_MODE
Enable FIFOI stream mode.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.FIFOControlMasks.cs#L23)
```csharp title="Declaration"
public const byte FIFO_STREAM_MODE = 2
```
### FIFO_TRIGGERED_MODE
Enable FIFO triggered mode.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.FIFOControlMasks.cs#L28)
```csharp title="Declaration"
public const byte FIFO_TRIGGERED_MODE = 3
```
### STORE_TEMPERATURE_DATA
When this bit is set to 1, the temperature data is stored in the FIFO
buffer as well as the x, y and z axis data.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.FIFOControlMasks.cs#L34)
```csharp title="Declaration"
public const byte STORE_TEMPERATURE_DATA = 4
```
### ABOVE_HALF
MSB of the FIFO sample count.  This allows the FIFO buffer to contain 512 samples.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.FIFOControlMasks.cs#L39)
```csharp title="Declaration"
public const byte ABOVE_HALF = 8
```
