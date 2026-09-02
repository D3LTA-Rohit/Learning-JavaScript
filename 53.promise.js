/*
    Promise - An object that manages asynchronous operations.
            
            Wraps a promise object around { asynchronous code }.
            
            "I promise to return a value"
            
            Pending -> RESOLVED or REJECTED

            new Promise ((resolve, reject) => { asynchronous code })
*/

/* 
    Example: Do these things in Order
    
    1. Wake Up
    2. Go GYM
    3. Put Clothes in Washing Machine
    4. Takeout Trash
    5. Leave for Work
*/

function wakeUp() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isSleep = false;
            if (isSleep) {
                reject("Sleeping!!");
            } else {
                resolve("I woke up!!.");
            }
        }, 5000);
    });
}

function goGym() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const atGym = true;
            if (atGym) {
                resolve("Working Hard!!.");
            } else {
                reject("My body hurts!!");
            }
        }, 3000);
    });
}

function washClothes() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isWashingClothes = true;
            if (isWashingClothes) {
                resolve("Clothes are clean and fresh.");
            } else {
                reject("Clothes are still dirty and smelly.");
            }
        }, 1000);
    });
}

function takeoutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isGarbageDisposed = true;
            if (isGarbageDisposed) {
                resolve("Garbage Disposed!!");
            } else {
                reject("Garbage still waiting to be disposed!!");
            }
        }, 1000);
    });
}

function leaveForWork() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const haveGoneForWork = true;
            if (haveGoneForWork) {
                resolve("At Office!!");
            } else {
                reject("I am taking leave today!!");
            }
        }, 3000);
    });
}

wakeUp().then((value) => {
    console.log(value);
    return goGym();

}).then((value) => {
    console.log(value);
    return washClothes();

}).then((value) => {
    console.log(value);
    return takeoutTrash();

}).then((value) => {
    console.log(value);
    return leaveForWork();

}).then((value) => {
    console.log(value);
    console.log("All Tasks Finished");

}).catch((error) => console.error(error));