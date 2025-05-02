---
title: Interface ITextDisplay
sidebar_label: ITextDisplay
description: Defines a Text Display
slug: /docs/api/Meadow/Meadow.Peripherals.Displays/ITextDisplay
---
# Interface ITextDisplay
Defines a Text Display

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/ITextDisplay.cs#L6)
```csharp title="Declaration"
public interface ITextDisplay : IDisplay
```
## Properties
### DisplayConfig
Gets a Display Configuration
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/ITextDisplay.cs#L11)
```csharp title="Declaration"
TextDisplayConfig DisplayConfig { get; }
```
## Methods
### Write(string)
Writes the specified string on the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/ITextDisplay.cs#L17)
```csharp title="Declaration"
void Write(string text)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *text* | String to display |

### WriteLine(string, byte, bool)
Writes the specified string to the specified line number on the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/ITextDisplay.cs#L25)
```csharp title="Declaration"
void WriteLine(string text, byte lineNumber, bool showCursor = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *text* | String to display. |
| `System.Byte` | *lineNumber* | Line Number. |
| `System.Boolean` | *showCursor* | Show the cursor. |

### ClearLines()
Clears all ITextDisplay lines of text
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/ITextDisplay.cs#L30)
```csharp title="Declaration"
void ClearLines()
```
### ClearLine(byte)
Clears the specified line of characters on the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/ITextDisplay.cs#L36)
```csharp title="Declaration"
void ClearLine(byte lineNumber)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *lineNumber* | Line Number |

### SetCursorPosition(byte, byte)
Set cursor in the specified row and column
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/ITextDisplay.cs#L43)
```csharp title="Declaration"
void SetCursorPosition(byte column, byte line)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Byte` | *column* |
| `System.Byte` | *line* |

### Show()
Update the display, not used by character displays
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/ITextDisplay.cs#L48)
```csharp title="Declaration"
void Show()
```
