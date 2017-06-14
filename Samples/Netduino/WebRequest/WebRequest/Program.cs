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

			// Start up the app
			new Thread(app.Run).Start();

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

			// wait for network hardware to spinup
			//Thread.Sleep(10000);

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