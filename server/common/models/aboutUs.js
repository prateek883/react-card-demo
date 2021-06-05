let { ObjectId } = require("mongodb");

const _ = require("lodash");
module.exports = function (aboutUs){


    aboutUs.instituteAboutUs = function (name, cb) {
        var connector = this.getConnector();
        var aggregate = {
          pipeline: [
            {
              $match: {  "instituteName": name } },
            
    
           
          ],
        };
        try {
          var collection = connector.collection("aboutUs");
          var cursor = collection.aggregate(aggregate.pipeline, {});
          return cursor.toArray(function (err, data) {
            if (data.length) {
              _.forEach(data, function (result) {
                return cb(null, result);
              });
            } else {
              return cb(null, []);
            }
          });
        } catch (error) {
          cb(new Error(error));
        }
      };
      aboutUs.remoteMethod("instituteAboutUs", {
        http: {
          path: "/instituteAboutUs",
          verb: "get",
          status: 200,
          errorStatus: 502,
          description: "Institute About Us",
        },
        accepts: [
          { arg: "name", type: "string" },
       
        ],
        returns: { arg: "data", type: "object", root: true },
      });


}