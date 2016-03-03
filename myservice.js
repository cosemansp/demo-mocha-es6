class MyService {

    doAsyncWork(arg) {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                if (!arg) {
                    reject(new Error('missing argument'));
                    return;
                }
                resolve(arg);
            }, 10)
        })
    }

}

export default new MyService();
