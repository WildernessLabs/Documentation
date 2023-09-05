---
layout: Meadow
title: Integrate with Webhooks
subtitle: 
---

## Overview

When a Webhook integration is activated, an HTTP POST with the payload is sent to a specified location in near real-time. Additionally, the payload can be signed with a `Secret` to ensure the data is coming from a valid source.

**Payload Uri**  
The address the payload is POSTed to as `application/json`. 

**Secret**  
(Optional) The value used to sign the data (SHA256) to verify the payload. The signature is sent through the header as `X-MC-SIGNATURE-256`.

**Active**  
Turn on/off the integration.

**Events**  
Choose the desired event types to be sent.