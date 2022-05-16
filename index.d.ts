export declare function $<K extends keyof HTMLElementTagNameMap>(selectors: K, parent?: ParentNode): HTMLElementTagNameMap[K] | null;
export declare function $<K extends keyof SVGElementTagNameMap>(selectors: K, parent?: ParentNode): SVGElementTagNameMap[K] | null;
export declare function $<E extends Element = Element>(selectors: string, parent?: ParentNode): E | null;

export declare function $a<K extends keyof HTMLElementTagNameMap>(selectors: K, parent?: ParentNode): NodeListOf<HTMLElementTagNameMap[K]>;
export declare function $a<K extends keyof SVGElementTagNameMap>(selectors: K, parent?: ParentNode): NodeListOf<SVGElementTagNameMap[K]>;
export declare function $a<E extends Element = Element>(selectors: string, parent?: ParentNode): NodeListOf<E>;
