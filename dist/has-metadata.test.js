import './index';
test('with invalid target', function () {
    var target = undefined;
    expect(function () { return Reflect.hasMetadata('key', target); }).toThrow(TypeError);
});
test('when not defined', function () {
    var target = {};
    expect(Reflect.hasMetadata('key', target)).toBeFalsy();
});
test('when defined', function () {
    var target = {};
    Reflect.defineMetadata('key', 'value', target);
    expect(Reflect.hasMetadata('key', target)).toBeTruthy();
});
test('when defined on prototype', function () {
    var prototype = {};
    var target = Object.create(prototype);
    Reflect.defineMetadata('key', 'value', prototype);
    expect(Reflect.hasMetadata('key', target)).toBeTruthy();
});
test('with key and not defined', function () {
    var target = {};
    expect(Reflect.hasMetadata('key', target, 'name')).toBeFalsy();
});
test('with key and defined', function () {
    var target = {};
    Reflect.defineMetadata('key', 'value', target, 'name');
    expect(Reflect.hasMetadata('key', target, 'name')).toBeTruthy();
});
test('when defined on prototype with a property key', function () {
    var prototype = {};
    var target = Object.create(prototype);
    Reflect.defineMetadata('key', 'value', prototype, 'name');
    expect(Reflect.hasMetadata('key', target, 'name')).toBeTruthy();
});
//# sourceMappingURL=has-metadata.test.js.map