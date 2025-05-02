---
title: Interface IMeadowCloudSettings
sidebar_label: IMeadowCloudSettings
description: An abstraction for connection settings for the Meadow.Cloud service
slug: /docs/api/Meadow/Meadow.Cloud/IMeadowCloudSettings
---
# Interface IMeadowCloudSettings
An abstraction for connection settings for the Meadow.Cloud service

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Cloud/IMeadowCloudSettings.cs#L6)
```csharp title="Declaration"
public interface IMeadowCloudSettings
```
## Properties
### AuthHostname
The host name to use for authentication
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Cloud/IMeadowCloudSettings.cs#L11)
```csharp title="Declaration"
string AuthHostname { get; set; }
```
### DataHostname
The host name used for data exchange
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Cloud/IMeadowCloudSettings.cs#L15)
```csharp title="Declaration"
string DataHostname { get; set; }
```
### EnableHealthMetrics
Enable to send health metrics to Meadow.Cloud
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Cloud/IMeadowCloudSettings.cs#L19)
```csharp title="Declaration"
bool EnableHealthMetrics { get; set; }
```
### HealthMetricsIntervalMinutes
Interval (in minutes) to send health metrics
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Cloud/IMeadowCloudSettings.cs#L23)
```csharp title="Declaration"
int HealthMetricsIntervalMinutes { get; set; }
```
### EnableUpdates
Enable to provide update service capabiltiies
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Cloud/IMeadowCloudSettings.cs#L27)
```csharp title="Declaration"
bool EnableUpdates { get; set; }
```
### MqttHostname
The host name used for cloud MQTT subscriptions
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Cloud/IMeadowCloudSettings.cs#L31)
```csharp title="Declaration"
string MqttHostname { get; set; }
```
### MqttPort
The port used for cloud MQTT subscriptions
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Cloud/IMeadowCloudSettings.cs#L35)
```csharp title="Declaration"
int MqttPort { get; set; }
```
### ConnectRetrySeconds
Reconnect period used when a disconnection from the server occurs
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Cloud/IMeadowCloudSettings.cs#L39)
```csharp title="Declaration"
int ConnectRetrySeconds { get; set; }
```
### AuthTimeoutSeconds
Timeout period used when a authenticating
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Cloud/IMeadowCloudSettings.cs#L43)
```csharp title="Declaration"
int AuthTimeoutSeconds { get; set; }
```
### UseAuthentication
Whether or not authentication is used with the cloud server
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Cloud/IMeadowCloudSettings.cs#L47)
```csharp title="Declaration"
bool UseAuthentication { get; set; }
```
### Enabled
Whether or not Meadow.Cloud services are enabled
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Cloud/IMeadowCloudSettings.cs#L51)
```csharp title="Declaration"
bool Enabled { get; set; }
```
