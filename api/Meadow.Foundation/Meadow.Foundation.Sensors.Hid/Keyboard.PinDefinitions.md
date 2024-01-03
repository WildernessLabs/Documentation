---
title: Class Keyboard.PinDefinitions
sidebar_label: Keyboard.PinDefinitions
description: "The collection of IPins that a keyboard can use"
---
# Class Keyboard.PinDefinitions
The collection of IPins that a keyboard can use

###### **Assembly**: Meadow.Keyboard.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L11)
```csharp title="Declaration"
public class Keyboard.PinDefinitions : IPinDefinitions, IEnumerable<IPin>, IEnumerable
```
**Implements:**  
`Meadow.Hardware.IPinDefinitions`, `System.Collections.Generic.IEnumerable<Meadow.Hardware.IPin>`, `System.Collections.IEnumerable`

## Properties
### AllPins
A list of all pins in the keyboard
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L25)
```csharp title="Declaration"
public IList<IPin> AllPins { get; }
```
### Controller
The Keyboard associated with the pin collection
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L30)
```csharp title="Declaration"
public IPinController? Controller { get; set; }
```
### Back
An input Pin for the Back key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L41)
```csharp title="Declaration"
public IPin Back { get; }
```
### Tab
An input Pin for the Tab key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L45)
```csharp title="Declaration"
public IPin Tab { get; }
```
### Enter
An input Pin for the Enter key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L49)
```csharp title="Declaration"
public IPin Enter { get; }
```
### Shift
An input Pin for the Shift key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L53)
```csharp title="Declaration"
public IPin Shift { get; }
```
### Control
An input Pin for the Control key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L57)
```csharp title="Declaration"
public IPin Control { get; }
```
### Escape
An input Pin for the Escape key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L61)
```csharp title="Declaration"
public IPin Escape { get; }
```
### Space
An input Pin for the Space bar
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L65)
```csharp title="Declaration"
public IPin Space { get; }
```
### PageUp
An input Pin for the Page Up key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L69)
```csharp title="Declaration"
public IPin PageUp { get; }
```
### PageDown
An input Pin for the Page Down key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L73)
```csharp title="Declaration"
public IPin PageDown { get; }
```
### End
An input Pin for the End key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L77)
```csharp title="Declaration"
public IPin End { get; }
```
### Home
An input Pin for the Home key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L81)
```csharp title="Declaration"
public IPin Home { get; }
```
### Left
An input Pin for the Left Arrow key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L85)
```csharp title="Declaration"
public IPin Left { get; }
```
### Up
An input Pin for the Up Arrow key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L89)
```csharp title="Declaration"
public IPin Up { get; }
```
### Right
An input Pin for the Right Arrow key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L93)
```csharp title="Declaration"
public IPin Right { get; }
```
### Down
An input Pin for the Down Arrow key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L97)
```csharp title="Declaration"
public IPin Down { get; }
```
### Insert
An input Pin for the Insert key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L101)
```csharp title="Declaration"
public IPin Insert { get; }
```
### Delete
An input Pin for the Delete key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L105)
```csharp title="Declaration"
public IPin Delete { get; }
```
### Tilde
An input Pin for the Back-tick/Tilde key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L109)
```csharp title="Declaration"
public IPin Tilde { get; }
```
### Semicolon
An input Pin for the Semicolon key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L113)
```csharp title="Declaration"
public IPin Semicolon { get; }
```
### Plus
An input Pin for the +/= key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L117)
```csharp title="Declaration"
public IPin Plus { get; }
```
### Minus
An input Pin for the -/_ key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L121)
```csharp title="Declaration"
public IPin Minus { get; }
```
### Comma
An input Pin for the Comma key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L125)
```csharp title="Declaration"
public IPin Comma { get; }
```
### Period
An input Pin for the Period key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L129)
```csharp title="Declaration"
public IPin Period { get; }
```
### ForwardSlash
An input Pin for the Forward Slash key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L133)
```csharp title="Declaration"
public IPin ForwardSlash { get; }
```
### BackSlash
An input Pin for the Back Slash key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L137)
```csharp title="Declaration"
public IPin BackSlash { get; }
```
### OpenBracket
An input Pin for the Open Bracket key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L141)
```csharp title="Declaration"
public IPin OpenBracket { get; }
```
### CloseBracket
An input Pin for the Close Bracket key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L145)
```csharp title="Declaration"
public IPin CloseBracket { get; }
```
### Num0
An input Pin for the 0 key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L149)
```csharp title="Declaration"
public IPin Num0 { get; }
```
### Num1
An input Pin for the 1 key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L153)
```csharp title="Declaration"
public IPin Num1 { get; }
```
### Num2
An input Pin for the 2 key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L157)
```csharp title="Declaration"
public IPin Num2 { get; }
```
### Num3
An input Pin for the 3 key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L161)
```csharp title="Declaration"
public IPin Num3 { get; }
```
### Num4
An input Pin for the 4 key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L165)
```csharp title="Declaration"
public IPin Num4 { get; }
```
### Num5
An input Pin for the 5 key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L169)
```csharp title="Declaration"
public IPin Num5 { get; }
```
### Num6
An input Pin for the 6 key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L173)
```csharp title="Declaration"
public IPin Num6 { get; }
```
### Num7
An input Pin for the 7 key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L177)
```csharp title="Declaration"
public IPin Num7 { get; }
```
### Num8
An input Pin for the 8 key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L181)
```csharp title="Declaration"
public IPin Num8 { get; }
```
### Num9
An input Pin for the 9 key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L185)
```csharp title="Declaration"
public IPin Num9 { get; }
```
### A
An input Pin for the A key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L189)
```csharp title="Declaration"
public IPin A { get; }
```
### B
An input Pin for the B key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L193)
```csharp title="Declaration"
public IPin B { get; }
```
### C
An input Pin for the C key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L197)
```csharp title="Declaration"
public IPin C { get; }
```
### D
An input Pin for the D key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L201)
```csharp title="Declaration"
public IPin D { get; }
```
### E
An input Pin for the E key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L205)
```csharp title="Declaration"
public IPin E { get; }
```
### F
An input Pin for the F key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L209)
```csharp title="Declaration"
public IPin F { get; }
```
### G
An input Pin for the G key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L213)
```csharp title="Declaration"
public IPin G { get; }
```
### H
An input Pin for the H key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L217)
```csharp title="Declaration"
public IPin H { get; }
```
### I
An input Pin for the I key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L221)
```csharp title="Declaration"
public IPin I { get; }
```
### J
An input Pin for the J key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L225)
```csharp title="Declaration"
public IPin J { get; }
```
### K
An input Pin for the K key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L229)
```csharp title="Declaration"
public IPin K { get; }
```
### L
An input Pin for the L key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L233)
```csharp title="Declaration"
public IPin L { get; }
```
### M
An input Pin for the M key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L237)
```csharp title="Declaration"
public IPin M { get; }
```
### N
An input Pin for the N key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L241)
```csharp title="Declaration"
public IPin N { get; }
```
### O
An input Pin for the O key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L245)
```csharp title="Declaration"
public IPin O { get; }
```
### P
An input Pin for the P key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L249)
```csharp title="Declaration"
public IPin P { get; }
```
### Q
An input Pin for the Q key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L253)
```csharp title="Declaration"
public IPin Q { get; }
```
### R
An input Pin for the R key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L257)
```csharp title="Declaration"
public IPin R { get; }
```
### S
An input Pin for the S key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L261)
```csharp title="Declaration"
public IPin S { get; }
```
### T
An input Pin for the T key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L265)
```csharp title="Declaration"
public IPin T { get; }
```
### U
An input Pin for the U key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L269)
```csharp title="Declaration"
public IPin U { get; }
```
### V
An input Pin for the V key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L273)
```csharp title="Declaration"
public IPin V { get; }
```
### W
An input Pin for the W key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L277)
```csharp title="Declaration"
public IPin W { get; }
```
### X
An input Pin for the X key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L281)
```csharp title="Declaration"
public IPin X { get; }
```
### Y
An input Pin for the Y key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L285)
```csharp title="Declaration"
public IPin Y { get; }
```
### Z
An input Pin for the Z key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L289)
```csharp title="Declaration"
public IPin Z { get; }
```
### NumPad0
An input Pin for Number Pad 0
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L293)
```csharp title="Declaration"
public IPin NumPad0 { get; }
```
### NumPad1
An input Pin for Number Pad 1
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L297)
```csharp title="Declaration"
public IPin NumPad1 { get; }
```
### NumPad2
An input Pin for Number Pad 2
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L301)
```csharp title="Declaration"
public IPin NumPad2 { get; }
```
### NumPad3
An input Pin for Number Pad 3
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L305)
```csharp title="Declaration"
public IPin NumPad3 { get; }
```
### NumPad4
An input Pin for Number Pad 4
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L309)
```csharp title="Declaration"
public IPin NumPad4 { get; }
```
### NumPad5
An input Pin for Number Pad 5
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L313)
```csharp title="Declaration"
public IPin NumPad5 { get; }
```
### NumPad6
An input Pin for Number Pad 6
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L317)
```csharp title="Declaration"
public IPin NumPad6 { get; }
```
### NumPad7
An input Pin for Number Pad 7
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L321)
```csharp title="Declaration"
public IPin NumPad7 { get; }
```
### NumPad8
An input Pin for Number Pad 8
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L325)
```csharp title="Declaration"
public IPin NumPad8 { get; }
```
### NumPad9
An input Pin for Number Pad 9
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L329)
```csharp title="Declaration"
public IPin NumPad9 { get; }
```
### CapsLock
An output Pin for Caps Lock indicator
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L334)
```csharp title="Declaration"
public IPin CapsLock { get; }
```
### NumLock
An output Pin for Number Lock indicator
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L338)
```csharp title="Declaration"
public IPin NumLock { get; }
```
### ScrollLock
An output Pin for Scroll Lock indicator
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L342)
```csharp title="Declaration"
public IPin ScrollLock { get; }
```
### KanaLock
An output Pin for Kana Lock indicator
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L346)
```csharp title="Declaration"
public IPin KanaLock { get; }
```
## Methods
### GetEnumerator()
Enumerates all pins in the keyboard
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.PinDefinitions.cs#L19)
```csharp title="Declaration"
public IEnumerator<IPin> GetEnumerator()
```

##### Returns

`System.Collections.Generic.IEnumerator<Meadow.Hardware.IPin>`

## Implements

* `Meadow.Hardware.IPinDefinitions`
* `System.Collections.Generic.IEnumerable<Meadow.Hardware.IPin>`
* `System.Collections.IEnumerable`
