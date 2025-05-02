---
title: Class MenuItem
sidebar_label: MenuItem
description: Represents a text display menu item
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Displays.UI/MenuItem
---
# Class MenuItem
Represents a text display menu item

###### **Assembly**: TextDisplayMenu.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/BaseClasses/MenuItem.cs#L7)
```csharp title="Declaration"
public class MenuItem
```
## Properties
### SubItems
Sub items in the menu
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/BaseClasses/MenuItem.cs#L12)
```csharp title="Declaration"
public MenuItem[]? SubItems { get; set; }
```
### Text
The text on the menu item
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/BaseClasses/MenuItem.cs#L17)
```csharp title="Declaration"
public string Text { get; set; }
```
### Command
The optional command when the item is selected
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/BaseClasses/MenuItem.cs#L22)
```csharp title="Declaration"
public string Command { get; set; }
```
### Type
The menu item type
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/BaseClasses/MenuItem.cs#L27)
```csharp title="Declaration"
public string Type { get; set; }
```
### Id
The menu item id
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/BaseClasses/MenuItem.cs#L32)
```csharp title="Declaration"
public string Id { get; set; }
```
### Value
The menu item value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/BaseClasses/MenuItem.cs#L37)
```csharp title="Declaration"
public object? Value { get; set; }
```
### HasSubItems
Does the item have sub items
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/BaseClasses/MenuItem.cs#L42)
```csharp title="Declaration"
public bool HasSubItems { get; }
```
### IsEditable
Is the menu item editable by the user
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/BaseClasses/MenuItem.cs#L47)
```csharp title="Declaration"
public bool IsEditable { get; }
```
