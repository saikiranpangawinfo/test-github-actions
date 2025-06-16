const { app } = require('@azure/functions');

require('dotenv').config();
 
app.http('TestActions', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`HTTP function processed request for URL "${request.url}"`);
 
       const name=request.body?.name;
       if(!name){
        return {
            status:500,
            body:`please pass a name in the body`
        }
        
       }
       return {
        status:200,
        body:JSON.stringify(`Hello ${name} how are you`)
       }
        
        
    }
});