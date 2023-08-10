---
layout: Meadow
title: Networking
subtitle: Network options and operation.
---

Both the Meadow F7 Feather development board and Core-Compute Module have Wi-Fi networking via the ESP32 co-processor. The Meadow Core-Compute Module also adds optional ethernet capabilities.

## Sample Apps

For example code, see the following networking sample apps in the [Meadow.Core.Samples repo](https://github.com/wildernesslabs/Meadow.Core.Samples):

* **[WiFi_Basics](https://github.com/WildernessLabs/Meadow.Core.Samples/tree/main/Source/Meadow.Core.Samples/Network/WiFi_Basics)** - Covers the basics of enumerating and connecting to WiFi networks.
* **[HttpListener](https://github.com/WildernessLabs/Meadow.Core.Samples/tree/main/Source/Meadow.Core.Samples/Network/HttpListener)** - Shows how to respond to HTTP requests with `HttpListenerContext`, `HttpListenerRequest`, and `HttpListenerResponse`.
* **[Antenna_Switching](https://github.com/WildernessLabs/Meadow.Core.Samples/tree/main/Source/Meadow.Core.Samples/Network/Antenna_Switching)** - Shows how to use the antenna API to switch between the onboard and external antenna connection.

# WiFi

## Connecting to a Wi-Fi Network

To connect to a Wi-Fi network, call the async function `Connect`, passing in the network name (SSID) and password. It will return a `Connection.Status` to verify if the connection was successful or if something went wrong, and allowing you to handle those situations.

There are also additional `Connect` methods that take parameters for cancellation or timeout durations, as well as a reconnect setting.

```csharp
try
{
    var wifi = Device.NetworkAdapters.Primary<IWiFiNetworkAdapter>();
    await wifi.Connect("[SSID]", "[PASSWORD]", TimeSpan.FromSeconds(45));
}
catch (Exception ex)
{
    Resolver.Log.Error($"Failed to Connect: {ex.Message}");
}
```

Additionally, you can subscribe to the `NetworkConnected` event thats triggered whenever Meadow has joined the network. You can retrieve the connection properties either from the event arguments or the connected network adapter in this event handler.

```csharp
var wifi = Device.NetworkAdapters.Primary<IWiFiNetworkAdapter>();
wifi.NetworkConnected += (networkAdapter, networkConnectionEventArgs) =>
{
    Console.WriteLine("Joined network");
    Console.WriteLine($"IP Address: {networkAdapter.IpAddress}.");
    Console.WriteLine($"Subnet mask: {networkAdapter.SubnetMask}");
    Console.WriteLine($"Gateway: {networkAdapter.Gateway}");
};
```

## Scanning for WiFi Networks

You can also scan for WiFi networks via the `Scan()` method on the `IWiFiNetworkAdapter`. This method will return a list of the discovered networks.

There are also additional `Connect` methods that take parameters for cancellation or timeout durations.

```csharp
async Task ScanForAccessPoints(IWiFiNetworkAdapter wifi)
{
    Console.WriteLine("Getting list of access points.");
    var networks = await wifi.Scan();

    if(networks.Count > 0)
    {
        Console.WriteLine("|-------------------------------------------------------------|---------|");
        Console.WriteLine("|         Network Name             | RSSI |       BSSID       | Channel |");
        Console.WriteLine("|-------------------------------------------------------------|---------|");

        foreach (WifiNetwork accessPoint in networks)
        {
            Console.WriteLine($"| {accessPoint.Ssid,-32} | {accessPoint.SignalDbStrength,4} | {accessPoint.Bssid,17} |   {accessPoint.ChannelCenterFrequency,3}   |");
        }
    }
    else
    {
        Console.WriteLine($"No access points detected.");
    }
}
```

# Performing Requests

Once the network is connected, you can generally use the built-in .NET network methods as usual, however `HttpServer` is not available in this release candidate.

Note: SSL validation can sometimes fail due to Meadow's clock being too far from the current time. This can be resolved by either [configuring Meadow to acquire the network time at startup](/Meadow/Meadow.OS/Configuration/OS_Device_Configuration/), or by [setting the clock manually](/Meadow/Meadow.OS/RTC/) at runtime.

## HTTP Get Request Example

The following code illustrates making a request to a web page via the `HttpClient` class:

```csharp
using (HttpClient client = new HttpClient()) {
    HttpResponseMessage response = await client.GetAsync(uri);
    response.EnsureSuccessStatusCode();
    string responseBody = await response.Content.ReadAsStringAsync();
    Console.WriteLine(responseBody);
}
```

### HTTP Post Request Example

You can also modify the request to `POST` data. For example, the following code posts a temperature reading to the Adafruit IO data platform:

```csharp
using (HttpClient client = new HttpClient()) {
    client.DefaultRequestHeaders.Add("X-AIO-Key", [APIO_KEY]);
    client.Timeout = TimeSpan.FromMinutes(10);
    string temperature = "23.70";
    string data = "{\"value\":\"" + temperature + "\"}";
    var content = new StringContent(data, Encoding.UTF8, "application/json");
    var result = client.PostAsync(uri, content).Result;
}
```

# Antenna

Both the Meadow development board and production module have an onboard ceramic chip antenna and a U.FL connector for an external antenna for the 2.4GHz WiFi and Bluetooth radio.

For more information on getting the current antenna information and switching, see the [Antenna guide](/Meadow/Meadow_Basics/Networking/Antenna).

# Creating RESTful Web APIs with Maple Server

If you need to expose simple RESTful Web APIs, Meadow.Foundation includes a lightweight web server called [Maple Server](../../Meadow.Foundation/Libraries_and_Frameworks/Maple.Server/index.md) that may be useful. Check out the [Maple Server guide](/Meadow/Meadow.Foundation/Libraries_and_Frameworks/Maple.Server/) for more information.

# Sample projects

You can look through these for usa samples in our [Meadow Core Samples](https://github.com/WildernessLabs/Meadow.Core.Samples) repo or refer to these practical projects available on [Hackster](https://www.hackster.io/WildernessLabs).

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
