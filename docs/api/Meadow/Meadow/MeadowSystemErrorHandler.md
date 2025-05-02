---
title: Delegate MeadowSystemErrorHandler
sidebar_label: MeadowSystemErrorHandler
description: Represents a handler function to process captured Meadow system errors
slug: /docs/api/Meadow/Meadow/MeadowSystemErrorHandler
---
# Delegate MeadowSystemErrorHandler
Represents a handler function to process captured Meadow system errors

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/IReliabilityService.cs#L13)
```csharp title="Declaration"
public delegate void MeadowSystemErrorHandler(MeadowSystemErrorInfo error, bool recommendReset, out bool forceReset)
```
