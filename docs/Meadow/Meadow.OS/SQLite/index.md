---
layout: Meadow
title: SQLite
subtitle: Using SQLite in Meadow.OS to create and manage local databases.
---

![SQLite Logo - A feather with the logotype "SQLIte".](SQLite370.svg)

[SQLite](https://www.sqlite.org/) is a portable, fast, ultra-lightweight and full-featured databse engine and format. And it's built into Meadow.OS as a first-class feature.

## Using SQLite with SQLite.NET

**[Run the Sample App](https://github.com/WildernessLabs/Meadow.Core.Samples/tree/develop/Source/Meadow.Core.Samples/OS/SQLite)**

Rather than low-level database interaction, we recommend using the lightweight SQLite.NET Object-Relational-Mapping (ORM) library to interact with SQLite databases on the device. It has an incredibly simple and powerful API that enables CRUD (Create, Read, Update, Delete) operations via objects, rather than SQL queries and raw data transforms.

This guide should suffice to you up and running, but full documentation can be found at the [SQLite.NET GitHub repo](https://github.com/praeclarum/sqlite-net/wiki).


### Add the SQLite.NET-Static Nuget Package

SQLite.NET is available as a Meadow-compatible Nuget package called [`sqlite-net-static`](https://www.nuget.org/packages/sqlite-net-static). 

**NOTE:** There are a number of SQLite.NET packages, so make sure to get the correct one.

## Configuring the Database

Before using your database, you must first configure it. This is typically done during the application starup.

The following sample code opens a connection to a database called `MySqliteDatabase.db` in the `DataDirectory` folder and creates the appropriate tables:

```csharp
// database files should go in the `DataDirectory`
var databasePath = Path.Combine(MeadowOS.FileSystem.DataDirectory, "MySqliteDatabase.db");
// make the connection
Database = new SQLite.SQLiteConnection(databasePath);
// add table(s)
Database.CreateTable<SensorModel>();
```

Let's examine the above code.

### Database Files

SQLite database are stored in the file system as a normal file, typically with a `.db` file-extension, and it's recommended that you create your database in the `DataDirectory` available via the `MeadowOS.FileSystem` API:

```csharp
var databasePath = Path.Combine(MeadowOS.FileSystem.DataDirectory, "MySqliteDatabase.db");
```

When using the SQLite.NET library, a database file doesn't need to explicitly created, the library will do it automatically if it doesn't exist.

### Tables

Tables are mapped to objects and their public fields. For example the following code is a sample model class that represents the data associated with a generic sensor reading:

```csharp
[Table("SensorReadings")]
public class SensorModel
{
    [PrimaryKey, AutoIncrement]
    public int ID { get; set; }
    public DateTime Timestamp { get; set; }
    public double Value { get; set; }
}
```

To create a table, call the `CreateTable<T>` method on the database connection:

```csharp
Database.CreateTable<SensorModel>();
```

This call is data safe, if the table already exists, it won't modify it. Therefore, this code can be executed on every application start.


#### Table and Column Attributes

There are a number of optional attributes that can be applied to the data model class in order to control how the tables and columns are created. Some of the common ones are as follows:

 * `[Table(Name)]` - This class attribute specifies the name of the table. If not present, the class name will be used.
 * `[Column(name)]` - This field attribute specifies the name of the column. If not present, the field name will be used.
 * `[PrimaryKey]` - Specifies that the field will be used as an integer primary key. Note that composite keys are not supported.
 * `[AutoIncremet]` - Causes the field to be created as an auto-incrementing column, meaning that each object inserted into the table will have a value incremented from the last inserted.
 * `[Ignore]` - Causes the field to be ignored. If the data type should (or cannot) be stored in the database, this attribute is particularly useful.
 * `[Unique]` - Ensures that the values in the database column are unique.

## Adding Data

```csharp
Database.Insert(new SensorModel { Timestamp = DateTime.Now, Value = SensorValue });
```

## Updating Data


## Retreiving Data


## Deleting Data