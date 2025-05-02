---
title: Class CircularBuffer<T>
sidebar_label: CircularBuffer<T>
description: Represents a fixed-length circular (LIFO) buffer
slug: /docs/api/Meadow/Meadow/CircularBuffer`T`
---
# Class CircularBuffer&lt;T&gt;
Represents a fixed-length circular (LIFO) buffer

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/CircularBuffer.cs#L11)
```csharp title="Declaration"
public class CircularBuffer<T> : IEnumerable<T>, IEnumerable
```
**Implements:**  
`System.Collections.Generic.IEnumerable<<T>>`, `System.Collections.IEnumerable`

## Properties
### MaxElements
Gets the maximum number of elements the buffer can hold.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/CircularBuffer.cs#L46)
```csharp title="Declaration"
public int MaxElements { get; }
```
### ExceptOnOverrun
When set to `true`, overrun conditions will throw an exception.  Default is `false`.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/CircularBuffer.cs#L50)
```csharp title="Declaration"
public bool ExceptOnOverrun { get; set; }
```
### ExceptOnUnderrun
When set to `true`, underrun conditions will throw an exception.  Default is `false`.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/CircularBuffer.cs#L54)
```csharp title="Declaration"
public bool ExceptOnUnderrun { get; set; }
```
### HasOverrun
Returns true when an overrun condition has occurred.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/CircularBuffer.cs#L61)
```csharp title="Declaration"
public bool HasOverrun { get; set; }
```
### HasUnderrun
Returns true when an underrun condition has occurred.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/CircularBuffer.cs#L68)
```csharp title="Declaration"
public bool HasUnderrun { get; set; }
```
### IsFull
Returns `true` if the buffer's Count equals its MaxElements.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/CircularBuffer.cs#L72)
```csharp title="Declaration"
public bool IsFull { get; }
```
### Count
Gets the current count of elements in the buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/CircularBuffer.cs#L105)
```csharp title="Declaration"
public int Count { get; }
```
### HighWaterLevel
The HighWater event will fire when the buffer contains this many (or more) elements.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/CircularBuffer.cs#L137)
```csharp title="Declaration"
public int HighWaterLevel { get; set; }
```
### LowWaterLevel
The LowWater event will fire when the buffer contains this many (or less) elements.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/CircularBuffer.cs#L145)
```csharp title="Declaration"
public int LowWaterLevel { get; set; }
```
### this[int]
Returns an indexer for numeric index-based retrieval from the buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/CircularBuffer.cs#L551)
```csharp title="Declaration"
public T this[int index] { get; }
```
## Methods
### Clear()
Empties all elements from the buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/CircularBuffer.cs#L88)
```csharp title="Declaration"
public void Clear()
```
### Append(IEnumerable&lt;T&gt;)
Appends a set of items to the buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/CircularBuffer.cs#L178)
```csharp title="Declaration"
public void Append(IEnumerable<T> items)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Collections.Generic.IEnumerable<<T>>` | *items* | the items to append |

### Append(T[], int, int)
Appends a set of items to the buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/CircularBuffer.cs#L192)
```csharp title="Declaration"
public void Append(T[] items, int offset, int count)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `<T>[]` | *items* | The source for the items to append |
| `System.Int32` | *offset* | The offset into the source to begin the append |
| `System.Int32` | *count* | The number of source items to append |

### Append(T)
Adds an element to the head of the buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/CircularBuffer.cs#L223)
```csharp title="Declaration"
public void Append(T item)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `<T>` | *item* |

### AppendWaitOne(int)
Synchronously waits for an item to be appended to the buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/CircularBuffer.cs#L265)
```csharp title="Declaration"
public bool AppendWaitOne(int millisecondsTimeout)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *millisecondsTimeout* | The amount of time to wait for an item to be appended |

### Remove()
Removes the element from the tail of the buffer, if one exists
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/CircularBuffer.cs#L274)
```csharp title="Declaration"
public T? Remove()
```

##### Returns

`<T>`
### Peek()
Returns the element currently at the head of the buffer, if one exists, without removing it
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/CircularBuffer.cs#L283)
```csharp title="Declaration"
public T? Peek()
```

##### Returns

`<T>`
### OnOverrun()
This method is called when a buffer overrun occurs
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/CircularBuffer.cs#L327)
```csharp title="Declaration"
public virtual void OnOverrun()
```
### OnUnderrun()
This method is called when a buffer underrun occurs
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/CircularBuffer.cs#L341)
```csharp title="Declaration"
public virtual void OnUnderrun()
```
### Last(Func&lt;T, bool&gt;, T?)
Find the next element that matches the provided function criteria starting with the head item.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/CircularBuffer.cs#L358)
```csharp title="Declaration"
public T? Last(Func<T, bool> findFunction, T? defaultValue = default)
```

##### Returns

`<T>`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Func<<T>,System.Boolean>` | *findFunction* |  |
| `<T>` | *defaultValue* | The value to return if find function finds nothing |

### First(Func&lt;T, bool&gt;, T?)
Find the next element that matches the provided function criteria starting with the tail item.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/CircularBuffer.cs#L388)
```csharp title="Declaration"
public T? First(Func<T, bool> findFunction, T? defaultValue = default)
```

##### Returns

`<T>`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Func<<T>,System.Boolean>` | *findFunction* |  |
| `<T>` | *defaultValue* | The value to return if find function finds nothing |

### Contains(T)
Determine if the buffer contains a specified value
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/CircularBuffer.cs#L412)
```csharp title="Declaration"
public bool Contains(T searchFor)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| `<T>` | *searchFor* |

### Remove(int)
Removes the requested number of elements from the buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/CircularBuffer.cs#L464)
```csharp title="Declaration"
public T?[] Remove(int count)
```

##### Returns

`<T>[]`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *count* |

### MoveItemsTo(T[], int, int)
Removes items from the buffer and places them in a target array
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/CircularBuffer.cs#L488)
```csharp title="Declaration"
public int MoveItemsTo(T[] destination, int index, int count)
```

##### Returns

`System.Int32`: The actual number of items moved
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `<T>[]` | *destination* | The destination array for the move |
| `System.Int32` | *index* | The beginning index of the destination |
| `System.Int32` | *count* | The desired number of items to move |

### GetEnumerator()
Returns an enumerator that iterates through the collection.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/CircularBuffer.cs#L570)
```csharp title="Declaration"
public IEnumerator<T> GetEnumerator()
```

##### Returns

`System.Collections.Generic.IEnumerator<<T>>`: An enumerator that can be used to iterate through the collection.## Events
### ItemAdded
Event raised when an item is added to the buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/CircularBuffer.cs#L16)
```csharp title="Declaration"
public event EventHandler ItemAdded
```
##### Event Type
`System.EventHandler`
### Overrun
Fires when an element is added to the buffer when it is already full
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/CircularBuffer.cs#L30)
```csharp title="Declaration"
public event EventHandler Overrun
```
##### Event Type
`System.EventHandler`
### Underrun
Fires when an attempt is made to remove an item from an empty buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/CircularBuffer.cs#L34)
```csharp title="Declaration"
public event EventHandler Underrun
```
##### Event Type
`System.EventHandler`
### HighWater
Fires when the number of elements reaches a non-zero HighWaterLevel value on an Enqueue call.  This event fires only once when passing upward across the boundary.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/CircularBuffer.cs#L38)
```csharp title="Declaration"
public event EventHandler HighWater
```
##### Event Type
`System.EventHandler`
### LowWater
Fires when the number of elements reaches a non-zero LowWaterLevel value on a Remove call.  This event fires only once when passing downward across the boundary.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/CircularBuffer.cs#L42)
```csharp title="Declaration"
public event EventHandler LowWater
```
##### Event Type
`System.EventHandler`

## Implements

* `System.Collections.Generic.IEnumerable<<T>>`
* `System.Collections.IEnumerable`
## Extension Methods
* System.Collections.Generic.IEnumerable&#123;`0&#125;.Meadow.ExtensionMethods.Contains``1(&#123;T&#125;[])
* System.Collections.Generic.IEnumerable&#123;`0&#125;.Meadow.ExtensionMethods.FirstIndexOf``1(&#123;T&#125;[])
