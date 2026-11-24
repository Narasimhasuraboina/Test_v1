const transactions = [
    { id: 1, description: "Shopping", money: 2000, type: "expense", category: "shopping" },
    { id: 2, description: "Salary", money: 25000, type: "income", category: "salary" },
    { id: 3, description: "Groceries", money: 1500, type: "expense", category: "food" },
    { id: 4, description: "Freelancing", money: 5000, type: "income", category: "work" },
    { id: 5, description: "Petrol", money: 800, type: "expense", category: "transport" },
    { id: 6, description: "Electricity Bill", money: 1200, type: "expense", category: "bills" },
    { id: 7, description: "Gift", money: 3000, type: "income", category: "other" },
    { id: 8, description: "Restaurant", money: 900, type: "expense", category: "food" },
    { id: 9, description: "Mobile Recharge", money: 399, type: "expense", category: "bills" },
    { id: 10, description: "Bonus", money: 4000, type: "income", category: "salary" },
    { id: 11, description: "Movie Tickets", money: 600, type: "expense", category: "entertainment" },
    { id: 12, description: "Web Development", money: 7000, type: "income", category: "work" },
    { id: 13, description: "Clothes", money: 2500, type: "expense", category: "shopping" },
    { id: 14, description: "Bus Pass", money: 500, type: "expense", category: "transport" },
    { id: 15, description: "Interest", money: 750, type: "income", category: "other" },
    { id: 16, description: "Internet Bill", money: 999, type: "expense", category: "bills" },
    { id: 17, description: "Coffee", money: 250, type: "expense", category: "food" },
    { id: 18, description: "YouTube Editing", money: 3500, type: "income", category: "work" },
    { id: 19, description: "Headphones", money: 1800, type: "expense", category: "shopping" },
    { id: 20, description: "Water Bill", money: 300, type: "expense", category: "bills" }
];
console.log(transactions);
console.log(transactions[0].description);
console.log(transactions[1].money);
console.log(transactions[2].type);
transactions.forEach((transaction) => {
    console.log(transaction.description);
});
const total = transactions.reduce((sum, current) => {
    if (current.type == "income") {
        return sum = sum + current.money;
    }
    return sum;
}, 0);
console.log(total);
console.log(total + 25);