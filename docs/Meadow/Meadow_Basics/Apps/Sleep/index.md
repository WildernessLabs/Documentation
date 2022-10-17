---
layout: Meadow
title: Meadow Application Sleep
subtitle: Reduce power consumption by putting Meadow into a sleep state.
---

Meadow can be put into a power-saving sleep state. In this state, your code stops executing and reduces the power draw to only what is required to recover from being in a sleep state.

After resuming from a sleep state, your code will resume executing where it left off. Additionally, you can respond to the sleep state changes in [application lifecycle events](../Lifecycle_Events/), specifically `OnSleep` and `OnResume`.
