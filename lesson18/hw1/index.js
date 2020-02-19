export function spy(func) {
    saveCalls.calls = [];

    function saveCalls([args]) {
        saveCalls.calls.push(...args)
        return func.apply(this, ...args)
    }
    return saveCalls;
}