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
    # Is SD card hardware present on this hardware build (e.g., Core-Compute module with SD add-on)? Optional; default value is `false`.
    SdStorageSupported: false
#===============================================================================

# Control how the .NET runtime executes your Meadow application, optionally enabling just-in-time (JIT) compilation instead of interpretation mode.
MonoControl:
  # Options to pass to Mono via the command line.
  Options: --jit

# Control how the ESP coprocessor will start and operate.
Coprocessor:

    # Should the ESP32 automatically attempt to connect to an access point at startup?
    # If set to true, wifi.config.yaml credentials must be stored in the device.

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
    NtpRefreshPeriodSeconds: 3600

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

```yaml
Device:
    Name: MeadowF7V2_ConfigSample
```

### Device `SdStorageSupported`

Used to indicate whether SD card hardware is present where this project is deployed to ensure that SD card support is configured in the Meadow OS. Set this value to true if you are working on a Meadow hardware configuration using SD card hardware. For example, on the Core-Compute module with the SD card add-on, set this configuration to `true` if you are writing or reading from an SD card.

Default value: false

```yaml
Device:
    # Enable if your Meadow build is using SD card hardware.
    SdStorageSupported: true
```

### Interpreted mode

The default mode for executing a deployed application is to use JIT (Just In Time) compilation.  Applications can also be interpreted although this method is slower than using JIT.  It is not normally recommended to use this option.

```yaml
MonoControl:
  Options: --interp
```

### Mono debug compilation

In order to see source filenames and line numbers in the stack trace of any runtime exceptions, you can pass the `--debug` parameter to the Mono command line. This won't currently change what is logged by Meadow for unhandled exceptions, but you will be able to find source code line numbers when debugging or specifically logging an exception's `StackTrace` property.

This setting can be combined with `--interp` and other Mono options.

NOTE: This setting can have a performance impact in Meadow apps and should be avoided in production apps.

```yaml
MonoControl:
  # Options to pass to Mono via the command line.
  Options: --debug --interp
```

With that in place, your exceptions will now show the source file location and line numbers in the stack trace of caught exceptions.

```csharp
try
{
    throw new NotImplementedException();
}
catch (Exception e)
{
    Console.WriteLine($"{e.StackTrace}");
    // Example output without `--debug`: "[2022-10-26 22:42:32] Meadow StdOut:   at MeadowApplication.MeadowApp.Run () <0xc0df53f8 + 0x00014> in <596be8f53b23457caad22184d2aaf984>:0"
    // Example output with `--debug`: [2022-10-27 07:57:05] Meadow StdOut:   at MeadowApplication20221026RC1.MeadowApp.Run () [0x0000d] in C:\...\MeadowApplication\MeadowApp.cs:23 
}
```

<!-- think we should cut this.

### SpiSpeed

This parameter is not normally used as the default settings combine high speed with reliability. It can be used for boards working in electrically noisy environments to reduce the possibility of communication problems.

The value is the the frequency of the SPI communication in Hz.

Default value: 8000000
--->

### `AutomaticallyStartNetwork`

This parameter determines if the system will automatically attempt to connect to an access point as the board starts. This requires a default access point [configured in a separate `wifi.config.yaml` file](../WiFi_Configuration).

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

### `NtpRefreshPeriodSeconds`

Number of seconds between network time refreshes.

### `DnsServers`

DNS server(s) to use for DNS queries.

## Sample Apps

For an example of configuration in use, see the [Config Files sample App](https://github.com/WildernessLabs/Meadow.Core.Samples/tree/main/Source/OS/Config_Files) in the `Meadow.Core.Samples` repo.

<!-- <table>
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
</table> -->
