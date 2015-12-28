# jscs-trailing-comma

> JSCS rules around trailing commas in object/array literals.

[![Build Status](https://travis-ci.org/EE/jscs-trailing-comma.svg?branch=master)](https://travis-ci.org/EE/jscs-trailing-comma)
[![Build status](https://ci.appveyor.com/api/projects/status/il0bikrr3sh3x8x3/branch/master?svg=true)](https://ci.appveyor.com/project/mgol/jscs-trailing-comma/branch/master)

## NOTE

This module no longer define rules `disallowTrailingComma` & `requireTrailingComma` as rules named this way and covering most of their functionality are now included in JSCS. If you need to apply different logic to arrays and objects, you need to migrate configuration, for example the followint config:
```js
"requireTrailingComma": {
    "inArrays": true,
    "inObjects": false
}
```
would need to be changed to:
```js
"requireTrailingCommaInCollapsedLiterals": {
    "inArrays": true,
    "inObjects": false
}
"requireTrailingCommaInExpandedLiterals": {
    "inArrays": true,
    "inObjects": false
}
```

## Getting Started

To install the module, invoke:

```bash
npm install jscs-trailing-comma --save-dev
```

## Rationale

This set of rules checks for trailing commas in object/array literals and either enforces them or disallows them to have a consistend code style.

Note: In ECMAScript 5.1 trailing commas are allowed in object/array literals. Putting trailing commas is sometimes a desired pattern since it makes it possible to add new entries to the end (or remove from it) of the object/array literal without touching the preceding line. It makes Git diffs prettier as you don't touch unrelated parts of code.

This module defines 4 tasks to be passed to JSCS. See the [JSCS](npmjs.org/package/jscs) documentation for further information about working with JSCS and its rules.

## Rules

To be able to use rules from this module, add the following to your JSCS configuration file:

```js
"plugins": ["jscs-trailing-comma"]
```

Rules from this module work on a distinction between expanded and collapsed literals. Expanded literals are multi-line, with closing brackets in a separate line. Collapsed literal are either single-line or multi-line but without closing brackets in a separate line. You can think of collapsed literals as single-line with optional line breaks when the line is too long. They're more similar to single-line literals than expanded literals.

Examples could make the distinction clearer.

1. Expanded literals:
```js
var o = {
    key: "value",
};
```
```js
var o = {
    key1: "value1",
    key2: [
        "param1",
    ],
};
```

2. Collapsed literals
```js
var o = {key: "value"};
```
```js
var o = {key1: "value1", key2: "value2", key3: "value3",
    key4: "value4", key5: "value5"};
```

Arrays are treated in a similar way.

### requireTrailingCommaInExpandedLiterals

Requires a trailing comma in expanded literals.

Type: `Boolean|Object`

Values: `true` or an object with `inArrays` and `inObjects` as child properties. Child properties must be set to `true`.

#### Example
```js
"requireTrailingCommaInExpandedLiterals": {
    "inArrays": true,
    "inObjects": true
}
```

##### Valid
```js
var o1 = {
    key: "value",
};
var o2 = {key: "value",};
var o3 = {key: "value"};
var o4 = [
    "value",
};
var o5 = ["value",];
var o6 = ["value"];
```

##### Invalid
```js
var o1 = {
    key: "value"
};
var o2 = [
    "value"
};
```

### disallowTrailingCommaInExpandedLiterals

Disallows a trailing comma in expanded literals.

Type: `Boolean|Object`

Values: `true` or an object with `inArrays` and `inObjects` as child properties. Child properties must be set to `true`.

#### Example
```js
"disallowTrailingCommaInExpandedLiterals": {
    "inArrays": true,
    "inObjects": true
}
```

##### Valid
```js
var o1 = {
    key: "value"
};
var o2 = {key: "value",};
var o3 = {key: "value"};
var o4 = [
    "value"
};
var o5 = ["value",];
var o6 = ["value"];
```

##### Invalid
```js
var o1 = {
    key: "value",
};
var o2 = [
    "value",
};
```

### requireTrailingCommaInCollapsedLiterals

Requires a trailing comma in collapsed literals.

Type: `Boolean|Object`

Values: `true` or an object with `inArrays` and `inObjects` as child properties. Child properties must be set to `true`.

#### Example
```js
"requireTrailingCommaInCollapsedLiterals": {
    "inArrays": true,
    "inObjects": true
}
```

##### Valid
```js
var o1 = {
    key: "value",
};
var o2 = {
    key: "value"
};
var o3 = {key: "value",};
var o4 = [
    "value",
};
var o5 = [
    "value"
};
var o6 = ["value",];
```

##### Invalid
```js
var o1 = {key: "value"};
var o2 = ["value"];
```

### disallowTrailingCommaInCollapsedLiterals

Disallows a trailing comma in collapsed literals.

Type: `Boolean|Object`

Values: `true` or an object with `inArrays` and `inObjects` as child properties. Child properties must be set to `true`.

#### Example
```js
"disallowTrailingCommaInCollapsedLiterals": {
    "inArrays": true,
    "inObjects": true
}
```

##### Valid
```js
var o1 = {
    key: "value",
};
var o2 = {
    key: "value"
};
var o3 = {key: "value"};
var o4 = [
    "value",
};
var o5 = [
    "value"
};
var o6 = ["value"];
```

##### Invalid
```js
var o1 = {key: "value",};
var o2 = ["value",];
```

## Supported Node.js versions
This project aims to support all Node.js LTS versions in the "active" phase (see [LTS README](https://github.com/nodejs/LTS/blob/master/README.md) for more details) as well as the latest stable Node.js. Today that means Node.js 0.12, 4 & 5.

## License
Copyright (c) 2014 Laboratorium EE. Licensed under the MIT license.
