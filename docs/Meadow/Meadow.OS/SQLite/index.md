---
layout: Meadow
title: SQLite
subtitle: Using SQLite in Meadow.OS to create and manage local databases.
---

[SQLite](https://www.sqlite.org/) is a portable, fast, ultra-lightweight and full-featured databse engine and format. And it's built into Meadow.OS as a fully-supported, first class feature.

## SQLite.NET Support

Rather than low-level database interaction, we recommend using the lightweight SQLite.NET ORM library to interact with SQLite databases on the device. It has an incredibly simple and powerful API that enables CRUD (Create, Read, Update, Delete) operations via objects, rather than SQL queries and raw data transforms.

SQLite.NET is available as a Meadow-compatible Nuget package called [`sqlite-net-static`](https://www.nuget.org/packages/sqlite-net-static). 

**NOTE:** There are a number of SQLite.NET packages, so make sure to get the correct one.

This guide should suffice to you up and running, but full documentation can be found at the [SQLite.NET GitHub repo](https://github.com/praeclarum/sqlite-net).

## SQLite Database File

SQLite database are stored in the file system as a normal file, typically with a `.db` file-extension, and it's recommended that you create your database in the `DataDirectory` available via the `MeadowOS.FileSystem` API:

```csharp
var databasePath = Path.Combine(MeadowOS.FileSystem.DataDirectory, "MySqliteDatabase.db");
```

If using the SQLite.NET library, a database file doesn't need to explicitly created, the library will do it automatically if it doesn't exist. 