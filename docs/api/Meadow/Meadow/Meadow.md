---
title: Namespace Meadow
sidebar_label: Meadow
slug: /docs/api/Meadow/Meadow
---
# Namespace Meadow
## Classes
### [AnalogCapabilities](../Meadow/AnalogCapabilities)
Provides a description of the Analog I/O capabilities of a platform
### [App&lt;D, P, H&gt;](../Meadow/App`D,%20P,%20H`)
Provides a base implementation for the Meadow App. Use this
class for Meadow applications to get strongly-typed access to the current
device information.
### [App&lt;D&gt;](../Meadow/App`D`)
Provides a base implementation for the Meadow App. Use this
class for Meadow applications to get strongly-typed access to the current
device information.
### [AppBase](../Meadow/AppBase)
Provides a base implementation for the Meadow App. Use this
class for Meadow applications to get strongly-typed access to the current
device information.
### [BufferException](../Meadow/BufferException)
An exception raised by the CircularBuffer
### [CircularBuffer&lt;T&gt;](../Meadow/CircularBuffer`T`)
Represents a fixed-length circular (LIFO) buffer
### [ConfigurableObject](../Meadow/ConfigurableObject)
Represents a configurable object.
### [DeviceCapabilities](../Meadow/DeviceCapabilities)
A set of capabilities of the current Device
### [ExtensionMethods](../Meadow/ExtensionMethods)
ExtensionMethods class
### [FilterableChangeObserver&lt;UNIT&gt;](../Meadow/FilterableChangeObserver`UNIT`)
An `IObserver` that handles change notifications and has an optional
predicate that automatically filters results so only results that match
the predicate will reach the subscriber.
### [HealthReporter](../Meadow/HealthReporter)
Logic responsible for reporting device health metrics to Meadow.Cloud.
### [I2cBusMapping](../Meadow/I2cBusMapping)
Represents a mapping of a specific I2C bus on a controller
### [IPinExtensions](../Meadow/IPinExtensions)
Extension methods for the IPin interface
### [IPlatformOS.FileSystemInfo](../Meadow/IPlatformOS.FileSystemInfo)
Contains Meadow.OS File System information.
### [MeadowCloudSystemErrorInfo](../Meadow/MeadowCloudSystemErrorInfo)
Contains information about a Meadow Cloud system error
### [MeadowOS](../Meadow/MeadowOS)
The entry point of the .NET part of Meadow OS.
### [MeadowOS.FileSystem](../Meadow/MeadowOS.FileSystem)
Contains Meadow.OS File System information.
### [MeadowOS.SystemInformation](../Meadow/MeadowOS.SystemInformation)
A static convenience accessor for retrieving system information
### [MeadowSynchronizationContext](../Meadow/MeadowSynchronizationContext)
A SynchronizationContext for Meadow devices
### [MeadowSystemErrorInfo](../Meadow/MeadowSystemErrorInfo)
Contains information about a Meadow system error
### [MicroJsonSerializer](../Meadow/MicroJsonSerializer)
An implementation of IJsonSerializer that uses MicroJson
### [NativeException](../Meadow/NativeException)
Encapsulates a native hardware exception
### [NetworkAdapterBase](../Meadow/NetworkAdapterBase)
A base class for INetworkAdapter implementations
### [NetworkAdapterCollection](../Meadow/NetworkAdapterCollection)
A collection of INetworkAdapter-derived instances
### [NetworkAuthenticationException](../Meadow/NetworkAuthenticationException)
Represents an exception indicating a network authentication failure.
### [NetworkCapabilities](../Meadow/NetworkCapabilities)
Describes a device's network capabilities
### [NetworkException](../Meadow/NetworkException)
Represents a general network exception.
### [NetworkNotFoundException](../Meadow/NetworkNotFoundException)
Represents an exception indicating that a requested network was not found.
### [NtpClientBase](../Meadow/NtpClientBase)
base Client for Network Time Protocol
### [ObservableDictionary&lt;TKey, TValue&gt;](../Meadow/ObservableDictionary`TKey,%20TValue`)
Provides a dictionary for use with data binding.
### [PinDefinitionBase](../Meadow/PinDefinitionBase)
Provides a base implementation for device pin lists.
### [PlatformOsMessage](../Meadow/PlatformOsMessage)
A message passed from the Meadow host OS to the Meadow stack during startup
### [PortInUseException](../Meadow/PortInUseException)
Thrown when a port is attempted to be created on a pin or peripheral 
that is already in use.
### [ReliabilityServiceBase](../Meadow/ReliabilityServiceBase)
Provides base implementation of common ReliabilityService functionality
### [Resolver](../Meadow/Resolver)
Static container for common and user-supplied application services
### [RuntimeInformation](../Meadow/RuntimeInformation)
A convenience class to retrieve information about the current runtime
### [SerialPortNameExtensions](../Meadow/SerialPortNameExtensions)
Extension methods for the SerialPortName class
### [ServiceCollection](../Meadow/ServiceCollection)
Represents a collection of services and provides methods to manage and retrieve services from the collection.
### [StorageCapabilities](../Meadow/StorageCapabilities)
Represents the storage capabilities of a device.
### [StorageInformation](../Meadow/StorageInformation)
Information about available storage devices
### [TaskExtensions](../Meadow/TaskExtensions)
Extensions for Tasks
### [UnsupportedPlatformException](../Meadow/UnsupportedPlatformException)
Represents an exception that is thrown when an unsupported platform is encountered.
### [WakeUpOptions](../Meadow/WakeUpOptions)
Options for waking a device passed to Sleep calls
## Structs
### [AllocationInfo](../Meadow/AllocationInfo)
A collection of device memory-allocation statistics
### [ChangeResult&lt;UNIT&gt;](../Meadow/ChangeResult`UNIT`)
Represents a change result from an event. Contains a `New` and an optional
`Old` value which will likely be null on the first result within an event
series.
### [Color](../Meadow/Color)
32bit color struct
## Interfaces
### [IApp](../Meadow/IApp)
Contract for Meadow applications. Provides a way for the Meadow OS to
communicate with Meadow applications when system events are happening.
### [IAppSettings](../Meadow/IAppSettings)
Represents the IApp settings
### [IBatteryBackedPeripheral](../Meadow/IBatteryBackedPeripheral)
Provides an abstraction for peripherals that have a battery and that can read information about that battery
### [IChangeResult&lt;UNIT&gt;](../Meadow/IChangeResult`UNIT`)
Contract for change notifications.
### [IConnector](../Meadow/IConnector)
An interface for a named collection of pins
### [IExternalStorage](../Meadow/IExternalStorage)
Contract for ejectable external storage devices.
### [IIoDevice](../Meadow/IIoDevice)
Interface representing an I/O device that combines functionality
for digital input/output, SPI, and I2C controllers.
### [IJsonSerializer](../Meadow/IJsonSerializer)
Provides an abstraction for a serializer tha can convert between objects and JSON strings
### [ILifecycleSettings](../Meadow/ILifecycleSettings)
Represents the interface for lifecycle settings.
### [ILoggingSettings](../Meadow/ILoggingSettings)
Represents the interface for logging settings.
### [ILogLevelSettings](../Meadow/ILogLevelSettings)
Represents the interface for log level settings.
### [IMeadowAppEmbeddedHardware](../Meadow/IMeadowAppEmbeddedHardware)
An interface for embedded hardware running the Meadow software stack
### [IMeadowAppEmbeddedHardwareProvider&lt;H&gt;](../Meadow/IMeadowAppEmbeddedHardwareProvider`H`)
An interface for a factory class responsible for generating IMeadowAppEmbeddedHardware instances at run time
### [IMeadowDesktopDevice](../Meadow/IMeadowDesktopDevice)
Contract for desktop-specific Meadow devices
### [IMeadowDevice](../Meadow/IMeadowDevice)
Contract for Meadow boards.
### [INtpClient](../Meadow/INtpClient)
Interface for a Network Time Protocol (NTP) client object.
### [IPlatformOS](../Meadow/IPlatformOS)
Provides an abstraction for OS services such as configuration so that
Meadow can operate on different OS's and platforms.
### [IPowerControllablePeripheral](../Meadow/IPowerControllablePeripheral)
Provides an abstraction for peripherals that can be turned on and off
### [IPowerController](../Meadow/IPowerController)
Interface for controlling power-related functionality of the device.
### [IReliabilityService](../Meadow/IReliabilityService)
An interface that encapsulates all of the data related to platform reliability
### [ISleepAwarePeripheral](../Meadow/ISleepAwarePeripheral)
Provides an abstraction for peripherals that can be notified of sleep state changes
### [IStorageInformation](../Meadow/IStorageInformation)
Information about available storage devices
## Enums
### [ByteOrder](../Meadow/ByteOrder)
Describes the byte ordering for multi-byte words.
### [CloudConnectionState](../Meadow/CloudConnectionState)
Enumeration of the state of the device's connection to Meadow.Cloud
### [ExternalStorageState](../Meadow/ExternalStorageState)
State values for external storage devices
### [IPlatformOS.ConfigurationValues](../Meadow/IPlatformOS.ConfigurationValues)
Enumeration indicating the possible configuration items that can be read / written.
### [IPlatformOS.NetworkConnectionType](../Meadow/IPlatformOS.NetworkConnectionType)
Enumeration representing the available network connection types.
### [MeadowSystemErrorInfo.SystemErrorNumber](../Meadow/MeadowSystemErrorInfo.SystemErrorNumber)
Meadow system error numbers
### [MessagePriority](../Meadow/MessagePriority)
Prioritization of Host OS messages
### [ServerCertificateValidationMode](../Meadow/ServerCertificateValidationMode)
Enum representing different server certificate validation modes for TLS protocols.
### [UpdateState](../Meadow/UpdateState)
Enumeration of the state of the IUpdateService
## Delegates
### [ExternalStorageEventHandler](../Meadow/ExternalStorageEventHandler)
Delegate containing information about an external storage event.
### [MeadowSystemErrorHandler](../Meadow/MeadowSystemErrorHandler)
Represents a handler function to process captured Meadow system errors
### [PowerTransitionHandler](../Meadow/PowerTransitionHandler)
Delegate representing a power transition event handler.
### [TimeChangedEventHandler](../Meadow/TimeChangedEventHandler)
Delegate representing a time changed event handler.
