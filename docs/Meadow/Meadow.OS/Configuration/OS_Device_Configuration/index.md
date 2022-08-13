---
layout: Meadow
title: OS & Device Configuration
subtitle: Configure settings at build-time for device and network configuration.
---

The `meadow.config.yaml` file can be used to set general board and system configuration settings. This includes OS and device level settings such as device name, default network behavior, and network settings.

Remember to set **Copy to Output Directory** to `Copy always` in the properties pane of any configuration files.

Consider the following sample config file:

```yaml
#===============================================================================
# main device config

Device:
    # Name of the device on the network.
    Name: MeadowF7V2_ConfigSample

#===============================================================================

# Control how the .NET runtime executes your Meadow application, optionally enabling just-in-time (JIT) compilation instead of interpretation mode.
MonoControl:
  Options: --jit

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

The `Device` section contains configurable properties for the system in general. The `Coprocessor` section of the file determines how the coprocessor interacts with the STM32 and the network.

### Device `Name`

This is the name that will show on the network.

Default value: MeadowF7

### JIT compilation mode

This parameter determines if the .NET runtime executes your Meadow application via just-in-time (JIT) compilation or the default interpretation mode. This feature is enabled for RC1 and will eventually be enabled by default for later versions as JIT complication is typically significantly faster.

```yaml
MonoControl:
  Options: --jit
```

<!-- think we should cut this.

### SpiSpeed

This parameter is not normally used as the default settings combine high speed with reliability. It can be used for boards working in electrically noisy environments to reduce the possibility of communication problems.

The value is the the frequency of the SPI communication in Hz.

Default value: 8000000
--->

### `AutomaticallyStartNetwork`

This parameter determines if the system will automatically attempt to connect to an access point as the board starts. This requires a default access point [configured in a separate `wifi.config.yaml` file](/Meadow/Meadow.OS/Configuration/WiFi_Configuration).

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

## Sample Apps

For an example of configuration in use, see the [Config Files sample App](https://github.com/WildernessLabs/Meadow.Core.Samples/tree/develop/Source/Meadow.Core.Samples/OS/Config_Files) in the `Meadow.Core.Samples` repo.

<table>
    <tr>
        <td style="width:50%">
            <img alt="Photo showing a Meadow hooked up to an LCD displaying the date, time, indoor and outdoor temperature and a weather icon." src="../../../../Common_Files/Hackster/GraphicsWeather.jpg"/>
        </td>
        <td style="width:50%; font-size:20px;">
            <p style="font-size:22px;">
                <a style="font-size:25px;" href="https://www.hackster.io/wilderness-labs/weather-station-using-public-web-service-using-meadow-e47765">Weather Station Using Public Web Service Using Meadow</a>
                <br/>
                Learn how to connect your Meadow to your local network and get current weather conditions from a free public weather web service.
            </p>
        </td>
    </tr>
    <tr>
        <td style="width:50%">
            <img alt="Video showing a vertical LED matrix showing the current date and then the current time when a button is pressed." src="../../../../Common_Files/Hackster/RtcWifi.gif"/>
        </td>
        <td style="width:50%">
            <p style="font-size:22px;">
                <a style="font-size:25px;" href="https://www.hackster.io/wilderness-labs/build-a-wifi-connected-clock-using-meadow-e0c6b6">Build a WIFI Connected Clock Using Meadow</a>
                <br/>
                Build this nifty clock with Meadow getting the date and time from an NTP server via WIFI and room temperature with an LM35 Analog sensor.
            </p>
        </td>
    </tr>
    <tr>
        <td style="width:50%">
            <img alt="Video showing a Meadow connected to a multi-line character display showing the date, time, indoor and outdoor temperatures, and a weather description." src="../../../../Common_Files/Hackster/WifiWeather.gif"/>
        </td>
        <td style="width:50%">
            <p style="font-size:22px;">
                <a style="font-size:25px;" href="https://www.hackster.io/wilderness-labs/make-a-meadow-indoor-outdoor-temperature-weather-desk-clock-463839">Make a Meadow indoor/outdoor temperature/weather desk clock</a>
                <br/>
                Build this nifty clock for your desk that gives you time and date, along with room and outdoor temperature using a REST service.
            </p>
        </td>
    </tr>
</table>
