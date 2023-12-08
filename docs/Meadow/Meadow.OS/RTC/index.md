---
layout: Meadow
title: Real Time Clock
subtitle: Use Meadow's onboard RTC module to keep the time for logging or other use cases.
---

The STM32F7 is equipped with a real-time clock (RTC), which, when set, will retain the system time as long as the the board has power. 

# Using

To use Meadow's RTC module, simply set the time with the device platform's *SetClock* method:

```csharp
Device.PlatformOS.SetClock(new DateTime(
    year: 2021, 
    month: 04, 
    day: 05, 
    hour: 15, 
    minute: 33, 
    second: 25));
```

Once set, you can use DateTime.Now to retrieve the current local date and time.

```csharp
DateTime clock = DateTime.Now;
```

## Sample Application

You can check these RTC Samples on Hackster that you can try out yourself. Notice that you can either set the time manually, or you can use a config file that will get and set your local date and time via Network Time Protocol at app startup.

<table>
  <tbody>
    <tr>
      <td style={{ width: "50%" }}>
        <img
          alt="Video showing a Meadow connected to a multi-line character display showing text, Meadow RTC is now available in b3.9, followed by the date and then the current time with the seconds incrementing."
          src="../../../Common_Files/Hackster/RtcClock.gif"
        />
      </td>
      <td style={{ width: "50%", fontSize: 20 }}>
        <p style={{ fontSize: 22 }}>
          <a
            style={{ fontSize: 25 }}
            href="https://www.hackster.io/wilderness-labs/build-a-clock-with-meadow-s-onboard-real-time-clock-chip-2b1f85"
          >
            Build a Clock with Meadow's Onboard Real Time Clock Chip
          </a>
          <br />
          Build your own clock with an LCD display, a couple of Push Buttons and
          a Meadow F7 board and its onboard RTC, all using full.NET and C#.
        </p>
      </td>
    </tr>
    <tr>
      <td style={{ width: "50%" }}>
        <img
          alt="Video showing a vertical LED matrix showing the current date and then the current time when a button is pressed."
          src="../../../Common_Files/Hackster/RtcWifi.gif"
        />
      </td>
      <td style={{ width: "50%" }}>
        <p style={{ fontSize: 22 }}>
          <a
            style={{ fontSize: 25 }}
            href="https://www.hackster.io/wilderness-labs/build-a-wifi-connected-clock-using-meadow-e0c6b6"
          >
            Build a WIFI Connected Clock Using Meadow
          </a>
          <br />
          Build this nifty clock with Meadow getting the date and time from an
          NTP server via WIFI and room temperature with an LM35 Analog sensor.
        </p>
      </td>
    </tr>
    <tr>
      <td style={{ width: "50%" }}>
        <img
          alt="Video showing a Meadow connected to a multi-line character display showing the date, time, indoor and outdoor temperatures, and a weather description."
          src="../../../Common_Files/Hackster/RtcChristmas.gif"
        />
      </td>
      <td style={{ width: "50%" }}>
        <p style={{ fontSize: 22 }}>
          <a
            style={{ fontSize: 25 }}
            href="https://www.hackster.io/wilderness-labs/wifi-christmas-countdown-timer-w-an-lcd-display-and-meadow-e4cf9c"
          >
            WIFI Christmas Countdown Timer w/ an LCD Display and Meadow
          </a>
          <br />
          Use Meadow.Foundation to quickly and easily wire up a LCD screen and
          to make a Christmas countdown display.
        </p>
      </td>
    </tr>
  </tbody>
</table>
