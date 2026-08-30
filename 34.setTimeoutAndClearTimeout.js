/*
  setTimeout() - a function in JavaScript that allows you to schedule 
                the execution of a function after an amount of time (milliseconds).
                
                Time is approximate
                (execution time may vary based on the workload of the JavaScript runtime environment)

                setTimeout(callBack, delay);
    
  clearTimeout() - can cancel a timeout before it triggers.              
*/

let timeoutId;

function startTimer() {
    timeoutId = setTimeout(() => window.alert("Hello"), 3000);
    console.log("Started");
}

function clearTimer(){
    clearTimeout(timeoutId);
    console.log("Cleared");
}