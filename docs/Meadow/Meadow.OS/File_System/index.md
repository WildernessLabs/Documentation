---
layout: Meadow
title: File System
subtitle: Working with files and directories in Meadow
---

Meadow.OS has full support for file and directory manipulation via `System.IO` API calls. In addition, the Meadow F7 board has onboard non-volatile flash storage that, while primarily used for app deployment and storage, can also be used as for persistent storage like a traditional hard drive.

## Named Directories

There are a number of named directories available via the `MeadowOS.FileSystem` class that provide known, convenient lcoations to store files and data, each with a set of rules around the persistance of their contents during reboot, OS upgrade, etc. These named directories are:

 * **`UserFileSystemRoot`** - This returns `/meadow0`, which is the root directory of the flash storage on the Meadow device. This directory shouldn't be used directly, but is the root for other, more useful directories.
 * **`DataDirectory`** - Gets the `Data` directory. Use this directory to store files that require permanent persistence, such as SQL data files, even through OS deployments and Over-the-Air (OtA) updates.
 * **`DocumentsDirectory`** - Gets the `Documents` directory. Use this directory to store files that require permanent persistence, such as application document files, even through OS deployments and Over-the-Air (OtA) updates.
 * **`CacheDirectory`** - Gets the `Cache` directory. Use this directory to store semi-transient files. The contents of this folder will be erased during application updates.
 * **`TempDirectory`** - Gets the `Temp` directory. Use this directory to store transient files. This contens of this folder will be erased on device restart.

### Named Directory Example

The named directories can be used with normal `System.IO` calls. For instance the following example code creates a "hello.txt" file in the `TempDirectory`:

```csharp
// create a `hello.txt` file in the `/Temp` directory
CreateFile(MeadowOS.FileSystem.TempDirectory, "hello.txt");

private void CreateFile(string path, string filename)
{
    if (!Directory.Exists(path)) {
        Directory.CreateDirectory(path);
    }

    try {
        using (var fs = File.CreateText(Path.Combine(path,filename))) {
            fs.WriteLine("Hello Meadow File!");
        }
    } catch (Exception ex) {
        Console.WriteLine(ex.Message);
    }
}
```
 
## Known Issues

**NOTE: Non-persistent during deployment** - Currently, during IDE deployment, all non app-related files are purged from flash. In a near future release, all files within a special app folder will be excluded from file purging. In the meantime, if you need to persist files between app deployment, you can use Meadow.CLI to manually deploy a new app.