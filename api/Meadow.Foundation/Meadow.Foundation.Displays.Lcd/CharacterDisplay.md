---
title: Class CharacterDisplay
sidebar_label: CharacterDisplay
description: "Represents a single or multirow LCD character display"
---
# Class CharacterDisplay
Represents a single or multirow LCD character display

###### **Assembly**: CharacterDisplay.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/CharacterDisplay.cs#L9)
```csharp title="Declaration"
public class CharacterDisplay : ITextDisplay
```
**Implements:**  
`Meadow.Peripherals.Displays.ITextDisplay`

## Properties
### DisplayConfig
The display configuration for text display menu
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/CharacterDisplay.cs#L16)
```csharp title="Declaration"
public TextDisplayConfig DisplayConfig { get; }
```
## Methods
### ClearLine(byte)
Clear a line of text
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/CharacterDisplay.cs#L141)
```csharp title="Declaration"
public void ClearLine(byte lineNumber)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *lineNumber* | The line to clear (0 indexed) |

### ClearLines()
Clear all lines
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/CharacterDisplay.cs#L149)
```csharp title="Declaration"
public void ClearLines()
```
### SaveCustomCharacter(byte[], byte)
Save a custom character to the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/CharacterDisplay.cs#L159)
```csharp title="Declaration"
public void SaveCustomCharacter(byte[] characterMap, byte address)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte[]` | *characterMap* | The character data |
| `System.Byte` | *address* | The display character address (0-7) |

### SetCursorPosition(byte, byte)
Set the cursor position
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/CharacterDisplay.cs#L169)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/CharacterDisplay.cs#L178)
```csharp title="Declaration"
public void Write(string text)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *text* | The text to show as a string |

### WriteLine(string, byte, bool)
Write text to a line
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/CharacterDisplay.cs#L189)
```csharp title="Declaration"
public void WriteLine(string text, byte lineNumber, bool showCursor = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *text* | The text to display |
| `System.Byte` | *lineNumber* | The target line |
| `System.Boolean` | *showCursor* | If true, show the cursor |

### Show()
Update the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/CharacterDisplay.cs#L197)
```csharp title="Declaration"
public void Show()
```

## Implements

* `Meadow.Peripherals.Displays.ITextDisplay`
