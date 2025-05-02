---
title: Class SimulatedDigitalSignalAnalyzer
sidebar_label: SimulatedDigitalSignalAnalyzer
description: >-
  A simulated digital signal analyzer that can track and report a signal's
  frequency, duty cycle, and pulse count for testing purposes.
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors/SimulatedDigitalSignalAnalyzer
---
# Class SimulatedDigitalSignalAnalyzer
A simulated digital signal analyzer that can track and report
a signal's frequency, duty cycle, and pulse count for testing purposes.

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Ports/SimulatedDigitalSignalAnalyzer.cs#L15)
```csharp title="Declaration"
public class SimulatedDigitalSignalAnalyzer : IDigitalSignalAnalyzer
```
**Implements:**  
`Meadow.Hardware.IDigitalSignalAnalyzer`

## Methods
### SetDutyCycle(double)
Sets the simulated duty cycle for the analyzer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Ports/SimulatedDigitalSignalAnalyzer.cs#L39)
```csharp title="Declaration"
public void SetDutyCycle(double dutyCycle)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Double` | *dutyCycle* | The duty cycle to simulate, typically between 0.0 and 1.0. |

### GetDutyCycle()
Gets the current simulated duty cycle.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Ports/SimulatedDigitalSignalAnalyzer.cs#L50)
```csharp title="Declaration"
public double GetDutyCycle()
```

##### Returns

`System.Double`: A `System.Double` representing the duty cycle (0.0 to 1.0).### SetFrequency(Frequency)
Sets the simulated frequency for the analyzer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Ports/SimulatedDigitalSignalAnalyzer.cs#L61)
```csharp title="Declaration"
public void SetFrequency(Frequency frequency)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Units.Frequency` | *frequency* | The `Meadow.Units.Frequency` value to simulate. |

### GetFrequency()
Gets the current simulated frequency.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Ports/SimulatedDigitalSignalAnalyzer.cs#L72)
```csharp title="Declaration"
public Frequency GetFrequency()
```

##### Returns

`Meadow.Units.Frequency`: The `Meadow.Units.Frequency` currently set in the simulation.### GetMeanFrequency()
Gets the mean frequency of the simulated signal.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Ports/SimulatedDigitalSignalAnalyzer.cs#L84)
```csharp title="Declaration"
public Frequency GetMeanFrequency()
```

##### Returns

`Meadow.Units.Frequency`: The `Meadow.Units.Frequency` representing the average frequency.
In this simulation, it returns the same frequency set by [Meadow.Foundation.Sensors.SimulatedDigitalSignalAnalyzer.SetFrequency(Meadow.Units.Frequency)](../Meadow.Foundation.Sensors/SimulatedDigitalSignalAnalyzer#setfrequencyfrequency).### SetCount(ulong)
Sets the pulse count (or edge count) for the simulated signal.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Ports/SimulatedDigitalSignalAnalyzer.cs#L95)
```csharp title="Declaration"
public void SetCount(ulong count)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.UInt64` | *count* | The `System.UInt64` value representing the total pulses counted. |

### GetCount()
Gets the total pulse count (or edge count) from the simulation.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Ports/SimulatedDigitalSignalAnalyzer.cs#L106)
```csharp title="Declaration"
public ulong GetCount()
```

##### Returns

`System.UInt64`: A `System.UInt64` representing the total number of pulses.
## Implements

* `Meadow.Hardware.IDigitalSignalAnalyzer`
