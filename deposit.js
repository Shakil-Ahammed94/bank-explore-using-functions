document.getElementById('btn-1').addEventListener('click',function(){

    const newDepositAmount=depositandWithdraw('depositamount');
    const kook=totaldeposit('three');
    const newtotaldepo=kook+newDepositAmount;
    const hook=document.getElementById('three');
    hook.innerText=newtotaldepo;

    const sumupamount=totaldeposit('capital');
    const totalsum=newDepositAmount+sumupamount;
    const showfinaldepo=document.getElementById('capital');
    showfinaldepo.innerText=totalsum; 
    
})