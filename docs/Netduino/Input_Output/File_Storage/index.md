---
layout: Netduino
title: File IO
subtitle: Using the onboard micro SD card as a persistent storage device.
---

## Info

Netduino 2 and 3 can access up to 2GB of storage on a Micro SD Card which provide a persistent storage mechanism similar to a hard drive. This can be useful for storing application configuration information that can be read at boot-up, or for storing log information.

Network-enabled models have an SD card slot on the board, but models that don't have one built in can use an SD Card Shield. 

Accessing and writing to an SD card is generally the same as in regular .NET. However, you'll need to make sure that the following DLLs are referenced:

 * `Microsoft.SPOT.IO`
 * `SecretLabs.NETMF.IO`
 * `System.IO`

When a SD card is inserted into the Netduino, it is mounted as the `SD` volume, so for example, a file called `test.txt` in the root directory of the card would be accessed via the following path:

`var path = Path.Combine("SD","test.txt");`

The other thing to keep in mind, is that after writing to a file, `FlushAll()` should be called on the Volume in order to force a write. Otherwise, when the file is written will be indeterminate.

The following sample illustrates writing some text to a file called `test.txt` to the SD card. It also outputs some general information about the card such as how much free space it has:

```csharp
using System;
using System.IO;
using Microsoft.SPOT;
using Microsoft.SPOT.IO;
using System.Text;

namespace SDCardIO
{
	public class Program
	{
		public static void Main()
		{
			// some debug output for funsies 
			OutputSDInfo();

			var volume = new VolumeInfo("SD");

			// check to see if there's an SD card inserted
			if (volume != null) {

				// "SD" is the volume name,
				var path = Path.Combine("SD","test.txt");

				// write some text to a file
				File.WriteAllBytes(path, Encoding.UTF8.GetBytes("Foooooooo"));

				// Must call flush to write immediately. Otherwise, there's no guarantee 
				// as to when the file is written. 
				volume.FlushAll();

			} else {
				Debug.Print("There doesn't appear to be an SD card inserted");
			}
		}

		public static void OutputSDInfo()
		{
			var vInfo = new VolumeInfo("SD");

			if (vInfo != null) {
				Debug.Print("Is Formatted: " + vInfo.IsFormatted.ToString ());
				Debug.Print("Total Free Space: " + vInfo.TotalFreeSpace.ToString ());
				Debug.Print("Total Size: " + vInfo.TotalSize.ToString ());
				Debug.Print("File System: " + vInfo.FileSystem);
			} else {
				Debug.Print("There doesn't appear to be an SD card in the device.");
			}

		}
	}
}
```
