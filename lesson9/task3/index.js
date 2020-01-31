function getCustomersList(obj) {

    let newObject = Object.entries(obj)
        .sort((person, nextPerson) => person[1].age - nextPerson[1].age)

    return newObject;
}