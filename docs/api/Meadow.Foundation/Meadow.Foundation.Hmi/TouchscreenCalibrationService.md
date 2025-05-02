---
title: Class TouchscreenCalibrationService
sidebar_label: TouchscreenCalibrationService
description: Service for calibrating a touchscreen.
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Hmi/TouchscreenCalibrationService
---
# Class TouchscreenCalibrationService
Service for calibrating a touchscreen.

###### **Assembly**: MicroLayout.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Hmi/TouchscreenCalibrationService.cs#L15)
```csharp title="Declaration"
public class TouchscreenCalibrationService
```
## Fields
### ScreenColor
The current screen color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Hmi/TouchscreenCalibrationService.cs#L35)
```csharp title="Declaration"
public static Color ScreenColor
```
### CrosshairColor
The current crosshair color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Hmi/TouchscreenCalibrationService.cs#L39)
```csharp title="Declaration"
public static Color CrosshairColor
```
### TextColor
The current text color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Hmi/TouchscreenCalibrationService.cs#L43)
```csharp title="Declaration"
public static Color TextColor
```
## Methods
### GetSavedCalibrationData()
Gets the saved calibration data.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Hmi/TouchscreenCalibrationService.cs#L93)
```csharp title="Declaration"
public IEnumerable<CalibrationPoint>? GetSavedCalibrationData()
```

##### Returns

`System.Collections.Generic.IEnumerable<Meadow.Hardware.CalibrationPoint>`: A collection of `Meadow.Hardware.CalibrationPoint` if data exists; otherwise, null.### EraseCalibrationData()
Erases the saved calibration data.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Hmi/TouchscreenCalibrationService.cs#L105)
```csharp title="Declaration"
public void EraseCalibrationData()
```
### SaveCalibrationData(IEnumerable&lt;CalibrationPoint&gt;)
Saves the calibration data.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Hmi/TouchscreenCalibrationService.cs#L114)
```csharp title="Declaration"
public void SaveCalibrationData(IEnumerable<CalibrationPoint> data)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Collections.Generic.IEnumerable<Meadow.Hardware.CalibrationPoint>` | *data* | The calibration data to save. |

### Calibrate(bool)
Starts the calibration process.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Hmi/TouchscreenCalibrationService.cs#L127)
```csharp title="Declaration"
public Task Calibrate(bool saveCalibrationData = true)
```

##### Returns

`System.Threading.Tasks.Task`: A task representing the calibration process.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *saveCalibrationData* | Whether to save the calibration data after calibration. |

## Events
### CalibrationComplete
Event that occurs when the calibration is complete.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Hmi/TouchscreenCalibrationService.cs#L20)
```csharp title="Declaration"
public event EventHandler<CalibrationPoint[]>? CalibrationComplete
```
##### Event Type
`System.EventHandler<Meadow.Hardware.CalibrationPoint[]>`
