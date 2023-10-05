function lowerCaseWords(arr) {
    return new Promise((resolve, reject) => {
        try {
            if (!Array.isArray(arr)) {
                throw new Error('Input must be an array');
            }

            const result = arr.filter(item => typeof item === 'string').map(word => word.toLowerCase());
            resolve(result);
        } catch (error) {
            reject(error);
        }
    });
}


const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
    .then(result => console.log(result))  // ["pizza", "wings"]
    .catch(error => console.error(error));

