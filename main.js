const balanceEl = document.getElementById('balance')
const incomeEl = document.getElementById('money-plus')
const expenseEL = document.getElementById('money-minus')
const list = document.getElementById('list')
const text = document.getElementById('name')
const amount = document.getElementById('amount')
const addBtn = document.getElementById('btn')
const form = document.getElementById('form')
const nameError = document.getElementById('error')
balance = 0
let income = 0
let expense = 0


function addtransaction(e){
    e.preventDefault()
    let nameValue = text.value
    let amountValue = +amount.value
    if (!nameValue.trim()){
        nameError.innerHTML = `Please Enter an income or expense`     
    }
    else {
        nameError.innerHTML = ''
        if (amountValue > 0){
            list.innerHTML+= `<li class="plus">${nameValue} <span class="value">+$${amountValue}</span>
            <button onclick="deleteTransaction()" class="delete">x</button></li>`
            income += amountValue
            incomeEl.innerHTML = `+$${income}`
        }
        else {
            list.innerHTML+= `<li class="minus">${nameValue} <span class="value">-$${amountValue * -1}</span>
            <button onclick="deleteTransaction()" class="delete">x</button></li>`
            expense += (amountValue * -1)
            expenseEL.innerHTML = `-$${expense}`
        }
        balance = income - expense
        balanceEl.innerHTML = `${balance}`
        text.value = ''
        amount.value = ''  
    }
}
function deleteTransaction(){
    let target = event.target
    let item = target.parentNode
    let children = item.childNodes
    let transAmount = children[1].innerHTML
    transAmount = parseInt(transAmount.slice(2),10)
    if (item.classList.contains('plus')){
        income -= transAmount
        incomeEl.innerHTML = `+$${income}`
    }
    else {
        expense -= transAmount
        expenseEL.innerHTML = `-$${expense}`
    }
    balance = income - expense
    balanceEl.innerHTML = `${balance}`
    list.removeChild(item)
    
    
}





function main(){
    form.addEventListener('submit', addtransaction)
    
}   

main()
