---
title: Class KeyboardWing
sidebar_label: KeyboardWing
description: "Represents Adafruits OLED Feather Wing"
---
# Class KeyboardWing
Represents Adafruits OLED Feather Wing

###### **Assembly**: KeyboardWing.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/KeyboardWing/Driver/KeyboardWing.cs#L11)
```csharp title="Declaration"
public class KeyboardWing
```
## Properties
### Display
Returns the Ili9341 driver
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/KeyboardWing/Driver/KeyboardWing.cs#L16)
```csharp title="Declaration"
public Ili9341 Display { get; protected set; }
```
### TouchScreen
Returns the Tsc2004 driver
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/KeyboardWing/Driver/KeyboardWing.cs#L21)
```csharp title="Declaration"
public Tsc2004 TouchScreen { get; protected set; }
```
### Keyboard
Returns the BBQ10Keyboard driver
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/KeyboardWing/Driver/KeyboardWing.cs#L26)
```csharp title="Declaration"
public BBQ10Keyboard Keyboard { get; protected set; }
```
### LightSensor
Returns the LightSensor driver
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/KeyboardWing/Driver/KeyboardWing.cs#L31)
```csharp title="Declaration"
public AnalogLightSensor LightSensor { get; protected set; }
```
