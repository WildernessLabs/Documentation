---
layout: Meadow
title: Maple Server
subtitle: Using the ultra-lightweight Maple web server.
---

![Maple](Maple_Banner.png)

# Intro

Maple is an ultra-lightweight RESTful web API Server, built specifically for Meadow. It provides an easy to extend architecture, and has integrated JSON support via `System.Text.Json`.

# Creating API Endpoints

To use Maple, you create custom `IRequestHandler` classes which represent API endpoint controllers, similar to the way ASP.NET Core Web API works.

Maple then uses reflection to find and register these endpoints at startup.

For example, the following sample controller inherits from `RequestHandlerBase` and has two methods, `Hello()`, and `JsonSample` which are both available as `GET` methods at `http://[Meadow IP Address]/Hello`, and `http://[Meadow IP Address]/JsonSample`, respectively:

```csharp
using System;
using System.Collections.Generic;
using Meadow.Foundation.Web.Maple.Server;
using Meadow.Foundation.Web.Maple.Server.Routing;

namespace Maple.Server_BasicSample.RequestHandlers
{
    public class HelloRequestHandler : RequestHandlerBase
    {
        [HttpGet]
        public void Hello()
        {
            this.Context.Response.ContentType = ContentTypes.Application_Text;
            this.Context.Response.StatusCode = 200;
            this.Send("hello world").Wait();
        }

        [HttpGet]
        public void JsonSample()
        {
            List<string> names = new List<string> {
                "johnny",
                "deedee",
                "joey",
                "tommy"
            };

            this.Context.Response.ContentType = ContentTypes.Application_Json;
            this.Context.Response.StatusCode = 200;
            this.Send(names).Wait();
        }
    }
}
```

## Output is Based on the `ContentType`

In the preceding example, the two methods will return different types of content, based on what's set in the `Context.Response.ContentType` property. 

The `Hello()` method sets it to `Application_Text`, and therefore, returns plain text to the caller. However, the `JsonSample()` method sets the `ContentType` to `Application_Json`, and so the `RequestHandlerBase` automatically serializes the `List<string> names` data to JSON and returns that.

## Starting the Server

In order for Maple to run, you must start the server before it will run. To start the server, instantiate a new `MapleServer` object, and call the `Start` method. For example, the following Meadow application will start the WiFi, connect to a network, and then start Maple server:

```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Meadow;
using Meadow.Devices;
using Meadow.Foundation.Web.Maple.Server;
using Meadow.Gateway.WiFi;

namespace Maple.Server_SimpleMeadowSample
{
    public class MeadowApp : App<F7Micro, MeadowApp>
    {
        MapleServer server;

        public MeadowApp()
        {
            Initialize().Wait();
            server.Start();
        }

        async Task Initialize()
        {
            Console.WriteLine("Initialize hardware...");

            // initialize the wifi adpater
            if (!Device.InitWiFiAdapter().Result) {
                throw new Exception("Could not initialize the WiFi adapter.");
            }

            // connnect to the wifi network.
            Console.WriteLine($"Connecting to WiFi Network {Secrets.WIFI_NAME}");
            var connectionResult = await Device.WiFiAdapter.Connect(Secrets.WIFI_NAME, Secrets.WIFI_PASSWORD);
            if (connectionResult.ConnectionStatus != ConnectionStatus.Success) {
                throw new Exception($"Cannot connect to network: {connectionResult.ConnectionStatus}");
            }
            Console.WriteLine($"Connected. IP: {Device.WiFiAdapter.IpAddress}");

            // create our maple web server
            server = new MapleServer(
                Device.WiFiAdapter.IpAddress,
                processMode: RequestProcessMode.Parallel
                );

            Console.WriteLine("Finished initialization.");
        }
    }
}
```

# Query String and Form Post Parameters

Maple parses query string and form post parameters during requests and makes them available via the `QueryString` or `FormFields` property, respectively. 

For example to pass an `name` parameter to the `Hello` handler, append `?name=[value]` to the request:

```csharp
http://[MeadowIP]/Hello?name=bryan
```

The `Hello()` method can then access the `name` parameter via:

```csharp
[HttpGet]
public void Hello()
{
    Console.WriteLine("GET::Hello");

    string name = base.QueryString["name"] as string;

    this.Context.Response.ContentType = ContentTypes.Application_Text;
    this.Context.Response.StatusCode = 200;
    this.Send($"hello, {name}").Wait();
}
```

Similarly, a form post field of `ID` can be accessed via the `Form` object:

```csharp
string id = base.FormFields["ID"];
```

## Limitations

* [no SSL]
* [limited routing]
* [multithreading no worky on Meadow]

## Sample Application

[link to meadow.foundation sample source code]
