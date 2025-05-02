---
title: Class SoftDigitalSignalAnalyzer
sidebar_label: SoftDigitalSignalAnalyzer
description: >-
  Implements frequency and duty cycle analysis of digital signals using
  software-based timing measurements.
slug: /docs/api/Meadow/Meadow.Hardware/SoftDigitalSignalAnalyzer
---
# Class SoftDigitalSignalAnalyzer
Implements frequency and duty cycle analysis of digital signals using software-based timing measurements.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/SoftDigitalSignalAnalyzer.cs#L10)
```csharp title="Declaration"
public class SoftDigitalSignalAnalyzer : IDigitalSignalAnalyzer, IDisposable
```
**Implements:**  
[Meadow.Hardware.IDigitalSignalAnalyzer](../Meadow.Hardware/IDigitalSignalAnalyzer), `System.IDisposable`

## Properties
### IsDisposed
Returns true if the analyzer has been disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/SoftDigitalSignalAnalyzer.cs#L25)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### GetCount()
Gets the current sensor count
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/SoftDigitalSignalAnalyzer.cs#L87)
```csharp title="Declaration"
public ulong GetCount()
```

##### Returns

`System.UInt64`
### GetDutyCycle()
Measures the duty cycle of the digital signal.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/SoftDigitalSignalAnalyzer.cs#L93)
```csharp title="Declaration"
public double GetDutyCycle()
```

##### Returns

`System.Double`: The duty cycle as a ratio between 0 and 1, where 0 represents always low 
and 1 represents always high.### GetMeanFrequency()
Calculates the average frequency over the measurement period.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/SoftDigitalSignalAnalyzer.cs#L99)
```csharp title="Declaration"
public Frequency GetMeanFrequency()
```

##### Returns

[Meadow.Units.Frequency](../Meadow.Units/Frequency): The mean frequency of the digital signal.### GetFrequency()
Takes an instantaneous measurement of the signal frequency.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/SoftDigitalSignalAnalyzer.cs#L107)
```csharp title="Declaration"
public Frequency GetFrequency()
```

##### Returns

[Meadow.Units.Frequency](../Meadow.Units/Frequency): The current frequency of the digital signal.### Dispose(bool)

###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/SoftDigitalSignalAnalyzer.cs#L115)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Boolean` | *disposing* |

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/SoftDigitalSignalAnalyzer.cs#L134)
```csharp title="Declaration"
public void Dispose()
```

## Implements

* [Meadow.Hardware.IDigitalSignalAnalyzer](../Meadow.Hardware/IDigitalSignalAnalyzer)
* `System.IDisposable`
