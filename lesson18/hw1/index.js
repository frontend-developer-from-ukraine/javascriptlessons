export function spy(func) {
    saveCalls.calls = [];

    function saveCalls(arguments) {
        return func.call(this, arguments);
    }
    return saveCalls;
};