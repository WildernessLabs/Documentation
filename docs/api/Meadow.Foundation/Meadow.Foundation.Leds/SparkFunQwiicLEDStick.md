---
title: Class SparkFunQwiicLEDStick
sidebar_label: SparkFunQwiicLEDStick
description: Represents a SparkFunQwiicLEDStick that uses APA102 leds
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Leds/SparkFunQwiicLEDStick
---
# Class SparkFunQwiicLEDStick
Represents a SparkFunQwiicLEDStick that uses APA102 leds

###### **Assembly**: Apa102.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Leds.Apa102/Driver/SparkFunQwiicLEDStick.Enums.cs#L3)
```csharp title="Declaration"
public class SparkFunQwiicLEDStick : I2cCommunications, II2cCommunications, IByteCommunications, IApa102
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.I2cCommunications](../Meadow.Foundation/I2cCommunications)

**Implements:**  
`Meadow.Hardware.II2cCommunications`, `Meadow.Hardware.IByteCommunications`, [Meadow.Foundation.Leds.IApa102](../Meadow.Foundation.Leds/IApa102)

## Properties
### AutoWrite
Enable or disable autowrite to update the LEDs as they're set
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Leds.Apa102/Driver/SparkFunQwiicLEDStick.cs#L14)
```csharp title="Declaration"
public bool AutoWrite { get; set; }
```
### Brightness
The led brightness (0-1)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Leds.Apa102/Driver/SparkFunQwiicLEDStick.cs#L36)
```csharp title="Declaration"
public float Brightness { get; set; }
```
## Methods
### All(Color, float)
Sets all LEDs to a given color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Leds.Apa102/Driver/SparkFunQwiicLEDStick.cs#L84)
```csharp title="Declaration"
public void All(Color color, float brightness = 1)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Color` | *color* | The led color |
| `System.Single` | *brightness* | The led brightness (0-1) |

### SetLed(int, Color)
Set the color of the specified LED
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Leds.Apa102/Driver/SparkFunQwiicLEDStick.cs#L105)
```csharp title="Declaration"
public virtual void SetLed(int index, Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *index* | Index of the LED to change |
| `Meadow.Color` | *color* | The color |

### SetLed(int, Color, float)
Set the color of the specified LED
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Leds.Apa102/Driver/SparkFunQwiicLEDStick.cs#L116)
```csharp title="Declaration"
public virtual void SetLed(int index, Color color, float brightness = 1)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *index* | Index of the LED to change |
| `Meadow.Color` | *color* | The color |
| `System.Single` | *brightness* | The brightness 0.0 - 1.0f |

### SetLed(int, byte[])
Set the color of the specified LED
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Leds.Apa102/Driver/SparkFunQwiicLEDStick.cs#L126)
```csharp title="Declaration"
public virtual void SetLed(int index, byte[] rgb)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *index* | Index of the LED to change |
| `System.Byte[]` | *rgb* | Byte array representing the color RGB values. byte[0] = Red, byte[1] = Green, byte[2] = Blue |

### SetLed(int, byte[], float)
Set the color of the specified LED
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Leds.Apa102/Driver/SparkFunQwiicLEDStick.cs#L137)
```csharp title="Declaration"
public virtual void SetLed(int index, byte[] rgb, float brightness = 1)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *index* | Index of the LED to change |
| `System.Byte[]` | *rgb* | Byte array representing the color RGB values. byte[0] = Red, byte[1] = Green, byte[2] = Blue |
| `System.Single` | *brightness* | The brightness 0.0 - 1.0f |

### Show()
Transmit the changes to the LEDs
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Leds.Apa102/Driver/SparkFunQwiicLEDStick.cs#L182)
```csharp title="Declaration"
public void Show()
```
### Clear(bool)
Turn off all the Leds
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Leds.Apa102/Driver/SparkFunQwiicLEDStick.cs#L229)
```csharp title="Declaration"
public void Clear(bool update = false)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Boolean` | *update* |


## Implements

* `Meadow.Hardware.II2cCommunications`
* `Meadow.Hardware.IByteCommunications`
* [Meadow.Foundation.Leds.IApa102](../Meadow.Foundation.Leds/IApa102)
