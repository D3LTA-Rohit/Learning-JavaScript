/*
    async and await - async = makes a function return a promise
                      await = makes an async function wait for a promise
    
    Allows you to write asynchronous code in a synchronous manner.
    
    Async does'nt have to resolve or reject a parameters.
    
    Everything after await is placed in an event queue. 

    await is always used in a async function.
*/

//Let's take the same example of 53.promise.js

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

async function doTasks() {
    try {
        const wakeUpResult = await wakeUp();
        console.log(wakeUpResult);

        const goGymResult = await goGym();
        console.log(goGymResult);

        const washClothesResult = await washClothes();
        console.log(washClothesResult);

        const takeoutResult = await takeoutTrash();
        console.log(takeoutResult);

        const leaveForWorkResult = await leaveForWork();
        console.log(leaveForWorkResult);
    } catch (error) {
        console.error(error);
    }
}

doTasks();