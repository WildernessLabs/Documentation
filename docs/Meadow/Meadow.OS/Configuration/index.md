---
layout: Meadow
title: Configuration
subtitle: Controlling settings at build-time for device and app information.
---

Meadow has a robust configuration framework that allows you to adjust settings at build-time and deploy them with an app.

## Sample App

For an example of configuration in use, see the [Config Files sample App](https://github.com/WildernessLabs/Meadow.Core.Samples/tree/develop/Source/Meadow.Core.Samples/OS/Config_Files) in the `Meadow.Core.Samples` repo.

## OS/Device Configuration and Application Configuration

Meadow.OS support the following configuration sets:
 
 * **OS & Device Configuration** - Specified in the `meadow.config.yaml` file. Includes general board and system configuration settings.
 * **WiFi Network Credentials** - Specified in the `wifi.config.yaml`. Specifies WiFi access point and password configuration.
 * **Application Configuration** - Specified in `app.config.yaml`. This functionality is coming soon.

These files are optional and the default values (shown below) will be used if the particular file is missing from the file system.

## Must Set `Copy to Output Directory` Build Action

In order to make sure these files are deployed to the device, they must be set to `Copy to Output Directory` in the project.

## Meadow.OS and Device Configuration (`meadow.config.yaml`)

Includes OS and device level settings such as device name, default network behavior, and network settings.

Consider the following sample config file:

```yaml
#===============================================================================
# main device config

Device:
    # Name of the device on the network.
    Name: MeadowF7V2_ConfigSample

#===============================================================================
# Control how the ESP coprocessor will start and operate.

Coprocessor:

    # Should the ESP32 automatically attempt to connect to an access point at startup?
    # If set to true, wifi.yaml credentials must be stored in the device.

    AutomaticallyStartNetwork: true

    # Should the ESP32 automatically reconnect to the configured access point?
    AutomaticallyReconnect: true

    # Maximum number of retry attempts for connections etc. before an error code is returned.
    MaximumRetryCount: 7

# Network configuration.
Network:

    # Automatically attempt to get the time at startup?
    GetNetworkTimeAtStartup: true

    # Time synchronization period in seconds.
    NtpRefreshPeriod: 600

    # Name of the NTP servers.
    NtpServers:
        - 0.pool.ntp.org
        - 1.pool.ntp.org
        - 2.pool.ntp.org
        - 3.pool.ntp.org

    # IP addresses of the DNS servers.
    DnsServers:
        - 1.1.1.1
        - 8.8.8.8
```

The `Device` section contains configurable properties for the system in general.  The `Coprocessor` section of the file determines how the coprocessor interacts with the STM32 and the network.

### Device `Name`

This is the name that will show on the network.

Default value: MeadowF7

<!-- think we should cut this.

### SpiSpeed

This parameter is not normally used as the default settings combine high speed with reliability.  It can be used for boards working in electrically noisy environments to reduce the possibility of communication problems.

The value is the the frequency of the SPI communication in Hz.

Default value: 8000000
--->

### `AutomaticallyStartNetwork`

This parameter determines if the system will automatically attempt to connect to an access point as the board starts.  This requires a default access point to be configured (see the description of the `wifi.yaml` file below).

Valid values are:

* `false` - Do not connect (default)
* `true` - Automatically connect if a default access point has been specified

### `AutomaticallyReconnect`

This parameter determines if the system should automatically attempt to reconnect to an access point if there is a communication issue and the connection is dropped.

Valid values are:

* `false` - Do not reconnect (default)
* `true` - Automatically try to reconnect

Reconnection attempts are limited by the `MaximumRetryCount` parameter.

Note that this parameter does not force the system to start the network automatically, see `AutomaticallyStartNetwork` for this functionality.

### `MaximumRetryCount`

Ths property determines the maximum number of retry attempts for network operations should a failure occur.

Default value: 3

### `GetNetworkTimeAtStartup`

Whether or not the Meadow should attempt to request the latest network time from an Network Time Protocol (NTP) server.

If set to true, NTP servers should be specified.

### `DnsServers`

DNS server(s) to use for DNS queries.

## `wifi.config.yaml`

The `wifi.config.yaml` file can be used to set the default access point and the password for that access point.  The `wifi.yaml` file should look something like this:

```yaml
Credentials:
    Ssid: YourSSID
    Password: SSIDPassword
```

This file will be processed after the `meadow.config.yaml` file.  The `Ssid` name will be set as the default access point to be used as the system starts.  The password will be used when connecting to the access point.

The `wifi.config.yaml` file will be deleted from flash storage after it has been processed and stored in secure storage on the ESP32 as the information is considered sensitive. This prevents the possibility of the file being read at a later point in time.

The contents of this file along with the `AutomaticallyStartNetwork` value in `meadow.config.yaml` can be used to automatically connect to an access point when the board starts.
