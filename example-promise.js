/*


function getTempPromise (location) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(79);
            reject('City not found');
        }, 1000);

    });
}

getTempPromise('Dnepr').then(function (temp) {
    console.log('promise success', temp);
}, function (err) {
    console.log('promise error', err);
});*/

// Challenge Area

function addPromise(a, b) {
    return new Promise(function (resolve, reject) {
        a = parseInt(a);
        b = parseInt(b);
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a+b);
        }

        reject('types didn"t match');
    })
}
addPromise(5, -12).then(function (result) {
        console.log(result);
}, function (err) {
        console.log(err);
})