let { ObjectId } = require("mongodb");
const _ = require("lodash");
module.exports = function (gallery) {
  gallery.instituteGallery = function (name, cb) {
    var connector = this.getConnector();
    var aggregate = {
      pipeline: [
        {
          $match: { instituteName: name },
        },
        {
          $group: { _id: "$instituteName", images: { $push: "$$ROOT" } },
        },

        {
          $project: {
            "images.instituteName": 0,
          },
        },
      ],
    };
    try {
      var collection = connector.collection("gallery");
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
  gallery.remoteMethod("instituteGallery", {
    http: {
      path: "/instituteGallery",
      verb: "get",
      status: 200,
      errorStatus: 502,
      description: "Institute Gallery",
    },
    accepts: [{ arg: "name", type: "string" }],
    returns: { arg: "data", type: "object", root: true },
  });
};
