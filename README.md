# Azure Arc Jumpstart Documentation

https://azure-arc-doc.netlify.app/

## Overview

This docs is built using Hugo with the Docsy theme, hosted through Netlify.

## Pre-requisites

- [Hugo/Hugo extended](https://gohugo.io/getting-started/installing)
- [Node.js](https://nodejs.org/en/)

## Local Environment Setup

1. Ensure pre-requisites are installed
2. Clone this repository
```
git clone https://github.com/microsoft/azure_arc_jumpstartweb
```
3. Go to main directory
```
cd ./azure_arc_jumpstartweb
```
4. Update submodules:
```
git submodule update --init --recursive
```
5. Install npm packages:
```
npm install
```
6. Run in local
```
npm run start
```

## Update docs

Docs contents are imported as a submodule.
You have to edit & update docs content in the production repo.

[azure_arc/docs](https://github.com/microsoft/azure_arc/docs)

Or you can eidt & content in website.

