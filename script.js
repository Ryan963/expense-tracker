const balance = document.getElementById('balance')
const moneyPlus = document.getElementById('money-plus')
const moneyMinus = document.getElementById('money-minus')
const list = document.getElementById('list')
const form = document.getElementById('form')
const text = document.getElementById('text')
const amount = document.getElementById('amount')
const transactionBtn = document.getElementById('transaction')



const transactions_array = [{id:1, text:'kabab', amount:-30},{id:2, text:'ss', amount:340}]

var transactions = transactions_array;

function addTransactions(transaction){
    const sign = transaction.amount < 0 ? '-' : '+';
    const item = document.createElement('li');
    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus')
    item.innerHTML = `${transaction.text} <span>${sign}${Math.abs(transaction.amount)}
    </span> <button class = "delete-btn>x</button>`;
    list.appendChild(item);
    console.log('hi')
}
function init() {
    list.innerHTML = '';
    transactions.forEach(addTransactions)
}

function updateTheDom(){
    const amounts = transactions.map(transaction => transaction.amount)
    const total = amounts.reduce((acc,item) => (acc += item), 0).toFixed(2);
    const income = amounts.reduce((acc,item) => (acc += item ? item > 0) ,0)
}
updateTheDom();


init();



