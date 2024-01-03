---
title: Class LedBarGraph
sidebar_label: LedBarGraph
description: "Represents an LED bar graph composed on multiple LEDs"
---
# Class LedBarGraph
Represents an LED bar graph composed on multiple LEDs

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/LedBarGraph.cs#L10)
```csharp title="Declaration"
public class LedBarGraph
```
## Properties
### Count
The number of the LEDs in the bar graph
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/LedBarGraph.cs#L20)
```csharp title="Declaration"
public int Count { get; }
```
### Percentage
A value between 0 and 1 that controls the number of LEDs that are activated
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/LedBarGraph.cs#L25)
```csharp title="Declaration"
public float Percentage { get; protected set; }
```
## Fields
### leds
Array to hold LED objects for bar
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/LedBarGraph.cs#L15)
```csharp title="Declaration"
protected Led[] leds
```
## Methods
### StopAnimation()
Stops the LED bar graph when its blinking
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/LedBarGraph.Animations.cs#L17)
```csharp title="Declaration"
public Task StopAnimation()
```

##### Returns

`System.Threading.Tasks.Task`
### StopAnimation(int)
Stops the blinking animation on an individual LED
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/LedBarGraph.Animations.cs#L31)
```csharp title="Declaration"
public Task StopAnimation(int index)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *index* |

### StartBlink()
Blink animation that turns the LED bar graph on (500ms) and off (500ms)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/LedBarGraph.Animations.cs#L44)
```csharp title="Declaration"
public Task StartBlink()
```

##### Returns

`System.Threading.Tasks.Task`
### StartBlink(TimeSpan, TimeSpan)
Blink animation that turns the LED bar graph on and off based on the OnDuration and offDuration values
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/LedBarGraph.Animations.cs#L54)
```csharp title="Declaration"
public Task StartBlink(TimeSpan onDuration, TimeSpan offDuration)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.TimeSpan` | *onDuration* | The duration the LED bar graph stays on |
| `System.TimeSpan` | *offDuration* | The duration the LED bar graph stays off |

### StartBlink(int)
Starts a blink animation on an individual LED on (500ms) and off (500ms)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/LedBarGraph.Animations.cs#L88)
```csharp title="Declaration"
public Task StartBlink(int index)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *index* | Index of the LED |

### StartBlink(int, TimeSpan, TimeSpan)
Starts a blink animation on an individual LED
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/LedBarGraph.Animations.cs#L104)
```csharp title="Declaration"
public Task StartBlink(int index, TimeSpan onDuration, TimeSpan offDuration)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *index* | Index of the LED |
| `System.TimeSpan` | *onDuration* | The duration the LED stays on |
| `System.TimeSpan` | *offDuration* | The duration the LED stays off |

### GetTopLedForPercentage()
Returns the index of the last LED turned on
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/LedBarGraph.Animations.cs#L117)
```csharp title="Declaration"
public int GetTopLedForPercentage()
```

##### Returns

`System.Int32`
### SetLed(int, bool)
Set the LED state
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/LedBarGraph.cs#L60)
```csharp title="Declaration"
public Task SetLed(int index, bool isOn)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *index* | Index of the LED |
| `System.Boolean` | *isOn* | True for on, False for off |

### SetPercentage(float)
Set the percentage of LEDs that are on starting from index 0
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Leds/LedBarGraph.cs#L75)
```csharp title="Declaration"
public Task SetPercentage(float percentage)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Single` | *percentage* | Percentage (Range from 0 - 1) |

