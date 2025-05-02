---
title: Class DataFrame
sidebar_label: DataFrame
description: >-
  Represents an abstract data frame for CAN communication, inheriting from
  Frame.
slug: /docs/api/Meadow/Meadow.Hardware/DataFrame
---
# Class DataFrame
Represents an abstract data frame for CAN communication, inheriting from Frame.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/CAN/DataFrame.cs#L6)
```csharp title="Declaration"
public abstract class DataFrame : Frame, ICanFrame
```
**Inheritance:** `System.Object` -> [Meadow.Hardware.Frame](../Meadow.Hardware/Frame)

**Derived:**  
[Meadow.Hardware.ExtendedDataFrame](../Meadow.Hardware/ExtendedDataFrame), [Meadow.Hardware.RemoteTransferRequestFrame](../Meadow.Hardware/RemoteTransferRequestFrame), [Meadow.Hardware.StandardDataFrame](../Meadow.Hardware/StandardDataFrame)

**Implements:**  
[Meadow.Hardware.ICanFrame](../Meadow.Hardware/ICanFrame)

## Properties
### ID
Gets or sets the identifier for the data frame.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/CAN/DataFrame.cs#L11)
```csharp title="Declaration"
public int ID { get; set; }
```
### Payload
Gets or sets the payload of the data frame.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/CAN/DataFrame.cs#L16)
```csharp title="Declaration"
public byte[] Payload { get; set; }
```

## Implements

* [Meadow.Hardware.ICanFrame](../Meadow.Hardware/ICanFrame)
