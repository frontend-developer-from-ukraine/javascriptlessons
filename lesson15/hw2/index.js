export function createLogger() {
    let memory = [];

    function warn(warn) {
        return memory.concat({ text: 'warn' });
    }

    function error(error) {
        return memory.concat({ text: 'error' });
    }

    function log(log) {
        return memory.concat({ text: 'log' })
    }

    function getRecords(string) {
        if (!string) {
            return memory
        };
        return memory.filter(item => item.text === string);
    }
    return {
        warn,
        error,
        log,
        getRecords,
    }
}