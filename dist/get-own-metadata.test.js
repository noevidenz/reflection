import './index';
var prototype = {};
var metadataKey = 'key';
var metadataValue = 'value';
var target = {};
var propertyKey = 'name';
test('invalid target', function () {
    var target = undefined;
    expect(function () { return Reflect.getOwnMetadata(metadataKey, target); }).toThrow(TypeError);
});
test('not defined with target', function () {
    expect(Reflect.getOwnMetadata(metadataKey, target)).toBeUndefined();
});
test('defined', function () {
    Reflect.defineMetadata(metadataKey, metadataValue, target);
    expect(Reflect.getOwnMetadata(metadataKey, target)).toEqual(metadataValue);
});
test('defined on prototype', function () {
    var target = Object.create(prototype);
    Reflect.defineMetadata(metadataKey, metadataValue, prototype);
    expect(Reflect.getOwnMetadata(metadataKey, target)).toBeUndefined();
});
test('not defined with property key', function () {
    expect(Reflect.getOwnMetadata(metadataKey, target, propertyKey)).toBeUndefined();
});
test('defined with property key', function () {
    Reflect.defineMetadata(metadataKey, metadataValue, target, propertyKey);
    expect(Reflect.getOwnMetadata(metadataKey, target, propertyKey)).toEqual(metadataValue);
});
test('defined on prototype with property key', function () {
    var target = Object.create(prototype);
    Reflect.defineMetadata(metadataKey, metadataValue, prototype, propertyKey);
    expect(Reflect.getOwnMetadata(metadataKey, target, propertyKey)).toBeUndefined();
});
//# sourceMappingURL=get-own-metadata.test.js.map