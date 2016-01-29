/*!
 * is-forwardslash <https://github.com/tunnckoCore/is-forwardslash>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var isForwardslash = require('./index')

test('default mode (strict: false) or `opts.strict` not explicitly true', function (done) {
  test.strictEqual(isForwardslash(47), true)
  test.strictEqual(isForwardslash('47'), true)
  test.strictEqual(isForwardslash('/'), true)
  test.strictEqual(isForwardslash('\u002F'), true)
  test.strictEqual(isForwardslash('\u002f'), true)
  test.strictEqual(isForwardslash('\x2f'), true)
  test.strictEqual(isForwardslash('&#47;'), true)

  test.strictEqual(isForwardslash(47, {strict: 123}), true)
  test.strictEqual(isForwardslash('47', {strict: 123}), true)
  test.strictEqual(isForwardslash('/', {strict: 123}), true)
  test.strictEqual(isForwardslash('\u002F', {strict: 123}), true)
  test.strictEqual(isForwardslash('\u002f', {strict: 123}), true)
  test.strictEqual(isForwardslash('\x2f', {strict: 123}), true)
  test.strictEqual(isForwardslash('&#47;', {strict: 123}), true)
  done()
})

test('strict mode (strict: true)', function (done) {
  test.strictEqual(isForwardslash(47, {strict: true}), false)
  test.strictEqual(isForwardslash('47', {strict: true}), false)
  test.strictEqual(isForwardslash('/', {strict: true}), true)
  test.strictEqual(isForwardslash('\u002F', {strict: true}), true)
  test.strictEqual(isForwardslash('\u002f', {strict: true}), true)
  test.strictEqual(isForwardslash('\x2f', {strict: true}), true)
  test.strictEqual(isForwardslash('&#47;', {strict: true}), false)
  done()
})

test('return false if value not a string or number', function (done) {
  test.strictEqual(isForwardslash(['foo', 'bar']), false)
  test.strictEqual(isForwardslash({a: 'b'}), false)
  test.strictEqual(isForwardslash(null), false)
  test.strictEqual(isForwardslash(), false)
  done()
})
