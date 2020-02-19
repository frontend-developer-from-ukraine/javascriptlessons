export function spy(func) {
    saveCalls.calls = [];

    function saveCalls(arguments) {
        saveCalls.call.push(arguments);
        return func.call(this, arguments);
    }
    return saveCalls;
};