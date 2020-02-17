export function bind(func, context, ...arg) {
    return function(...finalnArg) {
        return func.bind(context, ...arg, ...finalArg);
    };
}