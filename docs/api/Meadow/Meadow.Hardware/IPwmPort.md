---
title: Interface IPwmPort
sidebar_label: IPwmPort
description: Contract for a Port that has is capable of
slug: /docs/api/Meadow/Meadow.Hardware/IPwmPort
---
# Interface IPwmPort
Contract for a Port that has is capable of

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IPwmPort.cs#L8)
```csharp title="Declaration"
public interface IPwmPort : IDigitalPort, IPort<IDigitalChannelInfo>, IDisposable
```
## Properties
### Channel
PWM channel value
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IPwmPort.cs#L13)
```csharp title="Declaration"
IPwmChannelInfo Channel { get; }
```
### Duration
Duration of pulse
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IPwmPort.cs#L28)
```csharp title="Declaration"
TimePeriod Duration { get; set; }
```
### Period
Period of pulse
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IPwmPort.cs#L33)
```csharp title="Declaration"
TimePeriod Period { get; set; }
```
### DutyCycle
Duty cycle (from 1 to 1.0)
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IPwmPort.cs#L38)
```csharp title="Declaration"
double DutyCycle { get; set; }
```
### Frequency
Frequency
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IPwmPort.cs#L43)
```csharp title="Declaration"
Frequency Frequency { get; set; }
```
### Inverted
Is PWM signal inverted
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IPwmPort.cs#L48)
```csharp title="Declaration"
bool Inverted { get; set; }
```
### State
Is running
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IPwmPort.cs#L53)
```csharp title="Declaration"
bool State { get; }
```
## Methods
### Start()
Starts the PWM square wave output
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IPwmPort.cs#L18)
```csharp title="Declaration"
void Start()
```
### Stop()
Stops the PWM square wave output
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IPwmPort.cs#L23)
```csharp title="Declaration"
void Stop()
```
