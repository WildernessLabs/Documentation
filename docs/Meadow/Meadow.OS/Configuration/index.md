---
layout: Meadow
title: Configuration
subtitle: Controlling settings at build-time for device and app information.
---

Meadow has a robust configuration framework allowing you to adjust settings at build-time and deploy them with your app.

## OS/Device Configuration and Application Configuration

Meadow.OS supports three configuration sets that are placed in three different files:

* **[OS & Device Configuration](/Meadow/Meadow.OS/Configuration/OS_Device_Configuration)**: Specified in the `meadow.config.yaml` file. Includes general board and system configuration settings.

* **[Wi-Fi Configuration](/Meadow/Meadow.OS/Configuration/WiFi_Configuration)**: Specified in the `wifi.config.yaml`. Wi-Fi access point and password configuration for connecting to a known network.

* **[Application Settings Configuration](/Meadow/Meadow.OS/Configuration/Application_Settings_Configuration)**: Specified in either `app.config.yaml` or `app.config.json`. Includes application settings for logging and reboot configuration. These files are used for custom developer application settings.

These files are optional and, where applicable, default values will be used if the particular file is not found in the Meadow file system.

## Must Set `Copy to Output Directory` Build Action

In order to make sure your configuration files are deployed to the device, select the file in the **Solution Explorer** and make sure to set **Copy to Output Directory** to `Copy always` in the properties pane.

## Sample Apps

For an example of configuration in use, see the [Config Files sample App](https://github.com/WildernessLabs/Meadow.Core.Samples/tree/main/Source/OS/Config_Files) in the `Meadow.Core.Samples` repo.

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
