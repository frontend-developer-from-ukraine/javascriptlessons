const sortContacts = (arr, boolen) => {
        if (!Array.isArray(arr)) {
            return null;
        }
        const result = arr.sort((a, b) => boolen === true || boolen === undefined ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
            return result;
        };