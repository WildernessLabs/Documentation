---
title: Enum Character
sidebar_label: Character
description: "Display characters"
---
# Enum Character
Display characters

###### **Assembly**: Tm1637.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Tm1637/Driver/Tm1637.Character.cs#L8)
```csharp title="Declaration"
[Flags]
public enum Character : byte
```
## Fields
### None
Character representing nothing being displayed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Tm1637/Driver/Tm1637.Character.cs#L14)
```csharp title="Declaration"
None = 0
```
### SegmentTop
Segment a
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Tm1637/Driver/Tm1637.Character.cs#L18)
```csharp title="Declaration"
SegmentTop = 1
```
### SegmentTopRight
Segment b
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Tm1637/Driver/Tm1637.Character.cs#L22)
```csharp title="Declaration"
SegmentTopRight = 2
```
### SegmentBottomRight
Segment c
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Tm1637/Driver/Tm1637.Character.cs#L26)
```csharp title="Declaration"
SegmentBottomRight = 4
```
### SegmentBottom
Segment d
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Tm1637/Driver/Tm1637.Character.cs#L30)
```csharp title="Declaration"
SegmentBottom = 8
```
### SegmentBottomLeft
Segment e
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Tm1637/Driver/Tm1637.Character.cs#L34)
```csharp title="Declaration"
SegmentBottomLeft = 16
```
### SegmentTopLeft
Segment f
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Tm1637/Driver/Tm1637.Character.cs#L38)
```csharp title="Declaration"
SegmentTopLeft = 32
```
### SegmentMiddle
Segment g
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Tm1637/Driver/Tm1637.Character.cs#L42)
```csharp title="Declaration"
SegmentMiddle = 64
```
### Dot
Segment dp
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Tm1637/Driver/Tm1637.Character.cs#L46)
```csharp title="Declaration"
Dot = 128
```
### Digit0
Character 0
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Tm1637/Driver/Tm1637.Character.cs#L50)
```csharp title="Declaration"
Digit0 = Digit1 | C
```
### Digit1
Character 1
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Tm1637/Driver/Tm1637.Character.cs#L54)
```csharp title="Declaration"
Digit1 = SegmentTopRight | SegmentBottomRight
```
### Digit2
Character 2
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Tm1637/Driver/Tm1637.Character.cs#L58)
```csharp title="Declaration"
Digit2 = SegmentTop | SegmentTopRight | SegmentBottom | SegmentBottomLeft | Minus
```
### Digit3
Character 3
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Tm1637/Driver/Tm1637.Character.cs#L62)
```csharp title="Declaration"
Digit3 = Digit7 | SegmentBottom | Minus
```
### Digit4
Character 4
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Tm1637/Driver/Tm1637.Character.cs#L66)
```csharp title="Declaration"
Digit4 = Digit1 | SegmentTopLeft | Minus
```
### Digit5
Character 5
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Tm1637/Driver/Tm1637.Character.cs#L70)
```csharp title="Declaration"
Digit5 = SegmentTop | SegmentBottomRight | SegmentBottom | SegmentTopLeft | Minus
```
### Digit6
Character 6
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Tm1637/Driver/Tm1637.Character.cs#L74)
```csharp title="Declaration"
Digit6 = SegmentTop | B
```
### Digit7
Character 7
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Tm1637/Driver/Tm1637.Character.cs#L78)
```csharp title="Declaration"
Digit7 = SegmentTop | Digit1
```
### Digit8
Character 8
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Tm1637/Driver/Tm1637.Character.cs#L82)
```csharp title="Declaration"
Digit8 = SegmentTopRight | Digit6
```
### Digit9
Character 9
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Tm1637/Driver/Tm1637.Character.cs#L86)
```csharp title="Declaration"
Digit9 = SegmentTopRight | Digit5
```
### A
Character A
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Tm1637/Driver/Tm1637.Character.cs#L90)
```csharp title="Declaration"
A = Digit1 | F
```
### B
Character B
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Tm1637/Driver/Tm1637.Character.cs#L94)
```csharp title="Declaration"
B = SegmentBottomRight | SegmentBottom | SegmentBottomLeft | SegmentTopLeft | Minus
```
### C
Character C
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Tm1637/Driver/Tm1637.Character.cs#L98)
```csharp title="Declaration"
C = SegmentTop | SegmentBottom | SegmentBottomLeft | SegmentTopLeft
```
### D
Character D
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Tm1637/Driver/Tm1637.Character.cs#L102)
```csharp title="Declaration"
D = Digit1 | SegmentBottom | SegmentBottomLeft | Minus
```
### E
Character E
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Tm1637/Driver/Tm1637.Character.cs#L106)
```csharp title="Declaration"
E = SegmentBottom | F
```
### F
Character F
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Tm1637/Driver/Tm1637.Character.cs#L110)
```csharp title="Declaration"
F = SegmentTop | SegmentBottomLeft | SegmentTopLeft | Minus
```
### Minus
Character -
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Tm1637/Driver/Tm1637.Character.cs#L114)
```csharp title="Declaration"
Minus = 64
```
