---
title: Struct TouchPoint
sidebar_label: TouchPoint
description: Represents data for touchscreen events
slug: /docs/api/Meadow/Meadow.Hardware/TouchPoint
---
# Struct TouchPoint
Represents data for touchscreen events

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Touchscreen/TouchPoint.cs#L8)
```csharp title="Declaration"
public readonly struct TouchPoint : IEquatable<TouchPoint?>, IEquatable<TouchPoint>
```
**Implements:**  
`System.IEquatable<System.Nullable<Meadow.Hardware.TouchPoint>>`, `System.IEquatable<Meadow.Hardware.TouchPoint>`

## Properties
### RawX
Gets the raw X position data of the touch point
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Touchscreen/TouchPoint.cs#L49)
```csharp title="Declaration"
public int RawX { get; }
```
### RawY
Gets the raw Y position data of the touch point
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Touchscreen/TouchPoint.cs#L53)
```csharp title="Declaration"
public int RawY { get; }
```
### RawZ
Gets the raw Z position data of the touch point
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Touchscreen/TouchPoint.cs#L57)
```csharp title="Declaration"
public int? RawZ { get; }
```
### ScreenX
Gets the screen-coordinate X position of the touch point
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Touchscreen/TouchPoint.cs#L61)
```csharp title="Declaration"
public int ScreenX { get; }
```
### ScreenY
Gets the screen-coordinate Y position of the touch point
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Touchscreen/TouchPoint.cs#L65)
```csharp title="Declaration"
public int ScreenY { get; }
```
### ScreenZ
Gets the screen-coordinate Z position of the touch point
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Touchscreen/TouchPoint.cs#L69)
```csharp title="Declaration"
public int? ScreenZ { get; }
```
## Methods
### FromRawData(int, int, int?)
Creates a TouchPoint from raw touchscreen data
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Touchscreen/TouchPoint.cs#L17)
```csharp title="Declaration"
public static TouchPoint FromRawData(int rawX, int rawY, int? rawZ)
```

##### Returns

[Meadow.Hardware.TouchPoint](../Meadow.Hardware/TouchPoint)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *rawX* | The raw X position data |
| `System.Int32` | *rawY* | The raw Y position data |
| `System.Nullable<System.Int32>` | *rawZ* | The raw Z position data |

### FromScreenData(int, int, int, int, int, int?)
Creates a TouchPoint from screen coordinates and raw screen data
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Touchscreen/TouchPoint.cs#L31)
```csharp title="Declaration"
public static TouchPoint FromScreenData(int screenX, int screenY, int screenZ, int rawX, int rawY, int? rawZ)
```

##### Returns

[Meadow.Hardware.TouchPoint](../Meadow.Hardware/TouchPoint)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *screenX* | The X screen position |
| `System.Int32` | *screenY* | The Y screen position |
| `System.Int32` | *screenZ* | The Z screen position |
| `System.Int32` | *rawX* | The raw X position data |
| `System.Int32` | *rawY* | The raw Y position data |
| `System.Nullable<System.Int32>` | *rawZ* | The raw Z position data |

### Equals(TouchPoint)
Indicates whether the current object is equal to another object of the same type.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Touchscreen/TouchPoint.cs#L72)
```csharp title="Declaration"
public bool Equals(TouchPoint other)
```

##### Returns

`System.Boolean`: [true](https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool) if the current object is equal to the &lt;code class="paramref"&gt;other&lt;/code&gt; parameter; otherwise, [false](https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool).
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.TouchPoint](../Meadow.Hardware/TouchPoint) | *other* | An object to compare with this object. |

### Equals(TouchPoint?)
Indicates whether the current object is equal to another object of the same type.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Touchscreen/TouchPoint.cs#L80)
```csharp title="Declaration"
public bool Equals(TouchPoint? other)
```

##### Returns

`System.Boolean`: [true](https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool) if the current object is equal to the &lt;code class="paramref"&gt;other&lt;/code&gt; parameter; otherwise, [false](https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool).
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Nullable<Meadow.Hardware.TouchPoint>` | *other* | An object to compare with this object. |

### ToString()
Returns the fully qualified type name of this instance.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Touchscreen/TouchPoint.cs#L87)
```csharp title="Declaration"
public override string ToString()
```

##### Returns

`System.String`: The fully qualified type name.
## Implements

* `System.IEquatable<System.Nullable<Meadow.Hardware.TouchPoint>>`
* `System.IEquatable<Meadow.Hardware.TouchPoint>`
