'use strict'

var test = require('tape')
var Linker = require('./')
var fs = require('fs')

test(function (t) {
  t.throws(Linker)

  var result = fs.readFileSync(__dirname + '/result.txt', 'utf8').trim()
  var link = Linker(1008070182549338)
  t.equal(link({
    display: 'popup',
    href: 'https://www.eazeup.com/invite/icmmgd',
    redirectUri: 'https://www.eazeup.com/invite'
  }), result)
  t.end()
})

