---
layout: Meadow
title: Configuration
subtitle: Controlling settings at build-time for device and app information.
---

Meadow has a robust configuration framework that allows you to adjust settings at build-time and deploy them with an app.

## OS/Device Configuration and Application Configuration

There are generally two sets of configuration options:
 
 * **OS & Device Configuration** - 
 * **Application Configuration** - [Coming soon.]

## Meadow.OS and Device Configuration

[device name, OS settings, etc.]


Meadow can be configured through two files:

* `meadow.config.yaml` - General board and system configuration
* `wifi.yaml` - Access point and password configuration

Both of these files are optional and the default values (shown below) will be used if the particular file is missing from the file system.

## `meadow.config.yaml`

`meadow.config.yaml` can be used to set a number of options 


```yaml
Device:
    Name: MeadowF7
Coprocessor:
    SpiSpeed: 8000000
    AutomaticallyStartNetwork: 1
    AutomaticallyReconnect: 1
    MaximumRetryCount: 3
```

The `Device` section contains configurable properties for the system in general.  The `Coprocessor` section of the file determines how the coprocessor interacts with the STM32 and the network.

### Device Name

This is the name that will show on the network.

Default value: MeadowF7

<!-- think we should cut this.

### SpiSpeed

This parameter is not normally used as the default settings combine high speed with reliability.  It can be used for boards working in electrically noisy environments to reduce the possibility of communication problems.

The value is the the frequency of the SPI communication in Hz.

Default value: 8000000
--->

### AutomaticallyStartNetwork

This parameter determines if the system will automatically attempt to connect to an access point as the board starts.  This requires a default access point to be configured (see the description of the `wifi.yaml` file below).

Valid values are:

* 0 - Do not connect (default)
* 1 - Automatically connect if a default access point has been specified

### AutomaticallyReconnect

This parameter determines if the system should automatically attempt to reconnect to an access point if there is a communication issue and the connection is dropped.

Valid values are:

* 0 - Do not reconnect (default)
* 1 - Automatically try to reconnect

Reconnection attempts are limited by the `MaximumRetryCount` parameter.

Note that this parameter does not force the system to start the network automatically, see `AutomaticallyStartNetwork` for this functionality.

### MaximumRetryCount

Ths property determines the maximum number of retry attempts for network operations should a failure occur.

Default value: 3

### Name

## `wifi.yaml`

The `wifi.yaml` file can be used to set the default access point and the password for that access point.  The `wifi.yaml` file should look something like this:

```yaml
Credentials:
    Ssid: YourSSID
    Password: SSIDPassword
```

This file will be processed when after the `meadow.yaml` file.  The `Ssid` name will be set as the default access point to be used as the system starts.  The password will be used when connecting to the access point.

The `wifi.yaml` file will be deleted from flash storage after it has been processed as the information is considered sensitive.  This prevents the possibility of the file being read at a later point in time.

The contents of this file along with the `AutomaticallyStartNetwork` value in `meadow.yaml` can be used to automatically connect to an access point when the board starts.
