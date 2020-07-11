---
layout: Meadow
title: GPS/GNSS NMEA Sentence Processor Library
subtitle: NMEA sentence decoder and processing engine for GPS and GNNS systems.
---

The GPS/GNSS NMEA procesing library is a set of classes that makes parsing and decoding [NMEA Sentences](https://gpsd.gitlab.io/gpsd/NMEA.html) from Global Positioning System (GPS)/Global Naviation Satellite System (GNSS) receivers easy. 

GPS/GNSS peripherals communicate by sending semi-standardized _sentences_ that have a prefix tag that describes their type, and data encoded in them, separated by commas. For instance, the following NMEA sentence is of the _recommended minimum information_ type and encodes location (latitude, longitude, altidude) information:

```
"$GPRMC,000049.799,V,,,,,0.00,0.00,060180,,,N*48"
```

Because of their length limits, sometimes multiple sentences are needed in order to carry an entire set of information. For example, _satellites in view_ sentences will often come in groups of three or four:

```
"$GPGSV,3,1,11,03,03,111,00,04,15,270,00,06,01,010,00,13,06,292,00*74"
"$GPGSV,3,2,11,14,25,170,00,16,57,208,39,18,67,296,40,19,40,246,00*74"
"$GPGSV,3,3,11,22,42,067,42,24,14,311,43,27,05,244,00,,,,*4D"
```

For this reason, the NMEA processing library uses an event-based, asynchronous pattern, in which sentences are passed to it, then internally routed to the correct decoder, and then events are raised as appropriate, which contain the parsed/decoded information.

## Using

To use, create an instance of the [`NmeaSentenceProcessor`](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Location.Gnss.NmeaParsing.NmeaSentenceProcessor.html), register any NMEA sentence decoders you want to use by passing an `INmeaDecoder` to the `RegisterDecoder` method, and then call `ParseNmeaMessage`, passing the NMEA sentence string. 

For example, the following Meadow application listens to a serial port for NMEA sentences, feeds them to the NMEA processor, and then listens for decoded message events and writes them to the console:

```csharp
using System;
using System.Collections.Generic;
using System.Text;
using Meadow;
using Meadow.Devices;
using Meadow.Foundation.Sensors.Location.Gnss.NmeaParsing;
using Meadow.Hardware;
using Meadow.Peripherals.Sensors.Location.Gnss;

namespace MeadowApp
{
    /// <summary>
    /// A simple app that listens to a serial GPS for NMEA sentences, parses
    /// them, and writes them to the console.
    /// </summary>
    public class MeadowApp : App<F7Micro, MeadowApp>
    {
        ISerialMessagePort serialPort;
        NmeaSentenceProcessor nmeaProcessor;

        public MeadowApp()
        {
            Console.WriteLine($"Start the SerialGPS_Listener app.");
            Initialize();
            Start();
        }

        void Initialize()
        {
            serialPort = Device.CreateSerialMessagePort(
                Device.SerialPortNames.Com4,
                suffixDelimiter: Encoding.UTF8.GetBytes("\r\n"),
                preserveDelimiter: true);
            serialPort.MessageReceived += SerialPort_MessageReceived;

            InitDecoders();
        }

        void Start()
        {
            Console.WriteLine("Starting.");
            serialPort.Open();
        }

        private void SerialPort_MessageReceived(object sender, SerialMessageData e)
        {
            Console.WriteLine("Message received.");
            
            Console.WriteLine($"{e.GetMessageString(Encoding.UTF8)}");
            nmeaProcessor.ProcessNmeaMessage(e.GetMessageString(Encoding.UTF8));
        }

        protected void InitDecoders()
        {
            Console.WriteLine("Create NMEA");
            nmeaProcessor = new NmeaSentenceProcessor();
            // verbose output
            nmeaProcessor.DebugMode = true;

            Console.WriteLine("Add decoders");

            // GGA
            var ggaDecoder = new GgaDecoder();
            Console.WriteLine("Created GGA");
            nmeaProcessor.RegisterDecoder(ggaDecoder);
            ggaDecoder.PositionReceived += (object sender, GnssPositionInfo location) => {
                Console.WriteLine("*********************************************");
                Console.WriteLine(location);
                Console.WriteLine("*********************************************");
            };

            // GLL
            var gllDecoder = new GllDecoder();
            nmeaProcessor.RegisterDecoder(gllDecoder);
            gllDecoder.GeographicLatitudeLongitudeReceived += (object sender, GnssPositionInfo location) => {
                Console.WriteLine("*********************************************");
                Console.WriteLine(location);
                Console.WriteLine("*********************************************");
            };

            // GSA
            var gsaDecoder = new GsaDecoder();
            nmeaProcessor.RegisterDecoder(gsaDecoder);
            gsaDecoder.ActiveSatellitesReceived += (object sender, ActiveSatellites activeSatellites) => {
                Console.WriteLine("*********************************************");
                Console.WriteLine(activeSatellites);
                Console.WriteLine("*********************************************");
            };

            // RMC (recommended minimum)
            var rmcDecoder = new RmcDecoder();
            nmeaProcessor.RegisterDecoder(rmcDecoder);
            rmcDecoder.PositionCourseAndTimeReceived += (object sender, GnssPositionInfo positionCourseAndTime) => {
                Console.WriteLine("*********************************************");
                Console.WriteLine(positionCourseAndTime);
                Console.WriteLine("*********************************************");

            };

            // VTG (course made good)
            var vtgDecoder = new VtgDecoder();
            nmeaProcessor.RegisterDecoder(vtgDecoder);
            vtgDecoder.CourseAndVelocityReceived += (object sender, CourseOverGround courseAndVelocity) => {
                Console.WriteLine("*********************************************");
                Console.WriteLine($"{courseAndVelocity}");
                Console.WriteLine("*********************************************");
            };

            // GSV (satellites in view)
            var gsvDecoder = new GsvDecoder();
            nmeaProcessor.RegisterDecoder(gsvDecoder);
            gsvDecoder.SatellitesInViewReceived += (object sender, SatellitesInView satellites) => {
                Console.WriteLine("*********************************************");
                Console.WriteLine($"{satellites}");
                Console.WriteLine("*********************************************");
            };
        }
    }
}
```

    
## NMEA Sentence Class with Automatic Parsing

If you need to manually construct or parse a NMEA sentence, you can use the [`NmeaSentence`](/docs/api/Meadow/Meadow.Peripherals.Sensors.Location.Gnss.NmeaSentence.html) class.

### Parsing a NMEA Sentence

You can automatically parse a NMEA `string` via the `.From()` method:

```csharp
NmeaSentence sentence = NmeaSentence.From("$GPRMC,000049.799,V,,,,,0.00,0.00,060180,,,N*48");
```

This will create a new instance of the `NmeaSentence` class with the NMEA data populated and accessible via its properties. To access the data elements of the actual message, you can access the `DataElements` property which is a  `List<string>` containing each string element.

### Outputting a NMEA Sentence with Checksum

NMEA sentences must have a calculated checksum at the end of the string that validates the data contained within. If you call `ToString()` on the `NmeaSentence`, it'll automatically calculate the checksum for you and append it to the output.
    
## Built-in Decoders

There are a number of built-in NMEA decoders for the most common sentences, including:

 * **GgaDecoder** - _GPS Fix Data_ decoder. Comprehensive location data including latitude, longitude, altitude, quality of signal, time, and precision.
 * **GllDecoder** - _Geographic Position - Latitude/Longitude_ decoder. Describes location of reciever in latitude and longitude coordinates.
 * **GsaDecoder** - _GPS Dilution of Precision (DoP) and Active Satellites_ decoder. Lists the satelites used for the location fix, along with their dilution of precision information.
 * **GsvDecoder** - _Satellites in View_ decoder. Describes the sky position of satellites that the GPS receiver can "see."
 * **RmcDecoder** - _Recommended Minimum Navigation Information_ decoder. Includes the minimum amount of navigation information including position as well as _track made good_ (direction of travel) and speed.
 * **VtgDecoder** - _Track Made Good and Ground Speed_ decoder. Describes the course over ground (direction of travel) as well as the speed.

All of these are open source, and it's easy to add new sentence parser as well.