---
title: Class LEDButton
sidebar_label: LEDButton
description: Represents an LED button
slug: >-
  /docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Buttons/LEDButton
---
# Class LEDButton
Represents an LED button

###### **Assembly**: LEDButton.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.Grove.git/blob/develop/Source/LEDButton/Driver/LEDButton.cs#L10)
```csharp title="Declaration"
public class LEDButton : PushButton, IButton, ISensor<bool>, ISensor, IDisposable
```
**Inheritance:** `System.Object` -> `Meadow.Foundation.Sensors.Buttons.PushButtonBase` -> `Meadow.Foundation.Sensors.Buttons.PushButton`

**Implements:**  
`Meadow.Peripherals.Sensors.Buttons.IButton`, `Meadow.Peripherals.Sensors.ISensor<System.Boolean>`, `Meadow.Peripherals.Sensors.ISensor`, `System.IDisposable`

## Properties
### IsLedOn
Gets/Sets the status of the LED when is on(true) or off(false)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.Grove.git/blob/develop/Source/LEDButton/Driver/LEDButton.cs#L17)
```csharp title="Declaration"
public bool IsLedOn { get; set; }
```

## Implements

* `Meadow.Peripherals.Sensors.Buttons.IButton`
* `Meadow.Peripherals.Sensors.ISensor<System.Boolean>`
* `Meadow.Peripherals.Sensors.ISensor`
* `System.IDisposable`
