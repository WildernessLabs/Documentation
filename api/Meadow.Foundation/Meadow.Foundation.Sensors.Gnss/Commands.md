---
title: Struct Commands
sidebar_label: Commands
description: "GNSS Commands struct"
---
# Struct Commands
GNSS Commands struct

###### **Assembly**: Mt3339.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Commands.cs#L6)
```csharp title="Declaration"
public struct Commands
```
## Fields
### PMTK_SET_BAUD_115200
115,200 baud
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Commands.cs#L15)
```csharp title="Declaration"
public const string PMTK_SET_BAUD_115200 = "$PMTK251,115200*1F"
```
### PMTK_SET_BAUD_57600
57,600 baud
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Commands.cs#L19)
```csharp title="Declaration"
public const string PMTK_SET_BAUD_57600 = "$PMTK251,57600*2C"
```
### PMTK_SET_BAUD_9600
9,600 baud
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Commands.cs#L23)
```csharp title="Declaration"
public const string PMTK_SET_BAUD_9600 = "$PMTK251,9600*17"
```
### PMTK_SET_NMEA_OUTPUT_GLLONLY
GPGLL only
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Commands.cs#L33)
```csharp title="Declaration"
public const string PMTK_SET_NMEA_OUTPUT_GLLONLY = "$PMTK314,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0*29"
```
### PMTK_SET_NMEA_OUTPUT_RMCONLY
GPRMC only
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Commands.cs#L38)
```csharp title="Declaration"
public const string PMTK_SET_NMEA_OUTPUT_RMCONLY = "$PMTK314,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0*29"
```
### PMTK_SET_NMEA_OUTPUT_VTGONLY
GPVTG only
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Commands.cs#L43)
```csharp title="Declaration"
public const string PMTK_SET_NMEA_OUTPUT_VTGONLY = "$PMTK314,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0*29"
```
### PMTK_SET_NMEA_OUTPUT_GGAONLY
GPGGA only
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Commands.cs#L48)
```csharp title="Declaration"
public const string PMTK_SET_NMEA_OUTPUT_GGAONLY = "$PMTK314,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0*29"
```
### PMTK_SET_NMEA_OUTPUT_GSAONLY
GPGSA only
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Commands.cs#L53)
```csharp title="Declaration"
public const string PMTK_SET_NMEA_OUTPUT_GSAONLY = "$PMTK314,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0*29"
```
### PMTK_SET_NMEA_OUTPUT_GSVONLY
GPGSV only
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Commands.cs#L58)
```csharp title="Declaration"
public const string PMTK_SET_NMEA_OUTPUT_GSVONLY = "$PMTK314,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0*29"
```
### PMTK_SET_NMEA_OUTPUT_RMCGGA
GPRMC + GPGGA
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Commands.cs#L63)
```csharp title="Declaration"
public const string PMTK_SET_NMEA_OUTPUT_RMCGGA = "$PMTK314,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0*28"
```
### PMTK_SET_NMEA_OUTPUT_RMCGGAGSA
GPRMC, GPGGA, + GPGSA
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Commands.cs#L68)
```csharp title="Declaration"
public const string PMTK_SET_NMEA_OUTPUT_RMCGGAGSA = "$PMTK314,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0*29"
```
### PMTK_SET_NMEA_OUTPUT_ALLDATA
All data
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Commands.cs#L73)
```csharp title="Declaration"
public const string PMTK_SET_NMEA_OUTPUT_ALLDATA = "$PMTK314,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0*28"
```
### PMTK_SET_NMEA_OUTPUT_OFF
None
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Commands.cs#L78)
```csharp title="Declaration"
public const string PMTK_SET_NMEA_OUTPUT_OFF = "$PMTK314,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0*28"
```
### PMTK_SET_NMEA_UPDATE_100_MILLIHERTZ
Once every 10 seconds, 100 millihertz.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Commands.cs#L91)
```csharp title="Declaration"
public const string PMTK_SET_NMEA_UPDATE_100_MILLIHERTZ = "$PMTK220,10000*2F"
```
### PMTK_SET_NMEA_UPDATE_200_MILLIHERTZ
Once every 5 seconds, 200 millihertz.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Commands.cs#L95)
```csharp title="Declaration"
public const string PMTK_SET_NMEA_UPDATE_200_MILLIHERTZ = "$PMTK220,5000*1B"
```
### PMTK_SET_NMEA_UPDATE_1HZ
1Hz
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Commands.cs#L99)
```csharp title="Declaration"
public const string PMTK_SET_NMEA_UPDATE_1HZ = "$PMTK220,1000*1F"
```
### PMTK_SET_NMEA_UPDATE_2HZ
2Hz
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Commands.cs#L103)
```csharp title="Declaration"
public const string PMTK_SET_NMEA_UPDATE_2HZ = "$PMTK220,500*2B"
```
### PMTK_SET_NMEA_UPDATE_5HZ
5Hz
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Commands.cs#L107)
```csharp title="Declaration"
public const string PMTK_SET_NMEA_UPDATE_5HZ = "$PMTK220,200*2C"
```
### PMTK_SET_NMEA_UPDATE_10HZ
10Hz
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Commands.cs#L111)
```csharp title="Declaration"
public const string PMTK_SET_NMEA_UPDATE_10HZ = "$PMTK220,100*2F"
```
### PMTK_API_SET_FIX_CTL_100_MILLIHERTZ
Once every 10 seconds, 100 millihertz.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Commands.cs#L117)
```csharp title="Declaration"
public const string PMTK_API_SET_FIX_CTL_100_MILLIHERTZ = "$PMTK300,10000,0,0,0,0*2C"
```
### PMTK_API_SET_FIX_CTL_200_MILLIHERTZ
Once every 5 seconds, 200 millihertz.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Commands.cs#L121)
```csharp title="Declaration"
public const string PMTK_API_SET_FIX_CTL_200_MILLIHERTZ = "$PMTK300,5000,0,0,0,0*18"
```
### PMTK_API_SET_FIX_CTL_1HZ
1Hz
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Commands.cs#L125)
```csharp title="Declaration"
public const string PMTK_API_SET_FIX_CTL_1HZ = "$PMTK300,1000,0,0,0,0*1C"
```
### PMTK_API_SET_FIX_CTL_5HZ
5Hz. Note, it can't go any faster than 5x/sec.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Commands.cs#L129)
```csharp title="Declaration"
public const string PMTK_API_SET_FIX_CTL_5HZ = "$PMTK300,200,0,0,0,0*2F"
```
### PMTK_LOCUS_STARTLOG
Start logging data
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Commands.cs#L135)
```csharp title="Declaration"
public const string PMTK_LOCUS_STARTLOG = "$PMTK185,0*22"
```
### PMTK_LOCUS_STOPLOG
Stop logging data
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Commands.cs#L140)
```csharp title="Declaration"
public const string PMTK_LOCUS_STOPLOG = "$PMTK185,1*23"
```
### PMTK_LOCUS_STARTSTOPACK
Acknowledge the start or stop command
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Commands.cs#L145)
```csharp title="Declaration"
public const string PMTK_LOCUS_STARTSTOPACK = "$PMTK001,185,3*3C"
```
### PMTK_LOCUS_QUERY_STATUS
Query the logging status
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Commands.cs#L150)
```csharp title="Declaration"
public const string PMTK_LOCUS_QUERY_STATUS = "$PMTK183*38"
```
### PMTK_LOCUS_ERASE_FLASH
Erase the log flash data
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Commands.cs#L155)
```csharp title="Declaration"
public const string PMTK_LOCUS_ERASE_FLASH = "$PMTK184,1*22"
```
### LOCUS_OVERLAP
If flash is full, log will overwrite old data with new logs
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Commands.cs#L160)
```csharp title="Declaration"
public const bool LOCUS_OVERLAP = false
```
### LOCUS_FULLSTOP
If flash is full, logging will stop
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Commands.cs#L164)
```csharp title="Declaration"
public const bool LOCUS_FULLSTOP = true
```
### PMTK_ENABLE_SBAS
Enable search for SBAS satellite (only works with 1Hz output rate)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Commands.cs#L169)
```csharp title="Declaration"
public const string PMTK_ENABLE_SBAS = "$PMTK313,1*2E"
```
### PMTK_ENABLE_WAAS
Use WAAS for DGPS correction data
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Commands.cs#L174)
```csharp title="Declaration"
public const string PMTK_ENABLE_WAAS = "$PMTK301,2*2E"
```
### PMTK_STANDBY
standby command and boot successful message
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Commands.cs#L179)
```csharp title="Declaration"
public const string PMTK_STANDBY = "$PMTK161,0*28"
```
### PMTK_STANDBY_SUCCESS
Not needed currently
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Commands.cs#L184)
```csharp title="Declaration"
public const string PMTK_STANDBY_SUCCESS = "$PMTK001,161,3*36"
```
### PMTK_AWAKE
Wake up
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Commands.cs#L189)
```csharp title="Declaration"
public const string PMTK_AWAKE = "$PMTK010,002*2D"
```
### PMTK_Q_RELEASE
ask for the release and version
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Commands.cs#L194)
```csharp title="Declaration"
public const string PMTK_Q_RELEASE = "$PMTK605*31"
```
### PGCMD_ANTENNA
request for updates on antenna status
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Commands.cs#L200)
```csharp title="Declaration"
public const string PGCMD_ANTENNA = "$PGCMD,33,1*6C"
```
### PGCMD_NOANTENNA
don't show antenna status messages
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/Commands.cs#L204)
```csharp title="Declaration"
public const string PGCMD_NOANTENNA = "$PGCMD,33,0*6D"
```
