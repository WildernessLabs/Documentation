---
layout: Meadow
title: Application Build Configuration
sidebar_label: App Build Configuration
subtitle: Adding build settings for F7-based hardware.
---

By default, when your F7-based application is built, it is run through a process called linking (or trimming).  While this helps keep binaries smaller, it can remove types, properties and methods, especially if they are only loaded via reflection.  This is a common problem for classes used only for serialization and deserialization.

You can disable linking at an assembly level by adding a file called `app.build.yaml` to the root of your project and settinng the file properties to `Copy Always`.

```yml
Deploy:
  NoLink: [ Assembly1, Assembly2 ]
```

Add the assembly names you wish to omit from linking intop the `nolink` array.  Note that this are assembly names, not file names, so they do not have a `.dll` extension.
