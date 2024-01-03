---
title: Interface IPage
sidebar_label: IPage
description: "Text display menu page abstraction"
---
# Interface IPage
Text display menu page abstraction

###### **Assembly**: TextDisplayMenu.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/Interfaces/IPage.cs#L6)
```csharp title="Declaration"
public interface IPage
```
## Methods
### Next()
Next input
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/Interfaces/IPage.cs#L12)
```csharp title="Declaration"
bool Next()
```

##### Returns

`System.Boolean`: true if successful### Previous()
Previous input
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/Interfaces/IPage.cs#L18)
```csharp title="Declaration"
bool Previous()
```

##### Returns

`System.Boolean`: true if successful### Select()
Select input
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/Interfaces/IPage.cs#L24)
```csharp title="Declaration"
bool Select()
```

##### Returns

`System.Boolean`: true if successful### Back()
Back input
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/Interfaces/IPage.cs#L30)
```csharp title="Declaration"
bool Back()
```

##### Returns

`System.Boolean`: true if successful