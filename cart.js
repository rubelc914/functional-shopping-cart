
function updateProductQuantity(product,price,isIncreasing){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if(isIncreasing){
        productNumber= parseInt(productNumber ) +  1;
    }else if(productNumber > 0){
        productNumber= parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;

    const casePrice = document.getElementById(product + '-total');
    casePrice.innerText = productNumber * price;

    totalCalculate();
}

function getPriceTotal(){
    const caseInput = document.getElementById('case-total')
    const caseNumber = parseInt(caseInput.innerText );
    return caseNumber;
}

function calculateProductPrice(){
    const subtotal = getPriceTotal();
}

//update case  quantity increasing
document.getElementById('case-plus').addEventListener('click',function(){
updateProductQuantity('case',59,true);

});

//update case quantity minus
document.getElementById('case-minus').addEventListener('click',function(){
    updateProductQuantity('case',59,false);

});
//update phone quantity increasing
document.getElementById('phone-plus').addEventListener('click',function(){
    updateProductQuantity('phone',1219,true);
    
})
//update phone quantity minus
document.getElementById('phone-minus').addEventListener('click',function(){
    updateProductQuantity('phone',1219,false);
});



function totalItem(product){
    const itemInput = document.getElementById(product + '-number').value;

    return itemInput;
}

function totalCalculate(){
    const phonePrice  = totalItem('phone') * 1219;
    const casePrice  = totalItem('case') * 59;

    const subTotal = phonePrice + casePrice;
    document.getElementById('sub-total').innerText = subTotal;
    const tax = subTotal / 10;
    document.getElementById('tax-amount').innerText = tax;
    const total = subTotal + tax ;
    document.getElementById('total').innerText = total;
    
}


