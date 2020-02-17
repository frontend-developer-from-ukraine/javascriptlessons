export function bind(func, context, ...arg) {
    return function(...finalArg) {
        return func.bind(context, ...arg, ...finalArg);
    };
}