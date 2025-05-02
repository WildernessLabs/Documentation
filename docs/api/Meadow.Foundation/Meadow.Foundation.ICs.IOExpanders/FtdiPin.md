---
title: Class FtdiPin
sidebar_label: FtdiPin
description: Represents a single FTDI expander pin
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders/FtdiPin
---
# Class FtdiPin
Represents a single FTDI expander pin

###### **Assembly**: Ft2xxx.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiPin.cs#L9)
```csharp title="Declaration"
public class FtdiPin : Pin, IPin, IEquatable<IPin>
```
**Inheritance:** `System.Object` -> `Meadow.Hardware.Pin`

**Implements:**  
`Meadow.Hardware.IPin`, `System.IEquatable<Meadow.Hardware.IPin>`

## Properties
### IsLowByte
Returns &lt;b&gt;true&lt;/b&gt; if the pin is on the low byte of the expander, otherwise &lt;b&gt;false&lt;/b&gt;
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiPin.cs#L14)
```csharp title="Declaration"
public bool IsLowByte { get; }
```
## Methods
### ToString()
Returns a string that represents the pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiPin.cs#L23)
```csharp title="Declaration"
public override string ToString()
```

##### Returns

`System.String`

## Implements

* `Meadow.Hardware.IPin`
* `System.IEquatable<Meadow.Hardware.IPin>`
