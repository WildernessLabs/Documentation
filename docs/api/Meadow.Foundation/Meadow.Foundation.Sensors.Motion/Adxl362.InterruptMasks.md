---
title: Class Adxl362.InterruptMasks
sidebar_label: Adxl362.InterruptMasks
description: Bit masks for the interrupt 1 / 2 control.
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion/Adxl362.InterruptMasks
---
# Class Adxl362.InterruptMasks
Bit masks for the interrupt 1 / 2 control.

###### **Assembly**: Adxl3xx.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.InterruptMasks.cs#L8)
```csharp title="Declaration"
public static class Adxl362.InterruptMasks
```
## Fields
### DATA_READY
Bit indicating that data is ready for processing.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.InterruptMasks.cs#L13)
```csharp title="Declaration"
public const byte DATA_READY = 1
```
### FIFO_DATA_READY
Bit indicating that data is ready in the FIFO buffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.InterruptMasks.cs#L18)
```csharp title="Declaration"
public const byte FIFO_DATA_READY = 2
```
### FIFO_HIGH_WATERMARK_REACHED
Bit indicating that the FIFO buffer has reached the high watermark.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.InterruptMasks.cs#L23)
```csharp title="Declaration"
public const byte FIFO_HIGH_WATERMARK_REACHED = 4
```
### FIFO_OVERRUN
Bit indicating that the FIFO buffer has overrun.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.InterruptMasks.cs#L28)
```csharp title="Declaration"
public const byte FIFO_OVERRUN = 8
```
### ACTIVITY
Activity interrupt bit.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.InterruptMasks.cs#L33)
```csharp title="Declaration"
public const byte ACTIVITY = 16
```
### INACTIVITY
Inactivity interrupt.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.InterruptMasks.cs#L38)
```csharp title="Declaration"
public const byte INACTIVITY = 32
```
### AWAKE
Awake interrupt.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.InterruptMasks.cs#L43)
```csharp title="Declaration"
public const byte AWAKE = 64
```
### ACTIVE_LOW
Interrupt active high / low (1 = low, 0 = high).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.InterruptMasks.cs#L48)
```csharp title="Declaration"
public const byte ACTIVE_LOW = 128
```
