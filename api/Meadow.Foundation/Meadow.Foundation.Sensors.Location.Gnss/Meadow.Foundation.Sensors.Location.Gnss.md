---
title: Namespace Meadow.Foundation.Sensors.Location.Gnss
sidebar_label: Meadow.Foundation.Sensors.Location.Gnss
---
# Namespace Meadow.Foundation.Sensors.Location.Gnss
## Classes
### [GgaDecoder](../Meadow.Foundation.Sensors.Location.Gnss/GgaDecoder)
Decoder for GGA messages.
### [GllDecoder](../Meadow.Foundation.Sensors.Location.Gnss/GllDecoder)
Process GLL (Geographic position Latitude / Longitude) messages from a
GPS receiver.
### [GsaDecoder](../Meadow.Foundation.Sensors.Location.Gnss/GsaDecoder)
GSA decoder class
### [GsvDecoder](../Meadow.Foundation.Sensors.Location.Gnss/GsvDecoder)
Process the Satellites in view messages from a GPS module.
### [NmeaSentenceProcessor](../Meadow.Foundation.Sensors.Location.Gnss/NmeaSentenceProcessor)
An engine that processes NMEA GPS/GNSS sentences by calling the appropriate
decoder and handing them off. Note that it's designed to be asynchronous
because certain messages (like $GPGSV/Satellites in View) need to be
processed together in order to make sense.
### [NmeaUtilities](../Meadow.Foundation.Sensors.Location.Gnss/NmeaUtilities)
Provide common functionality for the decode classes.
### [RmcDecoder](../Meadow.Foundation.Sensors.Location.Gnss/RmcDecoder)
Decode RMC - Recommended Minimum Specific GPS messages.
### [VtgDecoder](../Meadow.Foundation.Sensors.Location.Gnss/VtgDecoder)
Parses VTG (Velocity Made Good) messages from a GPS/GNSS receiver.
## Interfaces
### [INmeaDecoder](../Meadow.Foundation.Sensors.Location.Gnss/INmeaDecoder)
Base class for NMEA sentence decoder classes
