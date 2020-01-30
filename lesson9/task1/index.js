const users = {
    'Tom': 17,
    'Max': 18,
    'Bob': 19,
};

const getAduls = usersObj => Object.entries(usersObj)

.filter(user => user[1] >= 18)
    .map(user => user[0]);

console.log(getAduls(users));