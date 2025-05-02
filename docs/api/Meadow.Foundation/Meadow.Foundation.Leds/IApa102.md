---
title: Interface IApa102
sidebar_label: IApa102
description: APA102 abstraction
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Leds/IApa102
---
# Interface IApa102
APA102 abstraction

###### **Assembly**: Apa102.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Leds.Apa102/Driver/IApa102.cs#L6)
```csharp title="Declaration"
public interface IApa102
```
## Properties
### Brightness
LED brightness
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Leds.Apa102/Driver/IApa102.cs#L11)
```csharp title="Declaration"
float Brightness { get; set; }
```
## Methods
### SetLed(int, Color)
Set the color of an led
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Leds.Apa102/Driver/IApa102.cs#L18)
```csharp title="Declaration"
void SetLed(int index, Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *index* | Led index |
| `Meadow.Color` | *color* | Led color |

### SetLed(int, Color, float)
Set the color of an led
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Leds.Apa102/Driver/IApa102.cs#L26)
```csharp title="Declaration"
void SetLed(int index, Color color, float brightness = 1)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *index* | Led index |
| `Meadow.Color` | *color* | Led color |
| `System.Single` | *brightness* | Led brightness (0-1) |

### SetLed(int, byte[])
Set the color of an led
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Leds.Apa102/Driver/IApa102.cs#L33)
```csharp title="Declaration"
void SetLed(int index, byte[] rgb)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *index* | Led index |
| `System.Byte[]` | *rgb* | red, green, blue byte array |

### SetLed(int, byte[], float)
Set the color of an led
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Leds.Apa102/Driver/IApa102.cs#L41)
```csharp title="Declaration"
void SetLed(int index, byte[] rgb, float brightness = 1)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *index* | Led index |
| `System.Byte[]` | *rgb* | red, green, blue byte array |
| `System.Single` | *brightness* | Led brightness (0-1) |

### Clear(bool)
Clear all leds in the off-screen buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Leds.Apa102/Driver/IApa102.cs#L47)
```csharp title="Declaration"
void Clear(bool update = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *update* | If true, update the led state |

### Show()
Update from the off-screen buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Leds.Apa102/Driver/IApa102.cs#L52)
```csharp title="Declaration"
void Show()
```
