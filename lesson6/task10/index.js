function withdraw(clients, balances, client, amount) {
    if (balances < amount) {
        return -1;
    }
    return balances - amount;
}