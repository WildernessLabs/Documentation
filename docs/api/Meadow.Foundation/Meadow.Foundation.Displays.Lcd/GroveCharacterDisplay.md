---
title: Class GroveCharacterDisplay
sidebar_label: GroveCharacterDisplay
description: Represents a Grove character display
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Lcd/GroveCharacterDisplay
---
# Class GroveCharacterDisplay
Represents a Grove character display

###### **Assembly**: CharacterDisplay.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/GroveCharacterDisplay.cs#L9)
```csharp title="Declaration"
public class GroveCharacterDisplay : I2cCharacterDisplay, ICharacterDisplay, ITextDisplay, IDisplay, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Displays.Lcd.I2cCharacterDisplay](../Meadow.Foundation.Displays.Lcd/I2cCharacterDisplay)

**Implements:**  
[Meadow.Foundation.Displays.Lcd.ICharacterDisplay](../Meadow.Foundation.Displays.Lcd/ICharacterDisplay), `Meadow.Peripherals.Displays.ITextDisplay`, `Meadow.Peripherals.Displays.IDisplay`, `Meadow.Hardware.II2cPeripheral`

## Methods
### Initialize()
Initialize the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/GroveCharacterDisplay.cs#L28)
```csharp title="Declaration"
protected override void Initialize()
```
### Command(byte)
Send a command to the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/GroveCharacterDisplay.cs#L66)
```csharp title="Declaration"
protected override void Command(byte value)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *value* | The command as a byte |

### Send(byte, byte)
Send data to the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/GroveCharacterDisplay.cs#L77)
```csharp title="Declaration"
protected override void Send(byte value, byte mode)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *value* | The data to send |
| `System.Byte` | *mode* | The mode (not used) |


## Implements

* [Meadow.Foundation.Displays.Lcd.ICharacterDisplay](../Meadow.Foundation.Displays.Lcd/ICharacterDisplay)
* `Meadow.Peripherals.Displays.ITextDisplay`
* `Meadow.Peripherals.Displays.IDisplay`
* `Meadow.Hardware.II2cPeripheral`
