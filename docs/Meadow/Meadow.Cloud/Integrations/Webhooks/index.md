---
layout: Meadow
title: Integrate with Webhooks
subtitle: 
---

Specify the following fields:  
`Payload Uri`: Address you want the data to be sent to. Data is POSTed as `application/json`.  
`Secret`: (Optional) Value used to sign the data (SHA256) to verify the payload is from Meadow.Cloud. Signature is in the header as `X-MC-SIGNATURE-256`.  
`Enabled`: true/false  
`Events`: select the data you want to be sent: `deviceLog`, `deviceEvent`  

(Currently only accessibile through [API](https://staging.meadowcloud.dev/api/index.html) /api/orgs/{orgs}/integrations/webhooks. UI will be ready by launch)  