---
title: WaveQL
---

```js
import {formatExamples} from './components/formatExamples.js';
```


# WaveQL

waveform query language

## Format `%`

Text label of multibit values can be formated using one of *format specifiers*.

A *format specifier* has following structure:

```
%specifier[element width]
```

| specifier | description |
|-|-|
| b, o, d, h | Unsigned ( binary, octal, decimal,hexadecimal ) integer |
| sb, so, sd, sh | Signed ( binary, octal, decimal, hexadecimal ) integer |
| f, e, g, a | Floating point number in ( Fixed point, Exponent, General, Hexadecimal ) notation |
| c | Character format |

### element width

Optional element with.
If not specified then total wire width is used.
If total wire width is longer then element width,
the label will represented as vector of labels.

### Examples

The label may be shortened to fit the space available in waveform.
Some examples of labels shown in the table below.

```js
const posNumInput = Inputs.range([1, 80], {value: 48, label: "Number of positions", step: 1});
const posNumber = Generators.input(posNumInput);
```

<div class="card" style="padding: 10px 0px;">
${posNumInput}
${Inputs.table(...formatExamples(posNumber))}
</div>


### Links

* https://www.netlib.org/fp/
* https://stackoverflow.com/questions/21882862/purpose-of-hexadecimal-floating-point-value

## Cursors `@`

cursors

## Labels `:`

## Patterns `{}`

## Functions `()`
