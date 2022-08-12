---
layout: Meadow
title: Wi-Fi Configuration
subtitle: Configure Wi-Fi settings at build-time to connect Meadow to a specific access point.
---

The `wifi.config.yaml` file can be used to set the default Wi-Fi access point and the password for that access point. The `wifi.config.yaml` file should look similar to this:

```yaml
Credentials:
    Ssid: YourSSID
    Password: SSIDPassword
```

This file will be processed after the [`meadow.config.yaml` file](/Meadow/Meadow.OS/Configuration/OS_Device_Configuration). Remember to set **Copy to Output Directory** to `Copy always` in the properties pane of any configuration files.

The `Ssid` name will be set as the default access point to be used as the system starts. The password will be used when connecting to the access point.

The `wifi.config.yaml` file will be deleted from flash storage after it has been processed and stored in secure storage on the ESP32 as the information is considered sensitive. This prevents the possibility of the file being read at a later point in time.

The contents of this file along with the `AutomaticallyStartNetwork` value in `meadow.config.yaml` can be used to automatically connect to an access point when the board starts.

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
