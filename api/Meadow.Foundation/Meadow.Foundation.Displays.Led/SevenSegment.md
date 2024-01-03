---
title: Class SevenSegment
sidebar_label: SevenSegment
description: "Seven Segment Display"
---
# Class SevenSegment
Seven Segment Display

###### **Assembly**: SevenSegment.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Led.SevenSegment/Driver/SevenSegment.cs#L9)
```csharp title="Declaration"
public class SevenSegment : IDisposable
```
**Implements:**  
`System.IDisposable`

## Properties
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Led.SevenSegment/Driver/SevenSegment.cs#L14)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### SetDisplay(CharacterType, bool)
Displays the specified character
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Led.SevenSegment/Driver/SevenSegment.cs#L197)
```csharp title="Declaration"
public void SetDisplay(SevenSegment.CharacterType character, bool showDecimal = false)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Foundation.Displays.Led.SevenSegment.CharacterType](../Meadow.Foundation.Displays.Led/SevenSegment.CharacterType) | *character* |
| `System.Boolean` | *showDecimal* |

### SetDisplay(char, bool)
Displays the specified valid character
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Led.SevenSegment/Driver/SevenSegment.cs#L220)
```csharp title="Declaration"
public void SetDisplay(char character, bool showDecimal = false)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Char` | *character* |
| `System.Boolean` | *showDecimal* |

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Led.SevenSegment/Driver/SevenSegment.cs#L237)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Led.SevenSegment/Driver/SevenSegment.cs#L247)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |


## Implements

* `System.IDisposable`
