export function bind(func, context, ...arg) {
    return function(...finalnArg) {
        return func(context, ...arg, ...finalArg);
    };
}