---
title: Class ExtensionMethods
sidebar_label: ExtensionMethods
description: ExtensionMethods class
slug: /docs/api/Meadow/Meadow/ExtensionMethods
---
# Class ExtensionMethods
ExtensionMethods class

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/ExtensionMethods.cs#L10)
```csharp title="Declaration"
public static class ExtensionMethods
```
## Methods
### Contains&lt;TSource&gt;(IEnumerable&lt;TSource&gt;, TSource[])
Contains static extention method to check if the pattern exists within the source
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/ExtensionMethods.cs#L20)
```csharp title="Declaration"
public static bool Contains<TSource>(this IEnumerable<TSource> source, TSource[] pattern)
```

##### Returns

`System.Boolean`: true if the pattern exists
##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Collections.Generic.IEnumerable<<TSource>>` | *source* |
| `<TSource>[]` | *pattern* |

##### Type Parameters
* `TSource`
### FirstIndexOf&lt;TSource&gt;(IEnumerable&lt;TSource&gt;, TSource[])
FirstIndexOf static extention method for an IEnumerable
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/ExtensionMethods.cs#L33)
```csharp title="Declaration"
public static int FirstIndexOf<TSource>(this IEnumerable<TSource> source, TSource[] pattern)
```

##### Returns

`System.Int32`: the index position of the found pattern
##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Collections.Generic.IEnumerable<<TSource>>` | *source* |
| `<TSource>[]` | *pattern* |

##### Type Parameters
* `TSource`
### Map(float, float, float, float, float)
Maps a source value's position within a range of numbers to the same position
within a another range of numbers. For instance, will map a source value of `30`
in the range of `0` to `100` to a value of `0.3` in a given range of `0.0` to `1.0`.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/ExtensionMethods.cs#L82)
```csharp title="Declaration"
public static float Map(this float sourceValue, float sourceMin, float sourceMax, float targetMin, float targetMax)
```

##### Returns

`System.Single`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Single` | *sourceValue* | The value to map to the new domain. |
| `System.Single` | *sourceMin* | The minimum value of the source domain. |
| `System.Single` | *sourceMax* | The maximum value of the source domain. |
| `System.Single` | *targetMin* | The minimum value of the destination domain. |
| `System.Single` | *targetMax* | The maximum value of the destination domain. |

### Map(double, double, double, double, double)
Maps a source value's position within a range of numbers to the same position
within a another range of numbers. For instance, will map a source value of `30`
in the range of `0` to `100` to a value of `0.3` in a given range of `0.0` to `1.0`.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/ExtensionMethods.cs#L98)
```csharp title="Declaration"
public static double Map(this double sourceValue, double sourceMin, double sourceMax, double targetMin, double targetMax)
```

##### Returns

`System.Double`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Double` | *sourceValue* | The value to map to the new domain. |
| `System.Double` | *sourceMin* | The minimum value of the source domain. |
| `System.Double` | *sourceMax* | The maximum value of the source domain. |
| `System.Double` | *targetMin* | The minimum value of the destination domain. |
| `System.Double` | *targetMax* | The maximum value of the destination domain. |

### Map(int, int, int, int, int)
Maps a source value's position within a range of numbers to the same position
within a another range of numbers. For instance, will map a source value of `30`
in the range of `0` to `100` to a value of `0.3` in a given range of `0.0` to `1.0`.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/ExtensionMethods.cs#L114)
```csharp title="Declaration"
public static int Map(this int sourceValue, int sourceMin, int sourceMax, int targetMin, int targetMax)
```

##### Returns

`System.Int32`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *sourceValue* | The value to map to the new domain. |
| `System.Int32` | *sourceMin* | The minimum value of the source domain. |
| `System.Int32` | *sourceMax* | The maximum value of the source domain. |
| `System.Int32` | *targetMin* | The minimum value of the destination domain. |
| `System.Int32` | *targetMax* | The maximum value of the destination domain. |

### Fire(Delegate, params object[])
Traverses the handler's invocation list and invokes each via the EventHandler() method
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/ExtensionMethods.cs#L124)
```csharp title="Declaration"
public static void Fire(this Delegate handler, params object[] args)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Delegate` | *handler* | The delegate we are acting upon. |
| `System.Object[]` | *args* | The arguments we want to pass to each delegate. |

### Fire(EventHandler, object)
Traverses the handler's invocation list and invokes each via the EventHandler() method
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/ExtensionMethods.cs#L134)
```csharp title="Declaration"
public static void Fire(this EventHandler handler, object sender)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.EventHandler` | *handler* | The eventhandler we are acting upon. |
| `System.Object` | *sender* | The sender object. |

### Fire(EventHandler, object, EventArgs)
Traverses the handler's invocation list and invokes each via the EventHandler() method
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/ExtensionMethods.cs#L145)
```csharp title="Declaration"
public static void Fire(this EventHandler handler, object sender, EventArgs args)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.EventHandler` | *handler* | The eventhandler we are acting upon. |
| `System.Object` | *sender* | The sender object. |
| `System.EventArgs` | *args* | The arguments we want to pass to each delegate. |

### Fire&lt;T&gt;(EventHandler&lt;T&gt;, object, T)
Traverses the handler's invocation list and invokes each via the EventHandler() method
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/ExtensionMethods.cs#L156)
```csharp title="Declaration"
public static void Fire<T>(this EventHandler<T> handler, object sender, T args) where T : EventArgs
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.EventHandler<<T>>` | *handler* | The eventhandler we are acting upon. |
| `System.Object` | *sender* | The sender object. |
| `<T>` | *args* | The arguments we want to pass to each delegate. |

##### Type Parameters
* `T`
