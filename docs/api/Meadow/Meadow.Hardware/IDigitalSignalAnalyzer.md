---
title: Interface IDigitalSignalAnalyzer
sidebar_label: IDigitalSignalAnalyzer
description: >-
  Provides analysis capabilities for digital signals, measuring frequency and
  duty cycle characteristics.
slug: /docs/api/Meadow/Meadow.Hardware/IDigitalSignalAnalyzer
---
# Interface IDigitalSignalAnalyzer
Provides analysis capabilities for digital signals, measuring frequency and duty cycle characteristics.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IDigitalSignalAnalyzer.cs#L8)
```csharp title="Declaration"
public interface IDigitalSignalAnalyzer
```
## Methods
### GetCount()
Gets the current sensor count
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IDigitalSignalAnalyzer.cs#L13)
```csharp title="Declaration"
ulong GetCount()
```

##### Returns

`System.UInt64`
### GetFrequency()
Takes an instantaneous measurement of the signal frequency.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IDigitalSignalAnalyzer.cs#L19)
```csharp title="Declaration"
Frequency GetFrequency()
```

##### Returns

[Meadow.Units.Frequency](../Meadow.Units/Frequency): The current frequency of the digital signal.### GetMeanFrequency()
Calculates the average frequency over the measurement period.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IDigitalSignalAnalyzer.cs#L25)
```csharp title="Declaration"
Frequency GetMeanFrequency()
```

##### Returns

[Meadow.Units.Frequency](../Meadow.Units/Frequency): The mean frequency of the digital signal.### GetDutyCycle()
Measures the duty cycle of the digital signal.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IDigitalSignalAnalyzer.cs#L34)
```csharp title="Declaration"
double GetDutyCycle()
```

##### Returns

`System.Double`: The duty cycle as a ratio between 0 and 1, where 0 represents always low 
and 1 represents always high.
