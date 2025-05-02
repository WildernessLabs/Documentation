---
title: Interface IPlatformOS
sidebar_label: IPlatformOS
description: >-
  Provides an abstraction for OS services such as configuration so that Meadow
  can operate on different OS's and platforms.
slug: /docs/api/Meadow/Meadow/IPlatformOS
---
# Interface IPlatformOS
Provides an abstraction for OS services such as configuration so that
Meadow can operate on different OS's and platforms.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Platform OS/IPlatformOS.Storage.cs#L39)
```csharp title="Declaration"
public interface IPlatformOS : IPowerController
```
## Properties
### OSVersion
OS version.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Platform OS/IPlatformOS.Configuration.cs#L189)
```csharp title="Declaration"
string OSVersion { get; }
```
### OSBuildDate
OS build date and time.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Platform OS/IPlatformOS.Configuration.cs#L194)
```csharp title="Declaration"
string OSBuildDate { get; }
```
### RuntimeVersion
.NET Runtime version install on the device.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Platform OS/IPlatformOS.Configuration.cs#L199)
```csharp title="Declaration"
string RuntimeVersion { get; }
```
### RebootOnUnhandledException
Should the system reboot on an exception?
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Platform OS/IPlatformOS.Configuration.cs#L204)
```csharp title="Declaration"
bool RebootOnUnhandledException { get; }
```
### InitializationTimeout
Number of seconds allowed for the system to initialize.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Platform OS/IPlatformOS.Configuration.cs#L209)
```csharp title="Declaration"
uint InitializationTimeout { get; }
```
### AutomaticallyStartNetwork
Should a WiFi connection be made on startup.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Platform OS/IPlatformOS.Configuration.cs#L215)
```csharp title="Declaration"
bool AutomaticallyStartNetwork { get; }
```
### SelectedNetwork
Which network is selected in meadow.config.yaml.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Platform OS/IPlatformOS.Configuration.cs#L220)
```csharp title="Declaration"
IPlatformOS.NetworkConnectionType SelectedNetwork { get; }
```
### SdStorageSupported
Should SD card support be enabled on this platform?
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Platform OS/IPlatformOS.Configuration.cs#L225)
```csharp title="Declaration"
bool SdStorageSupported { get; }
```
### ReservedPins
Names of any pins that should be reserved for OS use.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Platform OS/IPlatformOS.Configuration.cs#L231)
```csharp title="Declaration"
string ReservedPins { get; }
```
### NtpServers
Gets a list of NTP servers used for time synchronization
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Platform OS/IPlatformOS.Configuration.cs#L236)
```csharp title="Declaration"
string[] NtpServers { get; }
```
### LaunchArguments
The command line arguments provided when the Meadow application was launched
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Platform OS/IPlatformOS.cs#L44)
```csharp title="Declaration"
string[]? LaunchArguments { get; }
```
### NtpClient
Gets the OS INtpClient instance
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Platform OS/IPlatformOS.cs#L67)
```csharp title="Declaration"
INtpClient NtpClient { get; }
```
### FileSystem
FileSystemInfo property
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Platform OS/IPlatformOS.Storage.cs#L44)
```csharp title="Declaration"
IPlatformOS.FileSystemInfo FileSystem { get; }
```
## Methods
### GetConfigurationValue&lt;T&gt;(ConfigurationValues)
Get a configuration value, as specified in meadow.config.yaml, from the OS.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Platform OS/IPlatformOS.Configuration.cs#L174)
```csharp title="Declaration"
T GetConfigurationValue<T>(IPlatformOS.ConfigurationValues item) where T : struct
```

##### Returns

`<T>`: Value for the specified item.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.IPlatformOS.ConfigurationValues](../Meadow/IPlatformOS.ConfigurationValues) | *item* | Item to retrieve. |

##### Type Parameters
| Name | Description |
|:--- |:--- |
| `T` | Type of the object being retrieved. |
### SetConfigurationValue&lt;T&gt;(ConfigurationValues, T)
Send a configuration value to the OS.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Platform OS/IPlatformOS.Configuration.cs#L182)
```csharp title="Declaration"
void SetConfigurationValue<T>(IPlatformOS.ConfigurationValues item, T value) where T : struct
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.IPlatformOS.ConfigurationValues](../Meadow/IPlatformOS.ConfigurationValues) | *item* | Item to set. |
| `<T>` | *value* | Value of item. |

##### Type Parameters
| Name | Description |
|:--- |:--- |
| `T` | Type of the object being set. |
### GetPublicKeyInPemFormat()
Retrieves the device's public key in PEM format
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Platform OS/IPlatformOS.Crypto.cs#L9)
```csharp title="Declaration"
string? GetPublicKeyInPemFormat()
```

##### Returns

`System.String`: A public key, including header and footer, or null if none is found### RsaDecrypt(byte[], string)
Performs RSA decryption of a value using the Meadow device certificate.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Platform OS/IPlatformOS.Crypto.cs#L20)
```csharp title="Declaration"
byte[] RsaDecrypt(byte[] encryptedValue, string privateKeyPem)
```

##### Returns

`System.Byte[]`: The decrypted value
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte[]` | *encryptedValue* | The value to decrypt |
| `System.String` | *privateKeyPem* | The private key to use for decryption (in PEM format) |

### AesDecrypt(byte[], byte[], byte[])
Performs AES decryption of a value using the Meadow device certificate.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Platform OS/IPlatformOS.Crypto.cs#L32)
```csharp title="Declaration"
byte[] AesDecrypt(byte[] encryptedValue, byte[] key, byte[] iv)
```

##### Returns

`System.Byte[]`: The decrypted value
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte[]` | *encryptedValue* | The value to decrypt |
| `System.Byte[]` | *key* | The key used for encrypting the buffer |
| `System.Byte[]` | *iv* | The initialization vector to use for decryption |

### Initialize(DeviceCapabilities, string[]?)
Initializes platform-specific OS features
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Platform OS/IPlatformOS.cs#L51)
```csharp title="Declaration"
void Initialize(DeviceCapabilities capabilities, string[]? args)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.DeviceCapabilities](../Meadow/DeviceCapabilities) | *capabilities* |  |
| `System.String[]` | *args* | The command line arguments provided when the Meadow application was launched |

### GetCpuTemperature()
Gets the current CPU temperature
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Platform OS/IPlatformOS.cs#L56)
```csharp title="Declaration"
Temperature GetCpuTemperature()
```

##### Returns

[Meadow.Units.Temperature](../Meadow.Units/Temperature)
### GetPrimaryDiskSpaceInUse()
Gets the amount of storage space in use on the primary storage device
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Platform OS/IPlatformOS.cs#L62)
```csharp title="Declaration"
DigitalStorage GetPrimaryDiskSpaceInUse()
```

##### Returns

[Meadow.Units.DigitalStorage](../Meadow.Units/DigitalStorage)
### GetSerialPortNames()
Gets a list of currently available serial ports
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Platform OS/IPlatformOS.cs#L72)
```csharp title="Declaration"
SerialPortName[] GetSerialPortNames()
```

##### Returns

`Meadow.Hardware.SerialPortName[]`
### GetSerialPortName(string)
Finds a platform serial port name by either friendly or system name
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Platform OS/IPlatformOS.cs#L78)
```csharp title="Declaration"
SerialPortName? GetSerialPortName(string portName)
```

##### Returns

[Meadow.Hardware.SerialPortName](../Meadow.Hardware/SerialPortName)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *portName* |

### SetClock(DateTime)
Sets the platform OS clock
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Platform OS/IPlatformOS.cs#L89)
```csharp title="Declaration"
void SetClock(DateTime dateTime)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.DateTime` | *dateTime* |

### GetProcessorUtilization()
Retrieves the current usage (as a percentage in the range of 0-100) for each processor/core
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Platform OS/IPlatformOS.cs#L94)
```csharp title="Declaration"
int[] GetProcessorUtilization()
```

##### Returns

`System.Int32[]`
### SetServerCertificateValidationMode(ServerCertificateValidationMode)
Sets the server certificate validation mode for SSL/TLS protocols
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Platform OS/IPlatformOS.cs#L103)
```csharp title="Declaration"
void SetServerCertificateValidationMode(ServerCertificateValidationMode authmode)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.ServerCertificateValidationMode](../Meadow/ServerCertificateValidationMode) | *authmode* | The validation mode to be set: None for no validation, Optional for facultative validation,
    Required for mandatory validation |


##### Exceptions

`System.ArgumentException`  
Thrown when an invalid validation mode is provided
`System.Exception`  
Thrown when there is an error setting the validation mode
### GetMemoryAllocationInfo()
Retrieves memory allocation statistics from the OS
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Platform OS/IPlatformOS.cs#L108)
```csharp title="Declaration"
AllocationInfo GetMemoryAllocationInfo()
```

##### Returns

[Meadow.AllocationInfo](../Meadow/AllocationInfo)
