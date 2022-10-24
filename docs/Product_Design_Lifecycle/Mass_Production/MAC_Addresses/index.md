---
title: MAC Addresses
---

If your product has a network adapter, regardless of how it connects (WiFi, Ethernet, other), the network adapter needs to have a unique [MAC address](https://www.wikiwand.com/en/MAC_address) (Wikipedia link). A unique MAC address ensures that a device can have network traffic directed to it without conflicts with other devices.

# Block Size + Cost

MAC Address registrations are managed by the [IEEE-SA Standard Organization](http://standards.ieee.org/main/regauth/grpmac/) and are assigned in blocks that are priced according to the number of addresses assigned. IEEE-SA also provides cofidential registration for an additional fee (and yearly maintenance cost):

| Block Type | Block Size | Price (USD)|
|------------|------------|------|
| Public MA-S (Small) | 4,096 | $685|
| Public MA-M (Medium) | ~1 Million | $1,645|
| Public MA-L (Large) | ~16 Million | $2,735|

## Confidentiality/Private Registration Fees

| Block Type | Yearly Fee (USD)|
|------------|------|
| MA-S | $1,115 |
| Private MA-M | $2,070 |
| Private MA-L | $3,165 |

# Assigning to Device

After assembly, the MAC address should be written to the One Time Programmable (OTP) memory of the device, usually at the same time a USB Vendor ID (if applicable) is written.

[Documentation to come in the future]
