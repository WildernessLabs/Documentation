---
title: Class Image
sidebar_label: Image
description: "Represents an Image object"
---
# Class Image
Represents an Image object

###### **Assembly**: MicroGraphics.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Image.cs#L11)
```csharp title="Declaration"
public class Image
```
## Properties
### DisplayBuffer
The image pixel data
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Image.cs#L16)
```csharp title="Declaration"
public IPixelBuffer? DisplayBuffer { get; }
```
### Width
The image width in pixels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Image.cs#L21)
```csharp title="Declaration"
public int Width { get; }
```
### Height
The image height in pixels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Image.cs#L26)
```csharp title="Declaration"
public int Height { get; }
```
### BitsPerPixel
The image bits per pixel
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Image.cs#L31)
```csharp title="Declaration"
public int BitsPerPixel { get; protected set; }
```
## Methods
### LoadFromFile(string)
Load an image from a file
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Image.cs#L39)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Image.cs#L54)
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
