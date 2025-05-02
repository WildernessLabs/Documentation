---
title: Interface ILed
sidebar_label: ILed
description: Defines a simple Light Emitting Diode (LED).
slug: /docs/api/Meadow/Meadow.Peripherals.Leds/ILed
---
# Interface ILed
Defines a simple Light Emitting Diode (LED).

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Leds/ILed.cs#L9)
```csharp title="Declaration"
public interface ILed
```
## Properties
### IsOn
Gets or sets a value indicating whether the LED is on.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Leds/ILed.cs#L15)
```csharp title="Declaration"
bool IsOn { get; set; }
```
## Methods
### StartBlink()
Blink animation that turns the LED on (500ms) and off (500ms)
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Leds/ILed.cs#L20)
```csharp title="Declaration"
Task StartBlink()
```

##### Returns

`System.Threading.Tasks.Task`
### StartBlink(TimeSpan, TimeSpan)
Blink animation that turns the LED on and off based on the OnDuration and offDuration values in ms
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Leds/ILed.cs#L27)
```csharp title="Declaration"
Task StartBlink(TimeSpan onDuration, TimeSpan offDuration)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.TimeSpan` | *onDuration* |
| `System.TimeSpan` | *offDuration* |

### StopAnimation()
Stops blink animation.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Leds/ILed.cs#L32)
```csharp title="Declaration"
Task StopAnimation()
```

##### Returns

`System.Threading.Tasks.Task`
