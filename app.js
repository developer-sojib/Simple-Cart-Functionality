function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    const productNumberText = productInput.value;
    const productNumber = parseInt(productNumberText);
    if (isIncreasing == true) {
        productInput.value = productNumber + 1;
    }
    else if (productNumber > 0) {
        productInput.value = productNumber - 1;
    }
    // update product price

    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productInput.value * price;
    // calculate total
    calculateTotal();

}

// increase plus input number of phone 
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
});


// decrease input number of phone 

document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
});


// increase plus input number of case 
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
});

// discrease input number of case 
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
});

/////////////////////////////////////////////

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const taxAmount = subTotal / 10;
    const totalPrice = subTotal + taxAmount;
    // update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = taxAmount;
    document.getElementById('total-price').innerText = totalPrice;

}






