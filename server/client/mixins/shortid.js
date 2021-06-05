var shortid = require('shortid');


module.exports = function(Model, options) {
    'use strict';
    Model.observe('before save', function event(ctx, next) { //Observe any insert/update event on Model
        if (ctx.isNewInstance) {
            ctx.instance.id = shortid.generate();
            Model.defineProperty('created_on', { type: Date, default: '$now' });
        } else {
            Model.defineProperty('updated_on', { type: Date, default: '$now' });
        }
        next();
    });
};
