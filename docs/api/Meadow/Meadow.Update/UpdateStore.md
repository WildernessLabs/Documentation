---
title: Class UpdateStore
sidebar_label: UpdateStore
description: A local store for holding information about available and applied Updates
slug: /docs/api/Meadow/Meadow.Update/UpdateStore
---
# Class UpdateStore
A local store for holding information about available and applied Updates

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Cloud/UpdateStore.cs#L14)
```csharp title="Declaration"
public class UpdateStore : IEnumerable<UpdateInfo>, IEnumerable
```
**Implements:**  
`System.Collections.Generic.IEnumerable<Meadow.Update.UpdateInfo>`, `System.Collections.IEnumerable`

## Methods
### Clear()
Deletes all local update archives and information
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Cloud/UpdateStore.cs#L133)
```csharp title="Declaration"
public void Clear()
```
### GetUpdateArchivePath(string)
Gets the full path to the provided update archive
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Cloud/UpdateStore.cs#L156)
```csharp title="Declaration"
public string? GetUpdateArchivePath(string updateID)
```

##### Returns

`System.String`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *updateID* | The ID of the archive of interest |

### GetFileHash(FileInfo)
Calculates the CRC32 hash of a file
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Cloud/UpdateStore.cs#L194)
```csharp title="Declaration"
public Task<string> GetFileHash(FileInfo file)
```

##### Returns

`System.Threading.Tasks.Task<System.String>`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.IO.FileInfo` | *file* | The file to hash |

### GetEnumerator()
Returns an enumerator that iterates through the collection.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Cloud/UpdateStore.cs#L227)
```csharp title="Declaration"
public IEnumerator<UpdateInfo> GetEnumerator()
```

##### Returns

`System.Collections.Generic.IEnumerator<Meadow.Update.UpdateInfo>`: An enumerator that can be used to iterate through the collection.
## Implements

* `System.Collections.Generic.IEnumerable<Meadow.Update.UpdateInfo>`
* `System.Collections.IEnumerable`
## Extension Methods
* System.Collections.Generic.IEnumerable&#123;Meadow.Update.UpdateInfo&#125;.Meadow.ExtensionMethods.Contains``1(Meadow.Update.UpdateInfo[])
* System.Collections.Generic.IEnumerable&#123;Meadow.Update.UpdateInfo&#125;.Meadow.ExtensionMethods.FirstIndexOf``1(Meadow.Update.UpdateInfo[])
