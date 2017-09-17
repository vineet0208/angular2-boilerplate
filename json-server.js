const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(require('./src/mocks/data.js')());
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.rewriter('src/mocks/routes.json'));
server.use(function(req,res,next){
    if(req.method==='POST' || req.method==='PUT' || req.method==='DELETE'){
        req.method = 'GET'
    }
    next()
})
server.use(router);
server.listen(3000, ()=>{
    console.log('JSON server is running')
})