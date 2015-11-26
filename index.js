'use strict'

var assert = require('assert-ok')
var Integer = require('parse-int')
var qs = require('query-string')
var setQuery = require('url-set-query')
var Snake = require('snakecase-keys')
var extend = require('xtend')
var partial = require('ap').partial
var pipe = require('value-pipe')

var base = 'https://www.facebook.com/dialog/share'

module.exports = function FacebookShare (app) {
  assert(Integer(app), 'facebook app id is required')

  return pipe(
    partial(extend, {
      appId: app
    }),
    Snake,
    qs.stringify,
    partial(setQuery, base)
  )
}
