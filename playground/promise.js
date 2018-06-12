var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            }
            else {
                reject('Arguments must be numbers');
            }
        }, 1500);
    })
};

asyncAdd(5, '2').then((result) => {
    console.log(result);
}).catch((message) => {
    console.log(message);
});

// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('It worked');
//     }, 2000);
//     setTimeout(() => {
//         reject('It didn\'t work');
//     }, 2000);
// }).then((message) => {
//     console.log(message);
// }).catch((errMsg) => {
//     console.log(errMsg);
// });