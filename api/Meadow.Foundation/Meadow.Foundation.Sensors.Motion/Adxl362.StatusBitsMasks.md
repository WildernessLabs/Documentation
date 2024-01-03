---
title: Class Adxl362.StatusBitsMasks
sidebar_label: Adxl362.StatusBitsMasks
description: "Status bit mask."
---
# Class Adxl362.StatusBitsMasks
Status bit mask.

###### **Assembly**: Adxl3xx.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.StatusBitMasks.cs#L8)
```csharp title="Declaration"
protected static class Adxl362.StatusBitsMasks
```
## Fields
### DATA_READY
Indicates if data is ready to be read.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.StatusBitMasks.cs#L13)
```csharp title="Declaration"
public const byte DATA_READY = 1
```
### FIFO_READY
Indicate when FIFO data is ready to be read.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.StatusBitMasks.cs#L18)
```csharp title="Declaration"
public const byte FIFO_READY = 2
```
### FIFO_WATERMARK
Set when the FIFO watermark has been reached.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.StatusBitMasks.cs#L23)
```csharp title="Declaration"
public const byte FIFO_WATERMARK = 4
```
### FIFO_OVERRUN
True when incoming data is replacing existing data in the FIFO buffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.StatusBitMasks.cs#L28)
```csharp title="Declaration"
public const byte FIFO_OVERRUN = 8
```
### ACTIVITY_DETECTED
Activity has been detected.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.StatusBitMasks.cs#L33)
```csharp title="Declaration"
public const byte ACTIVITY_DETECTED = 16
```
### INACTIVITY_DETECTED
Indicate that the sensor is either inactive or a free-fall condition
has been detected.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.StatusBitMasks.cs#L39)
```csharp title="Declaration"
public const byte INACTIVITY_DETECTED = 32
```
### AWAKE
Indicate if the sensor is awake (true) or inactive (false).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.StatusBitMasks.cs#L44)
```csharp title="Declaration"
public const byte AWAKE = 64
```
### ERROR_USER_REGISTER
SEU Error Detect. 1 indicates one of two conditions: either an
SEU event, such as an alpha particle of a power glitch, has disturbed
a user register setting or the ADXL362 is not configured. This bit
is high upon both startup and soft reset, and resets as soon as any
register write commands are performed.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.StatusBitMasks.cs#L53)
```csharp title="Declaration"
public const byte ERROR_USER_REGISTER = 128
```
