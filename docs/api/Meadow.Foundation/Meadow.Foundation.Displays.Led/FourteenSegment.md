---
title: Class FourteenSegment
sidebar_label: FourteenSegment
description: Fourteen Segment Display
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Led/FourteenSegment
---
# Class FourteenSegment
Fourteen Segment Display

###### **Assembly**: FourteenSegment.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Led.FourteenSegment/Driver/FourteenSegment.Enums.cs#L3)
```csharp title="Declaration"
public class FourteenSegment : IDisposable
```
**Implements:**  
`System.IDisposable`

## Properties
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Led.FourteenSegment/Driver/FourteenSegment.cs#L14)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### SetDisplay(char, bool?)
Displays the specified ASCII character (from 32 to 126)
Unsupported ASCII values will be blank
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Led.FourteenSegment/Driver/FourteenSegment.cs#L133)
```csharp title="Declaration"
public void SetDisplay(char asciiCharacter, bool? showDecimal = null)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Char` | *asciiCharacter* |
| `System.Nullable<System.Boolean>` | *showDecimal* |

### IsEnabled(Segment, char)
Is a specific led segment enabled for an ASCII character
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Led.FourteenSegment/Driver/FourteenSegment.cs#L170)
```csharp title="Declaration"
public static bool IsEnabled(FourteenSegment.Segment segment, char asciiCharacter)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Displays.Led.FourteenSegment.Segment](../Meadow.Foundation.Displays.Led/FourteenSegment.Segment) | *segment* | The led segment |
| `System.Char` | *asciiCharacter* | The ASCII character |

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Led.FourteenSegment/Driver/FourteenSegment.cs#L183)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Led.FourteenSegment/Driver/FourteenSegment.cs#L193)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |


## Implements

* `System.IDisposable`
