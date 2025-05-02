---
title: Class C8800Retro
sidebar_label: C8800Retro
description: Represents a mikroBUS Altair 8800 Retro click board
slug: >-
  /docs/api/Meadow.Foundation.mikroBUS/Meadow.Foundation.mikroBUS.Displays/C8800Retro
---
# Class C8800Retro
Represents a mikroBUS Altair 8800 Retro click board

###### **Assembly**: C8800Retro.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.mikroBUS.git/blob/develop/Source/C8800Retro/Driver/C8800Retro.Enums.cs#L3)
```csharp title="Declaration"
public class C8800Retro : As1115, IPixelDisplay, IDisplay, II2cPeripheral, IDisposable
```
**Inheritance:** `System.Object` -> `Meadow.Foundation.ICs.IOExpanders.As1115`

**Implements:**  
`Meadow.Peripherals.Displays.IPixelDisplay`, `Meadow.Peripherals.Displays.IDisplay`, `Meadow.Hardware.II2cPeripheral`, `System.IDisposable`

## Methods
### GetButton(ButtonColumn, ButtonRow)
Get the button for a given row and column
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.mikroBUS.git/blob/develop/Source/C8800Retro/Driver/C8800Retro.cs#L28)
```csharp title="Declaration"
public IButton GetButton(C8800Retro.ButtonColumn column, C8800Retro.ButtonRow row)
```

##### Returns

`Meadow.Peripherals.Sensors.Buttons.IButton`: The IButton object
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.mikroBUS.Displays.C8800Retro.ButtonColumn](../Meadow.Foundation.mikroBUS.Displays/C8800Retro.ButtonColumn) | *column* | The column of the button (1-4) |
| [Meadow.Foundation.mikroBUS.Displays.C8800Retro.ButtonRow](../Meadow.Foundation.mikroBUS.Displays/C8800Retro.ButtonRow) | *row* | The row of the button (A-D) |


## Implements

* `Meadow.Peripherals.Displays.IPixelDisplay`
* `Meadow.Peripherals.Displays.IDisplay`
* `Meadow.Hardware.II2cPeripheral`
* `System.IDisposable`
