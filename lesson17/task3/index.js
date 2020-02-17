export function defer(func, ms) {
    return function() {
        setTimeout(() => func.call(this, ...arguments), ms);
    }
};

export function defer(func, ms) {
    return function() {
        setTimeout(() => func.apply(this, arguments), ms);
    }
};