function api(host, engine) {
    var path = function (p) {
        switch (p) {
            case 'test1':
                ({
                    get: function (name) {
                        return engine.process(handle('get', 'application/json', p, { name: name }));
                    },
                    post: function (name2) {
                        return engine.process(handle('post', 'application/json', p, { name2: name2 }));
                    }
                });
            default:
        }
    };
}
