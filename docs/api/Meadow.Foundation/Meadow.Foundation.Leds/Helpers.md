---
title: Class Helpers
sidebar_label: Helpers
description: LED helper methods
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Leds/Helpers
---
# Class Helpers
LED helper methods

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/Helpers.cs#L8)
```csharp title="Declaration"
public static class Helpers
```
## Methods
### CalculateMaximumDutyCycle(Voltage)
Calculates the maximum duty cycle based on the voltage drop/Forward Voltage/Vf
of the LED.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/Helpers.cs#L16)
```csharp title="Declaration"
public static float CalculateMaximumDutyCycle(Voltage forwardVoltage)
```

##### Returns

`System.Single`

##### Parameters

| Type | Name |
|:--- |:--- |
| `Meadow.Units.Voltage` | *forwardVoltage* |

