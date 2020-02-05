const sortContacts = (arr, boolen) => {
    if (!Array.isArray(arr)) {
        return null;
    }
    const result = arr.sort((a, b) => {
        if (boolen === true) {
            return a.name.localeCompare(b.name);
        } else {
            return b.name.localeCompare(a.name);
        }
    });
    return result;
};