---
title: Class FourDigitSevenSegment
sidebar_label: FourDigitSevenSegment
description: "Four Digit Seven Segment Display"
---
# Class FourDigitSevenSegment
Four Digit Seven Segment Display

###### **Assembly**: FourDigitSevenSegment.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Led.FourDigitSevenSegment/Driver/FourDigitSevenSegment.cs#L11)
```csharp title="Declaration"
public class FourDigitSevenSegment : IDisposable
```
**Implements:**  
`System.IDisposable`

## Properties
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Led.FourDigitSevenSegment/Driver/FourDigitSevenSegment.cs#L16)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### SetDisplay(string, int)
Displays the specified characters
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Led.FourDigitSevenSegment/Driver/FourDigitSevenSegment.cs#L115)
```csharp title="Declaration"
public void SetDisplay(string characters, int decimalLocation = -1)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *characters* | The characters to display |
| `System.Int32` | *decimalLocation* | The decimal position (0 indexed) |

### SetDisplay(char[], int)
Displays the specified characters
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Led.FourDigitSevenSegment/Driver/FourDigitSevenSegment.cs#L125)
```csharp title="Declaration"
public void SetDisplay(char[] characters, int decimalLocation = -1)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Char[]` | *characters* | The characters to display |
| `System.Int32` | *decimalLocation* | The decimal position (0 indexed) |

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Led.FourDigitSevenSegment/Driver/FourDigitSevenSegment.cs#L159)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Led.FourDigitSevenSegment/Driver/FourDigitSevenSegment.cs#L169)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |


## Implements

* `System.IDisposable`
