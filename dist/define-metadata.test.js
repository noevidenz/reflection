import './index';
[
    ['key', 'key2'],
    [Symbol('key'), Symbol('key2')],
].forEach(function (_a) {
    var metadataKey = _a[0], metadataKey2 = _a[1];
    describe("with " + typeof metadataKey + " metadata key", function () {
        var metadataValue = 'value';
        var target = {};
        test('with invalid target', function () {
            var target = undefined;
            expect(function () {
                return Reflect.defineMetadata(metadataKey, metadataValue, target);
            }).toThrow(TypeError);
        });
        test('with target but no property key', function () {
            expect(function () {
                return Reflect.defineMetadata(metadataKey, metadataValue, target);
            }).not.toThrow();
        });
        test('with target and property key', function () {
            var propertyKey = 'name';
            expect(function () {
                return Reflect.defineMetadata(metadataKey, metadataValue, target, propertyKey);
            }).not.toThrow();
        });
        test('metadata map is reused', function () {
            var metadataValue2 = 'value2';
            Reflect.defineMetadata(metadataKey, metadataValue, target);
            Reflect.defineMetadata(metadataKey2, metadataValue2, target);
            expect(Reflect.getOwnMetadata(metadataKey, target)).toEqual(metadataValue);
            expect(Reflect.getOwnMetadata(metadataKey2, target)).toEqual(metadataValue2);
        });
    });
});
//# sourceMappingURL=define-metadata.test.js.map