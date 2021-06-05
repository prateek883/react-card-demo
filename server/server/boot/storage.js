var shortid = require('shortid');

module.exports = function(app) {
    //Function for checking the file type..
    app.dataSources.storage.connector.getFilename = function(file, req, res) {




     //   var pattern = /^image\/.+$/;
 //    var value = pattern.test(file.type);
     var value = file.type;
        if(value ){
            return shortid.generate() + '.' + file.name.split('.').pop();
        }
        else{
            // throw "FileTypeError: Only File of Image type is accepted.";
        }
    };
}