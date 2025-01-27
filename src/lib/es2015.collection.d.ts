interface Map<K, V> {
    /**
     * Removes all elements from the Map.
     */
    clear(): void;
    /**
     * Removes the specified element from the Map by key.
     * @param key
     * @returns Returns true if an element in the Map existed and has been removed, or false if the element does not exist.
     */
    delete(key: K): boolean;
    /**
     * Executes a provided function once per each key/value pair in the Map, in insertion order.
     * @param callbackfn
     * @param thisArg
     */
    forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
    /**
     * Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.
     * @param key
     * @returns Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.
     */
    get(key: K): V | undefined;
    /**
     * Returns a boolean indicating whether an element with the specified key exists or not.
     * @param key
     */
    has(key: K): boolean;
    /**
     * Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.
     * @param key
     * @param value
     */
    set(key: K, value: V): this;
    /**
     * Returns the number of elements in the Map.
     */
    readonly size: number;
}

interface MapConstructor {
    new(): Map<any, any>;
    new <K, V>(entries?: readonly (readonly [K, V])[] | null): Map<K, V>;
    readonly prototype: Map<any, any>;
}
declare var Map: MapConstructor;

interface ReadonlyMap<K, V> {
    forEach(callbackfn: (value: V, key: K, map: ReadonlyMap<K, V>) => void, thisArg?: any): void;
    get(key: K): V | undefined;
    has(key: K): boolean;
    readonly size: number;
}

interface WeakMap<K extends object, V> {
    /**
     * Removes the specified element.
     * @param key
     */
    delete(key: K): boolean;
    /**
     * Returns a specified element.
     * @param key
     */
    get(key: K): V | undefined;
    /**
     * Returns a boolean indicating whether an element with the specified key exists or not.
     * @param key
     */
    has(key: K): boolean;
    /**
     * Adds a new element with a specified key and value.
     * @param key Must be an object.
     * @param value
     */
    set(key: K, value: V): this;
}

interface WeakMapConstructor {
    new <K extends object = object, V = any>(entries?: readonly [K, V][] | null): WeakMap<K, V>;
    readonly prototype: WeakMap<object, any>;
}
declare var WeakMap: WeakMapConstructor;

interface Set<T> {
    /**
     * Appends a new element with a specified value to the end of the Set.
     * @param value
     */
    add(value: T): this;
    /**
     * Removes all elements from object.
     */
    clear(): void;
    /**
     * Removes a specified value from a Set.
     * @param value
     * @returns Returns true if an element in the Set existed and has been removed, or false if the element does not exist.
     */
    delete(value: T): boolean;
    /**
     * Executes a provided function once per each value in the Set object, in insertion order.
     * @param callbackfn
     * @param thisArg
     */
    forEach(callbackfn: (value: T, value2: T, set: Set<T>) => void, thisArg?: any): void;
    /**
     * Returns a boolean indicating whether an element with the specified value exists in the Set or not.
     * @param value
     */
    has(value: T): boolean;
    /**
     * Returns the number of (unique) elements in  Set.
     */
    readonly size: number;
}

interface SetConstructor {
    new <T = any>(values?: readonly T[] | null): Set<T>;
    readonly prototype: Set<any>;
}
declare var Set: SetConstructor;

interface ReadonlySet<T> {
    forEach(callbackfn: (value: T, value2: T, set: ReadonlySet<T>) => void, thisArg?: any): void;
    has(value: T): boolean;
    readonly size: number;
}

interface WeakSet<T extends object> {
    /**
     * Appends a new object to the end of the WeakSet.
     * @param value
     */
    add(value: T): this;
    /**
     * Removes the specified element from the WeakSet.
     * @param value
     */
    delete(value: T): boolean;
    /**
     * Returns a boolean indicating whether an object exists in the WeakSet or not.
     * @param value
     */
    has(value: T): boolean;
}

interface WeakSetConstructor {
    new <T extends object = object>(values?: readonly T[] | null): WeakSet<T>;
    readonly prototype: WeakSet<object>;
}
declare var WeakSet: WeakSetConstructor;
