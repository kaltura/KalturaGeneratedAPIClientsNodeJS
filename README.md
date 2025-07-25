## Kaltura node.js API Client Library.
Compatible with Kaltura server version 21.20.0 and above.
This client library replaces the older architecture that presented in previous node.js client library.

[![NPM](https://nodei.co/npm/kaltura-client.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/kaltura-client/)


You can install this client library using npm with:
```
npm install kaltura-client 
```
## Proxy settings for client
If the Kaltura client has to be used behind a proxy, this can be set in the KalturaConfiguration by setting proxy
to the url of the proxy. For example:

```js
const config = new kaltura.Configuration();
    
const proxyUrl = new URL('http://some.proxy.com');
proxyUrl.username = 'user';
proxyUrl.password = 'pass';
    
config.proxy = proxyUrl.toString();
const client = new kaltura.Client(config);
```

## Sanity Check
- Copy config.template.json to config.json  and set partnerId, secret and serviceUrl
- Run npm test

## Code contributions

We are happy to accept pull requests, please see [contribution guidelines](https://github.com/kaltura/platform-install-packages/blob/master/doc/Contributing-to-the-Kaltura-Platform.md)

The contents of this client are auto generated from https://github.com/kaltura/clients-generator and pull requests should be made there, rather than to the https://github.com/kaltura/KalturaGeneratedAPIClientsNodeJS repo.

Relevant files are:
- sources/node2
- tests/ovp/node2
- lib/Node2ClientGenerator.php

[![Build Status](https://travis-ci.org/kaltura/KalturaGeneratedAPIClientsNodeJS.svg?branch=master)](https://travis-ci.org/kaltura/KalturaGeneratedAPIClientsNodeJS)
