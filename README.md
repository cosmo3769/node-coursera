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

# express_session_part_1

# express_session_part_2

# passport

# jsonwebtoken

# https_secure_communication

Previously, we were using http protocol to have a communication between client and server & how the user sends their credentials to their server from the client-side in either the header of their request message or the body of the request message and then subsequently, when they are authenticated, then their client will include either the cookie or the token in the header of the request message going from the client to the server. But as this http protocol is not a secure channel as many malicious people could easily interfere or tamper the communication. They can easily take the credentials and impersonate the client.

*So what we are using here is a **https protocol** which gives us a secure channel to have a secure communication between the sender and receiver*

*With https protocol, we also need to know something about **cryptography** *

**What does cryptography involve**

###### symmetric key cryptography

*If you need to send a message over a channel to another user, then you would want to be able to encrypt the message in such a way that only the receiver will be able to decrypt the message and obtain the information that you are trying to send to the receiver. So both the sender and the receiver should understand on establish between the two of them how this encryption process and how the decryption is going to work.
For this to work, any encryption and decryption works based on exchange of secret keys. So in* **symmetric key cryptography**, *both the sender and the receiver will share a secret key between the two sites, and this secret key is known only to the sender and to the receiver side. So when the sender needs to send the message, then the sender will encrypt this message using a cryptography algorithm, which uses the secret key as the other input to this algorithm. And once this message is passed through this cryptography algorithm, then an encrypted message will be generated. Now, this encrypted message will be sent to the channel across to the receiver side. If you have a third party malicious user sitting in between and listening and capturing this encrypted message, they would have a hard time decrypting this message because for decrypting an encrypted message, you still need the secret key. Now, on the receiver side, when the encrypted message is received, then the receiver will apply and a decryption algorithm, which also takes as the input, the same secret key that was used on the sender side to encrypt the message. So upon decryption, the original message will be retrieved and can be processed on the receiver side. Now, if a malicious third party wants to decrypt this encrypted message, they are going to face an uphill battle because the process of encrypting using the secret key will turn the message and can, in turn, encrypt the message. Without possessing the secret key, it is going to be next to impossible to decrypt the encrypted message.*

***Of course, with the symmetric key cryptography, one of the issues is that both the sender and the receiver needs to have access to the same secret key. Now, if the sender and receiver are communicating over an insecure channel, it is going to be difficult for both sides to come to an understanding about the same secret key without disclosing it to others. So this is where another algorithm called*** 
**public-key cryptography** ***is very useful***

###### public key cryptgraphy

*In this, we have two keys -* ***public key*** *&* ***private key*** *Now, the public key can be widely distributed to anyone that you want.
So when somebody wants to send a message to you, they are going to use your public key to encrypt the message. So if a sender here wants to send the message to the receiver, then the sender will use the public key off the receiver to encrypt the message on the sender side using the encryption algorithm. Now, once the encrypted message is sent across over the insecure channel to the receiver side, the receiver will then use the private key that only the receiver knows in order to decrypt*

***But this public key cryptography cannot be used always because it's expensive, so over some communication public key cryptography is used and all the other communications are managed with symmetric key cryptography***

###### Secure sockets layer(SSL) | Transport Layer Security(TLS)

*These cryptography protocols enable secure communication between the sender and the receiver over an insecure network like the Internet.
The sender and the receiver will communicate over this Internet using encrypted messages, which only the sender and the receiver can decrypt. And this approach, either the SSL or TLS, uses a combination of public-key cryptography together with symmetric key cryptography. 
With this, we are trying to maintain two different things. We are, first, trying to maintain the privacy of the communication between the sender and the receiver so that no malicious third party can extract the message from the encrypted message. Second, we are also trying to maintain integrity, meaning that when the sender sends a message, the receiver will be able to be assured that the message has not being tampered with.*

*This is done through ***handshaking process*** *. When a client wants to communicate with the server, the client sends a message to the server, specifying that the client wants to communicate with the server securely. At this point, the server will send back the certificate to the client, which contains a public key, which has been certified by the certification authority as belonging to that particular server.
So that way, when the client receives this public key plus the certification by the certification authority, the client will be able to verify the server's credentials. So, the client needs to establish that it is really talking to the server, that it is intending to communicate with. So at this point, when the client verifies the server's credentials, the client now has access to the public key of the server. Once the client gets hold of the public key of the server, then the client will generate what is called as the pre-master secret.
This pre-master secret is something that both the client and server will use to generate what is called as a session key. So, the client generates a pre-master secret, the client then encrypts that secret using the server's public key, and then sends the secret across to the server. Now, remember that once the secret is encrypted using the public key, nobody other than the server will be able to extract the information from the encrypted message. So, when the server receives this encrypted message, the server extracts the pre-master secret from this message. Now, both the client and the server possess the same pre-master secret. At this point, both the client and the server will use
the same set of steps starting with the pre-master's secret, and with the same set of values, that will generate a key called as the session key. Now, when the session key is generated both on the clients side and the server side,
it will be exactly the same session key, because both will follow exactly the same process for generating the session key. So, at this point, both the client and the server, now possess a secret key which is the same on both the sites. So, all subsequent communication between the server and the client, can then proceed using symmetric encryption. So, when the client needs to communicate with the server,
the client will encrypt the data using the secret session key, and then send over their data. Similarly, when the server needs to communicate with the client, the server will obviously use the same session key to encrypt the data and then send it over to the client.
Now, since the client possesses the same session key, the client will be able to decrypt the message and extract the unencrypted message.* 

*In bin folder, first private key is generated and certified with this three commands*

**openssl genrsa 1024 > private.key**

**openssl req -new -key private.key -out cert.csr**

**openssl x509 -req -in cert.csr -signkey private.key -out certificate.pem**

*In **www file** under **bin folder** and in **app.js file**, https server is created, & if the request is directed to http port, it automaticaly gets redirected to https server so the communication could be served in a secure channel.*

# Uploading_files

When we fill out the form, we encounter with file upload feature, where we have to upload our file to the server side. For example :- suppose you are uploading the information about a dish to the server-side. Then you will wish to also upload the corresponding image of the dish to the server-side. So in the process, you will first upload the image of the dish to the server-side, obtain a URL for that image from the server-side wherever it is uploaded and stored, and then use that image in the JSON document that describes the dish in detail.
So that subsequently, when clients retrieve the JSON document describing the dish in order to render the UI, then, from within the JSON document, they'll be able to obtain the URL of the dish image that has been uploaded to the server-side. And then use it in constructing the UI.

*File uploading is typically supported through form input <input type="file" name="imageFile">

*Form data typically encoded as

***application/x-www-form-urlencoded***

***multipart/form data***

***applied as <form action="/imageupload" method="post" enctype="multipart/form-data">***

*Here the form action is set to the REST api endpoint /imageupload where with the method POST will be uploaded to the server side and the uploaded file will be encoded with multipart/form-data and then send to the server side.*

*when multipart/form-data is included in the http request message that is going in to the server side, then in the header of the request message, you will have a content type set to multipart/form-data. And then also a boundary value set up like that. The boundary separates the multiple parts of the request body. So the request body itself of the outgoing request message will be divided into multiple parts. And each part will be delineated from the previous part by by using this boundary here.

**'content--type':'multitype/form-data; boundary=-----------------------63544783383763744747;'**

**'content-disposition':form-data;name="imagefile";filename="alberto.png"'**

*When the client will upload the file in the ui side, the file will be encoded with multipart/form-data which goes in the http request message to the server side. This multipart/form-data will contain the boundary which contains various parts of the file, the server side extracts this information from the boundary and save the file in the server side as given in the ui side*

**MULTER - node middleware to handle the incoming file encoded with multipart/form-data, written on top of busboy, a node module for parsing incoming html form data, parses the incoming form data and add req.body and req.file object to request object.**

**npm install multer --save**

*make a uploadRouter.js file in routes, and add some code.*

So easy it is, give it a try.


