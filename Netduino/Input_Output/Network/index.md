---
title: Network
---

The network-enabled Netduinos; N2+, N3E, and N3WiFi have a robustly featured network stack that includes support for high level network APIs such as `HttpWebRequest` as well as low-level socket programming, UDP multicast support, and more.

However, network programming on an MCU based device is a little different than traditional server or desktop app network programming. On a stand-alone MCU powered device such as a Netduino, there are setup and initialization tasks that are usually already done by the time a server or a desktop app is executed, such as configuring the WiFi network, or requesting an IP from a DHCP server.

# Configuring Network Access

The first step in accessing the network from a Netduino is to configure the network settings. Many network settings, such as which WiFi network to connect to, or whether or not to use DHCP (or a static IP), are configured at deploy time via **MFDeploy** on Windows (Mac network configuration support is in progress). 

## Windows/MFDeploy Configuration

MFDeploy is included in the .NET MicroFramework installation. To configure network settings on Netduino, launch MFDeploy from the start menu and then access the settings via the `Target` > `Configuration` > `Network` menu:

![Menu navigation in MFDeploy to launch the Network Configuration popup](MFDeploy_Network_Menu.png)

From there, Network settings are configured in the popup. For example, the following settings will configure a WiFi enabled Netduino 3 to connect to the open wireless network `Cabin in the Woods` using 802.11 b, g, or n radio and use DHCP to obtain an IP Address:

![The Network Configuration popup in MFDeploy](MFDeploy_Network_Dialog.png)

Note that if you get the error `unable to erase configuration sector memory`, when trying to save, you may have to close the network settings dialog and run `Plug-in` > `Reboot Stop` from the menu first.


## Mac OS/Netduino Utils

Note: The Mac Deploy tool does not yet support network configuration. Support is coming soon, but until then, the Windows MFDeploy tool must be used.


## Waiting for the Network to Initialize

On the Netduino, chances are, the deployed application will actually start up before the network has fully initialized. There are two fundamental ways to do this. The simplest is to wait in a loop while the IP address is obtained (if using DHCP), or accepted (if using a static IP). The more sophisticated way is to use multi-threading and wait on network available events.

## Wait Loop

### Using DHCP

If DHCP is configured, a call to the static `IPAddress.GetDefaultLocalAddress()`  will suffice:

```CSharp
while (IPAddress.GetDefaultLocalAddress () == IPAddress.Any) {
	Debug.Print ("Sleep while obtaining an IP");
	Thread.Sleep (10);
};
```
`IPAddress.Any` returns an empty IP address (`0.0.0.0`), so this loop will run until a real IP Address is obtained.

### Using a Static IP

When using a static IP, add the `NetduinoExtensions.dll` reference and make a call to 

```
while (!System.Net.NetworkInformation.NetworkInterface.GetIsNetworkAvailable()) {
	Debug.Print ("Sleep while obtaining waiting for the network to initialize.");
	Thread.Sleep (10);
};
```

## Multithreading + Events

Netduino has sophisticated multithreading support (especially for an MCU platform), so for a more elegant solution that also saves on power consumption, 

# Code Example

 
```CSharp 
using Microsoft.SPOT.Hardware;
using SecretLabs.NETMF.Hardware.Netduino;
using System;
using System.Threading;
using System.Net;
using System.IO;
using Microsoft.SPOT;
using Microsoft.SPOT.Net.NetworkInformation;

namespace Blinky
{
	public class Program
	{
		public static void Main()
		{
			
			App app = new App ();
			app.Run ();

			OutputPort led = new OutputPort(Pins.ONBOARD_LED, false);
			while (app.IsRunning)
			{
				led.Write(true); // turn on the LED
				Thread.Sleep(250); // sleep for 250ms
				led.Write(false); // turn off the LED
				Thread.Sleep(250); // sleep for 250ms

			}

			Debug.Print ("App finished.");
			Debug.Print ("I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched C-beams glitter in the dark near the Tannhäuser Gate. All those moments will be lost in time, like tears in rain.");
			Debug.Print ("Time to die.");
		}
	}

	public class App
	{
		NetworkInterface[] _interfaces;


		public bool IsRunning { get; set; }

		public void Run()
		{
			this.IsRunning = true;
			bool goodToGo = InitializeNetwork ();

			if (goodToGo) {
				MakeWebRequest ("http://google.com");
			}

			this.IsRunning = false;
		}


		protected bool InitializeNetwork()
		{
			if (Microsoft.SPOT.Hardware.SystemInfo.SystemID.SKU == 3) {
				Debug.Print("Wireless tests run only on Device");
				return false;
			}

			Debug.Print("Getting all the network interfaces.");
			_interfaces = NetworkInterface.GetAllNetworkInterfaces();

			// debug output
			ListNetworkInterfaces ();

			// loop through each network interface
			foreach (var net in _interfaces) {

				// debug out
				ListNetworkInfo (net);

				switch (net.NetworkInterfaceType) {
				case (NetworkInterfaceType.Ethernet):
					Debug.Print ("Found Ethernet Interface");
					break;
				case (NetworkInterfaceType.Wireless80211):
					Debug.Print ("Found 802.11 WiFi Interface");
					break;
				case (NetworkInterfaceType.Unknown):
					Debug.Print ("Found Unknown Interface");
					break;
				}

				// check for an IP address, try to get one if it's empty
				return CheckIPAddress (net);
			}

			// if we got here, should be false.
			return false;
		}

		protected void MakeWebRequest(string url)
		{
			var httpWebRequest = (HttpWebRequest)WebRequest.Create(url);
			httpWebRequest.Method = "GET";

			var httpResponse = (HttpWebResponse)httpWebRequest.GetResponse();
			using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
			{
				var result = streamReader.ReadToEnd();
				Debug.Print("this is what we got from " + url + ": " + result);
			}
		}


		protected bool CheckIPAddress (NetworkInterface net)
		{
			int timeout = 10000; // timeout, in milliseconds to wait for an IP. 10,000 = 10 seconds

			// check to see if the IP address is empty (0.0.0.0). IPAddress.Any is 0.0.0.0.
			if (net.IPAddress == IPAddress.Any.ToString()) {
				Debug.Print ("No IP Address");

				if (net.IsDhcpEnabled) {
					Debug.Print ("DHCP is enabled, attempting to get an IP Address");

					// ask for an IP address from DHCP [note this is a static, not sure which network interface it would act on]
					int sleepInterval = 10;
					int maxIntervalCount = timeout / sleepInterval;
					int count = 0;
					while (IPAddress.GetDefaultLocalAddress () == IPAddress.Any && count < maxIntervalCount) {
						Debug.Print ("Sleep while obtaining an IP");
						Thread.Sleep (10);
						count++;
					};

					// if we got here, we either timed out or got an address, so let's find out.
					if (net.IPAddress == IPAddress.Any.ToString()) {
						Debug.Print ("Failed to get an IP Address in the alotted time.");
						return false;
					}

					Debug.Print ("Got IP Address: " + net.IPAddress.ToString ());
					return true;

					//NOTE: this does not work, even though it's on the actual network device. [shrug]
					// try to renew the DHCP lease and get a new IP Address
					//net.RenewDhcpLease ();
					//while (net.IPAddress == "0.0.0.0") {
					//	Thread.Sleep (10);
					//}

				} else {
					Debug.Print ("DHCP is not enabled, and no IP address is configured, bailing out.");
					return false;
				}
			} else {
				Debug.Print ("Already had IP Address: " + net.IPAddress.ToString ());
				return true;
			}

		}

		protected void ListNetworkInterfaces()
		{
			foreach (var net in _interfaces) {
				switch (net.NetworkInterfaceType) {
				case (NetworkInterfaceType.Ethernet):
					Debug.Print ("Found Ethernet Interface");
					break;
				case (NetworkInterfaceType.Wireless80211):
					Debug.Print ("Found 802.11 WiFi Interface");
					break;
				case (NetworkInterfaceType.Unknown):
					Debug.Print ("Found Unknown Interface");
					break;

				}
			}
		}

		protected void ListNetworkInfo(NetworkInterface net)
		{
			Debug.Print("MAC Address: " + BytesToHexString(net.PhysicalAddress));
			Debug.Print("DHCP enabled: " + net.IsDhcpEnabled.ToString());
			Debug.Print("Dynamic DNS enabled: " + net.IsDynamicDnsEnabled.ToString());
			Debug.Print("IP Address: " + net.IPAddress.ToString());
			Debug.Print("Subnet Mask: " + net.SubnetMask.ToString());
			Debug.Print("Gateway: " + net.GatewayAddress.ToString());

			if (net is Wireless80211) {
				var wifi = net as Wireless80211;
				Debug.Print ("SSID:" + wifi.Ssid.ToString ());
			}

		}

		private static string BytesToHexString(byte[] bytes)
		{
			string hexString = string.Empty;

			// Create a character array for hexidecimal conversion.
			const string hexChars = "0123456789ABCDEF";

			// Loop through the bytes.
			for (byte b = 0; b < bytes.Length; b++)
			{
				if (b > 0)
					hexString += "-";

				// Grab the top 4 bits and append the hex equivalent to the return string.        
				hexString += hexChars[bytes[b] >> 4];

				// Mask off the upper 4 bits to get the rest of it.
				hexString += hexChars[bytes[b] & 0x0F];
			}

			return hexString;
		}

	}
}
```