---
layout: Meadow
title: GNSS with Cellular
subtitle: Using GNSS with cellular modules
---

Some cellular modules, such as the BG95-M3, offer support for GNSS functionalities. As illustrated in the following example, you can define an interval between the position fixes, as well as select which kind of NMEA sentence should be retrieved, by specifying it in an `IGnssResult` array:

```csharp
using Meadow.Foundation.Sensors.Location.Gnss;
using Meadow.Peripherals.Sensors.Location.Gnss;
using Meadow.Foundation.Sensors.Gnss;
...
void ProcessGnssPosition(object sender, IGnssResult location)
{
   Resolver.Log.Info("*********************************************");
   Resolver.Log.Info(location.ToString());
   Resolver.Log.Info("*********************************************");
}
...
IGnssResult[] resultTypes = new IGnssResult[]
{
   new GnssPositionInfo(),
   new ActiveSatellites(),
   new CourseOverGround(),
   new SatellitesInView(new Satellite[0])
};

ICellNetworkAdapter cell = networkAdapter as ICellNetworkAdapter;

var bg95M3 = new Bg95M3(cellAdapter, TimeSpan.FromMinutes(30), resultTypes);

bg95M3.GnssDataReceived += ProcessGnssPosition;

bg95M3.StartUpdating();
...
```

For a more comprehensive example, you can refer to the [BG95-M3 GNSS sample](https://github.com/WildernessLabs/Meadow.Foundation/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Bg95M3/Samples/Bg95M3_Sample/MeadowApp.cs) available in the Meadow.Foundation repository.

## GNSS Hardware Setup

When utilizing a **Quectel BG95-M3 NimbeLink Skywire click board**, you can follow the same setup instructions as for the cellular connection. Additionally, ensure you attach a GPS antenna to the `X3` IPX connector to enable your cellular module to obtain position fixes.

> **Note**: Due to a hardware limitation of this board, concurrent use of GNSS and Cellular functionality is not possible. Consequently, you may experience disconnection from the cellular network for a brief period while the module acquires a position fix. It is advisable to avoid using very short time intervals between obtaining position fixes for a seamless user experience.

## Additional resources

For general cellular module usage, you can refer to the [Developing Cellular Apps](/Meadow/Meadow.OS/Cellular/Develop_Cellular_Apps) guide.

If you have trouble connecting to your cellular network, check out the [Troubleshooting](/Meadow/Meadow.OS/Cellular/Troubleshooting) guide for some tips on how to scan for available networks and check the cellular network connection logs.
