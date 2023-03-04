function depositandWithdraw(inputfield){
    const identity=document.getElementById(inputfield);
    const identityValue=identity.value;
    const finalValue=parseFloat(identityValue);
    identity.value='';
    return finalValue;


} 

function totaldeposit(total){
    const amountAvailable=document.getElementById(total);
    const amountAvailablevalue=amountAvailable.innerText;
    const amountinInt=parseFloat(amountAvailablevalue);
    return amountinInt;
} 




