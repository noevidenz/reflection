import './index';
test('with invalid target', function () {
    var target = undefined;
    expect(function () { return Reflect.getMetadata('key', target); }).toThrow(TypeError);
});
test('when not defined', function () {
    var target = {};
    expect(Reflect.getMetadata('key', target)).toEqual(undefined);
});
test('when defined', function () {
    var target = {};
    Reflect.defineMetadata('key', 'value', target);
    expect(Reflect.getMetadata('key', target)).toEqual('value');
});
test('when defined on prototype', function () {
    var prototype = {};
    var target = Object.create(prototype);
    Reflect.defineMetadata('key', 'value', prototype);
    expect(Reflect.getMetadata('key', target)).toEqual('value');
});
test('with key and not defined', function () {
    var target = {};
    expect(Reflect.getMetadata('key', target, 'name')).toEqual(undefined);
});
test('with key and defined', function () {
    var target = {};
    Reflect.defineMetadata('key', 'value', target, 'name');
    expect(Reflect.getMetadata('key', target, 'name')).toEqual('value');
});
test('when defined on prototype with a property key', function () {
    var prototype = {};
    var target = Object.create(prototype);
    Reflect.defineMetadata('key', 'value', prototype, 'name');
    expect(Reflect.getMetadata('key', target, 'name')).toEqual('value');
});
//# sourceMappingURL=get-metadata.test.js.map