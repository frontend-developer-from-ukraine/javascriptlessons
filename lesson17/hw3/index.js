export function bind(func, context, ...arg) {
    return function(...finalArg) {
        return func.call(...arg, context, ...finalArg, );
    };
}