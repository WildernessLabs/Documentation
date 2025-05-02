---
title: Interface ICharacterDisplay
sidebar_label: ICharacterDisplay
description: Character display abstraction
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Lcd/ICharacterDisplay
---
# Interface ICharacterDisplay
Character display abstraction

###### **Assembly**: CharacterDisplay.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/ICharacterDisplay.cs#L8)
```csharp title="Declaration"
public interface ICharacterDisplay : ITextDisplay, IDisplay
```
## Methods
### SaveCustomCharacter(byte[], byte)
Save a custom character to the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/ICharacterDisplay.cs#L15)
```csharp title="Declaration"
void SaveCustomCharacter(byte[] characterMap, byte address)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte[]` | *characterMap* | The character data |
| `System.Byte` | *address* | The display character address (0-7) |

