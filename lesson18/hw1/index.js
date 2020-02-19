export function spy(func) {
    saveCalls.calls = [];

    function saveCalls(...arg) {
        saveCalls.calls.push(arg)
        return func.apply(this, arg)
    }
    return saveCalls;
}