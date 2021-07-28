const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const firstClass = document.getElementById("first-class");
const ecoClass = document.getElementById("eco-class");
const subTotal = document.getElementById("subtotal");

var count = 0;
var count2 = 0;
plusBtn.addEventListener("click", function () {
    if (firstClass.value >= 0)
        firstClass.value = ++count * 150;
    subTotalCal();
    totalCal();
})

minusBtn.addEventListener("click", function () {
    console.log("minus click")
    if (firstClass.value >= 1)
        firstClass.value = --count * 150;
    subTotalCal();
    totalCal();
})

function subTotalCal() {
    if (ecoClass.value >= 100)
        subTotal.innerText = subtotal()
    else
        subTotal.innerText = parseInt(firstClass.value);

}

function totalCal() {
    var vat = subTotal.innerText / 10;
    document.getElementById("vat").innerText = vat;

    var total = parseInt(subTotal.innerText) + parseInt(vat);
    document.getElementById("total").innerText = total;
}

document.getElementById("plus-e").addEventListener("click", function () {
    if (ecoClass.value >= 0)
        ecoClass.value = ++count2 * 100;

    subTotal.innerText = subtotal();
    totalCal();

})

document.getElementById("minus-e").addEventListener("click", function () {
    if (ecoClass.value >= 1)
        ecoClass.value = --count2 * 100;
    subTotal.innerText = subtotal();
    totalCal();
})

function subtotal() {
    return parseInt(firstClass.value) + parseInt(ecoClass.value);
}

document.getElementById("book").addEventListener("click", function () {
    alert("Booking is Complete!!!");
})




