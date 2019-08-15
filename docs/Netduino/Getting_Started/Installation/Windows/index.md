---
layout: Netduino
title: Windows Installation
subtitle: Installing the .NET MicroFramework and Netduino SDKs on Windows.
---
## Windows

### Instructions

Download and install the following:

1.  [Visual Studio 2015](https://visualstudio.microsoft.com/vs/older-downloads/). Note, community edition is free, but you’ll need to create an account if you don’t already have one.
2.  [.NET Micro Framework (.NETMF) v4.3.2 - QFE2 SDK](https://www.wildernesslabs.co/downloads?f=/NETMF_SDK/netmf-v4.3.2-SDK-QFE2-RTM.zip)
3. NETMF Plugin for Visual Studio [Visual Studio 2015](https://www.wildernesslabs.co/downloads?f=/NETMF_SDK/netmfvs14.vsix)
<!-- or [Visual Studio 2013](http://downloads.wildernesslabs.co/NETMF_SDK/netmfvs2013.vsix)-->
4. [Netduino SDK](https://www.wildernesslabs.co/downloads?f=/Netduino_SDK/netduinosdk_v5.exe)

### Troubleshooting

### 0x80131700 Build Error on .NET Micro Framework

This error can happen when building an application on newer versions of Windows as .NET Framework 2.0 is not installed by default.

#### Solution

Download and install .NET Framework 3.5 (this also contains .NET Framework 2.0).  This can be done by [downloading the framework from Microsoft](https://www.microsoft.com/en-us/download/details.aspx?id=22) or through Control Panel.

In order to do this through Control Panel:

* Open Control Panel
* Select Programs and Features
* Select Turn Windows features on or off
* Select .Net Framework 3.5 (Includes .NET 2.0 and 3.0)
* Click OK
