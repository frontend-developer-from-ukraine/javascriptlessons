export function bind(func, context, ...arg) {
    return function(...finalArg) {
        return func.call(context, ...arg, ...finalArg);
    };
}