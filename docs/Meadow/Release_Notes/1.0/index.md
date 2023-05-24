---
layout: Meadow
title: Meadow v1.0
subtitle: Release Notes
---
# 1.0 (OS v1.0.0.0, ESP v.1.0.0.0)

Meadow.OS 1.0 is here! This version is mostly a promotion of our Release Candidate 3.1 with minor fixes and adjustments in preparation for our first major non-beta release. For more information about recent work on Meadow.OS, please have a look at our [Release Candidate Release Notes](https://github.com/WildernessLabs/Documentation/new/develop/docs/Meadow/Release_Notes#:~:text=Lifecycle_Update-,index,-.md).

## Updating to 1.0

This is a full stack release requiring an OS update, new nuget packages, a new Meadow CLI and new Visual Studio extensions.

### Updating Meadow.CLI

Start by making sure you have the latest version of the CLI (0.98.x) by running:

```bash
dotnet tool update Wildernesslabs.Meadow.CLI --global
```

### Updating Meadow.OS

Download the latest os:

```bash
meadow download os
```

And update by putting your Meadow device in boot loader mode and running:

```bash
meadow flash os
```
