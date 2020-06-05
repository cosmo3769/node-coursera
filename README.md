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

In the previous **node_mongo_operations** directory, we used callback(*a callback, also known as a "call-after" function, is any executable code that is passed as an argument to other code; that other code is expected to call back (execute) the argument at a given time.*) to do our ***CRUD*** operations, but the problem is when the application becomes big.

Asynchronous JavaScript, or JavaScript that uses callbacks, is hard to get right intuitively. The cause of callback hell is when people try to write JavaScript in a way where execution happens visually from top to bottom.*It gets messy and unreadable*

###### There are ways where callback hell problem could be solved

***keep your code shallow or use proper functions which makes it more readable.

***use modules(file based modules), so the part of code is seperated in different files making it more clear

***There are different types of errors: syntax errors caused by the programmer (usually caught when you try to first run the program), runtime errors caused by the programmer (the code ran but had a bug that caused something to mess up), platform errors caused by things like invalid file permissions, hard drive failure, no network connection etc.*** **The first two rules are primarily about making your code readable, but this one is about making your code stable.** ***When dealing with callbacks you are by definition dealing with tasks that get dispatched, go off and do something in the background, and then complete successfully or abort due to failure. If you really want your async code to read top-to-bottom, you can make use of*** **PROMISES** ***,which is a way to write async code that still appears as though it is executing in a top-down way, and handles more types of errors due to encouraged use of try/catch style error handling.***

# node_mongoose

So, we were using **MONGODB** database, the thing is how we can interact with our database : 

***we can use the databases' native query language (e.g. SQL)

***we can use an Object Data Model ("ODM") or an Object Relational Model ("ORM"). An ODM/ORM represents the website's data as JavaScript objects, which are then mapped to the underlying database. Some ORMs are tied to a specific database, while others provide a database-agnostic backend. The benefit of using an ORM is that programmers can continue to think in terms of JavaScript objects rather than database semantics — this is particularly true if you need to work with different databases (on either the same or different websites). They also provide an obvious place to perform data validation.***

So here the ODM model which I have used is **MONGOOSE** which is designed to work in an asynchronous environment, and can use both callback and promises. This ODM and database combination is extremely popular in the Node community, partially because the document storage and query system looks very much like JSON. We just have to define the **SCHEMA**(describes how the data will be constructed in a database.), and then the rest of the process is same, handle the callbacks and use promises to handle all the errors.

# node_mongoose_subdoc

*Here the use of **mongoose subdocuments** is shown. Subdocuments are documents embedded in other documents. In Mongoose, this means you can nest schemas in other schemas. In this comment schema is nested to dishes schema.***

# express_mongodb_mongoose

This is the full scale use of express-generator, mongodb and mongoose.

***express-generator quickly sets us the application skeleton***

***mongodb gives us a document based database where CRUD operations can be done***

***mongoose gives us the best way to interact with mongodb using schemas and models***

# express_basic_auth

When it comes to any application, the most common thing is the **authentication** - *authentication to the user to access the application*

In this I have shown the use of basic auth, which is the use of **base64 string** 

***Base64 encoding is a way to convert data (typically binary) into the ASCII character set. It is important to mention here that Base64 is not an encryption or compression technique, although it can sometimes be confused as encryption due to the way it seems to obscure data. In fact, size of a Base64 encoded piece of information is 1.3333 times the actual size of your original data.***

###### How does base64 works

*Calculate the 8 bit binary version of the input text*

*Re-group the 8 bit version of the data into multiple chunks of 6 bits*

*Find the decimal version of each of the 6 bit binary chunk*

*Find the Base64 symbol for each of the decimal values via a Base64 lookup table*

***The easiest way to encode Base64 strings in Node.js is via the Buffer object. In Node.js, Buffer is a global object which means that you do not need to use require statement in order to use Buffer object in your applications. Internally Buffer is an immutable array of integers that is also capable of performing many different encodings/decodings. These include to/from UTF-8, UCS2, Base64 or even Hex encodings. As you write code that deals with and manipulates data, you'll likely be using the Buffer object at some point. Base64 doesn't use all the ASCII special characters, but only these few. Note that some implementations of Base64 uses different special characters than "+" and "/".***

Here, I have used this **Buffer object** and **authorisation header** to show the use of basic authentication

*The HTTP Authorization request header contains the credentials to authenticate a user agent with a server, usually, but not necessarily, after the server has responded with a 401 Unauthorized status and the WWW-Authenticate header. If the "Basic" authentication scheme is used, the credentials are constructed like this:*

**the username and the password are combined with a colon (aladdin:opensesame).**

**The resulting string is base64 encoded (YWxhZGRpbjpvcGVuc2VzYW1l).**

# cookies

*Cookies are simple, small files/data that are sent to client with a server request and stored on the client side. Every time the user loads the website back, this cookie is sent with the request. This helps us keep track of the user’s actions. To use cookies with Express, we need the cookie-parser middleware.* ***cookie-parser is a middleware which parses cookies attached to the client request object.***

***More precisely, when a server receives an HTTP request in the response, it can send a Set-Cookie header. The browser puts it into a cookie jar, and the cookie will be sent along with every request made to the same origin in the Cookie HTTP header. This way we don't have to write the username and password every time we reload the page as we have to do with basic authentication***

*Here signed cookies is used(only user), by which a server can tell if a cookie was modified by the client.*

So easy it is, give it a try.


