---
layout: Meadow
title: Configuration
subtitle: Controlling settings at build-time for device and app information.
---

Meadow has a robust configuration framework that allows you to adjust settings at build-time and deploy them with an app.

## OS/Device Configuration and Application Configuration

Meadow.OS support the following configuration sets:

* **OS & Device Configuration** - Specified in the `meadow.config.yaml` file. Includes general board and system configuration settings.
* **WiFi Network Credentials** - Specified in the `wifi.config.yaml`. Specifies WiFi access point and password configuration.
* **Application Configuration** - Specified in `app.config.yaml` or `app.config.json`. Includes application settings for logging and reboot configuration. Also used for custom developer application settings.

These files are optional and the default values (shown below) will be used if the particular file is missing from the file system.

## Must Set `Copy to Output Directory` Build Action

In order to make sure your configuration files are deployed to the device, select the file in the **Solution Explorer** and make sure to set **Copy to Output Directory** to `Copy always` in the properties pane.

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

## Application Configuration

Either an `app.config.yaml` or `app.config.json` file can be used to set application configuration settings and custom developer settings. The filenames are case sensitive.

You can you one or the other, or both. If both application configuration files are used, the values in `app.config.yaml` are applied first and then any values in `app.config.json` are applied next. (Any settings provided in both will be overridden by the JSON file.)

### Lifecycle - Automatic Reboot

If you need Meadow to relaunch your app should it fail, the `Lifecycle` settings allow you to configure that behavior.

First, set `ResetOnAppFailure` to true. Then, you can optionally configure a delay, in seconds, before restart using the `AppFailureRestartDelaySeconds` setting.

For example, to configure Meadow to wait 15 seconds after a failure before rebooting your application, here is the configuration in YAML.

```yml
Lifecycle:
    ResetOnAppFailure: true
    AppFailureRestartDelaySeconds: 15
```

And here is the same configuration in JSON.

```json
{
    "Lifecycle": {
        "ResetOnAppFailure": true,
        "AppFailureRestartDelaySeconds": 15
    }
}
```

### Logging

Logging configuration allows you to customize the level of data your Meadow application will log to its output channel.

The log level default aligns with the .NET options: Trace, Debug, Information, Warning, and Error.

```yml
Logging:
  LogLevel:
    Default: "Trace"
```

```json
{
    "Logging": {
        "LogLevel": {
            "Default": "Trace"
        }
    }
}
```

### Custom Developer Application Settings

You can also configure custom application settings that can then be retrieved at runtime through a strongly-typed system.

First, you need your settings added to the `app.config.yaml` or `app.config.json` file. You can name the container object whatever you want.

```yml
BlinkyApp:
  DoAwesomeThings: true
  TimeInSecondsBeforeAwesome: 3
```

```json
{
  "BlinkyApp": {
    "DoAwesomeThings": true,
    "TimeInSecondsBeforeAwesome": 3
  }
}
```

Make sure your configuration file is set to copy to the output directory.

With the configuration settings included, you'll need a settings class to handle the setting retrieval and parsing. This is simplified by inheriting from the `ConfigurableObject` class, with a class name that matches the settings object name with `Settings` added. For the `BlinkyApp` example here, we need a class named `BlinkyAppSettings`.

```csharp
public class BlinkyAppSettings : ConfigurableObject
{
    public bool DoAwesomeThings => GetConfiguredBool(nameof(DoAwesomeThings), true);
    public int TimeInSecondsBeforeAwesome => GetConfiguredInt(nameof(TimeInSecondsBeforeAwesome), 60);
}
```

Then within your Meadow app, you can retrieve your settings by creating an instance of your settings class. After the settings object is created, you can access your custom values.

Here's an example of doing that in the app's `Initialize` and `Run` overrides.

```csharp
public class MeadowApp : App<F7FeatherV2>
{
    MyCustomSettings customSettings;

    public override Task Initialize()
    {
        customSettings = new MyCustomSettings();

        return base.Initialize();
    }

    public override Task Run()
    {
        Console.WriteLine($"{nameof(customSettings.DoAwesomeThings)}: {customSettings.DoAwesomeThings}");
        Console.WriteLine($"{nameof(customSettings.TimeInSecondsBeforeAwesome)}: {customSettings.TimeInSecondsBeforeAwesome}");

        return base.Run();
    }
}
```

## Sample Apps

For an example of configuration in use, see the [Config Files sample App](https://github.com/WildernessLabs/Meadow.Core.Samples/tree/develop/Source/Meadow.Core.Samples/OS/Config_Files) in the `Meadow.Core.Samples` repo.

<table>
    <tr>
        <td style="width:50%">
            <img alt="Photo showing a Meadow hooked up to an LCD displaying the date, time, indoor and outdoor temperature and a weather icon." src="../../../Common_Files/Hackster/GraphicsWeather.jpg"/>
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
            <img alt="Video showing a vertical LED matrix showing the current date and then the current time when a button is pressed." src="../../../Common_Files/Hackster/RtcWifi.gif"/>
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
            <img alt="Video showing a Meadow connected to a multi-line character display showing the date, time, indoor and outdoor temperatures, and a weather description." src="../../../Common_Files/Hackster/WifiWeather.gif"/>
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