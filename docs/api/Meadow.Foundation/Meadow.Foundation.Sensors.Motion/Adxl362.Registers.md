---
title: Class Adxl362.Registers
sidebar_label: Adxl362.Registers
description: Registers in the ADXL362 sensor.
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion/Adxl362.Registers
---
# Class Adxl362.Registers
Registers in the ADXL362 sensor.

###### **Assembly**: Adxl3xx.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.Registers.cs#L8)
```csharp title="Declaration"
protected static class Adxl362.Registers
```
## Fields
### DEVICE_ID
Device ID (should be 0xad).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.Registers.cs#L13)
```csharp title="Declaration"
public const byte DEVICE_ID = 0
```
### DEVICE_ID_MST
Device IS MST (should be 0x1d).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.Registers.cs#L18)
```csharp title="Declaration"
public const byte DEVICE_ID_MST = 1
```
### PART_ID
Part ID (should be 0xf2).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.Registers.cs#L23)
```csharp title="Declaration"
public const byte PART_ID = 3
```
### SILICON_REVISION_ID
Revision ID (starts with 0x01 and increments for each change to the silicon).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.Registers.cs#L28)
```csharp title="Declaration"
public const byte SILICON_REVISION_ID = 3
```
### X_AXIS_8BITS
X-axis MSB (8-bits used when limited resolution is acceptable).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.Registers.cs#L33)
```csharp title="Declaration"
public const byte X_AXIS_8BITS = 8
```
### Y_AXIS_8BITS
Y-axis MSB (8-bits used when limited resolution is acceptable).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.Registers.cs#L38)
```csharp title="Declaration"
public const byte Y_AXIS_8BITS = 9
```
### Z_AXIS_8BITS
Z-axis MSB (8-bits used when limited resolution is acceptable).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.Registers.cs#L43)
```csharp title="Declaration"
public const byte Z_AXIS_8BITS = 10
```
### STATUS
Status register
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.Registers.cs#L48)
```csharp title="Declaration"
public const byte STATUS = 11
```
### FIFO_RC_ENTRIES_LSB
FIFO entires (LSB)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.Registers.cs#L53)
```csharp title="Declaration"
public const byte FIFO_RC_ENTRIES_LSB = 12
```
### FIFO_ENTRIES_MSB
FIFO entries (MSB)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.Registers.cs#L58)
```csharp title="Declaration"
public const byte FIFO_ENTRIES_MSB = 13
```
### X_AXIS_LSB
X-axis (LSB)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.Registers.cs#L63)
```csharp title="Declaration"
public const byte X_AXIS_LSB = 14
```
### X_AXIS_MSB
X-axis MSB
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.Registers.cs#L68)
```csharp title="Declaration"
public const byte X_AXIS_MSB = 15
```
### Y_AXIS_LSB
Y-axis (LSB)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.Registers.cs#L73)
```csharp title="Declaration"
public const byte Y_AXIS_LSB = 16
```
### Y_AXIS_MSB
Y-Axis (MSB)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.Registers.cs#L78)
```csharp title="Declaration"
public const byte Y_AXIS_MSB = 17
```
### Z_AXIS_LSB
Z-axis (LSB)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.Registers.cs#L83)
```csharp title="Declaration"
public const byte Z_AXIS_LSB = 18
```
### Z_AXIS_MSB
Z-axis (MSB)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.Registers.cs#L88)
```csharp title="Declaration"
public const byte Z_AXIS_MSB = 19
```
### TEMPERATURE_LSB
Temperature (LSB)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.Registers.cs#L93)
```csharp title="Declaration"
public const byte TEMPERATURE_LSB = 20
```
### TEMPERATURE_MSB
Temperature (MSB)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.Registers.cs#L98)
```csharp title="Declaration"
public const byte TEMPERATURE_MSB = 21
```
### SOFT_RESET
Soft reset register.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.Registers.cs#L107)
```csharp title="Declaration"
public const byte SOFT_RESET = 31
```
### ACTIVITY_THRESHOLD_LSB
Activity threshold (LSB)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.Registers.cs#L112)
```csharp title="Declaration"
public const byte ACTIVITY_THRESHOLD_LSB = 32
```
### ACTIVITY_THRESHOLD_MSB
Activity threshold (MSB)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.Registers.cs#L117)
```csharp title="Declaration"
public const byte ACTIVITY_THRESHOLD_MSB = 33
```
### ACTIVITY_TIME_COUNT
Activity time count.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.Registers.cs#L127)
```csharp title="Declaration"
public const byte ACTIVITY_TIME_COUNT = 34
```
### INACTIVITY_THRESHOLD_LSB
Inactivity threshold (LSB)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.Registers.cs#L132)
```csharp title="Declaration"
public const byte INACTIVITY_THRESHOLD_LSB = 35
```
### INACTIVITY_THRESHOLD_MSB
Inactivity threshold (MSB)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.Registers.cs#L137)
```csharp title="Declaration"
public const byte INACTIVITY_THRESHOLD_MSB = 36
```
### INACTIVITY_TIME_COUNT_LSB
Inactivity time count (LSB).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.Registers.cs#L147)
```csharp title="Declaration"
public const byte INACTIVITY_TIME_COUNT_LSB = 37
```
### INACTIVITY_TIME_COUNT_MSB
Inactivity time count (MSB).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.Registers.cs#L157)
```csharp title="Declaration"
public const byte INACTIVITY_TIME_COUNT_MSB = 38
```
### ACTIVITY_INACTIVITY_CONTROL
Activity / Inactivity control.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.Registers.cs#L162)
```csharp title="Declaration"
public const byte ACTIVITY_INACTIVITY_CONTROL = 39
```
### FIFO_CONTROL
FIFO Control.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.Registers.cs#L167)
```csharp title="Declaration"
public const byte FIFO_CONTROL = 40
```
### FIFO_SAMPLE_CONTROL
FIFO samples to store.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.Registers.cs#L172)
```csharp title="Declaration"
public const byte FIFO_SAMPLE_CONTROL = 41
```
### INTERRUPT_MAP_1
Interrupt map register (1)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.Registers.cs#L177)
```csharp title="Declaration"
public const byte INTERRUPT_MAP_1 = 42
```
### INTERRUPT_MAP_2
Interrupt map register (2)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.Registers.cs#L182)
```csharp title="Declaration"
public const byte INTERRUPT_MAP_2 = 43
```
### FILTER_CONTROL
Filter control register.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.Registers.cs#L187)
```csharp title="Declaration"
public const byte FILTER_CONTROL = 44
```
### POWER_CONTROL
Power control.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.Registers.cs#L192)
```csharp title="Declaration"
public const byte POWER_CONTROL = 45
```
### SELF_TEST
Self test.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.Registers.cs#L201)
```csharp title="Declaration"
public const byte SELF_TEST = 46
```
