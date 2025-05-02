---
title: Class ConfigurableObject
sidebar_label: ConfigurableObject
description: Represents a configurable object.
slug: /docs/api/Meadow/Meadow/ConfigurableObject
---
# Class ConfigurableObject
Represents a configurable object.

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Configuration/ConfigurableObject.cs#L10)
```csharp title="Declaration"
public abstract class ConfigurableObject
```
## Properties
### ConfigurationRoot
Gets or sets the configuration root.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Configuration/ConfigurableObject.cs#L30)
```csharp title="Declaration"
protected IConfiguration? ConfigurationRoot { get; }
```
### ConfigurationRootPath
Gets the configuration root path.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Configuration/ConfigurableObject.cs#L35)
```csharp title="Declaration"
protected string ConfigurationRootPath { get; }
```
## Fields
### DefaultJsonFileName
The default JSON file name for configuration.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Configuration/ConfigurableObject.cs#L15)
```csharp title="Declaration"
public const string DefaultJsonFileName = "app.config.json"
```
### DefaultYamlFileName
The default YAML file name for configuration.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Configuration/ConfigurableObject.cs#L20)
```csharp title="Declaration"
public const string DefaultYamlFileName = "app.config.yaml"
```
## Methods
### GetConfiguredFloat(string?, float)
Gets the configured float value for the specified name.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Configuration/ConfigurableObject.cs#L133)
```csharp title="Declaration"
public float GetConfiguredFloat(string? name = null, float defaultValue = 0)
```

##### Returns

`System.Single`: The configured float value.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *name* | The name of the configuration value. |
| `System.Single` | *defaultValue* | The default value to return if the configuration value is not found or is invalid. |

### GetConfiguredBool(string?, bool)
Gets the configured boolean value for the specified name.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Configuration/ConfigurableObject.cs#L154)
```csharp title="Declaration"
public bool GetConfiguredBool(string? name = null, bool defaultValue = false)
```

##### Returns

`System.Boolean`: The configured boolean value.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *name* | The name of the configuration value. |
| `System.Boolean` | *defaultValue* | The default value to return if the configuration value is not found or is invalid. |

### GetConfiguredInt(string?, int)
Gets the configured integer value for the specified name.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Configuration/ConfigurableObject.cs#L175)
```csharp title="Declaration"
public int GetConfiguredInt(string? name = null, int defaultValue = 0)
```

##### Returns

`System.Int32`: The configured integer value.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *name* | The name of the configuration value. |
| `System.Int32` | *defaultValue* | The default value to return if the configuration value is not found or is invalid. |

### GetConfiguredString(string?, string)
Gets the configured string value for the specified name.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Configuration/ConfigurableObject.cs#L196)
```csharp title="Declaration"
public string GetConfiguredString(string? name = null, string defaultValue = "")
```

##### Returns

`System.String`: The configured string value.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *name* | The name of the configuration value. |
| `System.String` | *defaultValue* | The default value to return if the configuration value is not found or is invalid. |

### GetConfiguredValue(string?)
Gets the configured value for the specified name.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Configuration/ConfigurableObject.cs#L216)
```csharp title="Declaration"
public string? GetConfiguredValue(string? name = null)
```

##### Returns

`System.String`: The configured value as a string, or null if not found.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *name* | The name of the configuration value. |

