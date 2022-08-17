---
layout: Meadow
title: macOS
subtitle: Troubleshooting guide for macOS-specific issues
---

## `libusb` not found on ARM Macs

While updating the Meadow.OS on an ARM Mac (M1, M1 Pro, M2, etc.), you may encounter an `libusb` error.

> An exception occurred while switching device to DFU Mode. Exception: System.DllNotFoundException: libusb-1.0 library not found.

Currently, Meadow.OS deployments require an x64 version of `libusb` that isn't installed by default on ARM Macs. As a workaround, run the following commands to install the x64 version of `libusb` and then add some additional required locations to your `PATH`.

```console
arch -x86_64 brew install libusb
export PATH=$HOME/Meadow.CLI/Meadow.CLI/bin/Debug/:/usr/local/share/dotnet/x64/:$PATH
```
