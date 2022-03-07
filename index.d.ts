declare function $<K extends keyof HTMLElementTagNameMap>(selectors: K, parent?: ParentNode): HTMLElementTagNameMap[K] | null;
declare function $<K extends keyof SVGElementTagNameMap>(selectors: K, parent?: ParentNode): SVGElementTagNameMap[K] | null;
declare function $<E extends Element = Element>(selectors: string, parent?: ParentNode): E | null;

declare function $a<K extends keyof HTMLElementTagNameMap>(selectors: K, parent?: ParentNode): NodeListOf<HTMLElementTagNameMap[K]>;
declare function $a<K extends keyof SVGElementTagNameMap>(selectors: K, parent?: ParentNode): NodeListOf<SVGElementTagNameMap[K]>;
declare function $a<E extends Element = Element>(selectors: string, parent?: ParentNode): NodeListOf<E>;
