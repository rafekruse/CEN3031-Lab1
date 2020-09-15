import * as fs from "fs";

const readJsonFile = (fileName, callback) => {
    fs.readFile(fileName +'.json', "utf8", (err, data) => {
      /*
      HINT: Check out this resource on fs.readFile
        //https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback


        You should now save the parsed data in the footballClub variable, 
        then pass it into the callback function (this is done for you below).
  
        
  
        HINT: Read up on JSON parsing Node.js
       */
      // Check for errors
      
      // Save the parsed data in the footballClub variable that is been passed in
      // the callback function
  
      /**
       * This is a callback function. 
       * A callback is a function that is been passed into another 
       * function (asynchronous) to do something
       * Do you remember that the connectServer function was passed 
       * as an argument into readJsonFile?
       * Read more about callbacks here https://www.freecodecamp.org/news/javascript-callback-functions-what-are-callbacks-in-js-and-how-to-use-them/
       * If you still do not understand what a callback is, google is your best friend :)
       */ 
      callback(footballClub);

  
    });
  };

  export {readJsonFile}