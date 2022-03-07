export const $ = (selectors, parent = document) => parent.querySelector(selectors);
export const $a = (selectors, parent = document) => parent.querySelectorAll(selectors);
