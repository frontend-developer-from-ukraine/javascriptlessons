export function spy(func) {
    saveCalls.calls = [];

    function saveCalls(...arguments) {
        saveCalls.call.push(arguments);
        return func.apply(this, arguments);
    }
    return saveCalls;
};