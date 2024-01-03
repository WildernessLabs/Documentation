---
title: Class Adxl362.Commands
sidebar_label: Adxl362.Commands
description: "Command byte (first byte in any communication)."
---
# Class Adxl362.Commands
Command byte (first byte in any communication).

###### **Assembly**: Adxl3xx.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.Commands.cs#L8)
```csharp title="Declaration"
protected static class Adxl362.Commands
```
## Fields
### WRITE_REGISTER
Write to one or more registers.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.Commands.cs#L13)
```csharp title="Declaration"
public const byte WRITE_REGISTER = 10
```
### READ_REGISTER
Read the contents of one or more registers.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.Commands.cs#L18)
```csharp title="Declaration"
public const byte READ_REGISTER = 11
```
### READ_FIFO
Read the FIFO buffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl362_Extras/Adxl362.Commands.cs#L23)
```csharp title="Declaration"
public const byte READ_FIFO = 13
```
