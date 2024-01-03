---
title: Class KeyboardIndicatorPin
sidebar_label: KeyboardIndicatorPin
description: "An IPin implementation for a Keyboard indicator"
---
# Class KeyboardIndicatorPin
An IPin implementation for a Keyboard indicator

###### **Assembly**: Meadow.Keyboard.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/KeyboardIndicatorPin.cs#L11)
```csharp title="Declaration"
public class KeyboardIndicatorPin : Pin, IPin, IEquatable<IPin>
```
**Inheritance:** `System.Object` -> `Meadow.Hardware.Pin`

**Implements:**  
`Meadow.Hardware.IPin`, `System.IEquatable<Meadow.Hardware.IPin>`

## Methods
### Equals(IPin?)
Compares this pin to another
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/KeyboardIndicatorPin.cs#L31)
```csharp title="Declaration"
public override bool Equals(IPin? other)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| `Meadow.Hardware.IPin` | *other* |


## Implements

* `Meadow.Hardware.IPin`
* `System.IEquatable<Meadow.Hardware.IPin>`
