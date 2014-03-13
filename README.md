# jscs-trailing-comma

> JSCS rules around trailing commas in object/array literals.

## Getting Started

In ECMAScript 5.1 trailing commas are allowed in object/array literals. Putting trailing commas is sometimes
a desired pattern since it makes it possible to add new entries to the end (or remove from them) without touching
the preceding line. It makes Git diffs prettier as you don't touch unrelated parts of code.

This module defines 4 tasks to be passed to JSCS. See the [JSCS](npmjs.org/package/jscs) documentation for further
information about working with JSCS and its rules.

## Rules

To be able to use rules from this module, add the following to your JSCS configuration file:

```js
"additionalRules": ["node_modules/jscs-trailing-comma/rules/*.js"]
```

Rules from this module work on a distinction between expanded and collapsed literals. Expanded literals are multi-line,
with closing brackets in a separate line. Collapsed literal are either single-line or multi-line but without closing
brackets in a separate line. You can think of collapsed literals as single-line with optional line breaks when the line
is too long. They're more similar to single-line literals than expanded literals.

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

Type: `Object`

Values: `inArrays` and `inObjects` as child properties. Child properties must be set to `true`.

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

### requireTrailingCommaInCollapsedLiterals

Requires a trailing comma in collapsed literals.

Type: `Object`

Values: `inArrays` and `inObjects` as child properties. Child properties must be set to `true`.

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

### disallowTrailingCommaInExpandedLiterals

Disallows a trailing comma in expanded literals.

Type: `Object`

Values: `inArrays` and `inObjects` as child properties. Child properties must be set to `true`.

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

### disallowTrailingCommaInCollapsedLiterals

Disallows a trailing comma in collapsed literals.

Type: `Object`

Values: `inArrays` and `inObjects` as child properties. Child properties must be set to `true`.

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

## License
Copyright (c) 2014 Laboratorium EE. Licensed under the MIT license.
