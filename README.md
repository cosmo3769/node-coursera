# NODE

## THREE MODULES

1.Local modules

2.Core modules

3.Third Party modules


# node_examples

This is created to demonstrate the local module handling of node. How we can export one file usage and import the functionalities of that exported file in another file. Here, a small demonstration of callback and error handling is done. Taking out the area and perimeter of rectangle using callbacks and error handling.
                   
# node-http

This is created to demonstrate the use of node core modules. The core modules used here is http, fs, url. Here, a static web server is created.
              
What we need here is **node.js core modules-http,fs and url**
(P.S- we also can do with path module)

1.First, just create a local folder with any name.

2.npm init -y(so that it can create package.json file and keep your work running with node)

3.Make index.js file and put some code in it(use of http,fs,url)

4.Make some files,like aboutme.html or anything.html.

5.npm start in terminal(if no error, server will be running).

6.Type in http://localhost:port/aboutme.html or anything.html in browser.

7.This will take us to the right page according to the file name we enter.

# node_express 

This is created to demonstrate the node third party module with core module. The third party module used here is express and morgan. core module used here is http. Here, a static web server is created.

What we need here is **node.js third party module-express,morgan and core module-http.**

1.First, just create a local folder with any name.

2.npm init -y(so that it can create package.json file and keep your work running with node)

3.Make index.js file.

4.on terminal npm install express --save and npm install morgan --save to install the modules.

5.Write some code in index.js(use of express, morgan, http).

6.Make some files,like aboutme.html or anything.html.

7.npm start in terminal(if no error, server will be running).

8.Type in http://localhost:port/aboutme.html or anything.html in browser.

9.This will take us to the right page according to the file name we enter. 

# node_express_rest_api

Now moving on from this, it is time to use REST api endpoints to develop our express application where different functionalities can be 
acheived with different end points.

**REST here stands for** ***REPRESENTATIONAL STATE TRANSFER :->***

###### Four basic design principles

*Use of http methods explicitly - use of http verbs(GET,POST,PUT,DELETE)*

*Be stateless - server side should not track the client site, every request made is a new request, independent state.*

*Use of directory structure like URI(uniform resource indicator)*

*Transfer using XML, JSON, or both - (data incoming or outgoing is parsed in JSON format or XML)*

So I have demonstrated the use of REST api endpoints in directory node_express_rest_api where different http verbs is used at endpoint 
/dishes and /dishes/:dishId.BODY PARSER(a middleware) has also been used here, as, body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body(JSON format) after which it becomes easy to interface with. We can make use of req.body.name to extract the name of dish we posted using POST verb. 

# node_express_rest_routing

As explained earlier, REST api endpoints can be used to acheive diff. functionalities at diff. endpoints, but when we will be going to
make a bigger application, different endpoint use at one place will become hectic and even messy to tackle if any error occurs.

So, what we could do is we could make use of ***express ROUTER property*** where differnt endpoints can be handled at different files, just a few handling of paths, changes in code and rest process is same. One more concept known as ***MOUNTING*** is also used here by which we can mount the router module on a path in the main app.

I have demonstrated the use of express routing in directory node_express_rest_routing where different files(dishRouter.js, promoRouter.js, leaderRouter.js) are created and the use of mounting the router files on a path in the main file(index.js) is shown.

# express_generator

In this, I have demonstrated the use of express generator which quickly sets up an *application skeleton*

*install the application generator as a global npm package and then launch it*

**npm install -g express-generator**

**express myapp** - This will create an express app in working directory.

**npm install** - This will install all the dependencies.

# node_mongo

In this, I have demonstrated the use of MongoDB and assert module. 

*MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional ***schemas.***.

*The database schema of a database is it's structure desrcibed in a formal language supportes by DATABASE MANAGEMENT SYSTEM(DBMS). It actually describes how the data will be constructed in a database.*

*The assert module provides a way of testing expressions. If the expression evaluates to 0, or false, an assertion failure is being caused, and the program is terminated.*

In index.js, mongodb is connected to 'mongodb://localhost:27017/' and conFusion database is created. Under conFusion, collection of dishes is made, and one dish is entered, that dish is found,  and the operations is closed.(Following the **CRUD - CREATE, READ, UPDATE, DELETE**)

# node_mongo_operations

In the previous **node_mongo** directory, ***CRUD*** was not actually shown at full scale, but in this you can easily see the use of **CRUD - CREATE-READ-UPDATE-DELETE**. As in **operations.js**, in dishes collection document is created, found, updated and deleted and this operations.js file has been imported in **index.js** file where these operations are done.(*NOT deleted*)

# node_mongo_callbackhell_promises

# node_mongoose

# node_mongoose_subdoc

# express_mongodb_mongoose

# express_basic_auth

So easy it is, give it a try.


