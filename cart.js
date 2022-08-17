
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

