# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @NikJensen97/lotide`

**Require it:**

`const _ = require('@NikJensen97/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: logs whether or not two given arrays are equal
* `assertEqual(...)`: logs whether two given values are equal
* `tail(...)`: returns an array with the first value (at [0]) removed
* `middle(...)`: returns the middle value in an array, as an array. gives two points on even arrays.
* `head(...)`: returns the first value of a given array
