---
title: Interface ICalibratableTouchscreen
sidebar_label: ICalibratableTouchscreen
description: Represents a touch screen device that can be calibrated
slug: /docs/api/Meadow/Meadow.Hardware/ICalibratableTouchscreen
---
# Interface ICalibratableTouchscreen
Represents a touch screen device that can be calibrated

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Touchscreen/ICalibratableTouchscreen.cs#L8)
```csharp title="Declaration"
public interface ICalibratableTouchscreen : ITouchScreen
```
## Properties
### IsCalibrated
Returns &lt;b&gt;true&lt;/b&gt; if the touchscreen has been calibrated, otherwise &lt;b&gt;false&lt;/b&gt;
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Touchscreen/ICalibratableTouchscreen.cs#L13)
```csharp title="Declaration"
bool IsCalibrated { get; }
```
## Methods
### SetCalibrationData(IEnumerable&lt;CalibrationPoint&gt;)
Sets the calibration data for the touchscreen
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Touchscreen/ICalibratableTouchscreen.cs#L19)
```csharp title="Declaration"
void SetCalibrationData(IEnumerable<CalibrationPoint> data)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Collections.Generic.IEnumerable<Meadow.Hardware.CalibrationPoint>` | *data* | The calibration point |

