/*!
 * is-forwardslash <https://github.com/tunnckoCore/is-forwardslash>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var isObject = require('is-real-object')

/**
 * > Check value is strictly forwardslash or forwardslash-like.
 *
 * **Example**
 *
 * ```js
 * const isForwardslash = require('is-forwardslash')
 *
 * // returns true (default mode, opts.strict !== true)
 * console.log(isForwardslash(47, {strict: 123})) // => true
 * console.log(isForwardslash(47))                // => true
 * console.log(isForwardslash('47'))              // => true
 * console.log(isForwardslash('/'))              // => true
 * console.log(isForwardslash('\u002F'))          // => true
 * console.log(isForwardslash('\u002f'))          // => true
 * console.log(isForwardslash('\x2f'))            // => true
 * console.log(isForwardslash('&#47;'))           // => true
 *
 * // strict mode - need explicitly define `opts.strict: true`
 * console.log(isForwardslash(47, {strict: true}))        // => false
 * console.log(isForwardslash('47', {strict: true}))      // => false
 * console.log(isForwardslash('/', {strict: true}))      // => true
 * console.log(isForwardslash('\u002F', {strict: true}))  // => true
 * console.log(isForwardslash('\u002f', {strict: true}))  // => true
 * console.log(isForwardslash('\x2f', {strict: true}))    // => true
 *
 * console.log(isForwardslash('&#47;', {strict: 123}))    // => true
 * console.log(isForwardslash('&#47;', {strict: true}))   // => false
 * console.log(isForwardslash(['foo', 'bar']))            // => false
 * console.log(isForwardslash({a: 'b'}))                  // => false
 * console.log(isForwardslash())                          // => false
 * ```
 *
 * @name  isForwardslash
 * @param  {String|Number} `[val]` value to check
 * @param  {Object} `[opts]` only `opts.strict` option, default `false`
 * @return {Boolean}
 * @api public
 */
module.exports = function isForwardslash (val, opts) {
  opts = isObject(opts) ? opts : {strict: false}
  if (opts.strict === true) {
    return typeof val === 'string' && val.length === 1 && val.charCodeAt(0) === 47
  }
  if (typeof val === 'number') {
    return val === 47
  }
  if (typeof val === 'string') {
    return val === '&#47;' || val === '47' || (val.length === 1 && val.charCodeAt(0) === 47)
  }
  return false
}
