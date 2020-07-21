import { Reflection } from './index';
test('defineMetadata', function () {
    expect(Reflect.defineMetadata).toBeDefined();
    expect(Reflect.defineMetadata).toEqual(Reflection.defineMetadata);
});
test('getMetadata', function () {
    expect(Reflect.getMetadata).toBeDefined();
    expect(Reflect.getMetadata).toEqual(Reflection.getMetadata);
});
test('decorate', function () {
    expect(Reflect.decorate).toBeDefined();
    expect(Reflect.decorate).toEqual(Reflection.decorate);
});
test('metadata', function () {
    expect(Reflect.metadata).toBeDefined();
    expect(Reflect.metadata).toEqual(Reflection.metadata);
});
test('hasOwnMetadata', function () {
    expect(Reflect.hasOwnMetadata).toBeDefined();
    expect(Reflect.hasOwnMetadata).toEqual(Reflection.hasOwnMetadata);
});
test('hasMetadata', function () {
    expect(Reflect.hasMetadata).toBeDefined();
    expect(Reflect.hasMetadata).toEqual(Reflection.hasMetadata);
});
test('getOwnMetadata', function () {
    expect(Reflect.getOwnMetadata).toBeDefined();
    expect(Reflect.getOwnMetadata).toEqual(Reflection.getOwnMetadata);
});
// Test Reflect standard API
test('apply', function () {
    expect(Reflect.apply).toBeDefined();
    expect(typeof Reflect.apply).toBe('function');
});
test('construct', function () {
    expect(Reflect.construct).toBeDefined();
    expect(typeof Reflect.construct).toBe('function');
});
test('defineProperty', function () {
    expect(Reflect.defineProperty).toBeDefined();
    expect(typeof Reflect.defineProperty).toBe('function');
});
test('deleteProperty', function () {
    expect(Reflect.deleteProperty).toBeDefined();
    expect(typeof Reflect.deleteProperty).toBe('function');
});
test('get', function () {
    expect(Reflect.get).toBeDefined();
    expect(typeof Reflect.get).toBe('function');
});
test('getOwnPropertyDescriptor', function () {
    expect(Reflect.getOwnPropertyDescriptor).toBeDefined();
    expect(typeof Reflect.getOwnPropertyDescriptor).toBe('function');
});
test('getPrototypeOf', function () {
    expect(Reflect.getPrototypeOf).toBeDefined();
    expect(typeof Reflect.getPrototypeOf).toBe('function');
});
test('has', function () {
    expect(Reflect.has).toBeDefined();
    expect(typeof Reflect.has).toBe('function');
});
test('isExtensible', function () {
    expect(Reflect.isExtensible).toBeDefined();
    expect(typeof Reflect.isExtensible).toBe('function');
});
test('ownKeys', function () {
    expect(Reflect.ownKeys).toBeDefined();
    expect(typeof Reflect.ownKeys).toBe('function');
});
test('preventExtensions', function () {
    expect(Reflect.preventExtensions).toBeDefined();
    expect(typeof Reflect.preventExtensions).toBe('function');
});
test('set', function () {
    expect(Reflect.set).toBeDefined();
    expect(typeof Reflect.set).toBe('function');
});
test('setPrototypeOf', function () {
    expect(Reflect.setPrototypeOf).toBeDefined();
    expect(typeof Reflect.setPrototypeOf).toBe('function');
});
//# sourceMappingURL=index.test.js.map