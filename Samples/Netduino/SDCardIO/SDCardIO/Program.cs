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
			OutputSDInfo ();

			var volume = new VolumeInfo("SD");

			// check to see if there's an SD card inserted
			if (volume != null) {

				// "SD" is the volume name,
				var path = Path.Combine("SD","test.txt");

				// write some text to a file
				File.WriteAllBytes (path, Encoding.UTF8.GetBytes ("Foooooooo"));

				// Must call flush to write immediately. Otherwise, there's no guarantee 
				// as to when the file is written. 
				volume.FlushAll();

			} else {
				Debug.Print ("There doesn't appear to be an SD card inserted");
			}
		}

		public static void OutputSDInfo()
		{
			var vInfo = new VolumeInfo ("SD");

			if (vInfo != null) {
				Debug.Print ("Is Formatted: " + vInfo.IsFormatted.ToString ());
				Debug.Print ("Total Free Space: " + vInfo.TotalFreeSpace.ToString ());
				Debug.Print ("Total Size: " + vInfo.TotalSize.ToString ());
				Debug.Print ("File System: " + vInfo.FileSystem);
			} else {
				Debug.Print ("There doesn't appear to be an SD card in the device.");
			}

		}

		public static bool SDExists()
		{
			return (new VolumeInfo ("SD") != null);
		}

	}
}
