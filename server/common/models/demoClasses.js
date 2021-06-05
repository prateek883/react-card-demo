let { ObjectId } = require("mongodb");
const _ = require("lodash");
module.exports = function(demoClasses){


    demoClasses.instituteDemoClass = function (name, cb) {
        var connector = this.getConnector();
        var aggregate = {
          pipeline: [
            {
              $match: { instituteName: name },
            },
            {
              $group: { _id: "$instituteName", demoClass: { $push: "$$ROOT" } },
            },
    
            {
              $project: {
                "demoClass.instituteName": 0,
              },
            },
          ],
        };
        try {
          var collection = connector.collection("demoClasses");
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
      demoClasses.remoteMethod("instituteDemoClass", {
        http: {
          path: "/instituteDemoClass",
          verb: "get",
          status: 200,
          errorStatus: 502,
          description: "Institute Demo Class",
        },
        accepts: [{ arg: "name", type: "string" }],
        returns: { arg: "data", type: "object", root: true },
      });



}