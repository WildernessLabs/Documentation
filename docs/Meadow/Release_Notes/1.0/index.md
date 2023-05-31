---
layout: Meadow
title: Meadow v1.0
subtitle: Release Notes
---
# v1.0 

Meadow.OS 1.0 is here! This version (OS v1.0.0.0, ESP v.1.0.0.0) is mostly a promotion of our Release Candidate 3.1 with minor fixes and adjustments in preparation for our first major non-beta release. For more information about recent work on Meadow.OS, please have a look at our [Release Candidate Release Notes](/Meadow/Release_Notes/Release-Candidates/).

## Updating to v1.0

This is a full stack release requiring an OS update, new nuget packages, a new Meadow CLI and new Visual Studio extensions.

### Updating Meadow.CLI

Start by making sure you have the latest version of the CLI (1.0.0) by running:

```bash
dotnet tool update Wildernesslabs.Meadow.CLI --global
```

### Updating Meadow.OS

Download the latest version of Meadow.OS:

```bash
meadow download os
```

Update by putting your Meadow device in boot loader mode and run:

```bash
meadow flash os
```
