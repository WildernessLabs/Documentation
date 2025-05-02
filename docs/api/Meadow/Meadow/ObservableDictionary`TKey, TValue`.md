---
title: 'Class ObservableDictionary<TKey, TValue>'
sidebar_label: 'ObservableDictionary<TKey, TValue>'
description: Provides a dictionary for use with data binding.
slug: '/docs/api/Meadow/Meadow/ObservableDictionary`TKey, TValue`'
---
# Class ObservableDictionary&lt;TKey, TValue&gt;
Provides a dictionary for use with data binding.

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/ObservableDictionary.cs#L16)
```csharp title="Declaration"
public class ObservableDictionary<TKey, TValue> : IDictionary<TKey, TValue>, ICollection<KeyValuePair<TKey, TValue>>, IEnumerable<KeyValuePair<TKey, TValue>>, IEnumerable, INotifyCollectionChanged, INotifyPropertyChanged
```
**Implements:**  
`System.Collections.Generic.IDictionary<<TKey>,<TValue>>`, `System.Collections.Generic.ICollection<System.Collections.Generic.KeyValuePair<<TKey>,<TValue>>>`, `System.Collections.Generic.IEnumerable<System.Collections.Generic.KeyValuePair<<TKey>,<TValue>>>`, `System.Collections.IEnumerable`, `System.Collections.Specialized.INotifyCollectionChanged`, `System.ComponentModel.INotifyPropertyChanged`

## Properties
### Keys
Gets an `System.Collections.Generic.ICollection%601` containing the keys of the `System.Collections.Generic.IDictionary%602`.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/ObservableDictionary.cs#L129)
```csharp title="Declaration"
public ICollection<TKey> Keys { get; }
```
### Values
Gets an `System.Collections.Generic.ICollection%601` containing the values in the `System.Collections.Generic.IDictionary%602`.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/ObservableDictionary.cs#L163)
```csharp title="Declaration"
public ICollection<TValue> Values { get; }
```
### this[TKey]
Gets or sets the element with the specified key.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/ObservableDictionary.cs#L173)
```csharp title="Declaration"
public TValue this[TKey key] { get; set; }
```
## Methods
### RaisePropertyChanged(PropertyChangedEventArgs)
Allows derived classes to raise custom property changed events.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/ObservableDictionary.cs#L98)
```csharp title="Declaration"
protected void RaisePropertyChanged(PropertyChangedEventArgs args)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.ComponentModel.PropertyChangedEventArgs` | *args* |

### Add(TKey, TValue)
Adds an element with the provided key and value to the `System.Collections.Generic.IDictionary%602`.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/ObservableDictionary.cs#L108)
```csharp title="Declaration"
public void Add(TKey key, TValue value)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `<TKey>` | *key* | The object to use as the key of the element to add. |
| `<TValue>` | *value* | The object to use as the value of the element to add. |

### ContainsKey(TKey)
Determines whether the `System.Collections.Generic.IDictionary%602` contains an element with the specified key.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/ObservableDictionary.cs#L120)
```csharp title="Declaration"
public bool ContainsKey(TKey key)
```

##### Returns

`System.Boolean`: true if the `System.Collections.Generic.IDictionary%602` contains an element with the key; otherwise, false.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `<TKey>` | *key* | The key to locate in the `System.Collections.Generic.IDictionary%602`. |

### Remove(TKey)
Removes the element with the specified key from the `System.Collections.Generic.IDictionary%602`.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/ObservableDictionary.cs#L141)
```csharp title="Declaration"
public bool Remove(TKey key)
```

##### Returns

`System.Boolean`: true if the element is successfully removed; otherwise, false.  This method also returns false if &lt;code class="paramref"&gt;key&lt;/code&gt; was not found in the original `System.Collections.Generic.IDictionary%602`.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `<TKey>` | *key* | The key of the element to remove. |

### TryGetValue(TKey, out TValue)
Gets the value associated with the specified key.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/ObservableDictionary.cs#L154)
```csharp title="Declaration"
public bool TryGetValue(TKey key, out TValue value)
```

##### Returns

`System.Boolean`: true if the object that implements `System.Collections.Generic.IDictionary%602` contains an element with the specified key; otherwise, false.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `<TKey>` | *key* | The key whose value to get. |
| `<TValue>` | *value* | When this method returns, the value associated with the specified key, if the key is found; otherwise, the default value for the type of the &lt;code class="paramref"&gt;value&lt;/code&gt; parameter. This parameter is passed uninitialized. |

### GetEnumerator()
Returns an enumerator that iterates through a collection.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/ObservableDictionary.cs#L226)
```csharp title="Declaration"
public IEnumerator GetEnumerator()
```

##### Returns

`System.Collections.IEnumerator`: An `System.Collections.IEnumerator` object that can be used to iterate through the collection.## Events
### CollectionChanged
Event raised when the collection changes.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/ObservableDictionary.cs#L24)
```csharp title="Declaration"
public event NotifyCollectionChangedEventHandler CollectionChanged
```
##### Event Type
`System.Collections.Specialized.NotifyCollectionChangedEventHandler`
### PropertyChanged
Event raised when a property on the collection changes.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/ObservableDictionary.cs#L27)
```csharp title="Declaration"
public event PropertyChangedEventHandler PropertyChanged
```
##### Event Type
`System.ComponentModel.PropertyChangedEventHandler`

## Implements

* `System.Collections.Generic.IDictionary<<TKey>,<TValue>>`
* `System.Collections.Generic.ICollection<System.Collections.Generic.KeyValuePair<<TKey>,<TValue>>>`
* `System.Collections.Generic.IEnumerable<System.Collections.Generic.KeyValuePair<<TKey>,<TValue>>>`
* `System.Collections.IEnumerable`
* `System.Collections.Specialized.INotifyCollectionChanged`
* `System.ComponentModel.INotifyPropertyChanged`
## Extension Methods
* System.Collections.Generic.IEnumerable&#123;System.Collections.Generic.KeyValuePair&#123;`0,`1&#125;&#125;.Meadow.ExtensionMethods.Contains``1(System.Collections.Generic.KeyValuePair&#123;&#123;TKey&#125;,&#123;TValue&#125;&#125;[])
* System.Collections.Generic.IEnumerable&#123;System.Collections.Generic.KeyValuePair&#123;`0,`1&#125;&#125;.Meadow.ExtensionMethods.FirstIndexOf``1(System.Collections.Generic.KeyValuePair&#123;&#123;TKey&#125;,&#123;TValue&#125;&#125;[])
