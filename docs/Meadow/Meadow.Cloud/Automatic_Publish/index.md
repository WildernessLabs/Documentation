---
layout: Meadow
title: GitHub Action Publish
subtitle: Getting started
---

# Publish Meadow MPAK Action

This GitHub Action is designed to publish Meadow MPAKs to a specified collection of devices. It is intended for use within workflows that require deploying updates or new packages to a group of devices managed in MeadowCloud.

## Description

The "Publish Meadow MPAK" action automates the process of publishing a Meadow MPAK to a collection of devices. This is particularly useful in continuous deployment pipelines, enabling updates to be distributed swiftly and reliably to a designated collection.

## Inputs

### `api_key`
**Required** The API key for authenticating with Meadow's cloud services. This key should be kept secure.

### `collection_id`
**Required** The ID of the device collection to which the package will be published. This ID specifies the target group of devices.

### `host`
The API URL. Optional parameter that allows specifying a custom host for Meadow cloud services. If not set, the default production environment is used.

### `metadata`
Metadata for the publish operation. Optional parameter that can be used to provide additional context or data for the publish operation.

## How to Use

To use this action, define it in your workflow YAML file with the necessary inputs. Below is an example workflow that demonstrates how to configure and use the Publish Meadow MPAK action:

```yaml
name: Publish Meadow MPAK

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Publish Meadow MPAK
        uses: WildernessLabs/meadow-cloud-package-publish@main
        with:
          api_key: ${{ secrets.API_KEY }}
          collection_id: '123456789'