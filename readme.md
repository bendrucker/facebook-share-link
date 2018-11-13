# facebook-share-link [![Build Status](https://travis-ci.org/bendrucker/facebook-share-link.svg?branch=master)](https://travis-ci.org/bendrucker/facebook-share-link) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/facebook-share-link.svg)](https://greenkeeper.io/)

> Generate Facebook sharing links


## Install

```
$ npm install --save facebook-share-link
```


## Usage

```js
var FacebookShare = require('facebook-share-link')

var share = FacebookShare(1234) //=> app id
share({
  href: 'http://www.my-website.com',
  display: 'popup'  
})
//=> https://www.facebook.com/dialog/share?app_id=...
```

## API

#### `Facebook(app)` -> `function`

Creates a sharing function bound to a specified app ID.

##### app

*Required*  
Type: `number` / `string`

A number or numeric string representing your app ID. 

#### `share(options)` -> `string`

Generates a Facebook sharing dialog link.

##### options

*Required*  
Type: `object`

See the [Sharing on the Web](https://developers.facebook.com/docs/sharing/web) documentation from Facebook for available options.


## License

MIT © [Ben Drucker](http://bendrucker.me)
