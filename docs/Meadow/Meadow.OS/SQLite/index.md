---
layout: Meadow
title: SQLite
subtitle: Using SQLite in Meadow.OS to create and manage local databases.
---

![SQLite Logo - A feather with the logotype "SQLIte".](SQLite370.svg)

[SQLite](https://www.sqlite.org/) is a portable, fast, ultra-lightweight and full-featured database engine and format. And it's built into Meadow.OS as a first-class feature.

## Using SQLite with SQLite.NET

**[Explore the Sample App](https://github.com/WildernessLabs/Meadow.Core.Samples/tree/main/Source/Meadow.Core.Samples/OS/SQLite)**

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
 * `[MaxLength]` - Specifies the length of of a string column.
 * `[Ignore]` - Causes the field to be ignored. If the data type should (or cannot) be stored in the database, this attribute is particularly useful.
 * `[Unique]` - Ensures that the values in the database column are unique.
 * `[Indexed]` - Creates an index on the column's value. Use this if the column is often looked up or searched on, as it will provide faster access.

### Data Types

The following table lists the .NET datatypes that are supported by SQLite.NET and their equivalent SQLite datatype:

| .NET Datatype | SQLite Datatype |
|---------------|-----------------|
| `int`         | `Integer` or `bigint` SQLite types. |
| `bool`        | `Integer` with the value `1` designated as `true` while all other values are `false`. |
| `enum`        | `Integer` using the enum's value. |
| `float` or `double` | `Float` |
| `string`      | `Varchar` with a size specified by the `MaxLength` attribute. Length defaults to 140. |
| `DateTime`    | `Datetime` subject to the SQLite precision. |
| `byte[]`      | `Blob` |
| `Guid`        | `Varchar(30)` |


## Adding Data

Calling `Insert` on the database connection will add a new row to the database into the appropriate table based on the class information:

```csharp
Database.Insert(new SensorModel { Timestamp = DateTime.Now, Value = SensorValue });
```

## Updating Data

To update a record, first either retrieve or create a new object with a valid primary key, and then called `Update` on the database connection, passing an object. For example, the following code retrieves the first record out of a table, doubles its value, and then saves it back to the database:

```csharp
// pull the first record out of the table
SensorModel reading = Database.Table<SensorModel>().Take(1).First();
// change the value
reading.Value = reading.Value * 2;
// update the data
Database.Update(reading);
```

## Retrieving Data

There are a number of ways to retrieve data from the database. 

### Via Primary Key

The simplest and fastest way to retrieve a record, is via the primary key, if known. For example, the following code will retrieve a `SensorModel` with a primary key ID of `1`.

```csharp
var sensorReading1 = Database.Get<SensorModel>(1);
```

### Via LINQ

You can also use LINQ to create a query that will operate on a table. For example, the folowing code queries the `SensorModel`

```csharp
var readings = from rows in Database.Table<SensorModel>()
               where rows.Value > 50
               select rows;
Console.WriteLine($"Found {readings.Count()} readings over 50: ");
foreach (var reading in readings) {
    Console.WriteLine($"ID: {reading.ID}, value: {reading.Value}");
}
```

## Deleting Data

To delete data, call the `Delete` method and pass in the primary key value:

```csharp
Database.Delete<SensorModel>(1);
```

## Manually Executing SQL Statements

SQLite.NET can also be used to execute raw Transact-SQL (TSQL) statements. For example, the following code returns all records from the `SensorReadings` table for whom the sensor reading was greater than `50`:

```csharp
var readings = Database.Query<SensorModel>("SELECT * FROM SensorReadings WHERE value > ?", 50);
Console.WriteLine($"Found {readings.Count()} readings over 50: ");
foreach (var reading in readings) {
    Console.WriteLine($"ID: {reading.ID}, value: {reading.Value}");
}
```

## Threading Options

SQLite can be configured to operate in one of three threading modes:
 
 * **Serialized (Default)** - This is the default mode. SQLite can be safely used by multiple threads with no restriction.
 * **Single-Threaded** - When set to single-threaded mode, all internal thread-safety mechanisms are disabled and SQLite is unsafe to use from more than a single thread at any given time.
 * **Multi-Threaded** - When set to multi-threaded mode, SQLite can be safely used by multiple threads provided that no single database connection is used simultaneously in two or more threads.

The threading mode can be set at runtime, but it should be configured during db setup, before doing any data access. To set, use the SQLite.NET `SQLite3.Config` API:

```csharp
SQLite.SQLite3.Config(SQLite3.ConfigOption.MultiThread);
```
