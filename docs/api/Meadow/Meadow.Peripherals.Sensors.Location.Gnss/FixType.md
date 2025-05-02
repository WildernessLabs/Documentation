---
title: Enum FixType
sidebar_label: FixType
description: >-
  Represents the fix type or quality of a Global Navigation Satellite System
  (GNSS) location fix.
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors.Location.Gnss/FixType
---
# Enum FixType
Represents the fix type or quality of a Global Navigation Satellite System (GNSS) location fix.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/FixType.cs#L6)
```csharp title="Declaration"
public enum FixType
```
## Fields
### Invalid
An invalid or unknown fix type.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/FixType.cs#L11)
```csharp title="Declaration"
Invalid = 0
```
### SPS
Standard Positioning Service (SPS) fix. This is a standard GPS fix.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/FixType.cs#L16)
```csharp title="Declaration"
SPS = 1
```
### DGPS
Differential GPS (DGPS) fix, using corrections from a base station for increased accuracy.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/FixType.cs#L21)
```csharp title="Declaration"
DGPS = 2
```
### PPS
Pulse Per Second (PPS) fix, using high-precision time synchronization.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/FixType.cs#L26)
```csharp title="Declaration"
PPS = 3
```
### RealTimeKinematic
Real-Time Kinematic (RTK) fix, providing centimeter-level precision.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/FixType.cs#L31)
```csharp title="Declaration"
RealTimeKinematic = 4
```
### FloatRTK
Floating Real-Time Kinematic (RTK) fix, providing decimeter-level precision.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/FixType.cs#L36)
```csharp title="Declaration"
FloatRTK = 5
```
### DeadReckoning
Dead reckoning fix, estimated based on previous location data.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/FixType.cs#L41)
```csharp title="Declaration"
DeadReckoning = 6
```
### ManualInput
Manual input fix, entered manually by the user.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/FixType.cs#L46)
```csharp title="Declaration"
ManualInput = 7
```
### Simulation
Simulation fix, generated for testing or simulation purposes.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/FixType.cs#L51)
```csharp title="Declaration"
Simulation = 8
```
