document.getElementById('btn').addEventListener('click',function(){

    const emailAddress=document.getElementById('emailfield');
    const emailValue=emailAddress.value;

    const passWord=document.getElementById('passwordfield');
    const passValue=passWord.value;



    if(emailValue== 'shakil@gmail.com' && passValue=='secret'){
        window.location.href='http://127.0.0.1:5500/bank-details.html';
    }
    else{
        alert('Please enter correct details');
    }
})