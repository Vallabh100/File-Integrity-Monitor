//importing node modules from node
const md5 = require("md5")
const fs = require("fs")
const Dropbox = require("dropbox").Dropbox
const secrets = require("./secrets")


//initializing variables
var InitialHash
var i = 0


//setting file path of file to be monitored
const file_path1 = "C:/Users/Admin/Desktop/file-integrity-monitor/ServerConfig_XML_Files/Server_config.xml"


//Function for baseline hashcheck of file
function Func() {
  fs.readFile(file_path1, (error, data) => {
    if (error) throw error 
    else {
      InitialHash = md5(data)
    }
  });
}


//Function for recursively monitoring integrity of given file
function Repeat() {
  fs.readFile(file_path1, (error, data) => {

    if (error) throw error 
    else {
      var InstanceHash = md5(data)
      if (InstanceHash !== InitialHash) {
        InitialHash = InstanceHash
        var current = new Date()
        fs.appendFileSync("C:/Users/Admin/Desktop/file-integrity-monitor/ServerConfig_XML_Files/Updated_Server_config_"+i+".xml","<!-- File Updation Time- "+current.toLocaleTimeString()+" -->\n"+data)
        
        //creating new Dropbox constructor
        const dbx = new Dropbox({ accessToken: secrets.accessToken })

        //Create or modify new xml file for updated server configurations
        var FILE_PATH = "C:/Users/Admin/Desktop/file-integrity-monitor/ServerConfig_XML_Files/Updated_Server_config_"+i+".xml";

        // Read the file into a buffer
        const fileBuffer = fs.readFileSync(FILE_PATH);

        // Set the options for the `filesUpload` request
        const options = {
          path: "/Updated_Server_config_"+i+".xml",  // Set the path for the uploaded file (i.e., the file name)
          contents: fileBuffer  // Set the file contents as the body of the request
        };

        // Upload the file to Dropbox
        dbx.filesUpload(options)
          .then(response => {
            console.log('Successfully uploaded file to Dropbox');
          })
          .catch(error => {
            console.error(error);
          });
        i=i+1
      }
    }
  });
    //Repeat function repeats after each 5 seconds
    setTimeout(Repeat, 5000)
}


//calling both functions
Func()
Repeat()