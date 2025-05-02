---
title: Class BatteryInfo
sidebar_label: BatteryInfo
description: Represents battery information.
slug: /docs/api/Meadow/Meadow.Hardware/BatteryInfo
---
# Class BatteryInfo
Represents battery information.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/BatteryInfo.cs#L9)
```csharp title="Declaration"
public class BatteryInfo
```
## Properties
### Temperature
Gets or sets the temperature of the battery.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/BatteryInfo.cs#L14)
```csharp title="Declaration"
public Temperature? Temperature { get; set; }
```
### Voltage
Gets or sets the voltage of the battery.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/BatteryInfo.cs#L19)
```csharp title="Declaration"
public Voltage? Voltage { get; set; }
```
### Current
Gets or sets the current flowing in or out of the battery.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/BatteryInfo.cs#L24)
```csharp title="Declaration"
public Current? Current { get; set; }
```
### MeanCurrent
Gets or sets the mean current flowing in or out of the battery.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/BatteryInfo.cs#L29)
```csharp title="Declaration"
public Current? MeanCurrent { get; set; }
```
### StateOfCharge
Gets or sets the state of charge (SOC) of the battery.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/BatteryInfo.cs#L34)
```csharp title="Declaration"
public int StateOfCharge { get; set; }
```
### TimeToEmpty
Gets or sets the estimated time remaining for the battery to be empty.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/BatteryInfo.cs#L39)
```csharp title="Declaration"
public TimeSpan? TimeToEmpty { get; set; }
```
### TimeToFull
Gets or sets the estimated time remaining for the battery to be fully charged.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/BatteryInfo.cs#L44)
```csharp title="Declaration"
public TimeSpan? TimeToFull { get; set; }
```
