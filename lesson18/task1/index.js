export const event = {
    guests: [
        { name: 'John', age: 18, email: 'm@gmail.com' },
        { name: 'Max', age: 17, email: 'max@gmail.com' },
        { name: 'Ivan', age: 29, email: 'i@gmail.com' }
    ],
    message: 'Welcome to the party!',
    getInvitations() {
        return this.guests
            .filter(({ age }) => age >= 18)
            .map(({ name, email }) => ({
                message: `Dear ${name}! ${this.message}`,
                email,
            }));
    }
};
console.log(event.getInvitations());