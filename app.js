// ! [async] will make the function return a [Promise]

// async function astroFunc(){
    // * No need of using return new promise
    // return 'Hello Astro';

    // ! we can use await to wait until something is done.
    // const makePromise = new Promise((resolve, reject) => {
    //     setTimeout(() => resolve('Ibraheem'), 3000)
    // });

    // ? this is just a custom error using [promise] with [async].
    // const errorForPromise = true;
    // const errorForPromise = false;

    // if (!errorForPromise) {
    //     const responseForPromise = await makePromise;
    //     return responseForPromise;
        
    // } else{
    //     await Promise.reject(new Error("Oh, Sorry, something went wrong❌."));

    // }

    // const responseForPromise = await makePromise // This will wait until the promise is resolved.
    // return responseForPromise;
// }

// console.log(astroFunc());

// astroFunc()
// .then(response => console.log(response))
// .catch(errorForPromise => console.log(errorForPromise));


// ! =====> [Async] now using [Fetch]  <====== ! \\
async function getAstroUsers(){
    // * You need a [.then] when you are using [async, await with fetch]
    // ! we are awaiting the fetch call here
    const astroResponse = await fetch
    ('https://62a6a34fbedc4ca6d7b732b5.mockapi.io/astro/users');


    // ! we are proceeding when the promise is resolved because [async] returns promises

    const userDatas = await astroResponse.json()

    // ! only proceed when the the second promise is resolved
    return userDatas;
}

getAstroUsers().then(usersInfo => console.log(usersInfo));