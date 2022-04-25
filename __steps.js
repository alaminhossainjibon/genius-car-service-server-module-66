/**
 * -------------------------------
 * first setup
 * --------------------------------
 * 1. create a folder mkdir folder name
 * 2. npm init -y
 * 3. create index.js
 * 4. npm install express cors mongodb dotenv
 * 5. create a .env file
 * 6. package.json ==> "scripts": ==> 
 * 6.1. "start": "node index.js",
 * 6.2. "start-dev": "nodemon index.js",
 * 7. npm run start-dev
 * 
 * --------------------------------
 * mongodb in data load
 * --------------------------------
 * 1. go to mongodb atlas
 * 2. create a database
 * 3. go to insert document past in data
 * 4. warks start go to node mongodb CRUD ==> fundamental
 * 5 .usage example => find operation => find multiple
 * 
 * ------------------------------
 * install jsonwebtoken
 * ----------------------------
 * 1. cmd: npm i jsonwebtoken
 * 2. use jwt website
 * 3. secret random key creat:
 * 3.1. go to node
 * 3.2. typing:  require('crypto').randomBytes(64).toString('hex') 
 * 3.3. copy key and pest in .env file
 * 4.  
 * 
 */

/**
 * ----------------------------
 * heroku setup
 * ------------------------------
 * ONE TIME FOR MY COMPUTE
 * ----------------------------
 * 1. create heroku account
 * 2. verify email
 * 3. install heroku cli
 * 4. heroku login
 * 
 * -------------------------------------
 * FOR EACH PROJECT ONE TIME
 * --------------------------------------
 * 1. heroku create
 * 2. make sure : git add . commit. git push
 * 3. git push heroku main
 * 4. gp to heroku Dashboard ==> current project ==> settings ==> reveal config vars
 * 5. copy paste config vars from in .env file
 * 6. Make sure have whitelisted all ip address to access mongodb
 * 
 * ---------------------------------
 * UPDATE SERVER WITH NEW CHANGES
 * ------------------------------
 * 1. Make changes
 * 2. make sure : git add . commit. git push
 * 3. git push heroku main
 * 
 * ------------------------------------
 * Connect Server with client and deploy client
 * -----------------------------------
 * 1. replace localhost by heroku link
 * 2. npm run build
 * 3. firebase deploy
 * 
 */