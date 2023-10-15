[![Netlify Status](https://api.netlify.com/api/v1/badges/4eca11be-70f4-4b26-a49a-9f0da1f54c64/deploy-status)](https://app.netlify.com/sites/azurearcjumpstart/deploys)
# Azure Arc Jumpstart Documentation app

This repository contains the files to create the ["Azure Arc Jumpstart"](https://azurearcjumpstart.io/) website built from the markdown files located in the [project core repository](https://github.com/microsoft/azure_arc).

## Overview

This docs is built using Hugo with the Docsy theme, hosted through Netlify.

## Pre-requisites

* [Hugo/Hugo extended](https://gohugo.io/getting-started/installing)
* [Node.js](https://nodejs.org/en/)

## Local Environment Setup

1. Ensure pre-requisites are installed

2. Clone this repository

    ```shell
    git clone https://github.com/microsoft/azure_arc_jumpstartweb
    ```

3. Go to main directory

    ```shell
    cd ./azure_arc_jumpstartweb
    ```

4. Update submodules:

    ```shell
    git submodule update --init --recursive
    ```

5. Install npm packages:

    ```shell
    npm install
    ```

6. Run in local

    ```shell
    npm run start
    ```

## Update docs

Docs contents are imported as a submodule.
You have to edit & update docs content in the [production repository](https://github.com/microsoft/azure_arc/tree/main/docs) or edit the content in website.

## Algolia Docsearch 

- set enable algolia docsearch in the config.toml

```
algolia_docsearch = true
```

- layouts/partials/hooks/head-end.html

```
{{ with .Site.Params.algolia_docsearch }}
<!-- stylesheet for algolia docsearch -->
{{ end }}
```

- layouts/partials/hooks/body-end.html

```
{{ with .Site.Params.algolia_docsearch }}
<!-- scripts for algolia docsearch -->
{{ end }}
```

## Navbar Menu

In the config.toml

```
# Navbar Menu

[menu]
    [[menu.main]]
        name="About"
        url="https://github.com/microsoft/azure_arc"
        weight=1
    
# [[menu.main]]
#       name="Test"
#       url="..."
#       weight=2
```
