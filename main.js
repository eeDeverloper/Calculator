const Buttons = document.querySelectorAll('.buttonCalc')
const valueNums = document.getElementById('valueNum')
const resultNums = document.getElementById('resultNum')

Buttons.forEach(item => (
    item.addEventListener('click', ()=>{
        valueNums.value += item.value;
    })
))

const buttonEval = document.getElementById('evalNum')
const clearValue = document.getElementById('clear')

buttonEval.addEventListener('click', () =>{
    try {
        valueNums.value = eval(valueNums.value)
        console.log(valueNums.value)

        if(valueNums.value === 'NaN'){
            valueNums.value = 'Error'
        }
    } catch (error) {
        console.log(error)
    }
})

clearValue.addEventListener('click', () =>{
    valueNums.value = ''
})
