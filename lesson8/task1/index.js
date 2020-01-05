const user = {
    name: "Tom",
    key: 17,
};

for (let key in user) {
    console.log(key); // name key 
}


const user = {
    name: "Tom",
    key: 17,
};

for (let key in user) {
    console.log(user[key]); // Tom 17
}