---
title: Class JsonPropertyNameAttribute
sidebar_label: JsonPropertyNameAttribute
description: >-
  Specifies the property name that is present in the JSON when serializing and
  deserializing.
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Serialization/JsonPropertyNameAttribute
---
# Class JsonPropertyNameAttribute
Specifies the property name that is present in the JSON when serializing and deserializing.

###### **Assembly**: MicroJson.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Serialization.MicroJson/Driver/JsonPropertyNameAttribute.cs#L8)
```csharp title="Declaration"
[AttributeUsage(AttributeTargets.Property, Inherited = true)]
public class JsonPropertyNameAttribute : Attribute
```
**Inheritance:** `System.Object` -> `System.Attribute`

## Properties
### PropertyName
Gets the name of the property.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Serialization.MicroJson/Driver/JsonPropertyNameAttribute.cs#L14)
```csharp title="Declaration"
public string PropertyName { get; }
```
