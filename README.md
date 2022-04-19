# Easy Query

![MIT License](https://badgen.net/github/license/jocat/easy-query)
![Version](https://badgen.net/npm/v/@jocat/easy-query)
![Dependents](https://badgen.net/npm/dependents/@jocat/easy-query)
![Types](https://badgen.net/npm/types/@jocat/easy-query)
![Package size](https://badgen.net/packagephobia/publish/@jocat/easy-query)
![Minified size](https://badgen.net/bundlephobia/min/@jocat/easy-query)
![Minzipped size](https://badgen.net/bundlephobia/minzip/@jocat/easy-query)

## Wrappers for the querySelector and querySelectorAll functions

> _Tiny, simple, zero-dependency_

For those who like to write shorter code, as well as those who are nostalgic for the days of popularity of jQuery

---

### Install, download or import

**Install:** `npm i @jocat/easy-query`

**and use:**

```js
import { $, $a } from "@jocat/easy-query";
```

**Download**: [jsdelivr](https://cdn.jsdelivr.net/npm/@jocat/easy-query/) / [unpkg](https://unpkg.com/@jocat/easy-query/)

**or use CDN:**

```html
<script src="https://cdn.jsdelivr.net/npm/@jocat/easy-query@1.0.0/index.js"></script>
```

**import as ESM:**

```html
<script type="module">
    import {
        $,
        $a,
    } from "https://cdn.jsdelivr.net/npm/@jocat/easy-query@1.0.0/index-esm.js";
</script>
```

### Usage

```js
const element = $(".element");
const list = $a(".parent .child");

// Instead of

const element = document.querySelector(".element");
const list = document.querySelectorAll(".parent .child");

// or equivalent from jQuery

const element = $(".element")[0];
const list = $(".parent .child");
```

Also, if you need to find an element within another element, you can use the following:

```js
const parent = $(".parent");
const childElement = $(".child", parent);
const childElements = $a(".child", parent);

// Instead of

const parent = document.querySelector(".parent");
const childElement = parent.querySelector(".child");
const childElements = parent.querySelectorAll(".child");

// or equivalent from jQuery

const parent = $($(".parent")[0]);
const childElement = parent.find(".child")[0];
const childElements = parent.find(".child");
```
