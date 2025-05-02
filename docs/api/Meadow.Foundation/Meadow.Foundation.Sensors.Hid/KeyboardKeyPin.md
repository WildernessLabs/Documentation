---
title: Class KeyboardKeyPin
sidebar_label: KeyboardKeyPin
description: An IPin implementation for a Keyboard input key
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid/KeyboardKeyPin
---
# Class KeyboardKeyPin
An IPin implementation for a Keyboard input key

###### **Assembly**: Meadow.Keyboard.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/KeyboardKeyPin.cs#L11)
```csharp title="Declaration"
public class KeyboardKeyPin : Pin, IPin, IEquatable<IPin>
```
**Inheritance:** `System.Object` -> `Meadow.Hardware.Pin`

**Implements:**  
`Meadow.Hardware.IPin`, `System.IEquatable<Meadow.Hardware.IPin>`

## Properties
### Key
The virtual key code of the key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/KeyboardKeyPin.cs#L16)
```csharp title="Declaration"
public char Key { get; }
```
## Methods
### Equals(IPin?)
Compares this pin to another
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/KeyboardKeyPin.cs#L39)
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
