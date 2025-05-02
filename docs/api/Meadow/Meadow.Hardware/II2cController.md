---
title: Interface II2cController
sidebar_label: II2cController
description: Contract for devices that expose an `II2cBus`.
slug: /docs/api/Meadow/Meadow.Hardware/II2cController
---
# Interface II2cController
Contract for devices that expose an `II2cBus`.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/II2cController.cs#L6)
```csharp title="Declaration"
public interface II2cController : IPinController
```
## Fields
### DefaultI2cBusSpeed
The default I2C Bus speed used when speed parameters are not provided
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/II2cController.cs#L11)
```csharp title="Declaration"
public static I2cBusSpeed DefaultI2cBusSpeed
```
## Methods
### CreateI2cBus(int, I2cBusSpeed)
Creates an I2C bus instance for the default pins and the requested bus speed
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/II2cController.cs#L19)
```csharp title="Declaration"
II2cBus CreateI2cBus(int busNumber = 1, I2cBusSpeed busSpeed = I2cBusSpeed.Standard)
```

##### Returns

[Meadow.Hardware.II2cBus](../Meadow.Hardware/II2cBus): An instance of an I2cBus
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *busNumber* | The bus number |
| [Meadow.Hardware.I2cBusSpeed](../Meadow.Hardware/I2cBusSpeed) | *busSpeed* | The bus speed |

### CreateI2cBus(IPin[], I2cBusSpeed)
Creates an I2C bus instance for the requested pins and bus speed
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/II2cController.cs#L30)
```csharp title="Declaration"
II2cBus CreateI2cBus(IPin[] pins, I2cBusSpeed busSpeed)
```

##### Returns

[Meadow.Hardware.II2cBus](../Meadow.Hardware/II2cBus): An instance of an I2cBus
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.IPin[]` | *pins* | An array of two pins holding the I2C clock and data pins |
| [Meadow.Hardware.I2cBusSpeed](../Meadow.Hardware/I2cBusSpeed) | *busSpeed* | The bus speed |

### CreateI2cBus(IPin, IPin, I2cBusSpeed)
Creates an I2C bus instance for the requested pins and bus speed
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/II2cController.cs#L42)
```csharp title="Declaration"
II2cBus CreateI2cBus(IPin clock, IPin data, I2cBusSpeed busSpeed)
```

##### Returns

[Meadow.Hardware.II2cBus](../Meadow.Hardware/II2cBus): An instance of an I2cBus
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *clock* | The I2C clock pin |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *data* | The I2C data pin |
| [Meadow.Hardware.I2cBusSpeed](../Meadow.Hardware/I2cBusSpeed) | *busSpeed* | The bus speed |

