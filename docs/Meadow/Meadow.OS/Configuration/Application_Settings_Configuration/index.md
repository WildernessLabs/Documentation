---
layout: Meadow
title: Application Settings Configuration
subtitle: Adding application settings at build-time for lifecycle, logging, or custom settings.
---

The `app.config.yaml` or `app.config.json` files can be used to configure application settings for logging and reboot configuration. You can also add custom developer application settings.

Either an `app.config.yaml` or `app.config.json` file can be used to set application configuration settings and custom developer settings. The filenames are case sensitive.

You can you one or the other, or both. If both application configuration files are used, the values in `app.config.yaml` are applied first and then any values in `app.config.json` are applied next. (Any settings provided in both will be overridden by the JSON file.)

Remember to set **Copy to Output Directory** to `Copy always` in the properties pane of any configuration files.

### Lifecycle Configuration - Automatic Reboot

If you need Meadow to relaunch your app should it fail, the `Lifecycle` settings allow you to configure that behavior.

First, set `RestartOnAppFailure` to true. Then, you can optionally configure a delay, in seconds, before restart using the `AppFailureRestartDelaySeconds` setting.

For example, to configure Meadow to wait 15 seconds after a failure before rebooting your application, here is the configuration in YAML.

```yml
Lifecycle:
    RestartOnAppFailure: true
    AppFailureRestartDelaySeconds: 15
```

And here is the same configuration in JSON.

```json
{
    "Lifecycle": {
        "RestartOnAppFailure": true,
        "AppFailureRestartDelaySeconds": 15
    }
}
```

### Logging Configuration

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
