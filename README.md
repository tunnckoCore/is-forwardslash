# [is-forwardslash][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Checks given value is forwardslash - support char code number, hex, unicode or string value to be given.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i is-forwardslash --save
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
const isForwardslash = require('is-forwardslash')
```

### [isForwardslash](./index.js#L51)
> Check value is strictly forwardslash or forwardslash-like.

- `[val]` **{String|Number}** value to check   
- `[opts]` **{Object}** only `opts.strict` option, default `false`    
- `returns` **{Boolean}**  

**Example**

```js
const isForwardslash = require('is-forwardslash')

// returns true (default mode, opts.strict !== true)
console.log(isForwardslash(47, {strict: 123})) // => true
console.log(isForwardslash(47))                // => true
console.log(isForwardslash('47'))              // => true
console.log(isForwardslash('/'))              // => true
console.log(isForwardslash('\u002F'))          // => true
console.log(isForwardslash('\u002f'))          // => true
console.log(isForwardslash('\x2f'))            // => true
console.log(isForwardslash('&#47;'))           // => true

// strict mode - need explicitly define `opts.strict: true`
console.log(isForwardslash(47, {strict: true}))        // => false
console.log(isForwardslash('47', {strict: true}))      // => false
console.log(isForwardslash('/', {strict: true}))      // => true
console.log(isForwardslash('\u002F', {strict: true}))  // => true
console.log(isForwardslash('\u002f', {strict: true}))  // => true
console.log(isForwardslash('\x2f', {strict: true}))    // => true

console.log(isForwardslash('&#47;', {strict: 123}))    // => true
console.log(isForwardslash('&#47;', {strict: true}))   // => false
console.log(isForwardslash(['foo', 'bar']))            // => false
console.log(isForwardslash({a: 'b'}))                  // => false
console.log(isForwardslash())                          // => false
```


## Related
- [is-async-function](https://github.com/tunnckocore/is-async-function): Check that given function is async (callback) function or not. Trying to guess that based on check if `callback`, `cb`, `done` or `next` exists as function argument name.
- [is-backslash](https://github.com/tunnckocore/is-backslash): Checks given value is backslash - support char code number, hex, unicode or string value to be given.
- [is-child-process](https://github.com/tunnckocore/is-child-process): Checks whether a value is child process result, which in case is more specific Node.js EventEmitter.
- [is-emitter](https://github.com/tunnckocore/is-emitter): Check that given value is EventEmitter, not so strict as `is-node-emitter`.
- [is-empty-function](https://github.com/tunnckoCore/is-empty-function): Check that given string, function or arrow function have empty body, using `parse-function`.
- [is-hexcolor](https://github.com/tunnckocore/is-hexcolor): Check that given value is valid hex color, using `hex-color-regex` - the best regex for matching hex color values
- [is-installed](https://github.com/tunnckoCore/is-installed): Checks that given package is installed on the system - globally or locally.
- [is-kindof](https://github.com/tunnckocore/is-kindof): Check type of given javascript value. Support promises, generators, streams, and native types.
- [is-missing](https://github.com/tunnckocore/is-missing): Check that given `name` or `user/repo` exists in npm registry or in github as user repository.
- [is-node-emitter](https://github.com/tunnckocore/is-node-emitter): Strictly checks that given value is nodejs EventEmitter. It's easy, because his API is in frozen state.
- [is-node-stream](https://github.com/tunnckocore/is-node-stream): Strictly and correctly checks if value is a nodejs stream.
- [is-real-object](https://github.com/tunnckocore/is-real-object): Returns `true` if a value is any type of object, but not an array. Browserify-ready.
- [is-request-stream](https://github.com/tunnckocore/is-request-stream): Check that given value is request stream
- [is-singular](https://github.com/tunnckocore/is-singular): Return true if given word is in singular form like `apple`, `car`, `test` and false otherwise, never throws.
- [is-sync-function](https://github.com/tunnckocore/is-sync-function): Opposite of `is-async-function`. Check that given function is synchronous.
- [is-typeof-error](https://github.com/tunnckocore/is-typeof-error): Check that given value is any type of error and instanceof Error


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/is-forwardslash/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/is-forwardslash
[npmjs-img]: https://img.shields.io/npm/v/is-forwardslash.svg?label=is-forwardslash

[license-url]: https://github.com/tunnckoCore/is-forwardslash/blob/master/LICENSE
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/is-forwardslash
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/is-forwardslash.svg

[travis-url]: https://travis-ci.org/tunnckoCore/is-forwardslash
[travis-img]: https://img.shields.io/travis/tunnckoCore/is-forwardslash.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/is-forwardslash
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/is-forwardslash.svg

[david-url]: https://david-dm.org/tunnckoCore/is-forwardslash
[david-img]: https://img.shields.io/david/tunnckoCore/is-forwardslash.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg