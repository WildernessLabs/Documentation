---
title: Class ProgrammableAnalogInputModule
sidebar_label: ProgrammableAnalogInputModule
slug: /docs/api/Meadow.Foundation/Meadow.Foundation/ProgrammableAnalogInputModule
---
# Class ProgrammableAnalogInputModule


###### **Assembly**: ProgrammableAnalogInput.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Product/ProgrammableAnalogInput/ProgrammableAnalogInputModule.cs#L9)
```csharp title="Declaration"
public class ProgrammableAnalogInputModule
```
## Fields
### ChannelCount

###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Product/ProgrammableAnalogInput/ProgrammableAnalogInputModule.cs#L11)
```csharp title="Declaration"
public const int ChannelCount = 8
```
## Methods
### ConfigureChannel(int, ChannelType)

###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Product/ProgrammableAnalogInput/ProgrammableAnalogInputModule.cs#L110)
```csharp title="Declaration"
public void ConfigureChannel(int channelNumber, ProgrammableAnalogInputModule.ChannelType channelType)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *channelNumber* |
| [Meadow.Foundation.ProgrammableAnalogInputModule.ChannelType](../Meadow.Foundation/ProgrammableAnalogInputModule.ChannelType) | *channelType* |

### ReadChannelRaw(int)

###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Product/ProgrammableAnalogInput/ProgrammableAnalogInputModule.cs#L144)
```csharp title="Declaration"
public Voltage ReadChannelRaw(int channelNumber)
```

##### Returns

`Meadow.Units.Voltage`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *channelNumber* |

### Read0_10V(int)

###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Product/ProgrammableAnalogInput/ProgrammableAnalogInputModule.cs#L154)
```csharp title="Declaration"
public Voltage Read0_10V(int channelNumber)
```

##### Returns

`Meadow.Units.Voltage`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *channelNumber* |

### Read4_20mA(int)

###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Product/ProgrammableAnalogInput/ProgrammableAnalogInputModule.cs#L168)
```csharp title="Declaration"
public Current Read4_20mA(int channelNumber)
```

##### Returns

`Meadow.Units.Current`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *channelNumber* |

### ReadNtc(int)

###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Product/ProgrammableAnalogInput/ProgrammableAnalogInputModule.cs#L180)
```csharp title="Declaration"
public Temperature ReadNtc(int channelNumber)
```

##### Returns

`Meadow.Units.Temperature`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *channelNumber* |

### ReadNtc(int, double, Temperature, Resistance)

###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Product/ProgrammableAnalogInput/ProgrammableAnalogInputModule.cs#L185)
```csharp title="Declaration"
public Temperature ReadNtc(int channelNumber, double beta, Temperature referenceTemperature, Resistance resistanceAtRefTemp)
```

##### Returns

`Meadow.Units.Temperature`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *channelNumber* |
| `System.Double` | *beta* |
| `Meadow.Units.Temperature` | *referenceTemperature* |
| `Meadow.Units.Resistance` | *resistanceAtRefTemp* |

