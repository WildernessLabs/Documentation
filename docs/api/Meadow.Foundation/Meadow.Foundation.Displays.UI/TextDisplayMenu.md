---
title: Class TextDisplayMenu
sidebar_label: TextDisplayMenu
description: TextDisplayMenu TextDisplayMenu class
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Displays.UI/TextDisplayMenu
---
# Class TextDisplayMenu
TextDisplayMenu TextDisplayMenu class

###### **Assembly**: TextDisplayMenu.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/TextDisplayMenu.cs#L13)
```csharp title="Declaration"
public class TextDisplayMenu
```
## Properties
### IsEnabled
Is the menu enabled
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/TextDisplayMenu.cs#L44)
```csharp title="Declaration"
public bool IsEnabled { get; protected set; }
```
## Methods
### Enable()
Enable the menu
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/TextDisplayMenu.cs#L90)
```csharp title="Declaration"
public void Enable()
```
### Disable()
Disable the menu
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/TextDisplayMenu.cs#L102)
```csharp title="Declaration"
public void Disable()
```
### CreateMenuPage(MenuItem[], bool)
Create a TextDisplayMenu page
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/TextDisplayMenu.cs#L116)
```csharp title="Declaration"
protected MenuPage CreateMenuPage(MenuItem[] items, bool addBack)
```

##### Returns

[Meadow.Foundation.Displays.UI.MenuPage](../Meadow.Foundation.Displays.UI/MenuPage): The new MenuPage object
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Foundation.Displays.UI.MenuItem[]` | *items* | Items to populate page |
| `System.Boolean` | *addBack* | True to add a back item |

### ShowCurrentPage()
Show the current page
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/TextDisplayMenu.cs#L136)
```csharp title="Declaration"
protected void ShowCurrentPage()
```
### GetItemText(MenuItem, bool)
Get the text for a menu item
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/TextDisplayMenu.cs#L187)
```csharp title="Declaration"
protected string GetItemText(MenuItem item, bool isSelected)
```

##### Returns

`System.String`: The item text
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Displays.UI.MenuItem](../Meadow.Foundation.Displays.UI/MenuItem) | *item* | The menu item |
| `System.Boolean` | *isSelected* | Is the menu selected |

### UpdateCurrentMenuPage()
Updates the currentMenuPage based on the current navigation depth
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/TextDisplayMenu.cs#L235)
```csharp title="Declaration"
protected void UpdateCurrentMenuPage()
```
### Next()
Next input - navigates down/forward in the list of items
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/TextDisplayMenu.cs#L244)
```csharp title="Declaration"
public bool Next()
```

##### Returns

`System.Boolean`: True if successful, false in menu is disabled### Previous()
Previous input - navigates up/back in the list of items
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/TextDisplayMenu.cs#L266)
```csharp title="Declaration"
public bool Previous()
```

##### Returns

`System.Boolean`: True if successful, false in menu is disabled### Back()
Back input - navigates back in the navigation stack
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/TextDisplayMenu.cs#L288)
```csharp title="Declaration"
public bool Back()
```

##### Returns

`System.Boolean`: True if successful, false in menu is disabled### Select()
Select input - selects the current item
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/TextDisplayMenu.cs#L318)
```csharp title="Declaration"
public bool Select()
```

##### Returns

`System.Boolean`: True if successful, false in menu is disabled### Refresh()
Refresh / redraw the menu
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/TextDisplayMenu.cs#L441)
```csharp title="Declaration"
public void Refresh()
```
### UpdateItemValue(string, object)
Update menu item value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/TextDisplayMenu.cs#L451)
```csharp title="Declaration"
public void UpdateItemValue(string id, object value)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *id* | Item id |
| `System.Object` | *value* | New value |

### UpdateItemValue(Hashtable)
Update menu item value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/TextDisplayMenu.cs#L464)
```csharp title="Declaration"
public void UpdateItemValue(Hashtable values)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Collections.Hashtable` | *values* | Values for all items |

## Events
### Selected
Raised when the menu receives a selected input
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/TextDisplayMenu.cs#L29)
```csharp title="Declaration"
public event MenuSelectedHandler Selected
```
##### Event Type
[Meadow.Foundation.Displays.UI.MenuSelectedHandler](../Meadow.Foundation.Displays.UI/MenuSelectedHandler)
### ValueChanged
Raised when a value changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/TextDisplayMenu.cs#L34)
```csharp title="Declaration"
public event ValueChangedHandler ValueChanged
```
##### Event Type
[Meadow.Foundation.Displays.UI.ValueChangedHandler](../Meadow.Foundation.Displays.UI/ValueChangedHandler)
### Exited
Raised when the user exits the menu
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/TextDisplayMenu.cs#L39)
```csharp title="Declaration"
public event EventHandler? Exited
```
##### Event Type
`System.EventHandler`
