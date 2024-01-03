---
title: Class SixteenSegment
sidebar_label: SixteenSegment
description: "Sixteen Segment Display"
---
# Class SixteenSegment
Sixteen Segment Display

###### **Assembly**: SixteenSegment.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Led.SixteenSegment/Driver/SixteenSegment.Enums.cs#L3)
```csharp title="Declaration"
public class SixteenSegment : IDisposable
```
**Implements:**  
`System.IDisposable`

## Properties
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Led.SixteenSegment/Driver/SixteenSegment.cs#L14)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### SetDisplay(char, bool?)
Displays the specified ASCII character (from 32 to 126)
Unsupported ASCII values will be blank
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Led.SixteenSegment/Driver/SixteenSegment.cs#L143)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Led.SixteenSegment/Driver/SixteenSegment.cs#L182)
```csharp title="Declaration"
public static bool IsEnabled(SixteenSegment.Segment segment, char asciiCharacter)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Displays.Led.SixteenSegment.Segment](../Meadow.Foundation.Displays.Led/SixteenSegment.Segment) | *segment* | The led segment |
| `System.Char` | *asciiCharacter* | The ASCII character |

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Led.SixteenSegment/Driver/SixteenSegment.cs#L195)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Led.SixteenSegment/Driver/SixteenSegment.cs#L205)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |


## Implements

* `System.IDisposable`
