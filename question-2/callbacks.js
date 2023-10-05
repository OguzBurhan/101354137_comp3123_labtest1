// callbacks.js

// Create a method that resolves a message after a timeout of 500ms
function resolvedPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('delayed success!');
        }, 500);
    });
}

// Create a method that rejects an error message after a timeout of 500ms
function rejectedPromise() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('Error: delayed exception!'));
        }, 500);
    });
}

// Call the resolvedPromise and handle the result
resolvedPromise()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });

// Call the rejectedPromise and handle the result
rejectedPromise()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error.message);
    });
