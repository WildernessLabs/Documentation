---
layout: Netduino
title: Connecting to a Network
subtitle: Configuring and initialing the Network interface and accessing network resources.
---

### Waiting for the Network to Initialize

On the Netduino, it's common that a deployed application will start before the network has fully initialized. 
We want to ensure we have a valid network connection before making network calls.

There are two fundamental ways to do this. The simplest is to wait in a loop while the IP address is obtained (if using DHCP), or accepted (if using a static IP). 
The more sophisticated way is to raise an event from your network code to notify the application when it's ready.

### Wait Loop

#### Using DHCP

If DHCP is configured, a call to the static `IPAddress.GetDefaultLocalAddress()`  will suffice:

```csharp
while (IPAddress.GetDefaultLocalAddress () == IPAddress.Any) {
    Debug.Print ("Sleep while obtaining an IP");
    Thread.Sleep (10);
};
```

`IPAddress.Any` returns an empty IP address (`0.0.0.0`), so this loop will run until a real IP Address is obtained.

#### Using a Static IP

When using a static IP, add the `NetduinoExtensions.dll` reference and make a call to 

```csharp
while (!System.Net.NetworkInformation.NetworkInterface.GetIsNetworkAvailable()) {
    Debug.Print ("Sleep while obtaining waiting for the network to initialize.");
    Thread.Sleep (10);
};
```

### Multithreading + Events

Netduino has sophisticated multithreading support (especially for an MCU platform), so for a more elegant solution that also saves on power consumption, 
we place the work to connect and wait for an IP address within a thread, using `Thread.Sleep` to free up CPU resources while waiting.
We then raise an event from our network code to notify the main application that we have a valid IP address.

The code is shown below. Alternatively you can use the [`Netduino.Foundation.Network` NuGet package](https://www.nuget.org/packages/Netduino.Foundation.Network).

#### Code Example

```csharp
using Microsoft.SPOT.Hardware;
using SecretLabs.NETMF.Hardware.Netduino;
using System;
using System.Threading;
using System.Net;
using System.IO;
using Microsoft.SPOT;
using Microsoft.SPOT.Net.NetworkInformation;

namespace BlinkUntilConnected
{
    public class Program
    {
        static bool IsConnecting = true;

        public static void Main()
        {
            Initializer.NetworkConnected += Connected;
            Initializer.InitializeNetwork();

            OutputPort led = new OutputPort(Pins.ONBOARD_LED, false);
            while (IsConnecting)
            {
                led.Write(true); // turn on the LED
                Thread.Sleep(250); // sleep for 250ms
                led.Write(false); // turn off the LED
                Thread.Sleep(250); // sleep for 250ms
            }

            Debug.Print ("Network connected!");
        }

        private static void NetworkConnected (object sender, EventArgs e)
        {
            IsConnecting = false; //we're connected!
        }
    }

    public static class Initializer
    {
        private static NetworkInterface[] _interfaces;

        public delegate void NetworkConnectedDelegate(object sender, EventArgs e);
        public static event NetworkConnectedDelegate NetworkConnected;

        public static void InitializeNetwork(string uri = null)
        {
            if (Microsoft.SPOT.Hardware.SystemInfo.SystemID.SKU == 3)
            {
                Debug.Print("Wireless tests run only on Device");
                return;
            }

            _interfaces = NetworkInterface.GetAllNetworkInterfaces();

            ListNetworkInterfaces();

            var th = new Thread(() => CheckNetworkInterfacesForConnection(uri));
            th.Start();
        }

        private static bool CheckNetworkInterfacesForConnection (string uri)
        {
            foreach (var networkInterface in _interfaces)
            {
                if (UpdateIPAddressFromDHCP(networkInterface))
                {
                    if (uri == null)
                    {
                        return true;
                    }

                    int retryCount = 0;

                    while (retryCount < 3)
                    {
                        try
                        {
                            MakeWebRequest(uri);
                            return true;
                        }
                        catch (Exception e)
                        {
                            Debug.Print(e.Message);
                            retryCount++;
                        }
                    }
                }
                return false;
            }
            //  If we get here then none of the network interface have started correctly
            return false;
        }

        private static void MakeWebRequest(string uri)
        {
            var httpWebRequest = (HttpWebRequest)WebRequest.Create(uri);
            httpWebRequest.Method = "GET";

            var httpResponse = (HttpWebResponse)httpWebRequest.GetResponse();

            using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
            {
                var result = streamReader.ReadToEnd();
                Debug.Print("Response from " + uri + ":\n" + result);
            }
        }

        private static bool UpdateIPAddressFromDHCP(NetworkInterface networkInterface)
        {
            int timeout = 10000; // timeout, in milliseconds to wait for an IP

            // check to see if the IP address is empty (0.0.0.0). IPAddress.Any is 0.0.0.0.
            if (networkInterface.IPAddress == IPAddress.Any.ToString())
            {
                Debug.Print("No IP Address");

                if (networkInterface.IsDhcpEnabled)
                {
                    Debug.Print("DHCP is enabled, attempting to get an IP Address");

                    // ask for an IP address from DHCP [note this is a static, not sure which network interface it would act on]
                    int sleepInterval = 10;
                    int maxIntervalCount = timeout / sleepInterval;
                    int count = 0;

                    while (IPAddress.GetDefaultLocalAddress() == IPAddress.Any && count < maxIntervalCount)
                    {
                        Debug.Print("Sleep while obtaining an IP");
                        Thread.Sleep(sleepInterval);
                        count++;
                    };

                    // if we got here, we either timed out or got an address, so let's find out.
                    if (networkInterface.IPAddress == IPAddress.Any.ToString())
                    {
                        Debug.Print("Failed to get an IP Address in the alotted time.");
                        return false;
                    }

                    Debug.Print("Got an IP Address: " + networkInterface.IPAddress.ToString());

                    CurrentNetworkInterface = networkInterface;

                    if (NetworkConnected != null)
                        NetworkConnected.Invoke(null, EventArgs.Empty);
                    return true;
                }
                else
                {
                    Debug.Print("DHCP is not enabled and no IP address is configured.");
                    return false;
                }
            }
            else
            {
                Debug.Print("Already have an IP Address: " + networkInterface.IPAddress.ToString());

                CurrentNetworkInterface = networkInterface;

                if (NetworkConnected != null)
                    NetworkConnected.Invoke(null, EventArgs.Empty);

                return true;
            }
        }

        public static void ListNetworkInterfaces()
        {
            foreach (var networkInterface in _interfaces)
            {
                ListNetworkInfo((networkInterface));
            }
        }

        private static void ListNetworkInfo(NetworkInterface networkInterface)
        {
            try
            {
                switch (networkInterface.NetworkInterfaceType)
                {
                    case (NetworkInterfaceType.Ethernet):
                        Debug.Print("Found Ethernet Interface");
                        break;
                    case (NetworkInterfaceType.Wireless80211):
                        Debug.Print("Found 802.11 WiFi Interface");
                        break;
                    case (NetworkInterfaceType.Unknown):
                        Debug.Print("Found Unknown Interface");
                        break;
                }
                Debug.Print("MAC Address: " + DebugInformation.Hexadecimal(networkInterface.PhysicalAddress));
                Debug.Print("DHCP enabled: " + networkInterface.IsDhcpEnabled.ToString());
                Debug.Print("Dynamic DNS enabled: " + networkInterface.IsDynamicDnsEnabled.ToString());
                Debug.Print("IP Address: " + networkInterface.IPAddress.ToString());
                Debug.Print("Subnet Mask: " + networkInterface.SubnetMask.ToString());
                Debug.Print("Gateway: " + networkInterface.GatewayAddress.ToString());

                if (networkInterface is Wireless80211)
                {
                    var wifi = networkInterface as Wireless80211;
                    Debug.Print("SSID:" + wifi.Ssid.ToString());
                }
            }
            catch (Exception e)
            {
                Debug.Print("ListNetworkInfo exception:  " + e.Message);
            }
        }
    }
}
```
