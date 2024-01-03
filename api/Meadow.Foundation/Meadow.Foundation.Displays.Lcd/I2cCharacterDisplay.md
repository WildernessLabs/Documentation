---
title: Class I2cCharacterDisplay
sidebar_label: I2cCharacterDisplay
description: "Represents a character display using I2C"
---
# Class I2cCharacterDisplay
Represents a character display using I2C

###### **Assembly**: CharacterDisplay.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/I2cCharacterDisplay.Enums.cs#L3)
```csharp title="Declaration"
public class I2cCharacterDisplay : ICharacterDisplay, ITextDisplay, II2cPeripheral
```
**Derived:**  
[Meadow.Foundation.Displays.Lcd.GroveCharacterDisplay](../Meadow.Foundation.Displays.Lcd/GroveCharacterDisplay)

**Implements:**  
[Meadow.Foundation.Displays.Lcd.ICharacterDisplay](../Meadow.Foundation.Displays.Lcd/ICharacterDisplay), `Meadow.Peripherals.Displays.ITextDisplay`, `Meadow.Hardware.II2cPeripheral`

## Properties
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/I2cCharacterDisplay.cs#L15)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
### DisplayConfig
The text display configuration
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/I2cCharacterDisplay.cs#L120)
```csharp title="Declaration"
public TextDisplayConfig DisplayConfig { get; protected set; }
```
## Fields
### i2cComms
I2C Communication bus used to communicate with the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/I2cCharacterDisplay.cs#L20)
```csharp title="Declaration"
protected readonly II2cCommunications i2cComms
```
### displayControl
Display control value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/I2cCharacterDisplay.cs#L25)
```csharp title="Declaration"
protected byte displayControl
```
### displayMode
Display mode value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/I2cCharacterDisplay.cs#L30)
```csharp title="Declaration"
protected byte displayMode
```
### backlightValue
Display backlight value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/I2cCharacterDisplay.cs#L35)
```csharp title="Declaration"
protected byte backlightValue
```
### cursorLine
The cursor current line
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/I2cCharacterDisplay.cs#L40)
```csharp title="Declaration"
protected byte cursorLine
```
### cursorColumn
The cursor current column
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/I2cCharacterDisplay.cs#L45)
```csharp title="Declaration"
protected byte cursorColumn
```
## Methods
### Initialize()
Initialize the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/I2cCharacterDisplay.cs#L142)
```csharp title="Declaration"
protected virtual void Initialize()
```
### Command(byte)
Send a command to the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/I2cCharacterDisplay.cs#L196)
```csharp title="Declaration"
protected virtual void Command(byte value)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *value* | The command as a byte |

### Send(byte, byte)
Send data to the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/I2cCharacterDisplay.cs#L217)
```csharp title="Declaration"
protected virtual void Send(byte value, byte mode)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *value* | The data to send |
| `System.Byte` | *mode* | The mode |

### ClearLine(byte)
Clear a line of text
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/I2cCharacterDisplay.cs#L238)
```csharp title="Declaration"
public void ClearLine(byte lineNumber)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *lineNumber* | The line to clear (0 indexed) |

### ClearLines()
Clear all lines
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/I2cCharacterDisplay.cs#L251)
```csharp title="Declaration"
public void ClearLines()
```
### SetCursorPosition(byte, byte)
Set the cursor position
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/I2cCharacterDisplay.cs#L264)
```csharp title="Declaration"
public void SetCursorPosition(byte column, byte line)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *column* | The cursor column |
| `System.Byte` | *line* | The cursor line |

### Write(string)
Write a string to the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/I2cCharacterDisplay.cs#L282)
```csharp title="Declaration"
public void Write(string text)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *text* | The text to show as a string |

### WriteLine(string, byte, bool)
Write text to a line on the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/I2cCharacterDisplay.cs#L306)
```csharp title="Declaration"
public void WriteLine(string text, byte lineNumber, bool showCursor = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *text* | The text to show |
| `System.Byte` | *lineNumber* | The line number (0 index) |
| `System.Boolean` | *showCursor* | Show the cursor if true |

### DisplayOff()
Set the display off
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/I2cCharacterDisplay.cs#L316)
```csharp title="Declaration"
public virtual void DisplayOff()
```
### DisplayOn()
Set the display on
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/I2cCharacterDisplay.cs#L325)
```csharp title="Declaration"
public virtual void DisplayOn()
```
### CursorOff()
Hide the cursor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/I2cCharacterDisplay.cs#L334)
```csharp title="Declaration"
public void CursorOff()
```
### CursorOn()
Show the cursor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/I2cCharacterDisplay.cs#L343)
```csharp title="Declaration"
public void CursorOn()
```
### BlinkCursor(bool)
Enable or disable cursor blinking
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/I2cCharacterDisplay.cs#L353)
```csharp title="Declaration"
public void BlinkCursor(bool blink)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *blink* | Blink if true |

### ScrollDisplayLeft()
Scroll the display left
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/I2cCharacterDisplay.cs#L370)
```csharp title="Declaration"
public virtual void ScrollDisplayLeft()
```
### ScrollDisplayRight()
Scroll the display right
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/I2cCharacterDisplay.cs#L378)
```csharp title="Declaration"
public virtual void ScrollDisplayRight()
```
### SetLeftToRight()
Set the display to show text left to right
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/I2cCharacterDisplay.cs#L386)
```csharp title="Declaration"
public void SetLeftToRight()
```
### SetRightToLeft()
Set the display to show text right to left
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/I2cCharacterDisplay.cs#L395)
```csharp title="Declaration"
public void SetRightToLeft()
```
### Autoscroll(bool)
Enable or disable auto scroll if the text length exceeds the display width
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/I2cCharacterDisplay.cs#L405)
```csharp title="Declaration"
public void Autoscroll(bool scroll)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *scroll* | Auto scroll if true |

### SaveCustomCharacter(byte[], byte)
Save a custom character to the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/I2cCharacterDisplay.cs#L424)
```csharp title="Declaration"
public void SaveCustomCharacter(byte[] characterMap, byte address)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte[]` | *characterMap* | The character data |
| `System.Byte` | *address* | The character address |

### BacklightOn()
Turn the backlight on
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/I2cCharacterDisplay.cs#L437)
```csharp title="Declaration"
public void BacklightOn()
```
### BacklightOff()
Turn the backlight off
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/I2cCharacterDisplay.cs#L446)
```csharp title="Declaration"
public void BacklightOff()
```
### IsBacklightOn()
Get the backlight state
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/I2cCharacterDisplay.cs#L456)
```csharp title="Declaration"
public bool IsBacklightOn()
```

##### Returns

`System.Boolean`: True if On, false if off### Show()
Update the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/I2cCharacterDisplay.cs#L464)
```csharp title="Declaration"
public void Show()
```

## Implements

* [Meadow.Foundation.Displays.Lcd.ICharacterDisplay](../Meadow.Foundation.Displays.Lcd/ICharacterDisplay)
* `Meadow.Peripherals.Displays.ITextDisplay`
* `Meadow.Hardware.II2cPeripheral`
