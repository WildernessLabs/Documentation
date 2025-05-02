---
title: Class ArducamMini2MP
sidebar_label: ArducamMini2MP
description: Represents the Arducam Mini 2MP camera module
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Camera/ArducamMini2MP
---
# Class ArducamMini2MP
Represents the Arducam Mini 2MP camera module

###### **Assembly**: Arducam.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Arducam/Driver/Drivers/Extras/ArducamMini2MP.Ov2640Regs.cs#L3)
```csharp title="Declaration"
public class ArducamMini2MP : Arducam, IPhotoCamera, ISpiPeripheral, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Sensors.Camera.Arducam](../Meadow.Foundation.Sensors.Camera/Arducam)

**Implements:**  
`Meadow.Peripherals.Sensors.Cameras.IPhotoCamera`, `Meadow.Hardware.ISpiPeripheral`, `Meadow.Hardware.II2cPeripheral`

## Methods
### Initialize()
Initializes the camera module
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Arducam/Driver/Drivers/ArducamMini2MP.cs#L26)
```csharp title="Declaration"
protected override Task Initialize()
```

##### Returns

`System.Threading.Tasks.Task`
### SetJpegSize(ImageSize)
Sets the Jpeg capture resolution
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Arducam/Driver/Drivers/ArducamMini2MP.cs#L58)
```csharp title="Declaration"
public override Task SetJpegSize(Arducam.ImageSize size)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Sensors.Camera.Arducam.ImageSize](../Meadow.Foundation.Sensors.Camera/Arducam.ImageSize) | *size* | The desired image size |

### Validate()
Validate the camera
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Arducam/Driver/Drivers/ArducamMini2MP.cs#L103)
```csharp title="Declaration"
protected override Task Validate()
```

##### Returns

`System.Threading.Tasks.Task`
### SetLightMode(LightMode)
The camera lighting mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Arducam/Driver/Drivers/ArducamMini2MP.cs#L128)
```csharp title="Declaration"
public void SetLightMode(Arducam.LightMode lightMode)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Foundation.Sensors.Camera.Arducam.LightMode](../Meadow.Foundation.Sensors.Camera/Arducam.LightMode) | *lightMode* |

### SetColorSaturation(ColorSaturation)
Set the camera color saturation
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Arducam/Driver/Drivers/ArducamMini2MP.cs#L175)
```csharp title="Declaration"
public void SetColorSaturation(Arducam.ColorSaturation saturation)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Foundation.Sensors.Camera.Arducam.ColorSaturation](../Meadow.Foundation.Sensors.Camera/Arducam.ColorSaturation) | *saturation* |

### SetBrightness(Brightness)
Set the camera brightness
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Arducam/Driver/Drivers/ArducamMini2MP.cs#L227)
```csharp title="Declaration"
public void SetBrightness(Arducam.Brightness brightness)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Foundation.Sensors.Camera.Arducam.Brightness](../Meadow.Foundation.Sensors.Camera/Arducam.Brightness) | *brightness* |

### SetContrast(Contrast)
Set the camera contrast
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Arducam/Driver/Drivers/ArducamMini2MP.cs#L278)
```csharp title="Declaration"
public void SetContrast(Arducam.Contrast contrast)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Foundation.Sensors.Camera.Arducam.Contrast](../Meadow.Foundation.Sensors.Camera/Arducam.Contrast) | *contrast* |


## Implements

* `Meadow.Peripherals.Sensors.Cameras.IPhotoCamera`
* `Meadow.Hardware.ISpiPeripheral`
* `Meadow.Hardware.II2cPeripheral`
