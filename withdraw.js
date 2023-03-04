document.getElementById('btn-one').addEventListener('click',function(){



   const newwithdrawvalue=depositandWithdraw('withdrawamount');
   const withdrawtext=totaldeposit('four');
   const newwithdrawtext=newwithdrawvalue+withdrawtext;
   const finalwithdrawamount=document.getElementById('four');
   finalwithdrawamount.innerText=newwithdrawtext;

   const totalamountfig=totaldeposit('capital');
   const deductedamount=totalamountfig-newwithdrawvalue;
   const finaldeductedvalue=document.getElementById('capital');
   finaldeductedvalue.innerText=deductedamount;
})
