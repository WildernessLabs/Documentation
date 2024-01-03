---
title: Class MenuPage
sidebar_label: MenuPage
description: "Text display MenuPage class"
---
# Class MenuPage
Text display MenuPage class

###### **Assembly**: TextDisplayMenu.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/MenuPage.cs#L8)
```csharp title="Declaration"
public class MenuPage : IPage
```
**Implements:**  
[Meadow.Foundation.Displays.UI.IPage](../Meadow.Foundation.Displays.UI/IPage)

## Properties
### ScrollPosition
The current scroll position
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/MenuPage.cs#L13)
```csharp title="Declaration"
public int ScrollPosition { get; set; }
```
### MenuItems
The menu items in the page
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/MenuPage.cs#L30)
```csharp title="Declaration"
public List<MenuItem> MenuItems { get; set; }
```
## Methods
### Next()
Next input
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/MenuPage.cs#L36)
```csharp title="Declaration"
public bool Next()
```

##### Returns

`System.Boolean`: True if the page can navigate forward in the list### Previous()
Previous input
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/MenuPage.cs#L54)
```csharp title="Declaration"
public bool Previous()
```

##### Returns

`System.Boolean`: True if the page can navigate backwards in the list### Select()
Select input
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/MenuPage.cs#L69)
```csharp title="Declaration"
public bool Select()
```

##### Returns

`System.Boolean`: True### Back()
Select input
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/MenuPage.cs#L78)
```csharp title="Declaration"
public bool Back()
```

##### Returns

`System.Boolean`: True
## Implements

* [Meadow.Foundation.Displays.UI.IPage](../Meadow.Foundation.Displays.UI/IPage)
