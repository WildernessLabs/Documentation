---
layout: Meadow
title: Meadow v1.0 Release-Candidates
subtitle: Release Notes
---

# RC-1

[woot! first release candidate:]

* **OtA Updates** - [stuff]
* **JiT** - [stuff]
* **Power & Sleep APIs** - [stuff]
* **New App Lifecycle** - [stuff]
* **Faster WiFi Connection** - We have made changes to the event model on the ESP32 resulting in a 90% decrease in WiFi connection times.  Average connection times should now be in the rage3-5 seconds.

## Updating

This is a full stack release requiring an OS update, new nuget packages, a new Meadow CLI and new Visual Studio extensions.

### Meadow.CLI

Start by making sure you have the latest version of the CLI (0.19.3) by running:

```bash
dotnet tool update Wildernesslabs.Meadow.CLI --global
```

### Meadow.OS

Download the latest os:

```bash
meadow download os
```

And update by putting your Meadow device in boot loader mode and running:

```bash
meadow flash os
```

If you experience any stability or deployment issues you may need to erase the flash on Meadow and then re-install the latest OS:

```bash
meadow flash erase
```

## Meadow.OS

[new stuff, improvements]

## Meadow.Core

[new stuff, improvements]

## Meadow.Foundation

[new stuff, improvements]

## Tooling

[new stuff, improvements]

## Bug Fixes

* [[BUG NAME ##]](Link) - [outcome].

## Known Issues
