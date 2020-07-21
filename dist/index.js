var Metadata = new WeakMap();
function decorateProperty(decorators, target, propertyKey, descriptor) {
    decorators.reverse().forEach(function (decorator) {
        descriptor = decorator(target, propertyKey, descriptor) || descriptor;
    });
    return descriptor;
}
function decorateConstructor(decorators, target) {
    decorators.reverse().forEach(function (decorator) {
        var decorated = decorator(target);
        if (decorated) {
            target = decorated;
        }
    });
    return target;
}
export function decorate(decorators, target, propertyKey, attributes) {
    if (decorators.length === 0) {
        throw new TypeError();
    }
    if (typeof target === 'function') {
        return decorateConstructor(decorators, target);
    }
    else if (propertyKey !== undefined) {
        return decorateProperty(decorators, target, propertyKey, attributes);
    }
    return;
}
function getMetadataMap(target, propertyKey) {
    return Metadata.get(target) && Metadata.get(target).get(propertyKey);
}
function ordinaryGetOwnMetadata(metadataKey, target, propertyKey) {
    if (target === undefined) {
        throw new TypeError();
    }
    var metadataMap = getMetadataMap(target, propertyKey);
    return metadataMap && metadataMap.get(metadataKey);
}
function createMetadataMap(target, propertyKey) {
    var targetMetadata = Metadata.get(target) ||
        new Map();
    Metadata.set(target, targetMetadata);
    var metadataMap = targetMetadata.get(propertyKey) || new Map();
    targetMetadata.set(propertyKey, metadataMap);
    return metadataMap;
}
function ordinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey) {
    if (propertyKey && !['string', 'symbol'].includes(typeof propertyKey)) {
        throw new TypeError();
    }
    (getMetadataMap(target, propertyKey) ||
        createMetadataMap(target, propertyKey)).set(metadataKey, metadataValue);
}
function ordinaryGetMetadata(metadataKey, target, propertyKey) {
    return ordinaryGetOwnMetadata(metadataKey, target, propertyKey)
        ? ordinaryGetOwnMetadata(metadataKey, target, propertyKey)
        : Object.getPrototypeOf(target)
            ? ordinaryGetMetadata(metadataKey, Object.getPrototypeOf(target), propertyKey)
            : undefined;
}
export function metadata(metadataKey, metadataValue) {
    return function decorator(target, propertyKey) {
        ordinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
    };
}
export function getMetadata(metadataKey, target, propertyKey) {
    return ordinaryGetMetadata(metadataKey, target, propertyKey);
}
export function getOwnMetadata(metadataKey, target, propertyKey) {
    return ordinaryGetOwnMetadata(metadataKey, target, propertyKey);
}
export function hasOwnMetadata(metadataKey, target, propertyKey) {
    return !!ordinaryGetOwnMetadata(metadataKey, target, propertyKey);
}
export function hasMetadata(metadataKey, target, propertyKey) {
    return !!ordinaryGetMetadata(metadataKey, target, propertyKey);
}
export function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
    ordinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
}
export var Reflection = {
    decorate: decorate,
    defineMetadata: defineMetadata,
    getMetadata: getMetadata,
    getOwnMetadata: getOwnMetadata,
    hasMetadata: hasMetadata,
    hasOwnMetadata: hasOwnMetadata,
    metadata: metadata,
};
Object.assign(Reflect, Reflection);
//# sourceMappingURL=index.js.map