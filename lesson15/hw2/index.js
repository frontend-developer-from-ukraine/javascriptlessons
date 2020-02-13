export function createLogger() {
    let memory = [];

    function warn(warn) {
        return memory.push({ message: warn, dateTime: new Date(), type: 'warn' });
    }

    function error(error) {
        return memory.push({ message: error, dateTime: new Date(), type: 'error' });
    }

    function log(log) {
        return memory.push({ message: log, dateTime: new Date(), type: 'log' })
    }

    function getRecords(str) {
        if (!str) {
            return memory
        };
        return memory.filter(item => item.type === string).sort((a, b) => a.dateTime - b.dateTime);
    }
    return {
        warn,
        error,
        log,
        getRecords,
    }
}