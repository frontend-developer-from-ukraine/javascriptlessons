    export function getOwnProps(obj) {
        Object.entries(object)

        const arr = object.filter(item => typeof item[1] !== "function")

        const newArr = arr.map(item => item[0]);

    }