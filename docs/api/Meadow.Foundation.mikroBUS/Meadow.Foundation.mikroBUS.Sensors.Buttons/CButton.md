---
title: Class CButton
sidebar_label: CButton
description: 'Represents a mikroBUS Button G,R,Y Click board'
slug: >-
  /docs/api/Meadow.Foundation.mikroBUS/Meadow.Foundation.mikroBUS.Sensors.Buttons/CButton
---
# Class CButton
Represents a mikroBUS Button G,R,Y Click board

###### **Assembly**: CButton.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.mikroBUS.git/blob/develop/Source/CButton/Driver/CButton.cs#L11)
```csharp title="Declaration"
public class CButton : PushButton, IButton, ISensor<bool>, ISensor, IDisposable
```
**Inheritance:** `System.Object` -> `Meadow.Foundation.Sensors.Buttons.PushButtonBase` -> `Meadow.Foundation.Sensors.Buttons.PushButton`

**Implements:**  
`Meadow.Peripherals.Sensors.Buttons.IButton`, `Meadow.Peripherals.Sensors.ISensor<System.Boolean>`, `Meadow.Peripherals.Sensors.ISensor`, `System.IDisposable`

## Properties
### IsOn
Gets or sets a value indicating whether the LED is on.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.mikroBUS.git/blob/develop/Source/CButton/Driver/CButton.cs#L19)
```csharp title="Declaration"
public bool IsOn { get; set; }
```
### Brightness
Gets the brightness of the LED, controlled by a PWM signal
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.mikroBUS.git/blob/develop/Source/CButton/Driver/CButton.cs#L28)
```csharp title="Declaration"
public float Brightness { get; set; }
```
## Methods
### StartBlink(TimeSpan, TimeSpan, float, float)
Start the Blink animation which sets the brightness of the LED alternating between a low and high brightness setting, using the durations provided.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.mikroBUS.git/blob/develop/Source/CButton/Driver/CButton.cs#L59)
```csharp title="Declaration"
public void StartBlink(TimeSpan onDuration, TimeSpan offDuration, float highBrightness = 1, float lowBrightness = 0)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.TimeSpan` | *onDuration* |
| `System.TimeSpan` | *offDuration* |
| `System.Single` | *highBrightness* |
| `System.Single` | *lowBrightness* |

### StartPulse(TimeSpan, float, float)
Start the Pulse animation which gradually alternates the brightness of the LED between a low and high brightness setting, using the durations provided.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.mikroBUS.git/blob/develop/Source/CButton/Driver/CButton.cs#L67)
```csharp title="Declaration"
public void StartPulse(TimeSpan pulseDuration, float highBrightness, float lowBrightness = 0.15)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.TimeSpan` | *pulseDuration* |
| `System.Single` | *highBrightness* |
| `System.Single` | *lowBrightness* |

### StopAnimation()
Stops any running animations
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.mikroBUS.git/blob/develop/Source/CButton/Driver/CButton.cs#L75)
```csharp title="Declaration"
public void StopAnimation()
```

## Implements

* `Meadow.Peripherals.Sensors.Buttons.IButton`
* `Meadow.Peripherals.Sensors.ISensor<System.Boolean>`
* `Meadow.Peripherals.Sensors.ISensor`
* `System.IDisposable`
