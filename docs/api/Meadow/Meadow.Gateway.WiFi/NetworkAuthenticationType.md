---
title: Enum NetworkAuthenticationType
sidebar_label: NetworkAuthenticationType
description: Describes the type of WiFi network authentication.
slug: /docs/api/Meadow/Meadow.Gateway.WiFi/NetworkAuthenticationType
---
# Enum NetworkAuthenticationType
Describes the type of WiFi network authentication.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/NetworkAuthenticationType.cs#L6)
```csharp title="Declaration"
public enum NetworkAuthenticationType
```
## Fields
### None
No authentication enabled.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/NetworkAuthenticationType.cs#L11)
```csharp title="Declaration"
None = 0
```
### Wep
Open authentication over 802.11 wireless. Devices are authenticated and can connect to an
access point, but communication with the network requires a matching Wired Equivalent Privacy (WEP) key.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/NetworkAuthenticationType.cs#L17)
```csharp title="Declaration"
Wep = 1
```
### WpaPsk
Specifies a Wi-Fi Protected Access (WPA) algorithm that uses pre-shared keys (PSK). IEEE 802.1X port
authorization is performed by the supplicant and authenticator. Cipher keys are dynamically derived
through a pre-shared key that is used on both the supplicant and authenticator.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/NetworkAuthenticationType.cs#L24)
```csharp title="Declaration"
WpaPsk = 2
```
### Wpa2Psk
Specifies a Wi-Fi Protected Access 2 (WPAs) algorithm that uses pre-shared keys (PSK). IEEE 802.1X port
authorization is performed by the supplicant and authenticator. Cipher keys are dynamically derived
through a pre-shared key that is used on both the supplicant and authenticator.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/NetworkAuthenticationType.cs#L31)
```csharp title="Declaration"
Wpa2Psk = 3
```
### WpaWpa2Psk
WPA PSK or WPA2 PSk encryption.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/NetworkAuthenticationType.cs#L36)
```csharp title="Declaration"
WpaWpa2Psk = 4
```
### Wpa2Enterprise
WPA Enterprise authentication using a RADIUS server.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/NetworkAuthenticationType.cs#L41)
```csharp title="Declaration"
Wpa2Enterprise = 5
```
### Open80211
Open authentication over 802.11 wireless. Devices are authenticated and can connect to an
access point, but communication with the network requires a matching Wired Equivalent Privacy (WEP) key.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/NetworkAuthenticationType.cs#L47)
```csharp title="Declaration"
Open80211 = 6
```
### SharedKey80211
Specifies an IEEE 802.11 Shared Key authentication algorithm that requires the use of a pre-shared
Wired Equivalent Privacy (WEP) key for the 802.11 authentication.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/NetworkAuthenticationType.cs#L53)
```csharp title="Declaration"
SharedKey80211 = 7
```
### Wpa
Specifies a Wi-Fi Protected Access (WPA) algorithm. IEEE 802.1X port authorization is performed by
the supplicant, authenticator, and authentication server. Cipher keys are dynamically derived through
the authentication process.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/NetworkAuthenticationType.cs#L60)
```csharp title="Declaration"
Wpa = 8
```
### WpaNone
Wi-Fi Protected Access.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/NetworkAuthenticationType.cs#L65)
```csharp title="Declaration"
WpaNone = 9
```
### Rsna
Specifies an IEEE 802.11i Robust Security Network Association (RSNA) algorithm. IEEE 802.1X port
authorization is performed by the supplicant, authenticator, and authentication server. Cipher keys
are dynamically derived through the authentication process.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/NetworkAuthenticationType.cs#L72)
```csharp title="Declaration"
Rsna = 10
```
### RsnaPsk
Specifies an IEEE 802.11i RSNA algorithm that uses PSK. IEEE 802.1X port authorization is performed
by the supplicant and authenticator. Cipher keys are dynamically derived through a pre-shared key
that is used on both the supplicant and authenticator.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/NetworkAuthenticationType.cs#L79)
```csharp title="Declaration"
RsnaPsk = 11
```
### Ihv
Specifies an authentication type defined by an independent hardware vendor (IHV).
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/NetworkAuthenticationType.cs#L84)
```csharp title="Declaration"
Ihv = 12
```
### Wpa3Psk
Specifies a Wi-Fi Protected Access 3 (WPAs) algorithm that uses pre-shared keys (PSK). IEEE 802.1X port
authorization is performed by the supplicant and authenticator. Cipher keys are dynamically derived
through a pre-shared key that is used on both the supplicant and authenticator.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/NetworkAuthenticationType.cs#L91)
```csharp title="Declaration"
Wpa3Psk = 13
```
### WpaWap3Psk
WPA PSK or WPA3 PSk encryption.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/NetworkAuthenticationType.cs#L96)
```csharp title="Declaration"
WpaWap3Psk = 14
```
### Unknown
Unknown authentication type.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/NetworkAuthenticationType.cs#L101)
```csharp title="Declaration"
Unknown = 1
```
