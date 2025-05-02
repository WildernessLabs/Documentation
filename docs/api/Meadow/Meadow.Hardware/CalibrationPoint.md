---
title: Struct CalibrationPoint
sidebar_label: CalibrationPoint
description: Represents a calibration point with equivalent raw and screen coordinates
slug: /docs/api/Meadow/Meadow.Hardware/CalibrationPoint
---
# Struct CalibrationPoint
Represents a calibration point with equivalent raw and screen coordinates

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Touchscreen/CalibrationPoint.cs#L6)
```csharp title="Declaration"
public struct CalibrationPoint
```
## Properties
### ScreenX
The equivalent screen X coordinate for the raw X value
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Touchscreen/CalibrationPoint.cs#L26)
```csharp title="Declaration"
public int ScreenX { readonly get; set; }
```
### ScreenY
The equivalent screen Y coordinate for the raw Y value
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Touchscreen/CalibrationPoint.cs#L30)
```csharp title="Declaration"
public int ScreenY { readonly get; set; }
```
### RawX
The raw touchscreen X value
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Touchscreen/CalibrationPoint.cs#L34)
```csharp title="Declaration"
public int RawX { readonly get; set; }
```
### RawY
The raw touchscreen Y value
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Touchscreen/CalibrationPoint.cs#L38)
```csharp title="Declaration"
public int RawY { readonly get; set; }
```
## Methods
### ToString()
Returns the fully qualified type name of this instance.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Touchscreen/CalibrationPoint.cs#L41)
```csharp title="Declaration"
public override string ToString()
```

##### Returns

`System.String`: The fully qualified type name.
