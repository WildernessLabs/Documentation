---
layout: Netduino
title: Network Info
subtitle: Configuring and initialing the Network interface and accessing network resources.
---

## Network Info

The network-enabled Netduinos; N2+, N3E, and N3WiFi have a robustly featured network stack that includes support for high level network APIs such as `HttpWebRequest` as well as low-level socket programming, UDP multicast support, and more.

However, network programming on an MCU based device is a little different than traditional server or desktop app network programming. On a stand-alone MCU powered device such as a Netduino, there are setup and initialization tasks that are usually already done by the time a server or a desktop app is executed, such as configuring the WiFi network, or requesting an IP from a DHCP server.
