---
layout: Meadow
title: Networking
subtitle: Network options and operation.
---

Both the Meadow F7 Micro development board and Core Compute Module have WiFi networking via the ESP32 co-processor. The Meadow Core Compute Module also adds optional ethernet capabilities.

## Current Beta Limitations

* **All SSL Certificates Accepted** - SSL connections are supported, but currently, all certificates over TLS (https) are accepted without any validation.

## Sample Apps

For example code, see the following networking sample apps in the [Meadow.Core.Samples repo](https://github.com/wildernesslabs/Meadow.Core.Samples):

* **[Wifi_Basics](https://github.com/WildernessLabs/Meadow.Core.Samples/tree/main/Source/Meadow.Core.Samples/Network/WiFi_Basics)** - Covers the basics of enumerating and connecting to WiFi networks.
* **[HttpListener](https://github.com/WildernessLabs/Meadow.Core.Samples/tree/main/Source/Meadow.Core.Samples/Network/HttpListener)** - Shows how to respond to HTTP requests with `HttpListenerContext`, `HttpListenerRequest`, and `HttpListenerResponse`.
* **[Antenna Switching](https://github.com/WildernessLabs/Meadow.Core.Samples/tree/main/Source/Meadow.Core.Samples/Network/Antenna_Switching)** - Shows how to use the antenna API to switch between the onboard and external antenna connection.

# WiFi

## Connecting to a WiFi Network

To connect to a WiFi network, call the async function `Connect` passing in the SSID (network name), and password. It will return `Connection.Status` that we can use to verify if the connection was successful or something went wrong so we can handle any scenario.

```csharp
var connectionResult = await Device.WiFiAdapter.Connect("[SSID]", "[PASSWORD]");
if (connectionResult.ConnectionStatus != ConnectionStatus.Success)
{
    throw new Exception($"Cannot connect to network: {connectionResult.ConnectionStatus}");
}
else
{
    Console.WriteLine($"IP Address: {Device.WiFiAdapter.IpAddress}");
    Console.WriteLine($"Subnet mask: {Device.WiFiAdapter.SubnetMask}");
    Console.WriteLine($"Gateway: {Device.WiFiAdapter.Gateway}");
}
```

Additionally, you can subscribe to the `WiFiConnected` event thats triggered whenever Meadow has joined the network.

```csharp
Device.WiFiAdapter.WiFiConnected += (s, e) =>
{
    Console.WriteLine($"Joined network with IP: {Device.WiFiAdapter.IpAddress}.");
};
```

## Scanning for WiFi Networks

You can also scan for WiFi networks via the `Scan()` method on the `WiFiAdapter` and then access the network list via the `Networks` `ObservableCollection` property:

```csharp
protected void ScanForAccessPoints()
{
    Console.WriteLine("Getting list of access points.");
    ObservableCollection<WifiNetwork> networks = Device.WiFiAdapter.Scan();
    if (networks.Count > 0) {
        Console.WriteLine("|-------------------------------------------------------------|---------|");
        Console.WriteLine("|         Network Name             | RSSI |       BSSID       | Channel |");
        Console.WriteLine("|-------------------------------------------------------------|---------|");
        foreach (WifiNetwork accessPoint in networks) {
            Console.WriteLine($"| {accessPoint.Ssid,-32} | {accessPoint.SignalDbStrength,4} | {accessPoint.Bssid,17} |   {accessPoint.ChannelCenterFrequency,3}   |");
        }
    } else {
        Console.WriteLine($"No access points detected.");
    }
}
```

# Performing Requests

Once the network is connected, you can generally use the built-in .NET network methods as usual, however `HttpServer` is not available in this beta.

## `HttpClient.Request()` Example

The following code illustrates making a request to a web page via the `HttpClient` class:

```csharp
using (HttpClient client = new HttpClient()) {
    HttpResponseMessage response = await client.GetAsync(uri);
    response.EnsureSuccessStatusCode();
    string responseBody = await response.Content.ReadAsStringAsync();
    Console.WriteLine(responseBody);
}
```

### Posting

You can also modify the request to `POST` data. For example, the following code posts a temperature reading to Adafruit.IO:

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
