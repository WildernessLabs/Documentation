---
layout: Meadow
title: Integrate with Azure Event Hubs
subtitle: Getting started with Azure Event Hubs
---
[< Integrations](../)  
## Overview

An Azure Event Hub integration sends device data in Meadow.Cloud to an Event Hub in near real-time.

**Name**  
The display name of the integration.

**Event Hub Name**  
Event Hub name created in Azure.

**Connection String**  
Connection string of the Event Hub.  

To obtain a connection string for an Event Hub, follow the steps in your Azure Portal:
1. Browse to the desired Event Hub.
2. Click on _Shared access policies_.
3. Click _+ Add_ to add a new policy.
4. Enter a _Policy Name_, select _Send_, and click _Create_.
5. Click on the newly created policy and copy the _Connect string-primary key_.

**Active**  
Turn on/off the integration.

**Events**  
Choose the desired event types to be sent.