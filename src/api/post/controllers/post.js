'use strict';

/**
 *  post controller
 */
const axios = require('axios');
const { createCoreController } = require('@strapi/strapi').factories;



module.exports = createCoreController('api::post.post',({strapi})=>({
  async importData(ctx){
    console.log('inside DATA')
    
    const getData = await axios.get('http://phonera.in/wp-json/wp/v2/posts?per_page=100')
    // console.log(getData.data)
    
    try{
    getData.data.map(async(item,pos)=>{

      let data={
        title:item.title.rendered,
        description:item.content.rendered,
        slug:item.slug,
      }
      const resp = await strapi.service('api::post.post').create({
        data
      })
    })
    ctx.send(getData.data[0])
  }
  catch(e){
    ctx.send("OOPS")
    console.log(e)
  }
    

    // const resp = await strapi.service('api::post.post').create({
    //   data
    // });
    // ctx.send(data)
  }
}));
// module.exports = {
//     import: async ctx => {
//       const { data } = await axios.get('http://phonera.in/wp-json/wp/v2/posts?per_page=100');
//       const posts = await Promise.all(data.map(post => new Promise(async (resolve, reject) => {
       
//         const postData = {
//             title: post.title.rendererd,
//             content: post.content.rendererd,
//             slug: post.slug,
//         };
//         // use the strapi services create function to create entry
//         const created = await strapi.services.post.create(postData);
//         resolve(created)
//       })));
//     }
//   };