---
title: Interface IMeadowAppEmbeddedHardware
sidebar_label: IMeadowAppEmbeddedHardware
description: An interface for embedded hardware running the Meadow software stack
slug: /docs/api/Meadow/Meadow/IMeadowAppEmbeddedHardware
---
# Interface IMeadowAppEmbeddedHardware
An interface for embedded hardware running the Meadow software stack

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IMeadowAppEmbeddedHardware.cs#L6)
```csharp title="Declaration"
public interface IMeadowAppEmbeddedHardware
```
## Properties
### ComputeModule
The base IMeadowDevice compute module that the hardware uses (e.g. F7, Raspberry Pi, etc)
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IMeadowAppEmbeddedHardware.cs#L11)
```csharp title="Declaration"
IMeadowDevice ComputeModule { get; }
```
