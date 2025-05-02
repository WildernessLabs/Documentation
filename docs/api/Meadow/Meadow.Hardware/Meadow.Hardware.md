---
title: Namespace Meadow.Hardware
sidebar_label: Meadow.Hardware
slug: /docs/api/Meadow/Meadow.Hardware
---
# Namespace Meadow.Hardware
## Classes
### [ActiveErrorFrame](../Meadow.Hardware/ActiveErrorFrame)
Represents an active error frame for CAN communication.
### [AnalogChannelInfo](../Meadow.Hardware/AnalogChannelInfo)
Information about an analog channel
### [AnalogInputPort](../Meadow.Hardware/AnalogInputPort)
Represents a port that is capable of reading analog input.
### [AnalogInputPortBase](../Meadow.Hardware/AnalogInputPortBase)
Provides a base implementation for much of the common tasks of 
implementing IAnalogInputPort
### [AnalogPortBase](../Meadow.Hardware/AnalogPortBase)
Provides a base implementation for much of the common tasks of 
implementing IAnalogPort
### [BatteryInfo](../Meadow.Hardware/BatteryInfo)
Represents battery information.
### [BiDirectionalInterruptPort](../Meadow.Hardware/BiDirectionalInterruptPort)
Represents a port that is capable of reading and writing digital input
and output.
### [BiDirectionalInterruptPortBase](../Meadow.Hardware/BiDirectionalInterruptPortBase)
A base class for IBiDirectionalInterruptPort implementations
### [BiDirectionalPort](../Meadow.Hardware/BiDirectionalPort)
Represents a bi-directional port.
### [BiDirectionalPortBase](../Meadow.Hardware/BiDirectionalPortBase)
Provides a base implementation for BiDirectional Ports; digital ports 
that can be both input and output.
### [CanAcceptanceFilter](../Meadow.Hardware/CanAcceptanceFilter)
Represents a base class for CAN acceptance filters.
### [CanAcceptanceFilterCollection](../Meadow.Hardware/CanAcceptanceFilterCollection)
Represents a collection of CAN acceptance filters.
### [CanChannelInfo](../Meadow.Hardware/CanChannelInfo)
Information about a Controller Area Network (CanChannelInfo) channel
### [CanErrorInfo](../Meadow.Hardware/CanErrorInfo)
Represents CAN bus error information
### [CanExtendedExactAcceptanceFilter](../Meadow.Hardware/CanExtendedExactAcceptanceFilter)
Represents a CAN extended exact acceptance filter.
### [CanExtendedRangeAcceptanceFilter](../Meadow.Hardware/CanExtendedRangeAcceptanceFilter)
Represents a CAN extended range acceptance filter.
### [CanStandardExactAcceptanceFilter](../Meadow.Hardware/CanStandardExactAcceptanceFilter)
Represents a CAN standard exact acceptance filter.
### [CanStandardRangeAcceptanceFilter](../Meadow.Hardware/CanStandardRangeAcceptanceFilter)
Represents a CAN standard range acceptance filter.
### [CellNetworkConnectionEventArgs](../Meadow.Hardware/CellNetworkConnectionEventArgs)
Data relating to a Cell connection.
### [ChannelConfig](../Meadow.Hardware/ChannelConfig)
Represents a configuration for a hardware channel.
### [ChannelInfoBase](../Meadow.Hardware/ChannelInfoBase)
Provides base functionality for channel types.
### [Connector&lt;TPinDefinition&gt;](../Meadow.Hardware/Connector`TPinDefinition`)
Represents a Collection of IPins
### [ConnectorCollection](../Meadow.Hardware/ConnectorCollection)
Represents a Collection of IConnectors
### [Counter](../Meadow.Hardware/Counter)
Represents a class that counts edges on an interrupt-capable input port
### [DataFrame](../Meadow.Hardware/DataFrame)
Represents an abstract data frame for CAN communication, inheriting from Frame.
### [DigitalChannelInfo](../Meadow.Hardware/DigitalChannelInfo)
Information about a digital channel's capabilities
### [DigitalChannelInfoBase](../Meadow.Hardware/DigitalChannelInfoBase)
A base implementation of the IDigitalChannelInfo interface.
### [DigitalInputPort](../Meadow.Hardware/DigitalInputPort)
Represents a port that is capable of reading digital input.
### [DigitalInputPortBase](../Meadow.Hardware/DigitalInputPortBase)
Provides a base implementation for digital input ports.
### [DigitalInterruptPort](../Meadow.Hardware/DigitalInterruptPort)
Represents a port that is capable of reading digital input.
### [DigitalInterruptPortBase](../Meadow.Hardware/DigitalInterruptPortBase)
A base class for IDigitalInterruptPort implementations
### [DigitalOutputPort](../Meadow.Hardware/DigitalOutputPort)
Represents a port that is capable of writing analog output.
### [DigitalOutputPortBase](../Meadow.Hardware/DigitalOutputPortBase)
Provides a base implementation for digital output ports.
### [DigitalPortBase](../Meadow.Hardware/DigitalPortBase)
DigitalPortBase provides a base implementation for much of the 
common tasks of classes implementing IDigitalPort.
### [EthernetNetworkConnectionEventArgs](../Meadow.Hardware/EthernetNetworkConnectionEventArgs)
Data relating to a Ethernet connection.
### [ExtendedDataFrame](../Meadow.Hardware/ExtendedDataFrame)
Represents an extended data frame for CAN communication.
### [ExtendedRtrFrame](../Meadow.Hardware/ExtendedRtrFrame)
Represents an extended remote transfer request (RTR) frame for CAN communication.
### [Frame](../Meadow.Hardware/Frame)
Represents an abstract base class for CAN (Controller Area Network) frames.
### [GroveDigitalConnector](../Meadow.Hardware/GroveDigitalConnector)
Represents a connector for Seeed Studio Grove for digital devices. See [https://wiki.seeedstudio.com/Grove_System/#digital](https://wiki.seeedstudio.com/Grove_System/#digital)
### [GroveDigitalConnector.GroveDigitalPinDefinitions](../Meadow.Hardware/GroveDigitalConnector.GroveDigitalPinDefinitions)
Represents the pins definitions for the Grove Digital connector
### [GroveDigitalConnector.PinNames](../Meadow.Hardware/GroveDigitalConnector.PinNames)
The set of digital Grove connector pins
### [I2cChannelInfo](../Meadow.Hardware/I2cChannelInfo)
Represents information about an I2C channel
### [I2cConnector](../Meadow.Hardware/I2cConnector)
Represents a connector for 2 wire I2C devices
### [I2cConnector.I2cPinDefinitions](../Meadow.Hardware/I2cConnector.I2cPinDefinitions)
Represents the pins definitions for the 2 wire I2C connector
### [I2cConnector.PinNames](../Meadow.Hardware/I2cConnector.PinNames)
The set of I2C pin names
### [InterruptGroupInUseException](../Meadow.Hardware/InterruptGroupInUseException)
Exception thrown when attempting to use an interrupt group that is already in use.
### [MikroBusConnector](../Meadow.Hardware/MikroBusConnector)
Represents a connector for MikroBus devices
### [MikroBusConnector.MikroBusPinDefinitions](../Meadow.Hardware/MikroBusConnector.MikroBusPinDefinitions)
Represents the pins definitions for the MikroBus connector
### [MikroBusConnector.PinNames](../Meadow.Hardware/MikroBusConnector.PinNames)
The set of MikroBus pin names
### [NamedPinGroup](../Meadow.Hardware/NamedPinGroup)
Represents a group of named pins.
### [NetworkConnectionEventArgs](../Meadow.Hardware/NetworkConnectionEventArgs)
Arguments passed in a NetworkConnection event
### [NetworkDisconnectionEventArgs](../Meadow.Hardware/NetworkDisconnectionEventArgs)
Data relating to a WiFi disconnect event.
### [NetworkDisconnectReasonExtensions](../Meadow.Hardware/NetworkDisconnectReasonExtensions)
Extension methods for NetworkDisconnectReason
### [NetworkErrorEventArgs](../Meadow.Hardware/NetworkErrorEventArgs)
Data relating to a WiFi error event.
### [OverloadFrame](../Meadow.Hardware/OverloadFrame)
Represents an overload frame for CAN communication.
### [Pin](../Meadow.Hardware/Pin)
Provides base implementation for IO pins.
### [PinMapping](../Meadow.Hardware/PinMapping)
Represents a mapping of a connector pin names to a host IPins
### [PinMapping.PinAlias](../Meadow.Hardware/PinMapping.PinAlias)
Represent an alias for a single connector pin
### [PortBase&lt;C&gt;](../Meadow.Hardware/PortBase`C`)
Represents a base class for hardware ports.
### [PwmChannelInfo](../Meadow.Hardware/PwmChannelInfo)
Information about a Pulse Width Modulation (PWM) channel
### [PwmPortBase](../Meadow.Hardware/PwmPortBase)
Represents a base class for PWM ports.
### [RemoteTransferRequestFrame](../Meadow.Hardware/RemoteTransferRequestFrame)
Represents a remote transfer request frame for CAN communication.
### [RheostatExtensions](../Meadow.Hardware/RheostatExtensions)
Extensions for the IRheostat
### [SensorCollection](../Meadow.Hardware/SensorCollection)
Represents a Collection of ISensors
### [SerialDataReceivedEventArgs](../Meadow.Hardware/SerialDataReceivedEventArgs)
Provides data for serial data received events.
### [SerialErrorReceivedEventArgs](../Meadow.Hardware/SerialErrorReceivedEventArgs)
Provides data from serial communication errors.
### [SerialMessageData](../Meadow.Hardware/SerialMessageData)
Represents a `SerialMessagePort` message consisting of a `byte[]` of the
actual message data.
### [SerialMessagePort](../Meadow.Hardware/SerialMessagePort)
Represents a port that is capable of serial (UART) communications.

Has a streamlined API over class SerialPort that deals in messages.

This is a modern, asynchronous take on serial communications that is
thread-safe and asynchronous in nature. This is the recommended way to
use serial on Meadow for nearly all use cases.
### [SerialMessageProcessor](../Meadow.Hardware/SerialMessageProcessor)
A serial message processor class to accept data, parse and raise notifications when complete messages are received
### [SerialPortBase](../Meadow.Hardware/SerialPortBase)
Represents a port that is capable of serial (UART) communications.
Preserved for legacy API compatibility. For a more modern approach, use
`SerialMessagePort`.
### [SerialPortName](../Meadow.Hardware/SerialPortName)
Represents the name of a serial port, which consists of both a "friendly" and a system name
### [SoftDigitalSignalAnalyzer](../Meadow.Hardware/SoftDigitalSignalAnalyzer)
Implements frequency and duty cycle analysis of digital signals using software-based timing measurements.
### [SoftPwmPort](../Meadow.Hardware/SoftPwmPort)
A Pulse Width Modulation Generator that can
generates waveforms in software. The maximum
Frequency is about 100 Hz.
### [SpiBusMapping](../Meadow.Hardware/SpiBusMapping)
Represents a mapping of a specific SPI bus on a controller
### [SpiChannelInfo](../Meadow.Hardware/SpiChannelInfo)
Represents SPI channel information.
### [SpiClockConfiguration](../Meadow.Hardware/SpiClockConfiguration)
Encapsulates properties of a SPI Bus Clock
### [StandardDataFrame](../Meadow.Hardware/StandardDataFrame)
Represents a standard data frame for CAN communication.
### [StandardRtrFrame](../Meadow.Hardware/StandardRtrFrame)
Represents a standard remote transfer request frame (RTR) for CAN communication.
### [UartChannelInfo](../Meadow.Hardware/UartChannelInfo)
Represents information about a UART channel.
### [UartConnector](../Meadow.Hardware/UartConnector)
Represents a connector for Uart (serial) communication
### [UartConnector.PinNames](../Meadow.Hardware/UartConnector.PinNames)
The set of UART (serial) connector pins
### [UartConnector.UartPinDefinitions](../Meadow.Hardware/UartConnector.UartPinDefinitions)
Represents the pins definitions for the Uart (serial) connector
### [WirelessNetworkConnectionEventArgs](../Meadow.Hardware/WirelessNetworkConnectionEventArgs)
Data relating to a WiFi connection.
## Structs
### [CalibrationPoint](../Meadow.Hardware/CalibrationPoint)
Represents a calibration point with equivalent raw and screen coordinates
### [DigitalPortResult](../Meadow.Hardware/DigitalPortResult)
Represents a change result from a digital port event. Contains a `New`
and an optional `Old` value which will be `null` on the first result
within an event series.
### [DigitalState](../Meadow.Hardware/DigitalState)
Represents a snapshot of the state of a digital port at a given time.
### [TouchPoint](../Meadow.Hardware/TouchPoint)
Represents data for touchscreen events
## Interfaces
### [I32PinFeatherBoardPinout](../Meadow.Hardware/I32PinFeatherBoardPinout)
Represents the pinout definition for the 32-pin Feather board.
### [IAnalogChannelInfo](../Meadow.Hardware/IAnalogChannelInfo)
Contract for analog communication channels.
### [IAnalogInputArray](../Meadow.Hardware/IAnalogInputArray)
Contract for an array of analog input values
### [IAnalogInputArrayController](../Meadow.Hardware/IAnalogInputArrayController)
Controller for creating arrays of analog inputs from multiple pins.
### [IAnalogInputController](../Meadow.Hardware/IAnalogInputController)
Controller for analog input pins that enables creating individual analog input ports.
### [IAnalogInputPort](../Meadow.Hardware/IAnalogInputPort)
Contract for ports that implement an analog input channel.
### [IAnalogOutputController](../Meadow.Hardware/IAnalogOutputController)
Contract for IO devices that are capable of creating an `IAnalogOutputPort`
instances.
### [IAnalogOutputPort](../Meadow.Hardware/IAnalogOutputPort)
Contract for ports that implement an analog output channel.
### [IAnalogPort](../Meadow.Hardware/IAnalogPort)
Base contract for ports that implement an analog channel.
### [IBiDirectionalController](../Meadow.Hardware/IBiDirectionalController)
Contract for devices that expose `IBiDirectionPort(s)`.
### [IBiDirectionalInterruptPort](../Meadow.Hardware/IBiDirectionalInterruptPort)
Contract for BiDirectional Ports; digital ports that can be both input and output.
### [IBiDirectionalPort](../Meadow.Hardware/IBiDirectionalPort)
Contract for ports that are capable of reading inputs and writing digital outputs.
### [IByteCommunications](../Meadow.Hardware/IByteCommunications)
Define a contract for general peripheral communications classes.
### [ICalibratableTouchscreen](../Meadow.Hardware/ICalibratableTouchscreen)
Represents a touch screen device that can be calibrated
### [ICanBus](../Meadow.Hardware/ICanBus)
Represents a Controller Area Network (CAN) bus interface.
### [ICanChannelInfo](../Meadow.Hardware/ICanChannelInfo)
Represents the information specific to a CAN (Controller Area Network) channel.
### [ICanController](../Meadow.Hardware/ICanController)
Contract for devices that expose `ICanBus(es)`.
### [ICanFrame](../Meadow.Hardware/ICanFrame)
Represents a CAN (Controller Area Network) frame.
### [ICellNetworkAdapter](../Meadow.Hardware/ICellNetworkAdapter)
Provides an abstraction for a cellular INetworkAdapter
### [IChannelInfo](../Meadow.Hardware/IChannelInfo)
Minimum contract to describe a GPIO channel type or protocol on a 
Meadow device such as Analog, Digital, or I2C.
### [IChannelInfoBase](../Meadow.Hardware/IChannelInfoBase)
Represents the base interface for channel information.
### [IColorable](../Meadow.Hardware/IColorable)
Represents an item that can be colored
### [ICommunicationChannelInfo](../Meadow.Hardware/ICommunicationChannelInfo)
Represents the communication channel information.
### [ICounter](../Meadow.Hardware/ICounter)
Abstraction for Counter devices
### [ICounterController](../Meadow.Hardware/ICounterController)
Contract for devices capable of creating `ICounter` instances.
### [IDeviceChannelManager](../Meadow.Hardware/IDeviceChannelManager)
Abstraction for managing device channels
### [IDeviceInformation](../Meadow.Hardware/IDeviceInformation)
Interface for accessing device information.
### [IDigitalChannelInfo](../Meadow.Hardware/IDigitalChannelInfo)
Contract for a GPIO channel that supports digital communications.
### [IDigitalInputController](../Meadow.Hardware/IDigitalInputController)
Contract for IO devices that are capable of creating an `IDigitalInputPort`
instances.
### [IDigitalInputOutputController](../Meadow.Hardware/IDigitalInputOutputController)
Contract for devices capable of both digital input and output operations.
### [IDigitalInputPort](../Meadow.Hardware/IDigitalInputPort)
Contract for ports that are capable of reading digital inputs.
### [IDigitalInterruptController](../Meadow.Hardware/IDigitalInterruptController)
Contract for IO devices that are capable of creating `IDigitalInterruptPort`
instances.
### [IDigitalInterruptPort](../Meadow.Hardware/IDigitalInterruptPort)
Contract for ports that are capable of reading digital inputs and raising
events when state changes.
### [IDigitalOutputController](../Meadow.Hardware/IDigitalOutputController)
Contract for IO devices that are capable of creating `IDigitalOuputPort`
instances.
### [IDigitalOutputPort](../Meadow.Hardware/IDigitalOutputPort)
Contract for ports that are capable of writing digital outputs.
### [IDigitalPort](../Meadow.Hardware/IDigitalPort)
Contract for a digital port.
### [IDigitalSignalAnalyzer](../Meadow.Hardware/IDigitalSignalAnalyzer)
Provides analysis capabilities for digital signals, measuring frequency and duty cycle characteristics.
### [IEspCoprocessorPinout](../Meadow.Hardware/IEspCoprocessorPinout)
Represents the pinout for an ESP coprocessor.
### [II2cBus](../Meadow.Hardware/II2cBus)
Represents an I2C bus.
### [II2cChannelInfo](../Meadow.Hardware/II2cChannelInfo)
Represents the I2C channel information.
### [II2cCommunications](../Meadow.Hardware/II2cCommunications)
I2C communications abstraction
### [II2cController](../Meadow.Hardware/II2cController)
Contract for devices that expose an `II2cBus`.
### [II2cPeripheral](../Meadow.Hardware/II2cPeripheral)
Interface for a device/peripheral that communicates over I2C
### [IIOController&lt;T&gt;](../Meadow.Hardware/IIOController`T`)
Contract for Meadow devices.
### [IMeadowIOController](../Meadow.Hardware/IMeadowIOController)
Defines the GPIO Manager for interacting with digital and analog pins.
### [INamedPinGroups](../Meadow.Hardware/INamedPinGroups)
Represents an interface for accessing named pin groups.
### [INetworkAdapter](../Meadow.Hardware/INetworkAdapter)
Base interface for a network adapter
### [INetworkAdapterCollection](../Meadow.Hardware/INetworkAdapterCollection)
Provides an abstraction for a collection of INetworkAdapters
### [INetworkAdapterController](../Meadow.Hardware/INetworkAdapterController)
A contract for Meadow devices that support network interfaces
### [IObservableAnalogInputController](../Meadow.Hardware/IObservableAnalogInputController)
Contract for devices that expose `IAnalogInputPort(s)`.
### [IObservableAnalogInputPort](../Meadow.Hardware/IObservableAnalogInputPort)
Contract for ports that implement an observable, sampling analog input channel.
### [IPin](../Meadow.Hardware/IPin)
Contract for a pin
### [IPinController](../Meadow.Hardware/IPinController)
Contract for a container/parent of an IPin
### [IPinDefinitions](../Meadow.Hardware/IPinDefinitions)
Contract for device pin lists.
### [IPort&lt;C&gt;](../Meadow.Hardware/IPort`C`)
Represents a port that is associated with a specific channel and pin.
### [IPotentiometer](../Meadow.Hardware/IPotentiometer)
Represents an adjustable resistor (potentiometer) that extends IRheostat.
### [IPwmChannelInfo](../Meadow.Hardware/IPwmChannelInfo)
Describes the capabilities of a Pulse-Width-Modulation channel
### [IPwmOutputController](../Meadow.Hardware/IPwmOutputController)
Contract for devices that expose `IPwmPort(s)`.
### [IPwmPort](../Meadow.Hardware/IPwmPort)
Contract for a Port that has is capable of
### [IRealTimeClock](../Meadow.Hardware/IRealTimeClock)
Abstraction for Real-time clock devices
### [IRheostat](../Meadow.Hardware/IRheostat)
Represents an adjustable resistor (rheostat).
### [ISerialCommunicationChannelInfo](../Meadow.Hardware/ISerialCommunicationChannelInfo)
Represents the communication channel information for a serial communication channel.
### [ISerialController](../Meadow.Hardware/ISerialController)
Contract for devices that provide serial communication capabilities.
### [ISerialMessageController](../Meadow.Hardware/ISerialMessageController)
Contract for devices that expose `ISerialMessagePort(s)`.
### [ISerialMessagePort](../Meadow.Hardware/ISerialMessagePort)
Contract for a serial port that provides predictable messaging.
### [ISerialPort](../Meadow.Hardware/ISerialPort)
Represents a port that is capable of serial (UART) communications.
### [ISpiBus](../Meadow.Hardware/ISpiBus)
Represents an SPI bus.
### [ISpiChannelInfo](../Meadow.Hardware/ISpiChannelInfo)
Represents the communication channel information for an SPI channel.
### [ISpiCommunications](../Meadow.Hardware/ISpiCommunications)
SPI communications abstraction
### [ISpiController](../Meadow.Hardware/ISpiController)
Contract for devices that expose `ISpiBus(es)`.
### [ISpiPeripheral](../Meadow.Hardware/ISpiPeripheral)
Interface for a device/peripheral that communicates over SPI
### [ITouchScreen](../Meadow.Hardware/ITouchScreen)
Represents a touch screen device
### [IUartChannelInfo](../Meadow.Hardware/IUartChannelInfo)
Represents the communication channel information for a UART channel.
### [IWatchdogController](../Meadow.Hardware/IWatchdogController)
Contract for hardware that has a watchdog. Watchdogs are used to reset
a device in the event that the application code on it has stopped responding.
### [IWiFiNetworkAdapter](../Meadow.Hardware/IWiFiNetworkAdapter)
Provides an abstraction for a wifi-enabled INetworkAdapter
### [IWiredNetworkAdapter](../Meadow.Hardware/IWiredNetworkAdapter)
Provides an abstraction for a wired INetworkAdapter
### [IWirelessNetworkAdapter](../Meadow.Hardware/IWirelessNetworkAdapter)
Provides an abstraction for a wireless INetworkAdapter
## Enums
### [AntennaType](../Meadow.Hardware/AntennaType)
The types of antenna that can be selected.
### [CanBitrate](../Meadow.Hardware/CanBitrate)
Specifies the bitrate for CAN communication.
### [ChannelConfigurationType](../Meadow.Hardware/ChannelConfigurationType)
TODO: revisit this structure. Ultimately, it would be nice to know, specifically
what a channel is configured for, i.e. DigitalInput, I2C TX, UART RX, etc.
### [ChannelState](../Meadow.Hardware/ChannelState)
Represents a channel state
### [ChipSelectMode](../Meadow.Hardware/ChipSelectMode)
Represents the chip select mode for a peripheral device.
### [DuplexType](../Meadow.Hardware/DuplexType)
Describes how read and write buffers are sent.

Half-duplex is the most common and means that the write data is
clocked (sent) out, and then the read data is clocked in only after
write has finished. Protocols that only have a single data line
(such as I2C) can only support half-duplex.

Full-duplex is supported only on protocols that use two or more
data lines (such as SPI) and means that data is clocked in at the
same time as it is clocked out. Full-duplex peripherals are much
less common than half-duplex.
### [FlowControlType](../Meadow.Hardware/FlowControlType)
Describes the type of serial flow control. See 
https://en.wikipedia.org/wiki/Flow_control_(data)
### [I2cBusSpeed](../Meadow.Hardware/I2cBusSpeed)
Standard I2C Bus speeds
### [I2cChannelFunctionType](../Meadow.Hardware/I2cChannelFunctionType)
Represents the type of I2C channel function.
### [InterruptMode](../Meadow.Hardware/InterruptMode)
Describes if and when an interrupt is triggered in response to signal
changes.
### [MeadowPlatform](../Meadow.Hardware/MeadowPlatform)
Platform (hardware, etc) Meadow is currently executing on
### [NetworkDisconnectReason](../Meadow.Hardware/NetworkDisconnectReason)
Reasons for network interface disconnection
### [OutputType](../Meadow.Hardware/OutputType)
Describes the output configuration for a GPIO.
### [Parity](../Meadow.Hardware/Parity)
Specifies the parity bit for a SerialPort object.
### [PortDirectionType](../Meadow.Hardware/PortDirectionType)
Describes the direction of a port.
### [ResetReason](../Meadow.Hardware/ResetReason)
Reasons a platform might have been reset
### [ResistorMode](../Meadow.Hardware/ResistorMode)
Describes the internal/external IO resistor states.
### [SerialDataType](../Meadow.Hardware/SerialDataType)
Describes the type of serial data received, either characters or an end 
of file notification.
### [SerialDirectionType](../Meadow.Hardware/SerialDirectionType)
Describes the direction of a serial data line
### [SerialErrorType](../Meadow.Hardware/SerialErrorType)
Describes the type of error encountered during serial communication.
### [SerialMessageProcessor.SerialMessageMode](../Meadow.Hardware/SerialMessageProcessor.SerialMessageMode)
Whether we're defining messages by prefix + length, or suffix.
### [SignalType](../Meadow.Hardware/SignalType)
Describes the type of electrical signal used.
### [SpiClockConfiguration.ClockPhase](../Meadow.Hardware/SpiClockConfiguration.ClockPhase)
SPI Bus Clock Phase (CPHA)
### [SpiClockConfiguration.ClockPolarity](../Meadow.Hardware/SpiClockConfiguration.ClockPolarity)
SPI Bus Clock Polarity (CPOL)
### [SpiClockConfiguration.Mode](../Meadow.Hardware/SpiClockConfiguration.Mode)
Mode (combination of Phase and Polarity) of a SPI bus clock
### [SpiLineType](../Meadow.Hardware/SpiLineType)
Description of a SPI line function
### [StopBits](../Meadow.Hardware/StopBits)
Specifies the number of stop bits used on the SerialPort object.
### [TerminationType](../Meadow.Hardware/TerminationType)
Whether the circuit is terminated into the common/ground or a high (3.3V) voltage
source. Used to determine whether to pull the resistor wired to the switch
sensor high or low to close the circuit when the switch is closed.

To disable the resistor, set to Floating.
### [WakeSource](../Meadow.Hardware/WakeSource)
The source/reason for a device wake event
## Delegates
### [InterruptHandler](../Meadow.Hardware/InterruptHandler)
Delegate for handling interrupts on a pin.
### [NetworkConnectionHandler](../Meadow.Hardware/NetworkConnectionHandler)
Delegate containing information about a network connection event
### [NetworkDisconnectionHandler](../Meadow.Hardware/NetworkDisconnectionHandler)
Delegate containing information about a network disconnection event
### [NetworkErrorHandler](../Meadow.Hardware/NetworkErrorHandler)
Delegate containing information about a network error event.
### [NetworkStateHandler](../Meadow.Hardware/NetworkStateHandler)
Delegate containing information about a change in network state event
### [SerialDataReceivedEventHandler](../Meadow.Hardware/SerialDataReceivedEventHandler)
Delegate for receiving data from a SerialPort
### [TouchEventHandler](../Meadow.Hardware/TouchEventHandler)
An event delegate for touchscreen events
