/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async (promise1, promise2) => new Promise(
    (res, rej) => promise1.then(
        (v1) => promise2.then(
            (v2) => res(v1 + v2)
        )
    )
);

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */