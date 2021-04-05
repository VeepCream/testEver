import API from '../libs/API';

export default () => {
    return new Promise((resolve, reject) => {
        API("getUSER")
            .then(result => {
                resolve(result);
            }).catch(ex => {
                console.log("ex", ex);

                reject(ex);
            });
    })

};