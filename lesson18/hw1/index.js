export function spy(func) {
    saveCalls.calls = [];

    function saveCalls(...arguments) {
        saveCalls.calls.push(arguments)
        return func.apply(this, arguments)
    }
    return saveCalls;
}