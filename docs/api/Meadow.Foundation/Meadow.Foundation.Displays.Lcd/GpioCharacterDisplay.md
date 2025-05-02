---
title: Class GpioCharacterDisplay
sidebar_label: GpioCharacterDisplay
description: Represents a GPIO character display
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Lcd/GpioCharacterDisplay
---
# Class GpioCharacterDisplay
Represents a GPIO character display

###### **Assembly**: CharacterDisplay.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/GpioCharacterDisplay.cs#L11)
```csharp title="Declaration"
public class GpioCharacterDisplay : ICharacterDisplay, ITextDisplay, IDisplay, IDisposable
```
**Implements:**  
[Meadow.Foundation.Displays.Lcd.ICharacterDisplay](../Meadow.Foundation.Displays.Lcd/ICharacterDisplay), `Meadow.Peripherals.Displays.ITextDisplay`, `Meadow.Peripherals.Displays.IDisplay`, `System.IDisposable`

## Properties
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/GpioCharacterDisplay.cs#L16)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
### DisplayConfig
The text display menu configuration
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/GpioCharacterDisplay.cs#L46)
```csharp title="Declaration"
public TextDisplayConfig DisplayConfig { get; protected set; }
```
## Methods
### WriteLine(string, byte, bool)
Write text to a line
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/GpioCharacterDisplay.cs#L245)
```csharp title="Declaration"
public void WriteLine(string text, byte lineNumber, bool showCursor = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *text* | The text to display |
| `System.Byte` | *lineNumber* | The target line |
| `System.Boolean` | *showCursor* | If true, show the cursor |

### Write(string)
Write a string to the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/GpioCharacterDisplay.cs#L267)
```csharp title="Declaration"
public void Write(string text)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *text* | The text to show as a string |

### SetCursorPosition(byte, byte)
Set the cursor position
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/GpioCharacterDisplay.cs#L288)
```csharp title="Declaration"
public void SetCursorPosition(byte column, byte line)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *column* | The cursor column |
| `System.Byte` | *line* | The cursor line |

### ClearLines()
Clear all lines
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/GpioCharacterDisplay.cs#L306)
```csharp title="Declaration"
public void ClearLines()
```
### ClearLine(byte)
Clear a line of text
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/GpioCharacterDisplay.cs#L317)
```csharp title="Declaration"
public void ClearLine(byte lineNumber)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *lineNumber* | The line to clear (0 indexed) |

### SetContrast(float)
Set the display contrast
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/GpioCharacterDisplay.cs#L333)
```csharp title="Declaration"
public void SetContrast(float contrast = 0.5)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Single` | *contrast* | The contrast as a float (0-1) |


##### Exceptions

`System.ArgumentOutOfRangeException`  

### SaveCustomCharacter(byte[], byte)
Save a custom character to the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/GpioCharacterDisplay.cs#L353)
```csharp title="Declaration"
public void SaveCustomCharacter(byte[] characterMap, byte address)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte[]` | *characterMap* | The character data |
| `System.Byte` | *address* | The display character address (0-7) |

### Show()
Update the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/GpioCharacterDisplay.cs#L367)
```csharp title="Declaration"
public void Show()
```
### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/GpioCharacterDisplay.cs#L372)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/GpioCharacterDisplay.cs#L382)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |


## Implements

* [Meadow.Foundation.Displays.Lcd.ICharacterDisplay](../Meadow.Foundation.Displays.Lcd/ICharacterDisplay)
* `Meadow.Peripherals.Displays.ITextDisplay`
* `Meadow.Peripherals.Displays.IDisplay`
* `System.IDisposable`
