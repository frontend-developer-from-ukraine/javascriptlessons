function withdraw(clients, balances, client, amount) {
    if (balances[clients(client)] < amount) {
        return -1;
    }
    return balances[clients(client)] - amount;
}