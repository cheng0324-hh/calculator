document.querySelector('#addButton').addEventListener("click", function(){
    const a= Number(document.querySelector('#num1').value);
    const b= Number(document.querySelector('#num2').value);
    
    document.querySelector('#result').textContent= a+b;
});


document.querySelector('#subtractButton').addEventListener("click", function(){
    const a= Number(document.querySelector('#num1').value);
    const b= Number(document.querySelector('#num2').value);
    
    document.querySelector('#result').textContent= a-b;
});

document.querySelector('#multiplyButton').addEventListener("click", function(){
    const a= Number(document.querySelector('#num1').value);
    const b= Number(document.querySelector('#num2').value);
    
    document.querySelector('#result').textContent= a*b;
});

document.querySelector('#divideButton').addEventListener("click", function(){
    const a= Number(document.querySelector('#num1').value);
    const b= Number(document.querySelector('#num2').value);
    
    document.querySelector('#result').textContent= a/b;
});
