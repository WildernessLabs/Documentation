---
title: Class SerialDataReceivedEventArgs
sidebar_label: SerialDataReceivedEventArgs
description: Provides data for serial data received events.
slug: /docs/api/Meadow/Meadow.Hardware/SerialDataReceivedEventArgs
---
# Class SerialDataReceivedEventArgs
Provides data for serial data received events.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/SerialDataReceivedEventArgs.cs#L6)
```csharp title="Declaration"
public class SerialDataReceivedEventArgs
```
## Properties
### EventType
Describes the type of serial data received, either characters or an end 
of file notification.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/SerialDataReceivedEventArgs.cs#L21)
```csharp title="Declaration"
public SerialDataType EventType { get; }
```
