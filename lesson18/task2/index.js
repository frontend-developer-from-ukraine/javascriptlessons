export const wallet = {
    transactions: [8, 23, 19, 44],
    getMax() {
        return Math.max(...this.transactions)
    },
    getMin() {
        return Math.min(...this.transactions)
    },
}
console.log(wallet.getMax());
console.log(wallet.getMin());