---
title: Namespace Meadow.Foundation
sidebar_label: Meadow.Foundation
---
# Namespace Meadow.Foundation
## Classes
### [ArrayEventArgs](../Meadow.Foundation/ArrayEventArgs)
Custom event args that stores an int and an object
### [ByteCommsSensorBase&lt;UNIT&gt;](../Meadow.Foundation/ByteCommsSensorBase`UNIT`)
ByteCommsSensorBase abstract class
### [Converters](../Meadow.Foundation/Converters)
Provide a mechanism to convert from on type to another .NET type
### [DeviceConfigurationException](../Meadow.Foundation/DeviceConfigurationException)
Exception thrown when a device or peripheral is misconfigured for a requested action, activity or behavior.
### [NumericExtensions](../Meadow.Foundation/NumericExtensions)
A static class that provides numeric helper extension methods
### [ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`)
Provides observable functionality.

Keeps an internal collection of `observers`, and provides methods such
as `NotifyObservers` and `Subscribe`.
### [PollingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/PollingSensorBase`UNIT`)
Base class that represents a sampling sensor to support the observable pattern
### [SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`)
Base class for sensors and other updating classes that want to support
having their updates consumed by observers that can optionally use filters
### [WildernessLabsColors](../Meadow.Foundation/WildernessLabsColors)

## Enums
### [CircuitTerminationType](../Meadow.Foundation/CircuitTerminationType)
Whether the circuit is terminated into the common/ground or a high (3.3V) voltage
source. Used to determine whether to pull the resistor wired to the switch
sensor high or low to close the circuit when the switch is closed.

To disable the resistor, set to Floating.
## Delegates
### [ArrayEventHandler](../Meadow.Foundation/ArrayEventHandler)
Array event handler
