function resolvedPromise() {
    // let p = new Promise((resolve, reject) => {
    //     setTimeout(() => {let success = {'message': 'delayed success!'}; console.log(success);}, 500)
    // })
    
    let p = new Promise ((resolve, reject) =>
        setTimeout(resolve, 500, {'message': 'delayed success!'})
    )

    p.then((message) => {
        console.log(message);
    })

}

function rejectedPromise() {
    // setTimeout(() => {
    //     try {
    //         throw new Error('error: delayed exception!');
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }, 500)

    let p = new Promise ((resolve, reject) =>
        setTimeout(reject, 500, {'error': 'delayed exception!'})
    )

    p.catch((message) => {
        console.log(message);
    })
}

resolvedPromise();
rejectedPromise();