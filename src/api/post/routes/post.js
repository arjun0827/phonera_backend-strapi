'use strict';

/**
 * post router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

// module.exports = createCoreRouter('api::post.post');
module.exports={
    routes:[
        {
            method:"POST",
            path:'/import',
            handler:'api::post.post.importData',
            config:{
                auth:false
            }
        }
    ]
}
