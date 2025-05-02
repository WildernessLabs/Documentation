---
title: Struct AllocationInfo
sidebar_label: AllocationInfo
description: A collection of device memory-allocation statistics
slug: /docs/api/Meadow/Meadow/AllocationInfo
---
# Struct AllocationInfo
A collection of device memory-allocation statistics

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts/blob/develop/Source/Meadow.Contracts/Platform OS/IPlatformOS.cs#L11)
```csharp title="Declaration"
public struct AllocationInfo
```
## Properties
### Arena
This is the total size of memory allocated for use by malloc in bytes.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts/blob/develop/Source/Meadow.Contracts/Platform OS/IPlatformOS.cs#L16)
```csharp title="Declaration"
public int Arena { readonly get; set; }
```
### FreeBlocks
This is the number of free (not in use) chunks
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts/blob/develop/Source/Meadow.Contracts/Platform OS/IPlatformOS.cs#L20)
```csharp title="Declaration"
public int FreeBlocks { readonly get; set; }
```
### LargestFreeBlock
Size of the largest free (not in use) chunk
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts/blob/develop/Source/Meadow.Contracts/Platform OS/IPlatformOS.cs#L24)
```csharp title="Declaration"
public int LargestFreeBlock { readonly get; set; }
```
### TotalAllocated
This is the total size of memory occupied by chunks handed out by malloc.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts/blob/develop/Source/Meadow.Contracts/Platform OS/IPlatformOS.cs#L28)
```csharp title="Declaration"
public int TotalAllocated { readonly get; set; }
```
### TotalFree
This is the total size of memory occupied by free (not in use) chunks.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts/blob/develop/Source/Meadow.Contracts/Platform OS/IPlatformOS.cs#L32)
```csharp title="Declaration"
public int TotalFree { readonly get; set; }
```
