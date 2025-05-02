---
title: Enum ChannelConfigurationType
sidebar_label: ChannelConfigurationType
description: >-
  TODO: revisit this structure. Ultimately, it would be nice to know,
  specifically what a channel is configured for, i.e. DigitalInput, I2C TX, UART
  RX, etc.
slug: /docs/api/Meadow/Meadow.Hardware/ChannelConfigurationType
---
# Enum ChannelConfigurationType
TODO: revisit this structure. Ultimately, it would be nice to know, specifically
what a channel is configured for, i.e. DigitalInput, I2C TX, UART RX, etc.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/ChannelConfigurationType.cs#L8)
```csharp title="Declaration"
public enum ChannelConfigurationType
```
## Fields
### None
Not configured
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/ChannelConfigurationType.cs#L13)
```csharp title="Declaration"
None = 0
```
### DigitalOutput
Configured as a digital output
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/ChannelConfigurationType.cs#L17)
```csharp title="Declaration"
DigitalOutput = 1
```
### DigitalInput
Configured as a digital input
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/ChannelConfigurationType.cs#L21)
```csharp title="Declaration"
DigitalInput = 2
```
### AnalogOutput
Configured as an analog output
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/ChannelConfigurationType.cs#L25)
```csharp title="Declaration"
AnalogOutput = 3
```
### AnalogInput
Configured as an analog input
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/ChannelConfigurationType.cs#L29)
```csharp title="Declaration"
AnalogInput = 4
```
### PWM
Configured for pulse width modulation (PWM)
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/ChannelConfigurationType.cs#L33)
```csharp title="Declaration"
PWM = 5
```
### SPI
Configured for serial peripheral interface (SPI) communication
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/ChannelConfigurationType.cs#L37)
```csharp title="Declaration"
SPI = 6
```
### I2C
Configured for inter-integrated circuit (I2C) communication
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/ChannelConfigurationType.cs#L41)
```csharp title="Declaration"
I2C = 7
```
### CAN
Configured for controller area network (CAN) communication
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/ChannelConfigurationType.cs#L45)
```csharp title="Declaration"
CAN = 8
```
### UART
Configured for UART communication
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/ChannelConfigurationType.cs#L49)
```csharp title="Declaration"
UART = 9
```
