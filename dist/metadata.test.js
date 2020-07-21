import './index';
var metadataKey = 'key';
var metadataValue = 'value';
var decorator = Reflect.metadata(metadataKey, metadataValue);
var propertyKey = 'name';
test('returns function', function () {
    expect(typeof Reflect.metadata(metadataKey, metadataValue)).toEqual('function');
});
test('with invalid target', function () {
    var target = undefined;
    expect(function () { return decorator(target, propertyKey); }).toThrow(TypeError);
});
test('with invalid property key', function () {
    var target = {};
    var invalidPropertyKey = {};
    expect(function () { return decorator(target, invalidPropertyKey); }).toThrow(TypeError);
});
test('with target and without property key', function () {
    var target = function () {
        return;
    };
    decorator(target);
    expect(Reflect.hasOwnMetadata(metadataKey, target)).toBeTruthy();
});
test('with target and propery key', function () {
    var target = {};
    decorator(target, propertyKey);
    expect(Reflect.hasOwnMetadata(metadataKey, target, propertyKey)).toBeTruthy();
});
test('with target and multiple properties', function () {
    var target = {};
    decorator(target, 'name1');
    decorator(target, 'name2');
    expect(Reflect.hasOwnMetadata(metadataKey, target, 'name1')).toBeTruthy();
    expect(Reflect.hasOwnMetadata(metadataKey, target, 'name2')).toBeTruthy();
});
//# sourceMappingURL=metadata.test.js.map