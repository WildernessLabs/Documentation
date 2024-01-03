---
title: Class MenuItem
sidebar_label: MenuItem
description: "Represents a text display menu item"
---
# Class MenuItem
Represents a text display menu item

###### **Assembly**: TextDisplayMenu.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/BaseClasses/MenuItemBase.cs#L9)
```csharp title="Declaration"
public class MenuItem
```
## Properties
### SubItems
Sub items in the menu
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/BaseClasses/MenuItemBase.cs#L14)
```csharp title="Declaration"
[JsonPropertyName("sub")]
public MenuItem[]? SubItems { get; set; }
```
### Text
The text on the menu item
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/BaseClasses/MenuItemBase.cs#L20)
```csharp title="Declaration"
[JsonPropertyName("text")]
public string Text { get; set; }
```
### Command
The optional command when the item is selected
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/BaseClasses/MenuItemBase.cs#L26)
```csharp title="Declaration"
[JsonPropertyName("command")]
public string Command { get; set; }
```
### Type
The menu item type
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/BaseClasses/MenuItemBase.cs#L32)
```csharp title="Declaration"
[JsonPropertyName("type")]
public string Type { get; set; }
```
### Id
The menu item id
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/BaseClasses/MenuItemBase.cs#L38)
```csharp title="Declaration"
[JsonPropertyName("id")]
public string Id { get; set; }
```
### Value
The menu item value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/BaseClasses/MenuItemBase.cs#L44)
```csharp title="Declaration"
[JsonPropertyName("value")]
public object? Value { get; set; }
```
### HasSubItems
Does the item have sub items
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/BaseClasses/MenuItemBase.cs#L50)
```csharp title="Declaration"
public bool HasSubItems { get; }
```
### IsEditable
Is the menu item editable by the user
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/BaseClasses/MenuItemBase.cs#L55)
```csharp title="Declaration"
public bool IsEditable { get; }
```
