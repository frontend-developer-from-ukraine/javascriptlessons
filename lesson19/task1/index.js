export const vehicle = {
    move() {
        console.log(`${this.name} is moving`);
    },
    stop() {
        console.log(`${this.name} stopped`);
    },
};
export const ship = {
    name: 'Argo',
    liftAnchorDown() {
        console.log(`${this.name} lifting anchor down`);
    },
    liftAnchorUp() {
        console.log(`${this.name} lifting anchor up`);
    },

    startMachine() {
        this.liftAnchorDown()
        this.move();
    },
    stopMachine() {
        this.liftAnchorUp()
        this.stop();
    },
};
Object.setPrototypeOf(ship, vehicle);