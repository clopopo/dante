/**
 * Created by Frank on 15/11/19.
 */
'use strict';
module.exports = function (router) {
    router.get('/', function *(next) {
        yield this.render('home', {title: 'hello, ', content: 'indexed page'});
        yield next;
    });
    return router;

};