---
title: Class MeadowSystemErrorInfo
sidebar_label: MeadowSystemErrorInfo
description: Contains information about a Meadow system error
slug: /docs/api/Meadow/Meadow/MeadowSystemErrorInfo
---
# Class MeadowSystemErrorInfo
Contains information about a Meadow system error

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Exceptions/MeadowSystemErrorInfo.cs#L8)
```csharp title="Declaration"
public class MeadowSystemErrorInfo
```
**Derived:**  
[Meadow.MeadowCloudSystemErrorInfo](../Meadow/MeadowCloudSystemErrorInfo)

## Properties
### Message
The error message
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Exceptions/MeadowSystemErrorInfo.cs#L32)
```csharp title="Declaration"
public string Message { get; }
```
### ErrorNumber
The system error number associated with the error
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Exceptions/MeadowSystemErrorInfo.cs#L36)
```csharp title="Declaration"
public MeadowSystemErrorInfo.SystemErrorNumber ErrorNumber { get; }
```
### Exception
Optinal exception information associated with the error
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Exceptions/MeadowSystemErrorInfo.cs#L40)
```csharp title="Declaration"
public Exception? Exception { get; }
```
## Methods
### ToString()
Returns a string that represents the current object.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Exceptions/MeadowSystemErrorInfo.cs#L59)
```csharp title="Declaration"
public override string ToString()
```

##### Returns

`System.String`: A string that represents the current object.
