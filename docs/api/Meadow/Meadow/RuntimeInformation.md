---
title: Class RuntimeInformation
sidebar_label: RuntimeInformation
description: A convenience class to retrieve information about the current runtime
slug: /docs/api/Meadow/Meadow/RuntimeInformation
---
# Class RuntimeInformation
A convenience class to retrieve information about the current runtime

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/RuntimeInformation.cs#L9)
```csharp title="Declaration"
public static class RuntimeInformation
```
## Methods
### IsPlatform(MeadowPlatform)
Convenience method to check the current platform
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/RuntimeInformation.cs#L17)
```csharp title="Declaration"
public static bool IsPlatform(MeadowPlatform platform)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.MeadowPlatform](../Meadow.Hardware/MeadowPlatform) | *platform* | The MeadowPlatform to check against |

