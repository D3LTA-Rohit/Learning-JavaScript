//.checked - property that determines the checked state of a html checkbox or radio button

const subscribe = document.getElementById("subscribe");
const visa = document.getElementById("visa");
const mastercard = document.getElementById("mastercard");
const rupay = document.getElementById("rupay");
const submit = document.getElementById("submit");
const display1 = document.getElementById("display1");
const display2 = document.getElementById("display2");

submit.addEventListener("click",function(){
    if(subscribe.checked){
        display1.textContent = `You are subscribed.`;
    }else{
        display1.textContent = `You are not subscribed.`;
    }

    if(visa.checked){
        display2.textContent = `You have selected Visa for payment.`;
    }else if(mastercard.checked){
        display2.textContent = `You have selected Mastercard for payment.`;
    }else if(rupay.checked){
        display2.textContent = `You have selected RuPay card for payment.`;
    }else{
        display2.textContent = `Select a payment method.`;
    }

});