---
title: Interface IPhotoCamera
sidebar_label: IPhotoCamera
description: Interface for still photo camera sensors
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors.Cameras/IPhotoCamera
---
# Interface IPhotoCamera
Interface for still photo camera sensors

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Camera/IPhotoCamera.cs#L8)
```csharp title="Declaration"
public interface IPhotoCamera
```
## Methods
### CapturePhoto()
Capture a new image/photo
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Camera/IPhotoCamera.cs#L14)
```csharp title="Declaration"
Task<byte[]> CapturePhoto()
```

##### Returns

`System.Threading.Tasks.Task<System.Byte[]>`: the picture data as a byte array
