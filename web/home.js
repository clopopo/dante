/**
 * Created by Frank on 15/11/17.
 */
'use strict';

module.exports = function (router) {
    router.get('/', function *(next) {
        yield this.render('home', {title: 'react', content: 'react example'});
        yield next;
    });

    return router;

};