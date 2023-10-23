// import json-server to a variale
const jsonServer = require('json-server')

//create jsonServer using json-server library
const contactServer = jsonServer.create() 

// set up path/route for dg.json file
const router = jsonServer.router('db.json')

const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, CORS)
contactServer.use(middlewares);
// Use the router
contactServer.use(router)

const PORT = 4000 || process.env.port;

contactServer.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});