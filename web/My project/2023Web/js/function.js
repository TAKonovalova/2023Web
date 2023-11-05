const node_for_click =document.getElementById("for_click")


function find_edit(){
const data = document.getElementById("data")
console.log(data.innerHTML)
data.innerHTML = '2012.06.18'
console.log(data.innerHTML)
const second = document.getElementById("second")
console.log(second.innerHTML)
second.innerHTML = 'Konovalova'
console.log(second.innerHTML)
const first = document.getElementById("first")
console.log(first.innerHTML)
first.innerHTML = 'Tatiana'
console.log(first.innerHTML)
}


node_for_click.addEventListener("click", find_edit)
