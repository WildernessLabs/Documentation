---
title: Class ArrayEventArgs
sidebar_label: ArrayEventArgs
description: "Custom event args that stores an int and an object"
---
# Class ArrayEventArgs
Custom event args that stores an int and an object

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/ArrayEventArgs.cs#L8)
```csharp title="Declaration"
public class ArrayEventArgs : EventArgs
```
**Inheritance:** `System.Object` -> `System.EventArgs`

## Properties
### ItemIndex
Item index in array
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/ArrayEventArgs.cs#L13)
```csharp title="Declaration"
public int ItemIndex { get; set; }
```
### Item
Item at index
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/ArrayEventArgs.cs#L17)
```csharp title="Declaration"
public object Item { get; set; }
```
