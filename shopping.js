let cart = []

// const addItem = () => {

// }
function addItem() {
    // let input = document.getElementById('input').value
    if (input.value.trim() == '') {
        alert('Kindly, fill the input')
    } else {
        cart.push(input.value)
        console.log(cart);
        input.value = ''
        displayItem()
    }
}

function deleteLast() {
    if (cart.length == 0) {
        alert("input a value")
    }
    else {
        cart.pop()
        localStorage.setItem('item', JSON.stringify(cart))
        displayItem()
    }
}

function deleteAll() {
    if (cart.length == 0) {
        alert("nothing to delete")
    } else {
        cart.splice(0, cart.length);
         document.getElementById('display').innerHTML = 'All successfully deleted'
        displayItem()
    }
}

function displayItem() {
    document.getElementById('display').innerHTML = ''
    for (let index = 0; index < cart.length; index++) {
        document.getElementById('display').innerHTML += `<p> ${index + 1}. ${cart[index]}</p>
        <button onclick= "removeItem(${index})" type = "button" class="btn btn-primary">delete item</button>`
    }

}
function removeItem(i) {
    // if (cart.length <1){
    //     alert('nothing to delete')
    // }else {
    //     cart.splice(1, i)
    //     displayItem()
    // }
    let checks = confirm('Are you sure you want to delete?')
    if (checks) {
        cart.splice(i, 1)
        displayItem()
    } else {
        displayItem()
    }
}
