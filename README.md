# easy-query

### Wrappers for the querySelector and querySelectorAll functions

For those who like to write shorter code, as well as those who are nostalgic for the days of popularity of jQuery

Usage example:
```js
const element = $('.element');
const list = $a('.parent .child');

// Instead of

const element = document.querySelector('.element');
const list = document.querySelectorAll('.parent .child');
```

Also, if you need to search for an element in another element, you can use the following option:
```js
const parent = $('.parent');
const childElement = $('.child', parent);
const childElements = $a('.child', parent);

// Instead of

const parent = document.querySelector('.parent');
const childElement = parent.querySelector('.child');
const childElements = parent.querySelectorAll('.child');
```

---

### Обёртки над функциями querySelector и querySelectorAll

Для любителей писать более короткий код, а также тех, кто ностальгирует по временам популярности JQuery

Пример использования:
```js
const element = $('.element');
const list = $a('.parent .child');

// Вместо

const element = document.querySelector('.element');
const list = document.querySelectorAll('.parent .child');
```

Также в случае необходимости искать элемент в другом элементе, можно воспользоваться следующим вариантом:
```js
const parent = $('.parent');
const childElement = $('.child', parent);
const childElements = $a('.child', parent);

// Вместо

const parent = document.querySelector('.parent');
const childElement = parent.querySelector('.child');
const childElements = parent.querySelectorAll('.child');
```
