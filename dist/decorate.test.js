import { Reflection as Reflect } from './index';
test('with invalid decorators and target', function () {
    var decorators = undefined;
    var target = function () {
        return;
    };
    expect(function () { return Reflect.decorate(decorators, target); }).toThrow(TypeError);
});
test('with no decorators', function () {
    var decorators = [];
    var target = function () {
        return;
    };
    expect(function () { return Reflect.decorate(decorators, target); }).toThrow(TypeError);
});
test('with property and invalid decorators', function () {
    var decorators = undefined;
    var target = {};
    var property = 'name';
    expect(function () { return Reflect.decorate(decorators, target, property); }).toThrow(TypeError);
});
test('with property and invalid decorators and invalid target', function () {
    var decorators = [];
    var target = 1;
    var property = 'name';
    expect(function () { return Reflect.decorate(decorators, target, property); }).toThrow(TypeError);
});
test('with property and descriptor and invalid decorators', function () {
    var decorators = undefined;
    var target = {};
    var property = 'name';
    var descriptor = {};
    expect(function () {
        return Reflect.decorate(decorators, target, property, descriptor);
    }).toThrow(TypeError);
});
test('with decorators, property, and descriptor and invalid target', function () {
    var decorators = [];
    var target = 1;
    var property = 'name';
    var descriptor = {};
    expect(function () {
        return Reflect.decorate(decorators, target, property, descriptor);
    }).toThrow(TypeError);
});
test('with decorators, undefined property, and descriptor and invalid target', function () {
    var sent = [];
    var decorators = [
        function (target) {
            sent.push(target);
        },
    ];
    var target = 1;
    var property = undefined;
    var descriptor = {};
    var result = Reflect.decorate(decorators, target, property, descriptor);
    expect(result).toBeUndefined();
});
test('executes decorators in reverse order for function', function () {
    var order = [];
    var decorators = [
        function () {
            order.push(0);
        },
        function () {
            order.push(1);
        },
    ];
    var target = function () {
        return;
    };
    Reflect.decorate(decorators, target);
    expect(order[0]).toEqual(1);
    expect(order[1]).toEqual(0);
});
test('executes decorators in reverse order for property', function () {
    var order = [];
    var decorators = [
        function () {
            order.push(0);
        },
        function () {
            order.push(1);
        },
    ];
    var target = {};
    var property = 'name';
    Reflect.decorate(decorators, target, property);
    expect(order[0]).toEqual(1);
    expect(order[1]).toEqual(0);
});
test('executes decorators in reverse order for property with descriptor', function () {
    var order = [];
    var decorators = [
        function () {
            order.push(0);
        },
        function () {
            order.push(1);
        },
    ];
    var target = {};
    var property = 'name';
    var descriptor = {};
    Reflect.decorate(decorators, target, property, descriptor);
    expect(order[0]).toEqual(1);
    expect(order[1]).toEqual(0);
});
test('applies decorators to function', function () {
    var a = function () {
        return;
    };
    var b = function () {
        return;
    };
    var decorators = [
        function () {
            return;
        },
        function () { return a; },
        function () { return b; },
    ];
    var target = function () {
        return;
    };
    var result = Reflect.decorate(decorators, target);
    expect(result).toStrictEqual(a);
});
test('applies decorators to target property', function () {
    var a = function () {
        return;
    };
    var b = function () {
        return;
    };
    var decorators = [
        function () {
            return;
        },
        function () { return a; },
        function () { return b; },
    ];
    var target = {};
    var property = 'name';
    var result = Reflect.decorate(decorators, target, property);
    expect(result).toStrictEqual(a);
});
test('applies decorators to target property with descriptor', function () {
    var a = function () {
        return;
    };
    var b = function () {
        return;
    };
    var decorators = [
        function () {
            return;
        },
        function () { return a; },
        function () { return b; },
    ];
    var target = {};
    var property = 'name';
    var descriptor = {};
    var result = Reflect.decorate(decorators, target, property, descriptor);
    expect(result).toStrictEqual(a);
});
test('decorate correct target for function', function () {
    var sent = [];
    var a = function () {
        return;
    };
    var b = function () {
        return;
    };
    var decorators = [
        function (target) {
            sent.push(target);
        },
        function (target) {
            sent.push(target);
        },
        function (target) {
            sent.push(target);
            return a;
        },
        function (target) {
            sent.push(target);
            return b;
        },
    ];
    var target = function () {
        return;
    };
    Reflect.decorate(decorators, target);
    expect(sent[0]).toStrictEqual(target);
    expect(sent[1]).toStrictEqual(b);
    expect(sent[2]).toStrictEqual(a);
    expect(sent[3]).toStrictEqual(a);
});
test('decorate with property name correct target for function', function () {
    var sent = [];
    var decorators = [
        function (target) {
            sent.push(target);
        },
        function (target) {
            sent.push(target);
        },
        function (target) {
            sent.push(target);
        },
        function (target) {
            sent.push(target);
        },
    ];
    var target = {};
    var property = 'name';
    Reflect.decorate(decorators, target, property);
    expect(sent).toStrictEqual([target, target, target, target]);
});
test('decorate with property name correct target for functions with name', function () {
    var sent = [];
    var decorators = [
        function (_target, name) {
            sent.push(name);
        },
        function (_target, name) {
            sent.push(name);
        },
        function (_target, name) {
            sent.push(name);
        },
        function (_target, name) {
            sent.push(name);
        },
    ];
    var target = {};
    var property = 'name';
    Reflect.decorate(decorators, target, property);
    expect(sent).toStrictEqual([property, property, property, property]);
});
test('decorate with property name and descriptor correct target for functions', function () {
    var sent = [];
    var a = {};
    var b = {};
    var decorators = [
        function (target) {
            sent.push(target);
        },
        function (target) {
            sent.push(target);
        },
        function (target) {
            sent.push(target);
            return a;
        },
        function (target) {
            sent.push(target);
            return b;
        },
    ];
    var target = {};
    var property = 'name';
    var descriptor = {};
    Reflect.decorate(decorators, target, property, descriptor);
    expect(sent).toStrictEqual([target, target, target, target]);
});
test('decorate with property name and descriptor correct target for functions with name', function () {
    var sent = [];
    var a = {};
    var b = {};
    var decorators = [
        function (_target, name) {
            sent.push(name);
        },
        function (_target, name) {
            sent.push(name);
        },
        function (_target, name) {
            sent.push(name);
            return a;
        },
        function (_target, name) {
            sent.push(name);
            return b;
        },
    ];
    var target = {};
    var property = 'name';
    var descriptor = {};
    Reflect.decorate(decorators, target, property, descriptor);
    expect(sent).toStrictEqual([property, property, property, property]);
});
test('decorate with property name and descriptor correct target for functions with name and descriptor', function () {
    var sent = [];
    var a = {};
    var b = {};
    var decorators = [
        function (_target, _name, descriptor) {
            sent.push(descriptor);
        },
        function (_target, _name, descriptor) {
            sent.push(descriptor);
        },
        function (_target, _name, descriptor) {
            sent.push(descriptor);
            return a;
        },
        function (_target, _name, descriptor) {
            sent.push(descriptor);
            return b;
        },
    ];
    var target = {};
    var property = 'name';
    var descriptor = {};
    Reflect.decorate(decorators, target, property, descriptor);
    expect(sent).toStrictEqual([descriptor, b, a, a]);
});
//# sourceMappingURL=decorate.test.js.map