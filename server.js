import * as http from "http";
import * as url from "url";
import {readJsonFile} from './readFile.js'


/* Global variables */
let footballClub;
const port = 5000;

const requestHandler = (request, response) => {
  /**
   * You can use any variable name to represent request and response
   * But it is preferable to use either request (can also be shorten as req) or
   * response (can also be shorten as res) e.g const requestHandler = (req, res)
   */
  const parsedUrl = url.parse(request.url);

  /*
     Your request handler should send footballClub in the JSON format as a response if a GET request is sent to the '/footballClub' path. Otherwise, it should send a 404 error. 
     The content sent by the 404 error should read/show on the response as "Bad gateway error". This is similar to the first case of the switch statement below

     HINT: Explore the request object and its properties
     HINT: Explore the response object and its properties
     https://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177
     http://stackoverflow.com/questions/17251553/nodejs-request-object-documentation

     HINT: Explore how callback's work
     http://www.theprojectspot.com/tutorial-post/nodejs-for-beginners-callbacks/4

     HINT: Explore the list of MIME Types
     https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types

    */
  switch (parsedUrl.pathname) {
    case "/":
      //set response status code and content type
      response.writeHead(200, { "Content-Type": "text/html" });
      // set response content
      response.write("<html><body><h1>Homepage</h1></body></html>");
      response.write(
        "<html><body><p>Welcome to Football Club App</p></body></html>"
      );
      return response.end();
    //complete this part  
    case "/footballClub":
      return null;
      //complete this part as well
    default:
      return null;
  }
};

const connectServer = (_footballClub_) => {
  footballClub = _footballClub_
  // Create the server

  // Start the server

  /**
   * How to?
   * Read https://www.w3schools.com/nodejs/met_http_createserver.asp
   * then read https://www.w3schools.com/nodejs/func_http_requestlistener.asp to understand how request and response is passed into requestHandler()
   *
   */
};


//The first thing is to read the file and connect to server
readJsonFile("schools", connectServer);

//node --experimental-modules server.js
