export const bind = function(func, context) {
    let bindArgs = slice.call(arguments, 2);
    return function() {
        let funcArgs = slice(arguments);
        return func.apply(context, bindArgs.concat(funcArgs));
    };
};