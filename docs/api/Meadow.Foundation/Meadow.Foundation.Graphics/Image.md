---
title: Class Image
sidebar_label: Image
description: Represents an Image object
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Graphics/Image
---
# Class Image
Represents an Image object

###### **Assembly**: MicroGraphics.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Image.cs#L12)
```csharp title="Declaration"
public class Image
```
## Properties
### DisplayBuffer
The image pixel data
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Image.cs#L17)
```csharp title="Declaration"
public IPixelBuffer? DisplayBuffer { get; }
```
### Width
The image width in pixels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Image.cs#L22)
```csharp title="Declaration"
public int Width { get; }
```
### Height
The image height in pixels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Image.cs#L27)
```csharp title="Declaration"
public int Height { get; }
```
### BitsPerPixel
The image bits per pixel
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Image.cs#L32)
```csharp title="Declaration"
public int BitsPerPixel { get; protected set; }
```
## Methods
### LoadFromFile(string)
Load an image from a file
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Image.cs#L40)
```csharp title="Declaration"
public static Image LoadFromFile(string path)
```

##### Returns

[Meadow.Foundation.Graphics.Image](../Meadow.Foundation.Graphics/Image): A new image object
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *path* | The file path |


##### Exceptions

`System.IO.FileNotFoundException`  
Throws if the image file cannot be found
### LoadFromResource(string)
Load an image from a resource
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Image.cs#L55)
```csharp title="Declaration"
public static Image LoadFromResource(string name)
```

##### Returns

[Meadow.Foundation.Graphics.Image](../Meadow.Foundation.Graphics/Image)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *name* | The resource name |


##### Exceptions

`System.ArgumentException`  
Throws if the resource cannot be found
### LoadFromStream(Stream)
Load an image from a Stream
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Image.cs#L78)
```csharp title="Declaration"
public static Image LoadFromStream(Stream stream)
```

##### Returns

[Meadow.Foundation.Graphics.Image](../Meadow.Foundation.Graphics/Image)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.IO.Stream` | *stream* | The resource stream |

### LoadFromPixelData(IPixelBuffer)
Load an image from a IPixelBuffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Image.cs#L87)
```csharp title="Declaration"
public static Image LoadFromPixelData(IPixelBuffer pixelData)
```

##### Returns

[Meadow.Foundation.Graphics.Image](../Meadow.Foundation.Graphics/Image)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Peripherals.Displays.IPixelBuffer` | *pixelData* | The resource pixel |

